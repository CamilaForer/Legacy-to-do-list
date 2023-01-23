
const Modal = (_) => {
    return (
        <>
            {/* Button trigger modal */}
            <button type="button"class="btn-modal" data-toggle="modal" data-target="#exampleModal">
                📂
                {/* BsFillCollectionFill */}
                {/* AiFillFolderOpen */}
            </button>
            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button className="btn-filter">Eliminadas</button>
                            <button className="btn-filter">Realizadas</button>
                            <button type="button" className="close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i className="black remove icon"></i>
                                </span>
                            </button>
                        </div>
                        {/* FILTER TODO */}
                        <div class="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
