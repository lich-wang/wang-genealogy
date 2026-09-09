---
schema: wang-person/v1
id: p_FFLQg943FjdQ1jr8tDB2s3
status: active
merged_into: null
display_name: 王朱艧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EFZ4uJ913F3o5USoE1YeBL
        subject_person_id: p_FFLQg943FjdQ1jr8tDB2s3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朱艧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KXiJ1vXoQ9WMv3R3KFPrTa
          claim_id: c_EFZ4uJ913F3o5USoE1YeBL
          source_id: s_n1Qch6qj4MBWFEXhbELoJ5
          stance: supports
          locator: CBDB:638662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638662）
          source: &a1
            id: s_n1Qch6qj4MBWFEXhbELoJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王朱艧（CBDB 638662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638662&o=json
            external_identifier: CBDB:638662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FdRwN8i9HF3YWx2Q9vHj5s
        subject_person_id: p_FFLQg943FjdQ1jr8tDB2s3
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
        - id: cs_k9PNRf31KGS81RCUX2x46n
          claim_id: c_FdRwN8i9HF3YWx2Q9vHj5s
          source_id: s_n1Qch6qj4MBWFEXhbELoJ5
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

# 王朱艧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朱艧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朱艧（CBDB 638662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638662&o=json)
