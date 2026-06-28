export type CourseStatus = 'Draft' | 'Ready' | 'Coming Soon'
export type CourseLevel = 'Year 7' | 'Year 10' | 'Managerial / Industry' | 'Technical'

export interface Course {
  id: string
  title: string
  audience: string
  level: CourseLevel
  lessonCount: string
  status: CourseStatus
  description: string
  downloadLink?: string
  classroomLink: string
  buyLink?: string
}

// No courses added yet — waiting for John's actual course content.
export const courses: Course[] = []
