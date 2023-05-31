import React from "react";
import { Link, useForm ,usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = ({ auth }) => {
    const { credits } = usePage().props;
    const  creditsParams  = credits.data;

    console.warn("INDEX DATA",creditsParams ,credits.data);

    const { data, setData, post, processing, errors } = useForm({
        credit_id: "",
        amount: "",
        duration: 0,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("payments.store"));
    }

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
                        {errors.diration && (
                            <div className="form-error">{errors.duration}</div>
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
                        {errors.name && (
                            <div className="form-error">{errors.amount}</div>
                        )}
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="duration"
                        >
                            Months duration:
                        </label>

                        <select
                            id={"duration"}
                            name={"duration"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) =>
                                setData("duration", e.target.value)
                            }
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        {errors.diration && (
                            <div className="form-error">{errors.duration}</div>
                        )}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link href={route("credits")}>
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
