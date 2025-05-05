function avisoPagContruccion() {
    alert("Página en contruccón")
}

function mantenimiento(hora) {
    Swal.fire({
      title: '⚠️ Atención',
      text: `La página está en mantenimiento. Vuelva a las ${hora} hrs.`,
      icon: 'warning',
      confirmButtonText: 'Salir',
      confirmButtonColor: '#3085d6',
      backdrop: true,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://htmleros.github.io/inicio";
      }
    });
  }

function mantenimiento(error) {
  Swal.fire({
    title: 'ERROR',
    text: `La página está fuera de servicio. ERR:${error}.`,
    icon: 'error',
    confirmButtonText: 'Salir',
    confirmButtonColor: '#3085d6',
    backdrop: true,
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "mantenimiento.html";
    }
  });
}

  function aviso(aviso) {
    Swal.fire({
      title: '📣 Aviso',
      text: `${aviso} -Administración.`,
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
      backdrop: true,
      allowOutsideClick: false
    });
  }
  