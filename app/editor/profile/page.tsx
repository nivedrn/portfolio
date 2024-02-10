"use client";
import { useAppStore } from '@/state/appState';
import { fetchPortfolio } from '@/app/actions';
import { useEffect, useState } from 'react';

export default function Profile() {
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
        <div className="flex flex-col flex-1 mb-10">
            <div id="basic" className="flex flex-col">
                <h1 className="font-heading text-2xl md:text-3xl"><strong>Edit Profile</strong></h1>
                <p className="text-lg text-muted-foreground">Add or modify basic information about yourself.</p>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-5 min-h-[300px]">
                    
                </div>

            </div>
        </div>
    );
}
