'use client'
import React, {useState, useEffect} from 'react';
import { Input } from '@nextui-org/react';
import {Button} from "@nextui-org/react";
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Navbar from '../../components/navbar';

export default function Page() {

  const router = useRouter()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email:"",
  });

  const {name, username, email}=user

  const changeInput=(e:any) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const onSubmit=async (e:any) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user)
    router.push("/")
  }


  return (
    <>
      <Navbar/>
      <div className="p-[4rem]">
        <h1 className="text-center">Add New User</h1>
        <form className="w-[500px] mx-auto" onSubmit={(e)=>onSubmit(e)}>
          <div className="flex flex-col gap-6 my-6">
            <Input type="text" label="Name" name="name" value={name}  onChange={(e) => changeInput(e)} required/>
            <Input type="text" label="Username" name="username" value={username} onChange={(e) => changeInput(e)} required/>
            <Input type="email" label="Email" name="email" value={email} onChange={(e) => changeInput(e)} required/>
          </div>
          <div className="w-full flex justify-between">
          <Button type="submit" color="primary">Add New User</Button>
          <Button type="button" onClick={() => router.push('/')} color="danger">Cancel</Button>
          </div>
        </form>
      </div>
    </>
  );
}
