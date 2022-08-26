export default function InputError({ message, className = '' }) {
    return message ? <p className={'mt-5 px-4 py-2 border-white border-2 rounded-mdtext-sm text-red-600 ' + className}>{message}</p> : null;
}
