import React from "react";
import {Accordion} from "flowbite-react";

interface ClusterPlot {
}

const MappingClusterPlot: React.FC<ClusterPlot> = () => {
  return (
    <div className="mt-4">
      <Accordion collapseAll className="">
        <Accordion.Panel>
          <Accordion.Title className="p-3 focus:ring-0">View Clustering Plot</Accordion.Title>
          <Accordion.Content>
            <div className="flex items-center justify-center rounded-b-lg h-64 bg-gray-50 dark:bg-gray-800">
              {/*TODO: display cluster plot*/}
              Cluster Plot
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

export default MappingClusterPlot;
