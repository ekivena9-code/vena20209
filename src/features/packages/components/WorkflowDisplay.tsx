import React from 'react';
import { ArrowRight, CalendarDays, List } from 'lucide-react';
import { WorkflowItem } from '../../../types';

interface WorkflowDisplayProps {
  workflows: WorkflowItem[];
  projectName?: string;
}

const WorkflowDisplay: React.FC<WorkflowDisplayProps> = ({ workflows, projectName }) => (
  <div className="space-y-4">
    <div className="flex items-start gap-3 rounded-xl border border-[#5D87FF]/20 bg-[#ECF2FF]/60 p-3.5 sm:p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#5D87FF] shadow-sm">
        <List className="h-4 w-4" />
      </span>
      <div>
        <h3 className="text-sm font-extrabold text-[#2A3547]">Workflow Acara</h3>
        <p className="mt-0.5 text-xs leading-relaxed text-[#5A6A85]">
          {projectName ? `Tahapan persiapan untuk ${projectName}.` : 'Tahapan persiapan acara Anda.'}
        </p>
      </div>
    </div>

    {workflows.map(workflow => (
      <section key={workflow.id} className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <CalendarDays className="h-4 w-4 shrink-0 text-[#5D87FF]" />
          <h4 className="text-xs font-extrabold text-[#2A3547] sm:text-sm">{workflow.title}</h4>
        </div>
        {workflow.description && <p className="mb-3 text-xs leading-relaxed text-[#5A6A85]">{workflow.description}</p>}
        {workflow.timeline.length > 0 ? (
          <ol className="space-y-2.5">
            {workflow.timeline.map((step, index) => (
              <li key={`${workflow.id}-${index}`} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#5A6A85] sm:text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ECF2FF] text-[10px] font-extrabold text-[#5D87FF]">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1 pt-0.5">{step}</span>
                {index < workflow.timeline.length - 1 && <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-300" />}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-xs italic text-[#5A6A85]">Belum ada tahapan workflow.</p>
        )}
      </section>
    ))}
  </div>
);

export default WorkflowDisplay;
