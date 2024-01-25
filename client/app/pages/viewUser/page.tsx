'use client'

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';

import Navbar from '../../components/navbar';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function Page() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [user, setUser] = useState({
    name: "",
    username: "",
    email:"",
  });

  useEffect(() => {
    fetchUser();
  },[])

  const fetchUser = async()=>{
    const result = await axios.get(`http://localhost:8080/getuser/${id}`);
    setUser(result.data);
  }

  return (
    <>
      <Navbar/>
      <div className="p-[4rem] flex flex-col w-full justify-center items-center gap-8">
        <h1 className="text-center">User Details</h1>
        <Card className="w-[500px]">
          <CardBody className='w-full flex flex-col gap-6'>
            <div className="flex gap-4 items-center">
              <p className="text-md">User ID</p>
              <p className="text-xl">{id}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-md">Name</p>
              <p className="text-xl">{user.name}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-md">Username</p>
              <p className="text-xl">{user.username}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-md">Email</p>
              <p className="text-xl">{user.email}</p>
            </div>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </>
  );
}
