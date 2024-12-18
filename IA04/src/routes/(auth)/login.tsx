import { Login } from '@/components/organisms/auth/Login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/login')({ component: Login });
