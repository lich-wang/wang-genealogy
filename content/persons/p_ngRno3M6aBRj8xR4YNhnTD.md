---
schema: wang-person/v1
id: p_ngRno3M6aBRj8xR4YNhnTD
status: active
merged_into: null
display_name: 王紹先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VeJxP79qNNTzZN3QpXZ2zT
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xgcPbvKe8wKPmYP6kNs2Qa
          claim_id: c_VeJxP79qNNTzZN3QpXZ2zT
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: CBDB:329980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329980）
          source: &a1
            id: s_ugDRhybgZS9LAqKbX3tkbr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 329980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json
            external_identifier: CBDB:329980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BrGm4BH6ARz912GGqj2Unv
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
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
        - id: cs_iDP6h3AYDmQKohv2NW1M99
          claim_id: c_BrGm4BH6ARz912GGqj2Unv
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pdZjE97jWFVXAK2j4Viu9r
        subject_person_id: p_ngRno3M6aBRj8xR4YNhnTD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mYaz7ZtA5wiQaCjCBZf5rq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fS_N_O-lKr0eOKVF2kKHSt
          claim_id: c_pdZjE97jWFVXAK2j4Viu9r
          source_id: s_ugDRhybgZS9LAqKbX3tkbr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mYaz7ZtA5wiQaCjCBZf5rq
        status: active
        display_name: 王子蕙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mYaz7ZtA5wiQaCjCBZf5rq | 王子蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹先（CBDB 329980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329980&o=json)
