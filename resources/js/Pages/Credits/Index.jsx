import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Table from "../../Components/Table";
const Index = ({ auth }) => {
    const { credits ,flash } = usePage().props;
    const { data } = credits;
    console.warn("INDEX DATA", data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Credits
                        </h2>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            href={route("credits.create")}
                        >
                            <span>Create</span>
                            <span className=""> Credit</span>
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Payment" />

            <div className="py-12">
                <div className="flex justify-center">
                    {flash.message && <div class="text-green-600">{flash.message}</div>}
                </div>
                <Table
                    headers={[
                        "id",
                        "name",
                        "amount",
                        "duration",
                        "monthly_payment",
                        "amount_paid",
                        "created_at",
                        "updated_at",
                    ]}
                    data={data}
                />
            </div>
        </AuthenticatedLayout>
    );
};
export default Index;
