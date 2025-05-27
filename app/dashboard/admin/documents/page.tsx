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

export default function AdminDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - replace with actual data fetching
  const documents = [
    {
      id: 1,
      title: 'Introduction to Programming',
      author: 'John Doe',
      category: 'Computer Science',
      status: 'approved',
      uploadDate: '2024-03-15',
      views: 150,
      downloads: 45,
    },
    // Add more mock documents as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Document Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Document List</CardTitle>
          <CardDescription>Manage and monitor all documents in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Search Documents</Label>
                <Input
                  id="search"
                  placeholder="Search by title, author, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-[200px]">
                <Label htmlFor="status">Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>{doc.title}</TableCell>
                    <TableCell>{doc.author}</TableCell>
                    <TableCell>{doc.category}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          doc.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : doc.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell>{doc.uploadDate}</TableCell>
                    <TableCell>{doc.views}</TableCell>
                    <TableCell>{doc.downloads}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {documents.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No documents found</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 