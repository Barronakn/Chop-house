import {useState} from "react";
import couple from "/resources/img/video.jpg";
import SectionNameOne from "../SectionNameOne";
import SectionLastName from "../SectionLastName";
import { Inertia } from "@inertiajs/inertia";

const Book = ({errors}) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        date_time: "",
        person: "People 1",
        request: ""
    });

    const { name, email, date_time, person, request } = data;

    const csrf = () => fetch("/sanctum/csrf-cookie");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await csrf();

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("date_time", date_time);
            formData.append("person", person);
            formData.append("request", request);

            const resp = await Inertia.post("/booking", formData);

            if (resp.errors) {
                console.error("L'erreur est:", resp.errors);
            } else {
                setData({
                    name: "",
                    email: "",
                    date_time: "",
                    person: "People 1",
                    request: ""
                });
                Inertia.visit("/home");
            }
        } catch (error) {
            console.error("L'erreur est:", error);
        }
    };
    console.log(data);
    return (
        <div className="flex flex-row gap-5">
            <div className="w-1/2">
                <img
                    src={couple}
                    alt="Image d'un beau couple dans notre restaurant"
                />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 w-1/2">
                <div>
                    <SectionNameOne name="Reservation" />
                    <SectionLastName lastname="Book A Table Online" />
                </div>
                <div className="flex flex-row gap-2">
                    {errors && errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                    )}
                    <input
                        className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={name}
                    />
                    {errors && errors.email && (
                        <span className="text-red-500">{errors.email}</span>
                    )}
                    <input
                        className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className="flex flex-row gap-2">
                    {errors && errors.date_time && (
                        <span className="text-red-500">{errors.date_time}</span>
                    )}
                    <input
                        className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14"
                        type="datetime-local"
                        name="date_time"
                        onChange={handleChange}
                        value={date_time}
                    />
                    {errors && errors.person && (
                        <span className="text-red-500">{errors.person}</span>
                    )}
                    <select
                        className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14"
                        name="person"
                        id="person"
                        onChange={handleChange}
                        value={person}
                    >
                        <option value="People 1">People 1</option>
                        <option value="People 2">People 2</option>
                        <option value="People 3">People 3</option>
                        <option value="People 4">People 4</option>
                        <option value="People 5">People 5</option>
                    </select>
                </div>
                    {errors && errors.request && (
                        <span className="text-red-500">{errors.request}</span>
                    )}
                <textarea
                    className="border-gray-300 resize-none rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full"
                    name="request"
                    placeholder="Sepecial request"
                    cols="30"
                    rows="4"
                    onChange={handleChange}
                    value={request}
                ></textarea>
                <input
                    className="cursor-pointer bg-orange-550 hover:bg-orange-500 py-4 px-16 uppercase rounded-sm text-white"
                    type="submit"
                    value="Book now"
                />
            </form>
        </div>
    );
};

export default Book;
