import del from "delete";
export const reset = () => {
    return del(app.path.clean);
}