type propsType = {
    to:string
}

export function Hello(props:propsType) {

    const {to} = props;

  return <>Hello {to}</>;
}