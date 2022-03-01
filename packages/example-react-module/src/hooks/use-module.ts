import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface Props {
  readonly defaultValue?: string | undefined;
}

interface State {
  readonly setValue: Dispatch<SetStateAction<string>>;
  readonly value: string;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useModule({
  defaultValue = '',
}: Readonly<Props> = DEFAULT_PROPS): State {
  const [value, setValue] = useState(defaultValue);

  return {
    setValue,
    value,
  };
}
