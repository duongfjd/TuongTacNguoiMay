'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AdminStatisticsPage() {
  const [timeRange, setTimeRange] = useState('week');
  const [groupBy, setGroupBy] = useState('day');

  // Mock data - replace with actual data fetching
  const revenueData = [
    {
      date: '2024-03-15',
      revenue: 1500,
      atmQr: 800,
      momo: 400,
      transfer: 300,
      userWithdraw: 200,
      actualWithdraw: 180,
      total: 1500,
    },
    // Add more mock data as needed
  ];

  const depositData = [
    {
      date: '2024-03-15',
      phoneCard: 500,
      atmQr: 800,
      momo: 400,
      normalDownload: 200,
      total: 1900,
    },
    // Add more mock data as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Statistics</h1>

      <div className="grid gap-8">
        {/* Revenue Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Statistics</CardTitle>
            <CardDescription>Track revenue from document sales and withdrawals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-[200px]">
                  <Label htmlFor="timeRange">Time Range</Label>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[200px]">
                  <Label htmlFor="groupBy">Group By</Label>
                  <Select value={groupBy} onValueChange={setGroupBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grouping" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>ATM & QR</TableHead>
                    <TableHead>Momo</TableHead>
                    <TableHead>Transfer</TableHead>
                    <TableHead>User Withdraw</TableHead>
                    <TableHead>Actual Withdraw</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>${row.revenue}</TableCell>
                      <TableCell>${row.atmQr}</TableCell>
                      <TableCell>${row.momo}</TableCell>
                      <TableCell>${row.transfer}</TableCell>
                      <TableCell>${row.userWithdraw}</TableCell>
                      <TableCell>${row.actualWithdraw}</TableCell>
                      <TableCell>${row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Deposit Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Deposit Statistics</CardTitle>
            <CardDescription>Track user deposits and payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Phone Card</TableHead>
                    <TableHead>ATM & QR</TableHead>
                    <TableHead>Momo</TableHead>
                    <TableHead>Normal Download</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {depositData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>${row.phoneCard}</TableCell>
                      <TableCell>${row.atmQr}</TableCell>
                      <TableCell>${row.momo}</TableCell>
                      <TableCell>${row.normalDownload}</TableCell>
                      <TableCell>${row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 