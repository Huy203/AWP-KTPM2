import { Profile } from '@/components/organisms/user/Profile';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(user)/profile')({ component: Profile });
