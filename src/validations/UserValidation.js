const UserValidation = (values) => {
  const errors = {};

  if (!values.title || values.title === "") {
    errors.title = "Title harus diisi";
  }

  if (!values.id || values.id === "") {
    errors.id = "ID harus diisi";
  }

  if (!values.content || values.content === "") {
    errors.content = "Content harus diisi";
  }

  if (!values.published_at || values.published_at === "") {
    errors.published_at = "Published At harus diisi";
  }

  if (!values.created_at || values.created_at === "") {
    errors.created_at = "Created At harus diisi";
  }

  if (!values.update_at || values.update_at === "") {
    errors.update_at = "Update At harus diisi";
  }

  return errors
};

export default UserValidation;
