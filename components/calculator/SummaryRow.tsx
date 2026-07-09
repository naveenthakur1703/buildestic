interface SummaryRowProps {
    label: string;
    value: string;
}

export default function SummaryRow({
    label,
    value,
}: SummaryRowProps) {
    return (
        <div className="flex items-center justify-between border-b py-3 last:border-none">
            <span className="text-muted-foreground">
                {label}
            </span>

            <span className="font-medium text-right">
                {value}
            </span>
        </div>
    );
}