import React from "react";
import { Link, useForm ,usePage, router} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = ({ auth }) => {
    const { credits ,errors} = usePage().props;
    const  creditsParams  = credits.data;

    // console.warn("INDEX DATA",creditsParams ,credits.data);

    const { data, setData, post, processing,  } = useForm({
        credit_id: "",
        amount: "",
        // duration: 0,
    });

    function handleSubmit(e) {
        e.preventDefault();
        
        router.post('/payments',data )
    }

    console.warn(errors)

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
                            className="btn-indigo focus:outline-none"
                            href={route("credits.create")}
                        >
                            <span>Create</span>
                            <span className=""> Credit</span>
                        </Link>
                    </div>
                </div>
            }
        >
            <div className="w-full flex justify-center bg-white m-5">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="sm:col-span-3">
                        <label
                            className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="duration"
                        >
                            Credit holder Name
                        </label>

                        <select
                            id={"duration"}
                            name={"duration"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => setData("credit_id", e.target.value)}
                        >
                            <option value="" > Select an credit </option>
                            {creditsParams.map((item) => {
                               return <option value={item.id}>{item.name} - {item.amount}</option>;
                            })}
                        </select>
                        {errors.credit_id && (
                            <div className="text-rose-600">{errors.credit_id}</div>
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Amount
                        </label>
                        <input
                            value={data.amount}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            id="amount"
                            placeholder="Enter amount"
                            onChange={(e) => setData("amount", e.target.value)}
                        />
                        {errors.amount && (
                            <div className="text-rose-600">{errors.amount}</div>
                        )}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link href={route("payments.index")}>
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Cancel
                            </button>
                        </Link>
                        <button
                            disabled={processing}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            {processing && <div className="mr-2 btn-spinner" />}
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
