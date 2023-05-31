const Table = ({ headers, data }) => {
    return (
        // <div className="flex flex-col ">
        <div className="overflow-x-auto  bg-white">
            <div className="inline-block min-w-full py-2 ">
                <div className="">
                    <table className="min-w-full whitespace-nowrap text-sm font-light">
                        <thead className="w-full border-b font-medium dark:border-neutral-500">
                            <tr>
                                {headers.map((header, index) => {
                                    // console.warn(header)
                                    return (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="px-6 py-4 font-bold"
                                        >
                                            {header}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No records found.
                                    </td>
                                </tr>
                            )}
                            {data.map((item, index) => (
                                <tr
                                    className="text-center border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                    key={index}
                                >
                                    {headers.map((header, index) => {
                                        return (
                                            <td
                                                className="whitespace-nowrap px-6 py-4"
                                                key={index}
                                            >
                                                {/* <Link
                                                tabIndex="-1" 
                                                href={route('users.edit', id)}
                                                className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                >*/}

                                                {item[header]}
                                                {/* </Link> */}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Table;
