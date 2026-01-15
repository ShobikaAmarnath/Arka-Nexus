import { useParams } from "react-router-dom";
import { useServiceData } from "../hooks/useServiceData";
import AuditServiceTemplate from "../templates/AuditServiceTemplate";
import TrainingServiceTemplate from "../templates/TrainingServiceTemplate";

const ServicePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data, template } = useServiceData(slug!);
    if (!data || !template) return null;

    if (template === "audit") {
        return <AuditServiceTemplate data={data} />;
    }

      return <TrainingServiceTemplate data={data} />;
};

export default ServicePage;
