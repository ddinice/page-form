'use client'

import React, {useForm} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';

const formShema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formShema>

function CreateFormBtn(){
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formShema),
  });

  function onSubmit(values: formSchemaType){
    console.log('values', values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'></form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormBtn;