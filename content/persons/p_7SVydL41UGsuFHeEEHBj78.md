---
schema: wang-person/v1
id: p_7SVydL41UGsuFHeEEHBj78
status: active
merged_into: null
display_name: 王薿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9UJiBDJctRPzrfDeQoKhL
        subject_person_id: p_7SVydL41UGsuFHeEEHBj78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GHFDeGNVNBTLeH4Pt83cD
          claim_id: c_y9UJiBDJctRPzrfDeQoKhL
          source_id: s_335th5Kc8BNajJTR1uZmmW
          stance: supports
          locator: CBDB:570602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570602）
          source: &a1
            id: s_335th5Kc8BNajJTR1uZmmW
            source_type: api_record
            title: 中国历代人物传记资料库：王薿（CBDB 570602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570602&o=json
            external_identifier: CBDB:570602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6JLroHBD8oxsGGSZkoMVJj
        subject_person_id: p_7SVydL41UGsuFHeEEHBj78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CLKtHjHh8uwio3jNHvqdXL
          claim_id: c_6JLroHBD8oxsGGSZkoMVJj
          source_id: s_335th5Kc8BNajJTR1uZmmW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_js73RwQKO16eDRfMbS0CIX
        subject_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7SVydL41UGsuFHeEEHBj78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d9x641BwsibWoKhL4ZKOOX
          claim_id: c_js73RwQKO16eDRfMbS0CIX
          source_id: s_335th5Kc8BNajJTR1uZmmW
          stance: supports
          locator: 吳中冢墓遺文，18-758：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eYTYqcoj54BTfQQyLN9VGt
        status: active
        display_name: 王稟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王薿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王薿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eYTYqcoj54BTfQQyLN9VGt | 王稟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王薿（CBDB 570602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570602&o=json)
