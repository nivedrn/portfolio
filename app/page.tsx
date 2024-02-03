"use client";

import { useAppStore } from '@/state/appState';
import { fetchPortfolio } from '@/app/actions';
import { useEffect, useState } from 'react';
import Portfolio from '@/components/portfolio';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Page() {
    const { portfolioData, setPortfolioData } = useAppStore();

    useEffect(() => {
        if (portfolioData == null) {
            const fetchData = async() => {
                const response = await fetchPortfolio();
                setPortfolioData(response.data);
            }

            fetchData();
        }
    }, []);

    return (
        <main>
            <Navbar mode="portfolio" />
            <div className="flex flex-col items-center justify-top pt-3">
                <Portfolio portfolio={portfolioData} />
            </div>
            <Footer/>
        </main>
    );
}

