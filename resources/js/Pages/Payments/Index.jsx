import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Table from "../../Components/Table";
const Index = ({ auth }) => {
    const { payments, flash } = usePage().props;
    const {
        data,
        meta: { links },
    } = payments;

    // console.warn(data);
    console.log("paymentssss flash", payments.flash);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Payment
                        </h2>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            href={route("payments.create")}
                        >
                            <span>Create</span>
                            <span className=""> Payment</span>
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Payments" />

            <div className="py-12">
                <div className="flex justify-center">
                    {flash.message && (
                        <div class="text-green-600">{flash.message}</div>
                    )}
                </div>
                <Table
                    headers={[
                        "id",
                        "name",
                        "amount",
                        "created_at",
                        // "updated_at",
                    ]}
                    data={data}
                />
            </div>
        </AuthenticatedLayout>
    );
};
export default Index;
