"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEitor from "@uiw/react-md-editor";

const StartupForm = () => {
  const [errors, Seterrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState<string>("");
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          TITLE
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          DESCRIPTION
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors.title && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="Category" className="startup-form_label">
          Category
        </label>
        <Input
          id="Category"
          name="Category"
          className="startup-form_input"
          required
          placeholder="Startup Category (e.g. Tech, AI, Health)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEitor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          className="startup-form_editor"
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
    </form>
  );
};
export default StartupForm;
