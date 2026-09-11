---
schema: wang-person/v1
id: p_mnvKHycESEfEuUPkT5JFdS
status: active
merged_into: null
display_name: 王則
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tzkZyMbeye5fCPmHMPEvHQ
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6pnCc2mbRd4gVBcx5znZY
          claim_id: c_tzkZyMbeye5fCPmHMPEvHQ
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: CBDB:139677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139677）
          source: &a1
            id: s_d7AMoMC5os4pkSBoNiLE5E
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 139677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139677&o=json
            external_identifier: CBDB:139677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fUk1HkvYsAN5U2JhLQYipR
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TU6HJk9QTkhCrUNDvjbm23
          claim_id: c_fUk1HkvYsAN5U2JhLQYipR
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yJ7fc6c2HQDYUCH1Kycy9Q
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GALK8VShHjtWLdEVqKz6gG
          claim_id: c_yJ7fc6c2HQDYUCH1Kycy9Q
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WSWDs5EfWu5j1LvcpYeJaW
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
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
        - id: cs_DJ4a6LKEv4EQrmMyRuQUd9
          claim_id: c_WSWDs5EfWu5j1LvcpYeJaW
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
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
        id: c_qZZNOO1XSkkoUvWfo0RVEf
        subject_person_id: p_YqQLMddZtjQ9ckawdVDSGb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mnvKHycESEfEuUPkT5JFdS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-aw3-raMHFg9gkoUeZ6Uvk
          claim_id: c_qZZNOO1XSkkoUvWfo0RVEf
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 100：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YqQLMddZtjQ9ckawdVDSGb
        status: active
        display_name: 王寶德
        merged_into_person_id: null
  children:
    - claim:
        id: c_f-G8A1vagUmKm8ua5FiLqh
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eFFZHoBfpZVRHyhJs9tNKY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKhOcrbp8dUZzN1U4tJ9L0
          claim_id: c_f-G8A1vagUmKm8ua5FiLqh
          source_id: s_d7AMoMC5os4pkSBoNiLE5E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 100：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eFFZHoBfpZVRHyhJs9tNKY
        status: active
        display_name: 王玄亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則 | accepted |
| birth.date | 589年 | accepted |
| death.date | 641年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YqQLMddZtjQ9ckawdVDSGb | 王寶德 | accepted |
| children | p_eFFZHoBfpZVRHyhJs9tNKY | 王玄亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王則（CBDB 139677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139677&o=json)
