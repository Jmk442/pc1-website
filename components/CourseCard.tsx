import type { Course } from '@/data/courses'
import Link from 'next/link'

const statusColor: Record<string, string> = {
  'Ready': 'bg-green-100 text-green-700',
  'Draft': 'bg-yellow-100 text-yellow-700',
  'Coming Soon': 'bg-gray-100 text-gray-500',
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between mb-2">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor[course.status]}`}>
          {course.status}
        </span>
        <span className="text-xs text-gray-400">{course.level}</span>
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600 flex-1 mb-3">{course.description}</p>
      <p className="text-xs text-gray-500 mb-1"><span className="font-semibold">Audience:</span> {course.audience}</p>
      <p className="text-xs text-gray-500 mb-4"><span className="font-semibold">Lessons:</span> {course.lessonCount}</p>
      <Link href={course.classroomLink} className="btn-secondary text-sm py-2 px-4 text-center mt-auto">
        View Course
      </Link>
    </div>
  )
}
