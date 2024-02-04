"use client";
import { useRouter, usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { Json } from "@/database.types";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    portfolio: Json | null;
}

export default function Portfolio(props: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const [objMap] = useState<any | null>(props.portfolio);

    return (
        <div className="flex flex-1 container p-5 xl:p-0 mx-auto mt-[40px] lg:mt-[60px] flex-col lg:flex-row ">
            <div className="flex lg:w-[450px]">
                <div className="flex flex-1 lg:fixed lg:top-20 w-full lg:w-[450px] ">
                    <div className="flex flex-col flex-1 border-none">
                        <div className="px-0 py-5">
                            <div className="font-heading text-3xl md:text-5xl"><strong>{objMap.name}</strong></div>
                            <div>
                                <div className="flex flex-col mt-2">
                                    <div className="text-lg text-muted-foreground">{objMap.title}</div>
                                    <Link className="hover:text-sky-400 text-muted-foreground" href={`mailto:{objMap.contact.email}`}><div className="text-md">{objMap.contact.email}</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 gap-2">

                            <div className="flex gap-2">
                                {objMap.featuredSkills.map((skill: any) => <Badge key={skill} variant="outline" className="rounded-md bg-accent">{skill}</Badge>)}
                            </div>

                            <div className="grid items-start gap-2 hidden lg:block mt-12">
                                <Link href="/#profile">
                                    <span className={`group flex items-center rounded py-2 text-sm font-medium hover:text-accent-foreground ${pathname == "/editor/profile" ? "bg-accent" : "transparent"}`}>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-8 h-px bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-sky-400"></div>
                                            <div className="flex items-center group-hover:text-sky-400">About Me</div>
                                        </div>
                                    </span>
                                </Link>
                                <Link href="/#experience">
                                    <span className={`group flex items-center rounded py-2 text-sm font-medium hover:text-accent-foreground ${pathname == "/editor/profile" ? "bg-accent" : "transparent"}`}>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-8 h-px bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-sky-400"></div>
                                            <div className="flex items-center group-hover:text-sky-400">Experience</div>
                                        </div>
                                    </span>
                                </Link>
                                <Link href="/#projects">
                                    <span className={`group flex items-center rounded py-2 text-sm font-medium hover:text-accent-foreground ${pathname == "/editor/profile" ? "bg-accent" : "transparent"}`}>
                                        <div className="flex flex-row gap-2 items-center">
                                            <div className="w-8 h-px bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-sky-400"></div>
                                            <div className="flex items-center group-hover:text-sky-400">Projects</div>
                                        </div>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 p-2 pt-5">
                            <div>
                                <Link target="_blank" href={objMap.links.linkedin}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "p-0 px-3 "
                                    )} title="Github Link: Portfolio Project"
                                >
                                    <Icons.linkedin className="mx-auto h-6 w-6 opacity-25" />
                                </Link>
                                <Link target="_blank" href={objMap.links.github}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "p-0 px-3 "
                                    )} title="Github Link: Portfolio Project"
                                >
                                    <Icons.gitHub className="mx-auto h-6 w-6 opacity-25" />
                                </Link>
                                <Link href={`mailto:${objMap.contact.email}`}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "p-0 px-3"
                                    )} title="Portfolio Editor"
                                >
                                    <Icons.mail className="mx-auto h-6 w-6 opacity-25" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 my-5 gap-10 lg:gap-20 lg:px-10">

                <div id="profile" className="flex flex-col">
                    <p className="text-lg text-justify text-muted-foreground">{objMap.aboutMe}</p>
                </div>

                <div id="experience" className="flex flex-col">
                    <div className="font-heading text-2xl pb-2"><strong>Work Experience</strong></div>
                    <p className="text-md text-justify text-muted-foreground">{objMap.work_experience.description}</p>
                    <div className="flex flex-col gap-6 lg:gap-12">
                        {objMap.work_experience.list.map((exp: any, index: number) => {
                            return (
                                <Link key={index} href="https://www.qburst.com">
                                    <div className="grid grid-cols-3 gap-0 hover:bg-accent p-0 lg:p-5 rounded-md">
                                        <div className="flex text-gray-400 text-md">
                                            <strong>{exp.duration}</strong>
                                        </div>
                                        <div className="flex flex-col col-span-2">
                                            <h4 className="font-heading text-lg">
                                                <span>
                                                    {exp.role}
                                                    <span className="text-gray-400"> • </span>
                                                    <strong className="hover:text-sky-400"><Link href="https://www.qburst.com/de-de/">{exp.company}</Link></strong>
                                                </span>

                                            </h4>
                                            <p className="text-md text-justify text-muted-foreground">{exp.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                        )}
                    </div>
                    <div className="flex group block">
                        <Link href={objMap.links.resume}>
                            <h4 className="inline-block font-heading text-md mt-2 lg:mt-0">
                                <strong className="group-hover:text-sky-400">View Full Résumé</strong>
                            </h4>
                            <Icons.linkArrow className="inline h-4 w-4 group-hover:text-sky-400 group-hover:animate-bounce" />
                        </Link>
                    </div>
                </div>

                <div id="projects" className="flex flex-col">
                    <div className="font-heading text-2xl pb-2"><strong>Featured Projects</strong></div>
                    <div className="flex flex-col">
                        {objMap.projects.map((prj: any, index: number) => {
                            return (
                                <Link key={index} href={prj.source_code}>
                                    <div className="grid grid-cols-1 gap-2 hover:bg-accent p-5 rounded-md">
                                        <div className="flex flex-col col-span-1">
                                            <h4 className="font-heading text-lg">
                                                <span>
                                                    <strong className="hover:text-sky-400">{prj.name}</strong>
                                                    <span className="text-gray-400"> • </span>
                                                    <Link href={prj.source_code} className="group">
                                                        <div className="text-muted-foreground inline-block font-heading text-md mt-2 lg:mt-0 group-hover:text-sky-400">
                                                            Source Code
                                                        </div>
                                                        <Icons.linkArrow className="inline h-4 w-4 group-hover:text-sky-400 group-hover:animate-bounce" />
                                                    </Link>
                                                </span>
                                            </h4>
                                            <p className="text-md text-justify text-muted-foreground">{prj.description}</p>

                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {prj.tech_stack.map((skill: any) => <Badge key={skill} variant="outline" className="rounded-md bg-accent">{skill}</Badge>)}
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                        )}
                    </div>
                </div>


                <div id="experience" className="flex flex-col">
                    <div className="font-heading text-2xl pb-2"><strong>Education</strong></div>
                    <p className="text-md text-justify text-muted-foreground">{objMap.work_experience.description}</p>
                    <div className="flex flex-col  ">
                        {objMap.education.map((exp: any, index: number) => {
                            return (
                                <div key={index} className="grid grid-cols-3 gap-0 hover:bg-accent p-0 lg:p-5 rounded-md">
                                    <div className="flex text-gray-400 text-md">
                                        <strong>{exp.duration}</strong>
                                    </div>
                                    <div className="flex flex-col col-span-2">
                                        <h4 className="font-heading text-lg">
                                            <span>
                                                <strong className="hover:text-sky-400"><Link href="https://www.qburst.com/de-de/">{exp.degree}</Link></strong>
                                            </span>

                                        </h4>
                                        <p className="text-md text-justify text-muted-foreground">{exp.university}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
