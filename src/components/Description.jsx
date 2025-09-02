export default function Description({ content }) {
    return (
        <div>
            {content ? (
                <div>{content}</div>
            ) : (
                <div className="text-gray-900 dark:text-gray-100">
                    <pre>
                        DSA Instructor will help you to assist<br />
                        you in your <b>dsa related problems</b>.<br />
                        ASK YOUR QUESTION
                    </pre>
                </div>
            )}
        </div>
    )
}