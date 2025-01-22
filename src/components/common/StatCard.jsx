import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color, progress, progressText }) => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				{/* Title and Icon */}
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<Icon size={20} className='mr-2' style={{ color }} />
					{name}
				</span>

				{/* Value */}
				<p className='mt-2 text-3xl font-bold text-gray-100'>{value}</p>

				{/* Fancy Progress Bar */}
				<div className='mt-4'>
					<div className='relative h-4 bg-gray-700 rounded-full overflow-hidden'>
						<div
							className='absolute inset-0 transition-all duration-500'
							style={{
								width: `${progress}%`,
								background: `linear-gradient(to right, ${color}, #1E3A8A)`,
							}}
						/>
					</div>
					<p className='mt-2 text-sm text-gray-400'>{progressText}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default StatCard;
