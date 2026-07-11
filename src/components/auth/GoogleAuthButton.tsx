import { GoogleLogin } from "@react-oauth/google";

interface Props {
  onSuccess: (response: { credential?: string }) => void;
  onError: () => void;
}

export default function GoogleAuthButton({
                                           onSuccess,
                                           onError,
                                         }: Props) {
  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        theme="outline"
        size="large"
        width="384"
      />
    </div>
  );
}