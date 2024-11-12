import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps<T extends string = string> = {
    id: string;
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn<T>;
    error: FieldError | undefined;
    required?: boolean;
};

export const FormInput = ({
    id,
    type,
    placeholder,
    register,
    error
}: FormInputProps<string>) => {
    return (
        <div className="w-full">
            <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor={id}
            >
                {placeholder}
            </label>
            <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id={id}
                type={type}
                {...register}
            />
            {error && <p className="w-full text-red-500">{error.message}</p>}
        </div>
    );
};
