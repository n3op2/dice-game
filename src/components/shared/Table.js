import React from 'react';

const Table = ({ history }) => {
    if (!history[0]) return null;
    const titles = Object.keys(history[0]);

    return (
        <table className="history">
            <thead>
                <tr>
                    {titles.map((title) => (
                        <th key={`th:${title}`}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {history.map((record) => (
                    <tr key={Math.random()}>
                        {Object.values(record).map((val, i) => (
                            <td key={`td:${i}`}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;