import React from 'react';

// same here, prop-types
const Table = ({ history }) => {
    if (!history[0]) return null;
    const titles = Object.keys(history[0]);

    return (
        <div className="history">
            <table>
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
        </div>
    );
};

export default Table;
