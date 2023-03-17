import { Alert, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch('http://localhost:3001/auth/signin', {
            method: 'post', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()
        if (!json.token) {
            return
        }
        localStorage.setItem('token', json)
    };

    return (
        <section className='flex items-center justify-center h-full'>
            {/* <Breadcrumbs >s</Breadcrumbs> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <Card className='w-96'>
                    <CardHeader variant="gradient" color="blue" className="mb-4 mt-0 grid h-28 place-items-center" >
                        <Typography variant="h3" className='text-white'>Join the Yarn</Typography>
                    </CardHeader>
                    <CardBody className='flex flex-col gap-4 '>
                        <Input label="Pen name" size="lg"  {...register('pen_name', { required: true })}
                            error={errors.pen_name?.type === 'required' && 'pen_name is required'}
                            success={errors.pen_name === undefined} />
                        <Input label="Password" size="lg" type="password"
                            {...register("password", { required: true })} />
                        <div className="-ml-2.5">
                            <Checkbox label="Hold my tread"  {...register('dontSave')}
                            />
                        </div>
                        {(errors.password?.message || errors.pen_name?.message || errors.confirmPassword?.message || errors.dontSave?.message) && < Alert > {errors.password?.message || errors.pen_name?.message || errors.confirmPassword?.message || errors.dontSave?.message} </Alert>}

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth type='submit'>
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
            </form>

        </section>
    );
}

export default Login;
