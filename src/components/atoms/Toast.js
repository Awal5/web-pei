import Swal from "sweetalert2";

const Toasted = (title, text, icon) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export default Toasted;
