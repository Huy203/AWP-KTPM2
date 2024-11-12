import { Register } from '@/components/organisms/auth/Register';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/register')({
    component: Register
});
