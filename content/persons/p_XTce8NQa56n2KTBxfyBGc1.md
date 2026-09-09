---
schema: wang-person/v1
id: p_XTce8NQa56n2KTBxfyBGc1
status: active
merged_into: null
display_name: 王讌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CF5e56yeng7fh9X6sV1tSv
        subject_person_id: p_XTce8NQa56n2KTBxfyBGc1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KETgpNZuUXJg6kCP54Sdx4
          claim_id: c_CF5e56yeng7fh9X6sV1tSv
          source_id: s_1rNuMdkyidmAXDQik9AUkM
          stance: supports
          locator: CBDB:635611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635611）
          source: &a1
            id: s_1rNuMdkyidmAXDQik9AUkM
            source_type: api_record
            title: 中国历代人物传记资料库：王讌（CBDB 635611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635611&o=json
            external_identifier: CBDB:635611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lyr6nQtU3XcfDhMvt7T8ga
        subject_person_id: p_XTce8NQa56n2KTBxfyBGc1
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
        - id: cs_hNxVkPRL8tc4aHNhHzPyG4
          claim_id: c_Lyr6nQtU3XcfDhMvt7T8ga
          source_id: s_1rNuMdkyidmAXDQik9AUkM
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

# 王讌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王讌（CBDB 635611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635611&o=json)
