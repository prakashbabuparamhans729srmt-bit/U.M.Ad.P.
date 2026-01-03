import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProfilePage() {
  const adminAvatar = PlaceHolderImages.find(p => p.id === 'admin-avatar');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground">View and manage your profile information.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>
            This is your public profile information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                    {adminAvatar && <AvatarImage src={adminAvatar.imageUrl} alt={adminAvatar.description} />}
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold">Admin User</h2>
                    <p className="text-muted-foreground">admin@example.com</p>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@example.com" disabled />
              </div>
            </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
