---
schema: wang-person/v1
id: p_5DS4VeCGL6A7bpkLY9jCoW
status: active
merged_into: null
display_name: 王徽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e2ALXstQX1U8EpzEWb8T7z
        subject_person_id: p_5DS4VeCGL6A7bpkLY9jCoW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YAvABSTKpgD4VbvqmpQj6m
          claim_id: c_e2ALXstQX1U8EpzEWb8T7z
          source_id: s_3D3h1AhYSgdPdu7wde7dMn
          stance: supports
          locator: CBDB:227986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227986）
          source: &a1
            id: s_3D3h1AhYSgdPdu7wde7dMn
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 227986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227986&o=json
            external_identifier: CBDB:227986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mfh9NejFsDwgAVX2bXKqs8
        subject_person_id: p_5DS4VeCGL6A7bpkLY9jCoW
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
        - id: cs_JGEb5KPbsduHDfi2GvDq9F
          claim_id: c_Mfh9NejFsDwgAVX2bXKqs8
          source_id: s_3D3h1AhYSgdPdu7wde7dMn
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

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 227986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227986&o=json)
