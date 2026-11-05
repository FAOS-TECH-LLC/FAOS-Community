import { createClient } from '@/lib/supabase/client'

export async function uploadMedia(file: File, bucketName: string = 'community-media') {
  const supabase = createClient()
  const fileName = `${Date.now()}_${file.name}`

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file)

  if (error) {
    throw new Error(error.message)
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucketName).getPublicUrl(data.path)

  return publicUrl
}