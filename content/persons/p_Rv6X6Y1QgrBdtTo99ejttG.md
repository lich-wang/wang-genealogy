---
schema: wang-person/v1
id: p_Rv6X6Y1QgrBdtTo99ejttG
status: active
merged_into: null
display_name: 王江
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4NhN1GLDxn9oTEadnbsWzc
        subject_person_id: p_Rv6X6Y1QgrBdtTo99ejttG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4bntyC6xGsNfWoikfmHt1
          claim_id: c_4NhN1GLDxn9oTEadnbsWzc
          source_id: s_3Zou8zx692wpECSoDx1Kzk
          stance: supports
          locator: CBDB:134179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134179）
          source: &a1
            id: s_3Zou8zx692wpECSoDx1Kzk
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 134179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134179&o=json
            external_identifier: CBDB:134179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wTF5J4bMhJJHAw9akWRNp9
        subject_person_id: p_Rv6X6Y1QgrBdtTo99ejttG
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
        - id: cs_rm2YL9gvMvvr9d4hJxP8gG
          claim_id: c_wTF5J4bMhJJHAw9akWRNp9
          source_id: s_3Zou8zx692wpECSoDx1Kzk
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
  ancestors:
    - claim:
        id: c_8ZjqZjyEJFxNk2cvH-UNIk
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rv6X6Y1QgrBdtTo99ejttG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJQxHwGVecVbtBum5k_Rf1
          claim_id: c_8ZjqZjyEJFxNk2cvH-UNIk
          source_id: s_3Zou8zx692wpECSoDx1Kzk
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王江 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王江（CBDB 134179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134179&o=json)
