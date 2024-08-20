import React from "react";

const Reservation = ({ booking }) => {
    return (
        <div className="flex flex-col gap-10 pt-28 justify-center items-center max-w-5xl mx-auto">
            <h2 className="text-center text-4xl uppercase">Reservation</h2>
            <table className="border-collapse border">
                <thead>
                    <tr className="border">
                        <th className="border p-3">Nᵒ</th>
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Date & Time</th>
                        <th className="border p-3">People</th>
                        <th className="border p-3">Sepeial Request</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((book, index) => (
                        <tr
                            key={index}
                            className={`border ${
                                index % 2 == 0 ? "bg-white" : "bg-slate-200"
                            }`}
                        >
                            <td className="border p-3">{book.id}</td>
                            <td className="border p-3">{book.name}</td>
                            <td className="border p-3">{book.email}</td>
                            <td className="border p-3">{book.date_time}</td>
                            <td className="border p-3">{book.person}</td>
                            <td className="border p-3">{book.request}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reservation;
