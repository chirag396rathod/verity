import { cn } from '@/lib/utils';
import Iconify from './Iconify'

const Loading = ({className}) => {
  return (
     <Iconify className={cn("small-loader-container text-2xl",className)} icon="tabler:loader"/>
  )
}

export default Loading;
