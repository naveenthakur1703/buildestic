"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SummaryRow from "@/components/calculator/SummaryRow";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ResultCard from "@/components/calculator/ResultCard";
import {
    Ruler,
    Layers3,
    Package,
    TriangleAlert,
    Boxes,
    DollarSign,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function BrickCalculatorPage() {
    const [length, setLength] = useState("");
    const [height, setHeight] = useState("");
    const [unit, setUnit] = useState("ft");

    const [thickness, setThickness] = useState("9");

    const [brickStandard, setBrickStandard] = useState("india");
    const [brickLength, setBrickLength] =
        useState("190");

    const [brickWidth, setBrickWidth] =
        useState("90");

    const [brickHeight, setBrickHeight] =
        useState("90");

    const [includeWaste, setIncludeWaste] = useState(true);
    const [waste, setWaste] = useState("10");

    const [brickCost, setBrickCost] = useState("");

    const [result, setResult] = useState<any>(null);

    const [error, setError] = useState("");


    const calculateBricks = () => {
        setError("");
        if (!length || Number(length) <= 0) {
            setError("Please enter a valid wall length.");
            return;
        }
        if (!height || Number(height) <= 0) {
            setError("Please enter a valid wall height.");
            return;
        }
        if (brickStandard === "custom") {

            if (
                !brickLength ||
                !brickWidth ||
                !brickHeight
            ) {

                setError(
                    "Please enter all custom brick dimensions."
                );

                return;
            }

            if (
                Number(brickLength) <= 0 ||
                Number(brickWidth) <= 0 ||
                Number(brickHeight) <= 0
            ) {

                setError(
                    "Brick dimensions must be greater than zero."
                );

                return;
            }
        }
        let wallLength = Number(length);
        let wallHeight = Number(height);

        if (unit === "m") {
            wallLength *= 3.28084;
            wallHeight *= 3.28084;
        }
        const wallArea =
            wallLength * wallHeight;

        // Convert wall thickness from inches to feet
        const wallThicknessFt =
            Number(thickness) / 12;

        // Calculate wall volume in cubic feet
        const wallVolume =
            wallLength *
            wallHeight *
            wallThicknessFt;

        // Convert brick dimensions from mm to feet
        const brickLengthFt =
            Number(brickLength) / 304.8;

        const brickWidthFt =
            Number(brickWidth) / 304.8;

        const brickHeightFt =
            Number(brickHeight) / 304.8;

        // Calculate brick volume
        const brickVolume =
            brickLengthFt *
            brickWidthFt *
            brickHeightFt;

        // Calculate number of bricks
        let displayWallArea = wallArea;
        let displayWallVolume = wallVolume;

        if (unit === "m") {
            displayWallArea = wallArea / 10.7639;
            displayWallVolume = wallVolume / 35.3147;
        }


        const bricksNeeded =
            Math.ceil(
                wallVolume / brickVolume
            );

        // Waste allowance
        const wasteBricks = includeWaste
            ? Math.ceil(
                bricksNeeded *
                (Number(waste) / 100)
            )
            : 0;

        const totalBricks = bricksNeeded + wasteBricks;

        const totalCost =
            totalBricks * Number(brickCost || 0);

        setResult({
            wallArea: displayWallArea,
            wallAreaUnit: unit === "ft" ? "ft²" : "m²",

            wallVolume: displayWallVolume,
            wallVolumeUnit: unit === "ft" ? "ft³" : "m³",

            bricksNeeded,
            wasteBricks,
            totalBricks,
            totalCost,
        });
    };
    const resetCalculator = () => {
        setLength("");
        setHeight("");

        // Reset units
        setUnit("ft");

        // Reset wall
        setThickness("9");

        // Reset brick
        setBrickStandard("india");
        setBrickLength("190");
        setBrickWidth("90");
        setBrickHeight("90");

        // Reset waste
        setIncludeWaste(true);
        setWaste("10");

        // Reset cost
        setBrickCost("");

        // Clear results
        setResult(null);

        // Clear errors
        setError("");
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-5xl font-bold mb-3">
                Brick Calculator
            </h1>

            <p className="text-muted-foreground mb-8">
                Estimate the number of bricks needed for your wall.
            </p>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">
                                Wall Details
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div>
                                <label className="block mb-2 font-medium">
                                    Units
                                </label>

                                <select
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                    className="w-full border rounded-md p-2"
                                >
                                    <option value="ft">
                                        Feet
                                    </option>

                                    <option value="m">
                                        Meters
                                    </option>
                                </select>
                            </div>
                            <Input
                                type="number"
                                placeholder={`Wall Length (${unit})`}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />

                            <Input
                                type="number"
                                placeholder={`Wall Height (${unit})`}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />

                            <div>
                                <label className="block mb-2 font-medium">
                                    Wall Thickness
                                </label>

                                <select
                                    value={thickness}
                                    onChange={(e) =>
                                        setThickness(e.target.value)
                                    }
                                    className="w-full border rounded-md p-2"
                                >
                                    <option value="4.5">
                                        4.5 inch
                                    </option>
                                    <option value="9">
                                        9 inch
                                    </option>
                                    <option value="13.5">
                                        13.5 inch
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium">
                                    Brick Standard
                                </label>

                                <select
                                    value={brickStandard}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        setBrickStandard(value);

                                        switch (value) {
                                            case "india":
                                                setBrickLength("190");
                                                setBrickWidth("90");
                                                setBrickHeight("90");
                                                break;

                                            case "usa":
                                                setBrickLength("194");
                                                setBrickWidth("92");
                                                setBrickHeight("57");
                                                break;

                                            case "uk":
                                                setBrickLength("215");
                                                setBrickWidth("102.5");
                                                setBrickHeight("65");
                                                break;

                                            case "australia":
                                                setBrickLength("230");
                                                setBrickWidth("110");
                                                setBrickHeight("76");
                                                break;

                                            case "custom":
                                                setBrickLength("");
                                                setBrickWidth("");
                                                setBrickHeight("");
                                                break;
                                        }
                                    }}
                                    className="w-full border rounded-md p-2"
                                >
                                    <option value="india">
                                        India Standard (190 × 90 × 90 mm)
                                    </option>

                                    <option value="usa">
                                        USA Modular (194 × 92 × 57 mm)
                                    </option>

                                    <option value="uk">
                                        UK Standard (215 × 102.5 × 65 mm)
                                    </option>

                                    <option value="australia">
                                        Australia Standard (230 × 110 × 76 mm)
                                    </option>

                                    <option value="custom">
                                        Custom Brick Size
                                    </option>
                                </select>
                            </div>
                            {brickStandard === "custom" && (
                                <div className="space-y-3">
                                    <Input
                                        type="number"
                                        placeholder="Brick Length (mm)"
                                        value={brickLength}
                                        onChange={(e) => setBrickLength(e.target.value)}
                                    />

                                    <Input
                                        type="number"
                                        placeholder="Brick Width (mm)"
                                        value={brickWidth}
                                        onChange={(e) => setBrickWidth(e.target.value)}
                                    />

                                    <Input
                                        type="number"
                                        placeholder="Brick Height (mm)"
                                        value={brickHeight}
                                        onChange={(e) => setBrickHeight(e.target.value)}
                                    />
                                </div>
                            )}

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={includeWaste}
                                    onChange={(e) =>
                                        setIncludeWaste(e.target.checked)
                                    }
                                />

                                <label className="font-medium">
                                    Waste Allowance (%)
                                </label>

                                <span
                                    title="Extra bricks added to cover breakage, cutting and construction wastage."
                                    className="cursor-help text-gray-500 text-lg font-semibold"
                                >
                                    ⓘ
                                </span>
                            </div>

                            {includeWaste && (
                                <div>

                                    <select
                                        value={waste}
                                        onChange={(e) =>
                                            setWaste(e.target.value)
                                        }
                                        className="w-full border rounded-md p-2"
                                    >
                                        <option value="5">5%</option>
                                        <option value="10">10% (Recommended)</option>
                                        <option value="15">15%</option>
                                    </select>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Input
                                    type="number"
                                    placeholder="Cost Per Brick (Optional)"
                                    value={brickCost}
                                    onChange={(e) =>
                                        setBrickCost(e.target.value)
                                    }
                                />

                                <p className="text-sm text-muted-foreground">
                                    Enter the price of one brick in your local currency.
                                </p>
                            </div>

                            {error && (
                                <div className="rounded-md border border-red-300 bg-red-50 p-3 text-red-700">
                                    {error}
                                </div>
                            )}

                            <div className="flex gap-3">
                                <Button
                                    onClick={calculateBricks}
                                    className="flex-1 h-12 text-base font-semibold"
                                >
                                    Calculate
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={resetCalculator}
                                    className="w-32 h-12"
                                >
                                    Reset
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-3">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Calculation Results
                    </h2>

                    <p className="text-muted-foreground mt-2 mb-6">
                        Based on the values you entered.
                    </p>
                    {result && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                            <ResultCard
                                title="Wall Area"
                                value={`${result.wallArea.toFixed(2)} ${result.wallAreaUnit}`}
                                icon={
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                                        <Ruler className="h-7 w-7 text-blue-600" />
                                    </div>
                                }
                            />

                            <ResultCard
                                title="Wall Volume"
                                value={`${result.wallVolume.toFixed(2)} ${result.wallVolumeUnit}`}
                                icon={
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-50">
                                        <Layers3 className="h-7 w-7 text-violet-600" />
                                    </div>
                                }
                            />

                            <ResultCard
                                title="Bricks Required"
                                value={result.bricksNeeded.toLocaleString()}
                                icon={
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                                        <Package className="h-7 w-7 text-orange-600" />
                                    </div>
                                }
                            />

                            <ResultCard
                                title="Waste Allowance"
                                value={result.wasteBricks.toLocaleString()}
                                icon={
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-50">
                                        <TriangleAlert className="h-7 w-7 text-yellow-600" />
                                    </div>
                                }
                            />

                            <ResultCard
                                title="Total Bricks to Order"
                                value={result.totalBricks.toLocaleString()}
                                icon={
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                                        <Boxes className="h-7 w-7 text-green-600" />
                                    </div>
                                }
                            />

                            {Number(brickCost) > 0 && (
                                <ResultCard
                                    title="Material Cost"
                                    value={result.totalCost.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                    icon={
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                                            <DollarSign className="h-7 w-7 text-emerald-600" />
                                        </div>
                                    }
                                />
                            )}

                        </div>
                    )}
                    {result && (
                        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 text-xl">✓</span>

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Calculation Disclaimer
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-1">
                                        Calculations are estimates. Actual material requirements may vary depending on mortar thickness, workmanship, brick size, and construction practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {result && (
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    Calculation Summary
                                </CardTitle>
                            </CardHeader>

                            <CardContent>

                                <SummaryRow
                                    label="Units"
                                    value={unit === "ft" ? "Feet" : "Meters"}
                                />

                                <SummaryRow
                                    label="Wall Length"
                                    value={`${length} ${unit}`}
                                />

                                <SummaryRow
                                    label="Wall Height"
                                    value={`${height} ${unit}`}
                                />

                                <SummaryRow
                                    label="Wall Thickness"
                                    value={`${thickness} inch`}
                                />

                                <SummaryRow
                                    label="Brick Standard"
                                    value={
                                        brickStandard === "custom"
                                            ? `${brickLength} × ${brickWidth} × ${brickHeight} mm`
                                            : brickStandard === "india"
                                                ? "India Standard"
                                                : brickStandard === "usa"
                                                    ? "USA Modular"
                                                    : brickStandard === "uk"
                                                        ? "UK Standard"
                                                        : "Australia Standard"
                                    }
                                />

                                <SummaryRow
                                    label="Wall Area"
                                    value={`${result.wallArea.toFixed(2)} ${result.wallAreaUnit}`}
                                />

                                <SummaryRow
                                    label="Wall Volume"
                                    value={`${result.wallVolume.toFixed(2)} ${result.wallVolumeUnit}`}
                                />

                                <SummaryRow
                                    label="Bricks Required"
                                    value={result.bricksNeeded.toLocaleString()}
                                />

                                <SummaryRow
                                    label="Waste Allowance"
                                    value={
                                        includeWaste
                                            ? `${waste}% (${result.wasteBricks.toLocaleString()} bricks)`
                                            : "Not Included"
                                    }
                                />

                                <SummaryRow
                                    label="Total Bricks"
                                    value={result.totalBricks.toLocaleString()}
                                />

                                {Number(brickCost) > 0 && (
                                    <SummaryRow
                                        label="Material Cost"
                                        value={result.totalCost.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    />
                                )}

                            </CardContent>
                        </Card>
                    )}
                    {/* ------------------------------------ */}
                    <hr className="my-16 border-border" />
                    {/* ------------------------------------ */}
                    <section className="mt-20">

                        <h2 className="text-3xl font-bold">
                            How to Calculate Bricks
                        </h2>

                        <div className="mt-6 max-w-4xl space-y-5 leading-8 text-muted-foreground">

                            <p>
                                A brick calculator helps estimate the number of bricks required
                                to build a wall based on its dimensions, wall thickness,
                                brick size, and waste allowance. It is a useful tool for
                                homeowners, contractors, architects, and engineers who want
                                to estimate construction materials before purchasing.
                            </p>

                            <p>
                                To calculate the number of bricks, you first determine the wall
                                volume by multiplying the wall's length, height, and thickness.
                                The wall volume is then divided by the volume of a single brick
                                (including mortar joints if applicable) to estimate how many
                                bricks are required.
                            </p>

                            <p>
                                Since some bricks may break during transportation, cutting,
                                or installation, builders usually add a waste allowance of
                                5% to 10%. Including this extra quantity helps ensure that
                                your project is completed without material shortages.
                            </p>

                        </div>

                    </section>
                    <section className="mt-20">

                        <h2 className="text-3xl font-bold">
                            Formula Used
                        </h2>

                        <Card className="mt-8">

                            <CardContent className="p-8">

                                <p className="text-center text-2xl font-semibold">
                                    Number of Bricks =
                                    Wall Volume ÷ Brick Volume
                                </p>

                                <p className="mt-6 text-center text-muted-foreground">
                                    Add 5–10% extra bricks to account for waste,
                                    breakage, and cutting.
                                </p>

                            </CardContent>

                        </Card>

                    </section>
                    <section className="mt-20">

                        <h2 className="text-3xl font-bold">

                            Example Calculation

                        </h2>

                        <p className="mt-6 leading-8 text-muted-foreground">

                            For example,

                            a wall measuring

                            20 feet long,

                            10 feet high,

                            and 9 inches thick,

                            constructed using

                            India Standard bricks,

                            requires approximately

                            2,760 bricks.

                            Including

                            10%

                            waste,

                            the total becomes

                            3,036 bricks.

                        </p>

                    </section>
                    <section className="mt-20">

                        <h2 className="text-3xl font-bold">

                            Standard Brick Sizes

                        </h2>

                        <div className="overflow-auto mt-6">

                            <table className="w-full border">

                                <thead>

                                    <tr>

                                        <th>Country</th>

                                        <th>Brick Size</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>India</td>

                                        <td>190 × 90 × 90 mm</td>

                                    </tr>

                                    <tr>

                                        <td>USA</td>

                                        <td>194 × 92 × 57 mm</td>

                                    </tr>

                                    <tr>

                                        <td>United Kingdom</td>

                                        <td>215 × 102.5 × 65 mm</td>

                                    </tr>

                                    <tr>

                                        <td>Australia</td>

                                        <td>230 × 110 × 76 mm</td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>
                    <section className="mt-20">
                        <h2 className="text-3xl font-bold">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            Common questions about brick calculations, brick sizes, and material estimation.
                        </p>

                        <Accordion
                            type="single"
                            collapsible
                            className="mt-8 w-full"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    How many bricks do I need for a 10 × 10 ft wall?
                                </AccordionTrigger>

                                <AccordionContent>
                                    The exact number depends on the wall thickness,
                                    brick size, and mortar joints. Use the Brick Calculator
                                    above to get an accurate estimate for your project.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    What is the standard brick size?
                                </AccordionTrigger>

                                <AccordionContent>
                                    Brick sizes vary by country.
                                    For example:
                                    <ul className="list-disc ml-6 mt-3 space-y-1">
                                        <li>India: 190 × 90 × 90 mm</li>
                                        <li>USA: 194 × 92 × 57 mm</li>
                                        <li>UK: 215 × 102.5 × 65 mm</li>
                                        <li>Australia: 230 × 110 × 76 mm</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    Why should I include a waste allowance?
                                </AccordionTrigger>

                                <AccordionContent>
                                    Waste allowance covers broken bricks, cutting,
                                    transportation damage, and other construction losses.
                                    A 5–10% allowance is commonly recommended.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>
                                    How accurate is this brick calculator?
                                </AccordionTrigger>

                                <AccordionContent>
                                    This calculator provides an estimate based on the
                                    dimensions you enter. Actual brick requirements may
                                    vary depending on mortar thickness, workmanship,
                                    construction methods, and site conditions.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>
                                    Can I calculate bricks using custom brick sizes?
                                </AccordionTrigger>

                                <AccordionContent>
                                    Yes. Select <strong>Custom Brick Size</strong> from
                                    the Brick Standard dropdown and enter your brick's
                                    length, width, and height in millimeters.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger>
                                    Does this calculator support feet and meters?
                                </AccordionTrigger>

                                <AccordionContent>
                                    Yes. You can switch between feet and meters using
                                    the Units dropdown. Results are automatically
                                    converted based on your selected unit.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </div>
            </div>
        </main>
    );
}