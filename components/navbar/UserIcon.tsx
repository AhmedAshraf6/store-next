import { currentUser } from '@clerk/nextjs/server';
import { LuUser } from 'react-icons/lu';

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img className='w-6 h-6 rounded-full object-cover' src={profileImage} />
    );
  }
  return <LuUser className='w-6 h-6 rounded-full text-white' />;
}
export default UserIcon;
