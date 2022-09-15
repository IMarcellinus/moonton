import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
        </Authenticated>
    );
}
