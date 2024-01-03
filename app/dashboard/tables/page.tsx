'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableCell, TableHead, TableRow, TableBody, TableHeader } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { createTable, getTables } from "@/lib/data/utils";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { EditIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const [ tableName, setTableName ] = useState("");
    const [ tableDesc, setTableDesc ] = useState("");

    const router = useRouter();

    const tables = getTables('userid');

    return (
        <div className="p-4">
            <div className="flex flex-row mr-0">
                <div className="basis-8/12">
                    <h1 className="text-4xl">Tables</h1>
                </div>
                <div className="basis-4/12 flex flex-row-reverse">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button> + Add New</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create Table</DialogTitle>
                            </DialogHeader>
                            <div className="grid grid-cols-4 gap-3 items-center">
                                <Label htmlFor="table_name">
                                    Name
                                </Label>
                                <Input name="table_name" className="col-span-3" value={tableName}
                                    onChange={e => {
                                        setTableName(e.target.value);
                                    }} />
                                <Label htmlFor="table_desc">
                                    Description
                                </Label>
                                <Textarea name="table_desc" className="col-span-3" value={tableDesc}
                                    onChange={e => {
                                        setTableDesc(e.target.value);
                                    }} />
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DialogClose>
                                <DialogClose>
                                    <Button onClick={e => {
                                        try {
                                            const id = createTable('userid', tableName, tableDesc);
                                            if(id) {
                                                toast("Table Created Successfully", {
                                                    description: `Table ${tableName} created.`,
                                                    action: {
                                                        label: "Edit Fields",
                                                        onClick: () => {
                                                            router.push(`/dashboard/tables/${ id }/edit`);
                                                        }
                                                    }
                                                });
                                                setTableName('');
                                                setTableDesc('');
                                                try {
                                                    //revalidatePath('/dashboard/tables');
                                                } finally {}
                                            }
                                        } catch(e: any) {
                                            toast("Unable to create table", {
                                                description: e.message,
                                                action: {
                                                    label: "Close",
                                                    onClick: () => {}
                                                }
                                            })
                                        }
                                    }}>Create</Button>
                                </DialogClose>
                                    
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Card className="mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">NAME</TableHead>
                            <TableHead className="text-left">DESCRIPTION</TableHead>
                        </TableRow>
                        
                    </TableHeader>
                    <TableBody>
                        {
                            tables.map(table => 
                                <TableRow key={table.id}>
                                    <TableCell className="text-left">{ table.name }</TableCell>
                                    <TableCell className="text-left">{ table.description }</TableCell>
                                </TableRow>    
                            )
                        }
                    </TableBody>
                    
                </Table>
            </Card>
        </div>
    )
}