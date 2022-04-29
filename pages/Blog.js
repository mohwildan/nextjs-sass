import BlogHeader from '../components/Blog/BlogHeader';
import Layout from '/layout/Layout'
import Head from 'next/head';
function Blog() {
    return (
        <>
        <Head>
            <title>Blog | Wildan</title>
        </Head>
       <Layout>
           <BlogHeader />
       </Layout>
        </>
    );
}

export default Blog;