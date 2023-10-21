import React, { useEffect, useState } from 'react';
import ErrorGif from '@/components/Errors/ErrorGif';
import Loader from '@/components/Loaders/Loader';

interface useFetchParams<T,TArgs=undefined>{
  argsPromise?:(args:TArgs)=>Promise<T[]>,
  dependencies:any[],
  setter?:(data:T[])=>void,
  onSuccess?:(data:T[])=>void,
  onError?:()=>void,
  getArgs?:()=>TArgs,
  defaultPromise?:()=>Promise<T[]>,
}


export function useFetchStatus<T,K=undefined>({argsPromise,defaultPromise,setter,onError,onSuccess,getArgs,dependencies}:useFetchParams<T,K>):FetchStatusType{
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string|null>(null);

  if(defaultPromise==undefined&&argsPromise==undefined){
    throw new Error("At least one promise must be passed to function");
  }
  if(onSuccess==undefined&&setter==undefined){
    throw new Error("Cannot set data, pass at least one data setter");
  }

  useEffect(() => {

    let p:Promise<T[]>;
    if(defaultPromise!==undefined){
      p=defaultPromise();
    }else{
      const args = getArgs!();
      p=argsPromise!(args);
    }

    p.then(res=>{
      setLoading(false);
      if(setter){
        setter(res);
      }
      if(onSuccess){
        onSuccess(res);
      }
    }).catch(err=>{
      setError("data loading fail");
      setLoading(false);
      if(onError){
        onError();
      }
    })
  }, dependencies);


  return {
    isLoading:loading,
    error:error
  }
}