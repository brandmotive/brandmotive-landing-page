pipeline {
    agent any

    environment {
        // Variables S3_BUCKET, CF_DISTRIBUTION_ID and AWS_REGION are injected via Jenkins extension
        CI = 'true'
    }

    stages {
        stage('Build') {
            agent {
                docker { 
                    image 'node:lts' 
                    args '-u root:root' // Ensure permission to write to workspace if needed
                }
            }
            steps {
                sh 'node --version'
                sh 'npm ci'
                sh 'npm run build'
            }
            post {
                success {
                    stash includes: 'dist/**/*', name: 'dist'
                }
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'amazon/aws-cli'
                    // Combine args to ensure both entrypoint override and root user are applied
                    args '--entrypoint="" -u root:root'
                }
            }
            environment {
                AWS_PAGER = ""
            }
            steps {
                sh 'rm -rf dist'
                unstash 'dist'
                script {
                    if (!S3_BUCKET || !CF_DISTRIBUTION_ID || !AWS_REGION) {
                        error "S3_BUCKET, CF_DISTRIBUTION_ID and AWS_REGION must be set as environment variables."
                    }
                }
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-credentials-id', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh 'echo "Deploying application..."'
                    // Add --debug to diagnose slow sync
                    sh "aws s3 sync dist s3://${S3_BUCKET} --delete --region ${AWS_REGION}"
                    sh "aws cloudfront create-invalidation --distribution-id ${CF_DISTRIBUTION_ID} --paths '/*' --region ${AWS_REGION}"
                }
            }
        }
    }
}
