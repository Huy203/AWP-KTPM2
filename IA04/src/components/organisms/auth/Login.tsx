import { FormInput } from '@/components/FormInput';
import { useLogin } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email('Invalid email').min(1),
    password: z.string().min(8, 'Password must be 8 characters long')
});

type FormFields = z.infer<typeof schema>;

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const login = useLogin();

    const onSubmit: SubmitHandler<FormFields> = data => login.mutate(data);

    return (
        <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="my-4 text-center text-2xl font-semibold">Login</h1>
            <form
                className="mb-4 flex w-2/5 flex-col gap-2 space-y-4 rounded px-8 py-6 shadow-md first-line:bg-white"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <div className="flex w-full items-center justify-between">
                    <button
                        className={`focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none ${login.isPending && 'cursor-not-allowed bg-blue-500/50'}`}
                        disabled={login.isPending}
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className="flex flex-row items-center justify-center gap-x-2.5">
                    <p className="text-footnote font-normal text-neutral-900">{`Don't have an account?`}</p>
                    <a href="/register">
                        <p className="text-footnote text-primary-500 font-medium hover:underline">
                            Register
                        </p>
                    </a>
                </div>
            </form>
        </div>
    );
};
