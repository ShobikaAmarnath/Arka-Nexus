// core/hooks/useServiceData.ts
import { useEffect, useState } from "react";
import { SERVICE_MAP } from "../config/serviceTemplateMap";
import {
    getAuditServiceData,
    getTrainingServiceData,
} from "../../../core/services/sanity/services.service";

export const useServiceData = (slug: string) => {
    const [data, setData] = useState<any>(null);
    const [template, setTemplate] = useState<"audit" | "training" | null>(null);

    useEffect(() => {
        const config = SERVICE_MAP[slug as keyof typeof SERVICE_MAP];
        if (!config) return;

        setTemplate(config.template);

        const fetcher =
            config.template === "audit"
                ? getAuditServiceData
                : getTrainingServiceData;

        fetcher(config.sanityType)
            .then((response) => {
                if (!response) {
                    setData(null);
                    return;
                }
                const normalizedData = config.template === "training"
                    ? {
                        ...response,
                        heroVariant: response.heroVariant ?? config.heroVariant ?? "training",
                    }
                    : response;

                setData(normalizedData);
            })
            .catch((err) => {
                console.error("Failed to load service data:", err);
                setData(null);
            })
    }, [slug]);

    return { data, template };
};
