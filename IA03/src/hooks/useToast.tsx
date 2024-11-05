// useToast.ts
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
};

type ToastProps = {
    type: ToastType;
    message: string;
};

const useToast = () => {
    const show = ({ type, message }: ToastProps) => {
        switch (type) {
            case 'success':
                toast.success(message, toastConfig);
                break;
            case 'error':
                toast.error(message, toastConfig);
                break;
            case 'info':
                toast.info(message, toastConfig);
                break;
            case 'warning':
                toast.warning(message, toastConfig);
                break;
            default:
                toast(message, toastConfig);
                break;
        }
    };

    return { show };
};

export default useToast;
