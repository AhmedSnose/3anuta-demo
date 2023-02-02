import { useRouter } from 'next/router'
import EmployeeForm from '../../../../../../components/employees/form/EmployeeForm';
import AgentForm from '../../../../../../components/employees/form/AgentForm';


export default function update() {
  const router = useRouter();
  const  { tab  , id} = router.query;

  return (tab === 'all' && <EmployeeForm isAddForm={false} id={id} />) || (tab === 'agents' && <AgentForm status={'update'} />)
}
