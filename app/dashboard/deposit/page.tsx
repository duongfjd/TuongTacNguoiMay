'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function DepositPage() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('atm');

  const handleDeposit = async () => {
    // TODO: Implement actual deposit logic
    console.log('Depositing:', { amount, paymentMethod });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Deposit Funds</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add Funds to Your Account</CardTitle>
          <CardDescription>Choose your preferred payment method and enter the amount</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                step="0.01"
              />
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="atm" id="atm" />
                  <Label htmlFor="atm">ATM & QR Code</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="momo" id="momo" />
                  <Label htmlFor="momo">Momo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phoneCard" id="phoneCard" />
                  <Label htmlFor="phoneCard">Phone Card</Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === 'atm' && (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Bank Account Information</h3>
                  <p className="text-sm text-gray-600">
                    Account Number: 1234567890
                    <br />
                    Bank: Example Bank
                    <br />
                    Account Name: 9Document
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">QR Code</h3>
                  <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                    {/* Replace with actual QR code */}
                    <span className="text-gray-500">QR Code</span>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'momo' && (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Momo Information</h3>
                  <p className="text-sm text-gray-600">
                    Phone Number: 0123456789
                    <br />
                    Account Name: 9Document
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">QR Code</h3>
                  <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                    {/* Replace with actual QR code */}
                    <span className="text-gray-500">QR Code</span>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'phoneCard' && (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Phone Card Information</h3>
                  <p className="text-sm text-gray-600">
                    Please note: Phone card deposits will only receive 70% of the deposited amount.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="Enter card number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serialNumber">Serial Number</Label>
                  <Input id="serialNumber" placeholder="Enter serial number" />
                </div>
              </div>
            )}

            <Button onClick={handleDeposit} className="w-full">
              Confirm Deposit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 