import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const weeklyData = [
	{ day: "Mon", fraudCases: 2, invoices: 50 },
	{ day: "Tue", fraudCases: 5, invoices: 65 },
	{ day: "Wed", fraudCases: 3, invoices: 55 },
	{ day: "Thu", fraudCases: 8, invoices: 70 },
	{ day: "Fri", fraudCases: 6, invoices: 75 },
	{ day: "Sat", fraudCases: 4, invoices: 60 },
	{ day: "Sun", fraudCases: 10, invoices: 80 },
];

const WeeklyTrendsChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Weekly Trends</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={weeklyData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"day"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='fraudCases'
							name='Fraud Cases'
							stroke='#EF4444'
							strokeWidth={3}
							dot={{ fill: "#EF4444", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
						<Line
							type='monotone'
							dataKey='invoices'
							name='Invoices Processed'
							stroke='#10B981'
							strokeWidth={3}
							dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default WeeklyTrendsChart;
