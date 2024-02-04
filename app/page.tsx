"use client";

import { useAppStore } from '@/state/appState';
import { fetchPortfolio } from '@/app/actions';
import { useEffect, useState } from 'react';
import Portfolio from '@/components/portfolio';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Page() {
    const { portfolioData, setPortfolioData } = useAppStore();
    const [objMap, setObjMap] = useState<any | null>(null);

    useEffect(() => {
        if (portfolioData == null) {
            const fetchData = async () => {
                const { results, error } = await fetchPortfolio();
                console.log('Fetched portfolio from Supabase:', results);
                setPortfolioData(results);
                setObjMap(results.data);
            }

            fetchData();
        }

    }, []);

    return (
        <main className="flex flex-col flex-1">
            <Navbar mode="portfolio" />
            <div className="container p-0 mx-auto grow ">
                <div className="flex">
                    {objMap != null && (
                        <Portfolio portfolio={objMap} />
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}

