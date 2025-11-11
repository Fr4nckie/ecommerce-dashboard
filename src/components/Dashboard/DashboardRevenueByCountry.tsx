"use client"

import { Cell, Pie, PieChart } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { REVENUE_BY_COUNTRY } from "@/data/revenueByCountry.ts"

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  US: {
    label: "United States",
    color: "var(--chart-1)",
  },
  CA: {
    label: "Canada",
    color: "var(--chart-2)",
  },
  UK: {
    label: "United Kingdom",
    color: "var(--chart-3)",
  },
  DE: {
    label: "Germany",
    color: "var(--chart-4)",
  },
  FR: {
    label: "France",
    color: "var(--chart-5)",
  },
  AU: {
    label: "Australia",
    color: "var(--chart-1)",
  },
  JP: {
    label: "Japan",
    color: "var(--chart-2)",
  },
  BR: {
    label: "Brazil",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function RevenueByCountry() {
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>Revenue by Country</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <Pie
              data={REVENUE_BY_COUNTRY}
              dataKey="revenue"
              nameKey="country"
              cx="50%"
              cy="50%"
              innerRadius={20}
              outerRadius={80}
              paddingAngle={2}
            >
              {REVENUE_BY_COUNTRY.map((entry, index) => (
                <Cell
                  key={`cel-${index}`}
                  fill={`var(--color-${entry.code})`}
                />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="code" />}
              className="flex-wrap gap-4 *:basis-1/4 *:justify-center text-xs"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
