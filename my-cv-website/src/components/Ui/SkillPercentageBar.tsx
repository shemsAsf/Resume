"use client";

import React from "react";
import Image from "next/image";
import PercentageBar from "./PercentageBar";

export default function SkillPercentageBar({
    title,
    percent,
}: {
    title: string;
    percent: number;
}) {
    return (
        <div>
            <div className="flex justify-between">
                <p className="">{title}</p>
                <p className="">{percent}%</p>
            </div>
            <PercentageBar percentage={percent} />
        </div>
    );
}
