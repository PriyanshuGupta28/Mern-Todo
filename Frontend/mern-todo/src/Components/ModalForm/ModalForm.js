import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormDigit,
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import axios from "axios";
import { ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const WorkoutForm = ({ onAddWorkout }) => {
  const [form] = ProForm.useForm();

  const submitWorkout = async (values) => {
    try {
      // Make a POST request to the backend API
      const response = await axios.post("/api/workouts", values);

      // Log the response (you can handle it based on your backend response)
      console.log(response.data);

      // Notify the parent component (Home) about the workout addition
      onAddWorkout();

      // Show success message
      message.success("Workout created successfully");
    } catch (error) {
      // Log and show an error message if the request fails
      console.error("Error creating workout:", error);
      message.error("Failed to create workout");
    }
  };

  return (
    <ConfigProvider locale={en_US}>
      <ModalForm
        title="Create Workout"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            Create Workout
          </Button>
        }
        form={form}
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log(),
        }}
        submitter={{
          searchConfig: {
            submitText: "Create Workout",
          },
        }}
        onFinish={async (values) => {
          await waitTime(1000);
          await submitWorkout(values);
          return true;
        }}
      >
        <ProFormText
          width="md"
          name="title"
          label="Workout Title"
          placeholder="Enter workout title"
          rules={[
            {
              required: true,
              message: "Please enter the workout title",
            },
            {
              type: "string",
              message: "Title must be a string",
            },
          ]}
        />

        <ProFormDigit
          width="md"
          name="reps"
          label="Repetitions"
          placeholder="Enter number of repetitions"
          rules={[
            {
              required: true,
              message: "Please enter the number of repetitions",
            },
            {
              type: "number",
              message: "Repetitions must be a number",
            },
          ]}
        />

        <ProFormDigit
          width="md"
          name="weight"
          label="Weight"
          placeholder="Enter weight"
          rules={[
            {
              required: true,
              message: "Please enter the weight",
            },
            {
              type: "number",
              message: "Weight must be a number",
            },
          ]}
        />
      </ModalForm>
    </ConfigProvider>
  );
};
