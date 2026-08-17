import type { Control, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

interface AuthFormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
}

export default function AuthFormField<T extends FieldValues>({
                                                               control,
                                                               name,
                                                               label,
                                                               placeholder,
                                                               type = 'text',
                                                               inputMode,
                                                               autoComplete,
                                                             }: AuthFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              inputMode={inputMode}
              autoComplete={autoComplete}
              placeholder={placeholder}
              className="mt-2"
            />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  );
}