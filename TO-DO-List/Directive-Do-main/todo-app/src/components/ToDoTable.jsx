import React from 'react';
import { Typography, Button, Table, Tag, Card } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

function ToDoTable({ todos, onComplete, onDelete }) {
    const priorityGroups = {
        IU: { title: 'Important & Urgent', tasks: [] },
        INU: { title: 'Important, Not Urgent', tasks: [] },
        UNI: { title: 'Urgent, Not Important', tasks: [] },
        NINU: { title: 'Not Important, Not Urgent', tasks: [] },
    };

    todos.forEach(todo => {
        if (priorityGroups[todo.priority]) {
            priorityGroups[todo.priority].tasks.push(todo);
        }
    });

    const renderTable = (tasks) => {
        const columns = [
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Completed',
                dataIndex: 'completed',
                key: 'completed',
                align: 'center',
                render: (completed) => completed ? <Tag color="green">true</Tag> : <Tag color="red">false</Tag>,
            },
            {
                title: 'Complete',
                dataIndex: '',
                key: 'v',
                align: 'center',
                render: (text, record) => (
                    <Button
                        icon={<CheckOutlined />}
                        type="primary"
                        shape="circle"
                        onClick={(e) => { onComplete(record.key, e); }}
                    />
                ),
            },
            {
                title: 'Delete',
                dataIndex: '',
                key: 'x',
                align: 'center',
                render: (text, record) => (
                    <Button
                        icon={<DeleteOutlined />}
                        type="primary"
                        shape="circle"
                        onClick={(e) => { onDelete(record.key, e); }}
                        danger
                    />
                ),
            },
        ];

        const dataSource = tasks.map(task => ({
            key: task.id,
            description: task.description,
            completed: task.completed,
        }));

        return (
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                size="small"
            />
        );
    };

    return (
        <>
            <Title level={3}>ToDo Matrix</Title>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {Object.values(priorityGroups).map(group => (
                    <Card key={group.title} title={group.title}>
                        {renderTable(group.tasks)}
                    </Card>
                ))}
            </div>
        </>
    );
}

export default ToDoTable;