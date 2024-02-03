"use client";
import { useAppStore } from '@/state/appState';
import { fetchPortfolio } from '@/app/actions';
import { useEffect, useState } from 'react';
import Portfolio from '@/components/portfolio';

export default function Preview() {
    const { portfolioData, setPortfolioData, editorData, setEditorData } = useAppStore();

    useEffect(() => {
        if (portfolioData == null) {
            const fetchData = async() => {
                const { results, error} = await fetchPortfolio();
                console.log('Fetched portfolio from Supabase:', results);
                setEditorData(results);
                setPortfolioData(results);
            } 

            fetchData();
        }else if(editorData == null){
            setEditorData(portfolioData);
        }

    }, []);

    return (
        <div>
            <Portfolio portfolio={editorData} />
        </div>
    );
}
