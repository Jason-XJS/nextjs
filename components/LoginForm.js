import {useState} from "react";
import Link from 'next/link';
import {authedRequest} from "@/services/http";
import {useAuth} from "@/services/auth";
import {useRouter} from "next/navigation";

function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter()
    const {login} = useAuth();
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await authedRequest.post(`/api/login`, {...formData});
            if (res.status === 200) {
                alert("Login success");
                const data = res.data;
                const token = data.token;
                login(data, token)
                    .then(() => {
                        router.replace(`/`)
                    });
            }

        } catch (err) {
            if (err.response.status === 404) {
                alert('Email not found');
            }
            if (err.response.status === 400) {
                alert('Password is invalid')
            }
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center h-screen px-6 mx-auto lg:py-6">
                <div className={'mt-20'}></div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-2" >
                            <p className="text-sm font-light text-end text-gray-500 dark:text-gray-400">
                                Not have an account? <Link href="/posts/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                            </p>

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

                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm;