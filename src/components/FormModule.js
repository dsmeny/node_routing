const FormModule = () => {
  const html = ` 
    <form action="/message" method="post">
      <input type="text" name="text" placeholder="add something" />
      <input type="submit" />
    </form>
    `;
  return html;
};

export default FormModule;
