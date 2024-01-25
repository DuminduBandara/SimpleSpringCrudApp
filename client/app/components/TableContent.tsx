import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function TableContent() {

  const searchParams = useSearchParams()
  const id = searchParams.get('id') 
  const router = useRouter();

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  };

  const deleteUser = async (id:any) => {
    await axios.delete(`http://localhost:8080/deleteuser/${id}`);
    fetchUsers();
  }

  return (
    <Table
      removeWrapper
      aria-label="Example static collection table"
      className="w-auto mx-5"
    >
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>USERNAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user: any, index) => (
          <TableRow key={index}>
            <TableCell>{user.id + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-4 items-center">
                <Button color="success">
                  <Link href={{ pathname: '/pages/viewUser', query: {id: user.id}}}>View</Link> 
                </Button>
                <Button color="primary">
                  <Link href={{ pathname: '/pages/editUser', query: {id: user.id}}}>Edit</Link> 
                </Button>
                <Button color="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
