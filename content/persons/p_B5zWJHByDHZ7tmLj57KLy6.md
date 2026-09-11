---
schema: wang-person/v1
id: p_B5zWJHByDHZ7tmLj57KLy6
status: active
merged_into: null
display_name: 王汝勸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iGjwg7v7oHN7LwTjXKZidC
        subject_person_id: p_B5zWJHByDHZ7tmLj57KLy6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝勸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9CdJXd86aCVdSEGtTLGjFG
          claim_id: c_iGjwg7v7oHN7LwTjXKZidC
          source_id: s_frJUT6PQosuvF9z52asLQ6
          stance: supports
          locator: CBDB:557194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557194）
          source: &a1
            id: s_frJUT6PQosuvF9z52asLQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝勸（CBDB 557194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557194&o=json
            external_identifier: CBDB:557194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zb8UXh1LGPgBB7PN1v63Ur
        subject_person_id: p_B5zWJHByDHZ7tmLj57KLy6
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
        - id: cs_d84tq9HYX7AjUZhVn8Sngd
          claim_id: c_Zb8UXh1LGPgBB7PN1v63Ur
          source_id: s_frJUT6PQosuvF9z52asLQ6
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
        id: c_MwDO4OwdXoRVovtNl_ZRlZ
        subject_person_id: p_d7DgfcN6WUh5waMJzoiRqY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B5zWJHByDHZ7tmLj57KLy6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcMtYk20ZEgB5MyDrmJsAD
          claim_id: c_MwDO4OwdXoRVovtNl_ZRlZ
          source_id: s_frJUT6PQosuvF9z52asLQ6
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160616：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d7DgfcN6WUh5waMJzoiRqY
        status: active
        display_name: 王錫纓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝勸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝勸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d7DgfcN6WUh5waMJzoiRqY | 王錫纓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝勸（CBDB 557194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557194&o=json)
