
import styled from "styled-components"

export const Breadcrumb = styled.div`
font-family: Sukhumvit Tadmai;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Subnavbar = () => {
  return (
    <>
      <div style={{ backgroundColor: '#a8a8a8' }}>
        <div className="max-w-screen-xl mx-auto p-1" >
          <Breadcrumb className="px-4 text-white text-sm">
            หน้าหลัก / สินเชื่อส่วนบุคคล / KTC PROUD
          </Breadcrumb>
        </div>
      </div>
    </>
  )
}

export default Subnavbar
