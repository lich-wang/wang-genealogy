---
schema: wang-person/v1
id: p_aKFZic26iVs9KhJtw72W2P
status: active
merged_into: null
display_name: 王慶遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g5QX5GyAzEjU5qQ5T4CE4X
        subject_person_id: p_aKFZic26iVs9KhJtw72W2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eDanfiL6XChKsf7mxr6Lwk
          claim_id: c_g5QX5GyAzEjU5qQ5T4CE4X
          source_id: s_Nt7PbPMx7YRpUuYjzg3Tcs
          stance: supports
          locator: CBDB:637954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637954）
          source: &a1
            id: s_Nt7PbPMx7YRpUuYjzg3Tcs
            source_type: api_record
            title: 中国历代人物传记资料库：王慶遠（CBDB 637954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637954&o=json
            external_identifier: CBDB:637954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_stsQRH4dFcYUkgq2ycpgHR
        subject_person_id: p_aKFZic26iVs9KhJtw72W2P
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
        - id: cs_5eagYq4HryWQHaDqSiAhED
          claim_id: c_stsQRH4dFcYUkgq2ycpgHR
          source_id: s_Nt7PbPMx7YRpUuYjzg3Tcs
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

# 王慶遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶遠（CBDB 637954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637954&o=json)
