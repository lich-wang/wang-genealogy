---
schema: wang-person/v1
id: p_o2YBvui2HWXPHNdcosn7qc
status: active
merged_into: null
display_name: 王炬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9jmiNnTVQbCxGhXurs7ErZ
        subject_person_id: p_o2YBvui2HWXPHNdcosn7qc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vRABFiQvJG7trwVAv94jrX
          claim_id: c_9jmiNnTVQbCxGhXurs7ErZ
          source_id: s_qcQcE3vW52zLSf69xRmEH6
          stance: supports
          locator: CBDB:415063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415063）
          source: &a1
            id: s_qcQcE3vW52zLSf69xRmEH6
            source_type: api_record
            title: 中国历代人物传记资料库：王炬（CBDB 415063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415063&o=json
            external_identifier: CBDB:415063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kV9PFBJEB81VKTAyS3pfTF
        subject_person_id: p_o2YBvui2HWXPHNdcosn7qc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8CJorzyinjjuba2iuUe6H
          claim_id: c_kV9PFBJEB81VKTAyS3pfTF
          source_id: s_qcQcE3vW52zLSf69xRmEH6
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

# 王炬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炬（CBDB 415063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415063&o=json)
