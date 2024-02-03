"use client";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Json } from "@/database.types";

interface Props {
    portfolio: Json | null;
}

export default function Portfolio(props: Props) {
    const router = useRouter();
    const objMap = props.portfolio;

    return (
        <div className="container mx-auto mt-[50px]">
            {objMap == null ? (<>No Data Found</>) : (
                <>{objMap.toString()}</>
            )}
        </div>
    );
}