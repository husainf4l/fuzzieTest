import { z } from 'zod'

export const EditUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1, 'Required')
})


declare namespace JSX {
    interface IntrinsicElements {
      "lr-config": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "lr-file-uploader-regular": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "lr-upload-ctx-provider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
  