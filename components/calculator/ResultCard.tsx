import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ResultCardProps {
    title: string;
    value: string;
    icon: ReactNode;
}

export default function ResultCard({
    title,
    value,
    icon,
}: ResultCardProps) {
    return (
        <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-7">
                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {title}
                        </p>

                        <h3 className="mt-3 text-4xl font-bold tracking-tight">
                            {value}
                        </h3>
                    </div>

                    <div>
                        {icon}
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}