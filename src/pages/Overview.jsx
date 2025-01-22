import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';

import { Siren, File, Megaphone, ChartLine } from "lucide-react";
import { motion } from 'framer-motion';
import WeeklyTrendsChart from '../components/overview/WeeklyTrendsChart';
import VendorRiskChart from '../components/overview/VendorRiskChart';
import ModuleActivityChart from '../components/overview/ModuleActivityChart';

const Overview = () => {

  return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
				name="Invoices Processed"
				icon={File}
				value="345"
				color="#6366F1" // Indigo
				progress={95}
        progressText="95% matched"
			/>
			<StatCard
				name="Fraud Cases Detected"
				icon={Siren}
				value="12"
				color="#8B5CF6" // Violet
				progress={66.667}
        progressText="8/12 resolved"
			/>
			<StatCard
				name="Vendor Risk Alerts"
				icon={Megaphone}
				value="78"
				color="#EC4899" // Pink
				progress={15}
        progressText="15% increase this month"
			/>
      <StatCard
				name="Demand Forecast Accuracy"
				icon={ChartLine}
				value="95%"
				color="#10B981" // Green
				progress={95}
        progressText="+5% improvement"
			/>
				</motion.div>

        {/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<WeeklyTrendsChart />
					<VendorRiskChart />
					<ModuleActivityChart />
				</div>

			</main>
		</div>
	)
}

export default Overview