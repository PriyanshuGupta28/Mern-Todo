import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from "@ant-design/pro-components";
import { ConfigProvider, message } from "antd";

import en_US from "antd/locale/en_US";
import { WorkoutForm } from "../../Components/ModalForm/ModalForm";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Home = () => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 1
              ? [{ required: true, message: "This is a required field" }]
              : [],
        };
      },
      editable: (text, record, index) => {
        return index !== -1;
      },
      width: "15%",
    },
    {
      title: "Reps",
      dataIndex: "reps",
      valueType: "text", // Change valueType as needed
      width: "15%",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      valueType: "text", // Change valueType as needed
      width: "15%",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      valueType: "date",
      editable: false,
      render: (text, record) => {
        const createdAtDate = new Date(record.createdAt);
        const formattedDate = `${createdAtDate.toLocaleString("en-us", {
          month: "short",
        })} ${createdAtDate.getDate()} ${createdAtDate.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )}`;
        return <span>{`Created on ${formattedDate}`}</span>;
      },
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      valueType: "date",
      editable: false,
      render: (text, record) => {
        const createdAtDate = new Date(record.createdAt);
        const formattedDate = `${createdAtDate.toLocaleString("en-us", {
          month: "short",
        })} ${createdAtDate.getDate()} ${createdAtDate.toLocaleTimeString(
          "en-US",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )}`;
        return <span>{`Updated on ${formattedDate}`}</span>;
      },
    },
    {
      title: "Action",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record._id);
          }}
        >
          Edit
        </a>,
        <a
          key="delete"
          onClick={() => {
            deleteWorkout(record._id);
          }}
        >
          Delete
        </a>,
      ],
    },
  ];

  const getData = async () => {
    try {
      const res = await axios.get("/api/workouts");
      setDataSource(res.data); // Assuming the data structure matches your DataSourceType
      setEditableRowKeys([]); // Reset editable state
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addWorkout = async (data) => {
    try {
      await axios.post("/api/workouts", data);
      message.success("Workout added successfully!");
      await waitTime(2000);
      getData(); // Refresh data after adding
    } catch (error) {
      console.error("Error adding workout:", error);
      message.error("Error adding workout.");
    }
  };

  const updateWorkout = async (id, data) => {
    try {
      console.log(id, data);
      await axios.patch(`/api/workouts/${id}`, data);
      message.success("Data updated successfully!");
      await waitTime(2000);
      getData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating data:", error);
      message.error("Error updating data.");
    }
  };

  const deleteWorkout = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/api/workouts/${id}`);
      message.success("Data deleted successfully!");
      getData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
      message.error("Error deleting data.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ConfigProvider locale={en_US}>
        <EditableProTable
          rowKey="_id"
          headerTitle="Mern Todo List"
          maxLength={5}
          scroll={{
            x: 960,
          }}
          recordCreatorProps={false}
          loading={false}
          columns={columns}
          request={async () => ({
            data: dataSource,
            total: dataSource.length,
            success: true,
          })}
          value={dataSource}
          onChange={setDataSource}
          editable={{
            type: "multiple",
            editableKeys,
            onSave: (rowKey, data, row) => updateWorkout(row._id, data),
            onDelete: (selectedRowKeys, selectedRows) =>
              deleteWorkout(selectedRows._id),

            onChange: setEditableRowKeys,
          }}
          pagination={{
            pageSize: 10, // Set the number of items per page
          }}
        />
      </ConfigProvider>
      <WorkoutForm onAddWorkout={getData} />
      <ProCard title="Table Data" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: "100%",
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default Home;
