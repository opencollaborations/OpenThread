import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Signup = () => {
    return (
        <section className='flex items-center justify-center h-full'>
            <Card className='w-96'>
                <CardHeader variant="gradient" color="blue" className="mb-4 mt-0 grid h-28 place-items-center" >
                    <Typography variant="h3" className='text-white'>Create your Tread</Typography>
                </CardHeader>
                <CardBody className='flex flex-col gap-4 '>
                    <Input label="Pen name" size="lg" />
                    <Input label="Password" size="lg" />
                    <Input label="confirm" size="lg" />
                    <div className="-ml-2.5 flex gap-2 items-center ">
                        <Checkbox label="I agree to the" />
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            Terms and Conditions 
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
                        Sign up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have a tread?
                        <Typography
                            as="a"
                            href="/login"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        >
                            Join yarn
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
}

export default Signup;
[]