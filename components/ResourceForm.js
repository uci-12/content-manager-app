import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceForm = ({ onFormSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const handleOnResetForm = () => setForm(DEFAULT_DATA);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSubmitForm = () => {
    onFormSubmit(form);
  };

  return (
    <div className="resource-form">
      <h1 className="title">{initialData ? "Edit" : "Add New"} Resource</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input value={form.title} name="title" onChange={handleOnChangeInput} className="input" type="text" placeholder="Learn Next Js and Sanity IO" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea value={form.description} name="description" onChange={handleOnChangeInput} className="textarea" placeholder="Learn these technologies because they are very popular and enable better SEO." />
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input value={form.link} name="link" onChange={handleOnChangeInput} className="input" type="text" placeholder="https://academy.eincode.com" />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select value={form.priority} name="priority" onChange={handleOnChangeInput}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input value={form.timeToFinish} name="timeToFinish" onChange={handleOnChangeInput} className="input" type="number" placeholder="60" />
            <p className="help">Time is in minutes</p>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="button" onClick={handleSubmitForm}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" type="button" onClick={handleOnResetForm}>Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;