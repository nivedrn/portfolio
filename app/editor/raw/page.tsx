"use client";
import { useAppStore } from '@/state/appState';
import { fetchPortfolio, modifyPortfolio } from '@/app/actions';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"

export default function Profile() {
    const [jsonText, setJsonText] = useState<string>("");
    const { portfolioData, setPortfolioData, editorData, setEditorData } = useAppStore();

    useEffect(() => {
        if (portfolioData == null) {
            const fetchData = async() => {
                const { results, error} = await fetchPortfolio();
                console.log('Fetched portfolio from Supabase:', results);
                setEditorData(results);
                setPortfolioData(results);
                setJsonText(JSON.stringify(( results as any).data, undefined, 4));
            } 

            fetchData();
        }else if(editorData == null){
            setEditorData(portfolioData);
            setJsonText(JSON.stringify(( editorData as any).data, undefined, 4));
        }else{
            setJsonText(JSON.stringify(( editorData as any).data, undefined, 4));
        }

    }, []);

    const prettifyJson = async() => {
        try{
            var obj = JSON.parse(jsonText);
            var pretty = JSON.stringify(obj, undefined, 4);
            ( editorData as any).data = obj;
            const response = await modifyPortfolio(editorData);
            if( response.success){
                setJsonText(pretty);
                setEditorData(editorData);
                setPortfolioData(editorData);
                console.log('Portfolio updated to Supabase:', response.error);
            }else{
                console.error('Error saving to Supabase:', response.error);
            }
        }catch(error){
            console.error('Error parsing JSON:', error);
        }
    }

    const discardChanges = () => {
        try{
            setJsonText(JSON.stringify(( editorData as any).data, undefined, 4));
        }catch(error){
            console.error('Error parsing JSON:', error);
        }
    }

    return (
        <div>
            <div id="basic" className="flex flex-col">
                <h1 className="font-heading text-2xl md:text-3xl"><strong>Edit Raw Json</strong></h1>
                <p className="text-lg text-muted-foreground ">Edit the portfolio json data directly.</p>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-4 p-2">
                    <Textarea className="rounded p-4" value={jsonText} onChange={(e) => setJsonText(e.target.value)} rows={20} spellCheck="false"/>
                                        
                    <div className="flex justify-end mt-2 gap-2">
                        <Button className="w-1/2 lg:w-[200px]" variant="secondary" onClick={discardChanges}>Discard Changes</Button>
                        <Button className="w-1/2 lg:w-[200px]" onClick={prettifyJson} >Save</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
