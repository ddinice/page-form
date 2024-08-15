'use client'

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner2 } from "react-icons/im";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';

const formShema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formShema>;

function CreateFormBtn(){
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formShema),
  });

  function onSubmit(values: formSchemaType){
    try {
      
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive'
      })
    }
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
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
               <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
               </FormItem> 
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
               <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={5} {...field} />
                </FormControl>
               </FormItem> 
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button 
            onClick={() => {
              console.log('fsd')
              form.handleSubmit(onSubmit)
            }}
            disabled={form.formState.isSubmitting} className='w-full mt-4'>
            { !form.formState.isSubmitting && <span>Save</span> }
            { form.formState.isSubmitting && <ImSpinner2 className='animate-spin'/> }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormBtn;