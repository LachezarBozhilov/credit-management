import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Table from "../../Components/Table";
const Index = ({ auth }) => {
    const { users } = usePage().props;
    const { data } = users;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Users
                    </h2>

                    <Link
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        //   href={route('users.create')}
                    >
                        <span>Create</span>
                        <span className=""> User</span>
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <Table headers={["id", "name", "email"]} data={data} />
            </div>
        </AuthenticatedLayout>
    );
};
export default Index;
