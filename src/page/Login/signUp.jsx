import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { GiConsoleController } from 'react-icons/gi';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch('http://localhost:3001/auth/signup', {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className='w-96'>
                    <CardHeader variant="gradient" color="blue" className="mb-4 mt-0 grid h-28 place-items-center" >
                        <Typography variant="h3" className='text-white'>Create your Tread</Typography>
                    </CardHeader>
                    <CardBody className='flex flex-col gap-4 '>
                        <Input label="Pen name" size="lg"  {...register('pen_name', { required: true })}
                            error={errors.pen_name !== undefined}
                            // success={errors.pen_name === undefined} 
                            />
                        <Input label="Password" size="lg" type="password"
                            {...register("password", { required: true })} />
                        <Input label="confirm" size="lg" type="password"

                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) =>
                                    value === password.current || "The passwords do not match",
                            })} />
                        <div className="-ml-2.5 flex gap-2 items-center ">
                            <Checkbox label="I agree to the"  {...register('T_C', { required: true })}
                                error={errors.T_C?.type === 'required' ? 'kindly accept the term\'s and condition to contiene' : undefined}
                                success={errors.T_C === undefined ? 'true' : 'false'}
                            />
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
                        {(errors.password?.message || errors.pen_name?.message || errors.confirmPassword?.message || errors.T_C?.message) && < Alert > {errors.password?.message || errors.pen_name?.message || errors.confirmPassword?.message || errors.T_C?.message} </Alert>}
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth type='submit'>
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
            </form>

        </section >
    );
}

export default Signup;
