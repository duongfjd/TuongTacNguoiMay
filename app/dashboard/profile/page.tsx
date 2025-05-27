'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Management</h1>
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="documents">My Documents</TabsTrigger>
          <TabsTrigger value="finances">Finances</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1234567890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedAccounts">Linked Accounts</Label>
                  <div className="flex space-x-2">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">Facebook</Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>My Documents</CardTitle>
              <CardDescription>Manage your uploaded documents and track their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Uploaded Documents</h3>
                  <Button>Upload New Document</Button>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-gray-500">No documents uploaded yet</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finances">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Track your earnings and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-500">Total Revenue</h4>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-500">Total Deposits</h4>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-500">Wallet Balance</h4>
                  <p className="text-2xl font-bold">$0.00</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Transaction History</h3>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-gray-500">No transactions yet</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 