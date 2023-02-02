
import { useState } from 'react';
import { getDefaultLoaderSetinterval } from '../../helpers/functions/functions'
import DisplayAlertByStatus from '../others/DisplayAlertByStatus';

export default function Loader({intervalTime = getDefaultLoaderSetinterval()}) {

const [loader, setLoader] = useState(<span> Loading ... </span>);
setInterval(() => { 
  setLoader(<DisplayAlertByStatus color={'red'} > SomeThing Went Wrong </DisplayAlertByStatus>)
}, intervalTime);

return loader;

}
