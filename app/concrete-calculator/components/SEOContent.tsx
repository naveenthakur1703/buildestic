export default function SEOContent() {
    return (
        <section className="mt-16 space-y-12">

            {/* Introduction */}
            <section>
                <h2 className="text-3xl font-bold tracking-tight">
                    Concrete Calculator
                </h2>

                <p className="mt-4 text-muted-foreground leading-7">
                    Our free <strong>Concrete Calculator</strong> helps you estimate the
                    amount of concrete required for slabs, floors, foundations, and other
                    construction projects. Simply enter the dimensions of your slab,
                    choose the measurement unit and concrete grade, then click
                    <strong> Calculate</strong> to instantly estimate concrete volume,
                    cement bags, sand, aggregate, waste allowance, and material cost.
                </p>

                <p className="mt-4 text-muted-foreground leading-7">
                    This calculator is useful for homeowners, contractors, civil
                    engineers, builders, architects, and construction professionals who
                    need quick and accurate concrete quantity estimates.
                </p>
            </section>

            {/* How to Use */}
            <section>
                <h2 className="text-2xl font-bold">
                    How to Use This Concrete Calculator
                </h2>

                <ol className="mt-5 list-decimal space-y-3 pl-6 text-muted-foreground leading-7">
                    <li>Select the concrete shape (currently Slab).</li>
                    <li>Choose your preferred unit (Feet or Meters).</li>
                    <li>Enter the length, width, and depth.</li>
                    <li>Select the required concrete grade.</li>
                    <li>Enable or disable waste allowance.</li>
                    <li>Enter the concrete cost per cubic meter (optional).</li>
                    <li>Click <strong>Calculate</strong> to generate the results.</li>
                </ol>
            </section>

            {/* Formula */}
            <section>
                <h2 className="text-2xl font-bold">
                    Concrete Volume Formula
                </h2>

                <div className="mt-6 rounded-xl border bg-gray-50 p-6">
                    <p className="text-center text-2xl font-bold">
                        Volume = Length × Width × Depth
                    </p>
                </div>

                <p className="mt-6 text-muted-foreground leading-7">
                    If measurements are entered in feet, the calculator automatically
                    converts cubic feet into cubic meters before estimating cement bags,
                    sand, aggregate, and material cost.
                </p>

                <div className="mt-4 rounded-lg bg-blue-50 p-4">
                    <p className="font-medium">
                        1 Cubic Foot = 0.0283168 Cubic Meters
                    </p>
                </div>
            </section>

            {/* Example */}
            <section>
                <h2 className="text-2xl font-bold">
                    Example Calculation
                </h2>

                <div className="mt-6 overflow-hidden rounded-xl border">
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b bg-gray-50">
                                <td className="px-4 py-3 font-medium">Length</td>
                                <td className="px-4 py-3">20 ft</td>
                            </tr>

                            <tr className="border-b">
                                <td className="px-4 py-3 font-medium">Width</td>
                                <td className="px-4 py-3">10 ft</td>
                            </tr>

                            <tr className="border-b bg-gray-50">
                                <td className="px-4 py-3 font-medium">Depth</td>
                                <td className="px-4 py-3">1 ft</td>
                            </tr>

                            <tr>
                                <td className="px-4 py-3 font-medium">
                                    Concrete Volume
                                </td>
                                <td className="px-4 py-3">
                                    20 × 10 × 1 = 200 ft³ ≈ 5.66 m³
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-5 text-muted-foreground leading-7">
                    After calculating the concrete volume, the calculator estimates
                    cement bags, sand, aggregate, waste allowance, and total material
                    cost based on the selected concrete grade.
                </p>
            </section>

            {/* Grades */}
            <section>
                <h2 className="text-2xl font-bold">
                    Concrete Grades Explained
                </h2>

                <p className="mt-4 text-muted-foreground leading-7">
                    Choosing the correct concrete grade is important because each
                    construction project requires a different level of strength and
                    durability.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left">Grade</th>
                                <th className="px-4 py-3 text-left">Common Use</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-3">M10</td>
                                <td className="px-4 py-3">
                                    Levelling course and pathways
                                </td>
                            </tr>

                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-3">M15</td>
                                <td className="px-4 py-3">
                                    PCC work and flooring
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="px-4 py-3">M20</td>
                                <td className="px-4 py-3">
                                    Residential slabs, beams and columns
                                </td>
                            </tr>

                            <tr className="border-t bg-gray-50">
                                <td className="px-4 py-3">M25</td>
                                <td className="px-4 py-3">
                                    Reinforced concrete structures
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="px-4 py-3">M30</td>
                                <td className="px-4 py-3">
                                    Heavy-duty commercial construction
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Waste */}
            <section>
                <h2 className="text-2xl font-bold">
                    Why Add Waste Allowance?
                </h2>

                <p className="mt-4 text-muted-foreground leading-7">
                    Concrete waste occurs during transportation, mixing, pumping,
                    placement, and finishing. Adding a waste allowance helps ensure that
                    enough concrete is available to complete the project without delays.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-green-600 bg-green-50 p-5">
                    <p className="font-semibold">
                        Recommended Waste Allowance: 10%
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Most residential construction projects use a 10% waste allowance to
                        account for unavoidable material loss.
                    </p>
                </div>
            </section>
            {/* FAQ */}
            <section>
                <h2 className="text-2xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-6">

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            1. How do I calculate the amount of concrete needed?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Multiply the length, width, and depth of the concrete area to calculate
                            its volume. This calculator automatically converts the volume into cubic
                            meters (when required) and estimates the cement bags, sand, aggregate,
                            waste allowance, and material cost.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            2. Which concrete grade should I choose?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            The right grade depends on your project. M10 and M15 are commonly used
                            for non-structural work, M20 is suitable for most residential slabs and
                            beams, while M25 and M30 are used for reinforced and heavy-duty
                            construction.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            3. Why should I include a waste allowance?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Waste allowance accounts for concrete lost during mixing,
                            transportation, pumping, placement, and finishing. A 10% allowance is
                            commonly used for residential construction projects.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            4. Does this calculator support both feet and meters?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Yes. You can calculate concrete quantities using either feet or meters.
                            The calculator automatically performs the necessary unit conversions.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            5. What is the difference between cubic feet and cubic meters?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Cubic feet and cubic meters both measure volume. One cubic foot equals
                            approximately 0.0283168 cubic meters. The calculator performs this
                            conversion automatically whenever required.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            6. Can I estimate the material cost?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Yes. Enter the cost per cubic meter of concrete, and the calculator will
                            estimate the total material cost based on the calculated concrete
                            volume.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            7. Are the calculation results accurate?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            The calculator provides reliable estimates based on the values you
                            enter. Actual material requirements may vary depending on site
                            conditions, workmanship, material quality, and local construction
                            practices.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            8. Can I use this calculator for foundations and footings?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            The current version supports slab calculations. Support for footings,
                            beams, columns, circular columns, and stairs will be added in future
                            updates.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            9. Who can use this Concrete Calculator?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            This calculator is designed for homeowners, builders, contractors,
                            civil engineers, architects, students, and anyone who needs quick
                            concrete quantity estimates.
                        </p>
                    </div>

                    <div className="rounded-xl border p-5">
                        <h3 className="text-lg font-semibold">
                            10. Is this Concrete Calculator free to use?
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-7">
                            Yes. The calculator is completely free to use and provides instant
                            concrete quantity and material estimates directly in your browser.
                        </p>
                    </div>

                </div>
            </section>
        </section>

    );
}