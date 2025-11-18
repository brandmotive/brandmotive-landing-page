import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Brandmotive Landing Page
          </h1>
          <p className="text-muted-foreground">
            A sample landing page built with shadcn/ui
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Patient Care</CardTitle>
              <CardDescription>
                Comprehensive healthcare services for all your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our dedicated team of healthcare professionals is committed to
                providing the highest quality medical care with compassion and
                excellence.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Services</CardTitle>
              <CardDescription>
                24/7 emergency care when you need it most
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our emergency department is equipped with state-of-the-art
                facilities and staffed by experienced emergency medicine
                specialists.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button>Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
