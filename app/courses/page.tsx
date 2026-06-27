import { courses } from '@/data/courses'
import CourseCard from '@/components/CourseCard'

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Courses</p>
      <h1 className="text-4xl font-extrabold text-primary mb-4">PC1 Course Library</h1>
      <p className="text-gray-500 text-lg mb-10">
        Structured learning for students, teachers, parents, managers, and technical users.
        Available at Year 7, Year 10, and professional levels.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
