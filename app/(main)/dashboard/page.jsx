"use client";
import React from "react";
import FeatureAssistants from "./_components/FeatureAssistants";
import History from "../_componenets/History";
import Feedback from "../_componenets/Feedback";


function Dashboard() {
    return (
        <div>
            <FeatureAssistants/>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
                <History/>
                <Feedback/>
            </div>
        </div>
    )
}

export default Dashboard