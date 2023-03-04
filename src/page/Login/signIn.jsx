import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Login = () => {
    return (
        <section className='flex items-center justify-center h-full'>
            <Breadcrumbs >s</Breadcrumbs>
            <Card className='w-96'>
                <CardHeader variant="gradient" color="blue" className="mb-4 mt-0 grid h-28 place-items-center" >
                    <Typography variant="h3" className='text-white'>Join the Yarn</Typography>
                </CardHeader>
                <CardBody className='flex flex-col gap-4 '>
                    <Input label="Pen name" size="lg" />
                    <Input label="Password" size="lg" />
                    <div className="-ml-2.5">
                        <Checkbox label="Hold my tread" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have a tread?
                        <Typography
                            as="a"
                            href="login/signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            create one!
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
}

export default Login;
