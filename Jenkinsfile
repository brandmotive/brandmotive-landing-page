pipeline {
    agent {
        label 'ec2-agent'
    }

    environment {
        // Ensure these variables are set in Jenkins Job configuration or Global configuration
        // S3_BUCKET = 'your-bucket-name'
        // CF_DISTRIBUTION_ID = 'your-distribution-id'
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
            steps {
                unstash 'dist'
                script {
                    if (!env.S3_BUCKET || !env.CF_DISTRIBUTION_ID) {
                        error "S3_BUCKET and CF_DISTRIBUTION_ID must be set as environment variables."
                    }
                }
                // Sync to S3
                sh "aws s3 sync dist/ s3://${env.S3_BUCKET} --delete --acl public-read"
                
                // Invalidate CloudFront cache
                sh "aws cloudfront create-invalidation --distribution-id ${env.CF_DISTRIBUTION_ID} --paths '/*'"
            }
        }
    }
}
