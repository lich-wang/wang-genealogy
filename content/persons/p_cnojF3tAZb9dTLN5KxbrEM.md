---
schema: wang-person/v1
id: p_cnojF3tAZb9dTLN5KxbrEM
status: active
merged_into: null
display_name: 王正己
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgjWLj71VF37KBdx9JVrM5
        subject_person_id: p_cnojF3tAZb9dTLN5KxbrEM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xf2zE2d6rKySUuca7jDqSQ
          claim_id: c_vgjWLj71VF37KBdx9JVrM5
          source_id: s_r3i2czCKWqHMxK2Tr7AaRZ
          stance: supports
          locator: CBDB:95123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（95123）
          source: &a1
            id: s_r3i2czCKWqHMxK2Tr7AaRZ
            source_type: api_record
            title: 中国历代人物传记资料库：王正己（CBDB 95123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95123&o=json
            external_identifier: CBDB:95123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDxDMPyNaa1jNTmkqDyRFr
        subject_person_id: p_cnojF3tAZb9dTLN5KxbrEM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AqtdeL4XB7PT3ABtkfN369
          claim_id: c_qDxDMPyNaa1jNTmkqDyRFr
          source_id: s_r3i2czCKWqHMxK2Tr7AaRZ
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

# 王正己

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正己 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正己（CBDB 95123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95123&o=json)
