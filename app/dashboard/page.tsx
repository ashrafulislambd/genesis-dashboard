import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
  

export default function Page() {
    return (
        <>
            {/* API Endpoints cards */}
            <div className="">
                <Card>
                    <CardHeader>
                        <CardTitle>Public Endpoints</CardTitle>
                        <Table>
                            <TableRow>
                                <TableHead>ENDPOINT NAME</TableHead>
                                <TableHead>ENDPOINT URL</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableCell>YOUR PROFILE DATA</TableCell>
                                <TableCell>
                                    https://dashboard.genesis.nexentra.online/api/users/20d0129b-caef-4a7b-9013-c5a8924f75b8
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ALL TABLES</TableCell>
                                <TableCell>
                                    https://dashboard.genesis.nexentra.online/api/20d0129b-caef-4a7b-9013-c5a8924f75b8/mycustomschemas
                                </TableCell>
                            </TableRow>
                        </Table>
                    </CardHeader>
                </Card>
            </div>
        </>

    );
}