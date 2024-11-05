import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '../../components/FormInput';
import { Indicator } from '../../components/Indicator';
import { useRegister } from '../../hooks/useAuth';

const schema = z
    .object({
        username: z.string().min(5, 'Username must be 5 characters long'),
        email: z.string().email('Invalid email').min(1),
        password: z.string().min(8, 'Password must be 8 characters long'),
        comfirmPassword: z.string().min(8, 'Password must be 8 characters long')
    })
    .refine(data => data.password === data.comfirmPassword, {
        message: 'Passwords do not match',
        path: ['comfirmPassword']
    });

type FormFields = z.infer<typeof schema>;

const RegisterComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const signUp = useRegister();

    const onSubmit: SubmitHandler<FormFields> = data => signUp.mutate(data);

    if (signUp.isPending) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Indicator />
            </div>
        );
    }

    return (
        <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="my-4 text-center text-2xl font-semibold">
                Register
            </h1>
            <form
                className="mb-4 flex w-2/5 flex-col gap-2 space-y-4 rounded px-8 py-6 shadow-md first-line:bg-white"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    register={register('username')}
                    error={errors.username}
                />

                <FormInput
                    id="email"
                    type="email"
                    placeholder="Email"
                    register={register('email')}
                    error={errors.email}
                />
                <FormInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    register={register('password')}
                    error={errors.password}
                />
                <FormInput
                    id="comfirmPassword"
                    type="password"
                    placeholder="Comfirm Password"
                    register={register('comfirmPassword')}
                    error={errors.comfirmPassword}
                />

                <div className="flex w-full items-center justify-between">
                    <button
                        className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2.5">
                    <p className="text-footnote font-normal text-neutral-900">{`Don't have an account?`}</p>
                    <a href="/login">
                        <p className="text-footnote text-primary-500 font-medium hover:underline">
                            Login
                        </p>
                    </a>
                </div>
            </form>
        </div>
    );
};
export const Route = createFileRoute('/(auth)/register')({
    component: RegisterComponent
});
