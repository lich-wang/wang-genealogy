---
schema: wang-person/v1
id: p_msv9Hd5KEBFkxrn81rKa87
status: active
merged_into: null
display_name: 王演
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_myP44XWfWAV1sUNzi6W7YD
        subject_person_id: p_msv9Hd5KEBFkxrn81rKa87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4z8ZzME6xWuaSArZJ2F1fy
          claim_id: c_myP44XWfWAV1sUNzi6W7YD
          source_id: s_kpFJoBzSPPvCLoVvPj8i3q
          stance: supports
          locator: CBDB:100907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100907）
          source: &a1
            id: s_kpFJoBzSPPvCLoVvPj8i3q
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 100907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100907&o=json
            external_identifier: CBDB:100907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ztWbXBKvhRComK2SzpDUq
        subject_person_id: p_msv9Hd5KEBFkxrn81rKa87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kfNx6VHbc6PHyUr6Lt6A4
          claim_id: c_6ztWbXBKvhRComK2SzpDUq
          source_id: s_kpFJoBzSPPvCLoVvPj8i3q
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

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 100907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100907&o=json)
