import { createFileRoute } from '@tanstack/react-router';

function HomeComponent() {
    return (
        <div>
            <h1 className="my-4 text-center text-2xl font-semibold">Home Page</h1>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: HomeComponent
});
