'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function PurchasePage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock document data - replace with actual data fetching
  const document = {
    id: 1,
    title: 'Introduction to Programming',
    author: 'John Doe',
    description: 'A comprehensive guide to programming fundamentals...',
    price: 9.99,
    category: 'Computer Science',
    format: 'PDF',
    pages: 150,
    rating: 4.5,
    downloads: 1000,
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    try {
      // TODO: Implement actual purchase logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      router.push('/dashboard/purchase/success');
    } catch (error) {
      console.error('Purchase failed:', error);
      // Handle error
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Purchase Document</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Document Details */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{document.title}</CardTitle>
              <CardDescription>by {document.author}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-600">{document.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <p className="text-gray-600">{document.category}</p>
                </div>
                <div>
                  <Label>Format</Label>
                  <p className="text-gray-600">{document.format}</p>
                </div>
                <div>
                  <Label>Pages</Label>
                  <p className="text-gray-600">{document.pages}</p>
                </div>
                <div>
                  <Label>Rating</Label>
                  <p className="text-gray-600">{document.rating}/5.0</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">What you'll get</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Full access to the document</li>
                  <li>Unlimited downloads</li>
                  <li>Free updates</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Purchase Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Purchase Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Document Price</span>
                  <span>${document.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span>$0.00</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${document.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Your Wallet Balance</Label>
                <p className="text-2xl font-bold">$50.00</p>
              </div>

              <Button
                onClick={handlePurchase}
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Purchase Now'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By purchasing, you agree to our terms of service and privacy policy
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 