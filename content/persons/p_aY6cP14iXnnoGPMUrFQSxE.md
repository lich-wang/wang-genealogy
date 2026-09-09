---
schema: wang-person/v1
id: p_aY6cP14iXnnoGPMUrFQSxE
status: active
merged_into: null
display_name: 王應舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F52XnzCMbgvxX4g85EDkNq
        subject_person_id: p_aY6cP14iXnnoGPMUrFQSxE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H2K6hT4MH2vHACp8sQqx8f
          claim_id: c_F52XnzCMbgvxX4g85EDkNq
          source_id: s_8HV45PFo8H9KNWFAeY346D
          stance: supports
          locator: CBDB:637414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637414）
          source: &a1
            id: s_8HV45PFo8H9KNWFAeY346D
            source_type: api_record
            title: 中国历代人物传记资料库：王應舉（CBDB 637414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637414&o=json
            external_identifier: CBDB:637414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7k1jCcTXcXdbqP7FSLr3M
        subject_person_id: p_aY6cP14iXnnoGPMUrFQSxE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AdJ4ohFN3J1LHtt2F5nDvA
          claim_id: c_B7k1jCcTXcXdbqP7FSLr3M
          source_id: s_8HV45PFo8H9KNWFAeY346D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應舉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應舉（CBDB 637414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637414&o=json)
