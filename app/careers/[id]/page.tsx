import { notFound } from "next/navigation"

import { getJob } from "@/lib/data"
import JobContent from "@/components/jobs/job-content"
import { getJobs } from "@/lib/data"

interface Props {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const jobs = await getJobs()

  return jobs.map((job) => ({
    id: job.id.toString(),
  }))
}

export async function generateMetadata({ params }: Props) {
  const job = await getJob(params.id)
  if (!job) {
    return {
      title: "Job Not Found",
    }
  }
  return {
    title: job.title,
  }
}

async function JobPage({ params }: Props) {
  const job = await getJob(params.id)

  if (!job) {
    notFound()
  }

  return <JobContent job={job} />
}

export default JobPage
