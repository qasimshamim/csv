import * as C from "@/components/index" 
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link"
import ourTeam from "@/utils/ourTeam";


const page = () => {
    return (
        <main>
            <C.Hero
                text="enterprises growth companies startups"
                url="#contact-form"
                btn={'tell us about your project'}
                heading="Unveiling Our Diverse Portfolio of Success Stories"
                poster="/banner-1.webp" />

            <section className="bg-white  ">

                <div className="pt-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-TDarkBlue  ">
                            Our team
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl  ">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {ourTeam.length > 0 && ourTeam.map((v, i) => <div key={i}
                            className="text-center text-gray-500  ">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-full"
                                src={v.image}
                                alt="Bonnie Avatar"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900  ">
                                <Link href={v.url}>{v.name}</Link>
                            </h3>
                            <p>{v.text}</p>
                            <ul className="flex justify-center mt-4 space-x-4">
                                <li>
                                    <Link
                                        href={v.url}
                                        className="text-Tblue hover:text-gray-900"
                                    >
                                        <FaLinkedin />
                                    </Link>
                                </li>
                            </ul>
                        </div>)}

                    </div>
                </div>
            </section>

        </main>
    )
}

export default page