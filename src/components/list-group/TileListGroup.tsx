import { MouseEvent } from 'react';
export function TileListGroup(props: any) {

    let items: any[] = [];

    const handleTileClick = (event: MouseEvent) => {
        console.log('handleChange', event);
    };

    return (
      <>
        <div className="list-group">
            {items.map((item, index) => (
                <a href="#" className="list-group-item list-group-item-action" key={index}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </a>
            ))}
        </div>
      </>
    )
}