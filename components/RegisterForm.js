"use client";
import {useEffect, useMemo, useState} from "react";
import {authedRequest} from "@/services/http";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from 'next/link';

function RegisterForm() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const twoPasswordSameInValid = useMemo(() => {
        return formData.password.trim() && formData.password !== formData.confirmPassword;
    }, [formData]);

    const handleSubmit = async (e) => {
        try {
            console.log(process.env.SERVER_URL)
            e.preventDefault();
            const res = await authedRequest.post(`http://localhost:4000/api/register`, {...formData});
            if (res.status === 201) {
                alert("Register success.");
            }
            window.location.href = '/posts/login';

        } catch (err) {

        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center px-6 mx-auto lg:py-6">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-2">
                            <p className="text-sm font-light text-end text-gray-500 dark:text-gray-400">
                                Already have an account? <Link href="/posts/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Firstname</label>
                                <input
                                        value={formData.firstname}
                                        onChange={e => {
                                            setFormData({
                                                ...formData,
                                                firstname: e.target.value
                                            })
                                        }}
                                        type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="firstname" required />
                            </div>

                            <div>
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Lastname</label>
                                <input
                                    value={formData.lastname}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            lastname: e.target.value
                                        })
                                    }}
                                    type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="lastname" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    value={formData.email}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }}
                                    type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    value={formData.password}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            password: e.target.value
                                        })
                                    }}
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required />
                            </div>
                            <div >
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input
                                    value={formData.confirmPassword}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value
                                        })
                                    }}
                                    type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required />
                            </div>
                            {twoPasswordSameInValid && (
                                <p className={'my-2 text-red-500 text-sm'}>
                                    Two password must same
                                </p>
                            )}
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm;