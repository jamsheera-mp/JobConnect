import React from 'react'
import { MapPin } from 'lucide-react'
import { Job } from '../../../../../core'

interface JobCardProps {
  job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-gray-500">May {job.postedDays}, 2024</span>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
        {job.title}
      </h4>
      <p className="text-gray-600 mb-3">{job.company}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        {job.location}
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">{job.experience}</span>
        <span className="text-sm text-gray-500">{job.category}</span>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Not Interested
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
          Apply
        </button>
      </div>
    </div>
  )
}

export default JobCard