---
schema: wang-person/v1
id: p_GZiUYnnrLjUkWy49TPto1R
status: active
merged_into: null
display_name: 王德明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_52SsaKAjqMGYeBJUDbSoCy
        subject_person_id: p_GZiUYnnrLjUkWy49TPto1R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piYGSXGfPRPV2kRisrudTE
          claim_id: c_52SsaKAjqMGYeBJUDbSoCy
          source_id: s_JxwaNHDTFD7kd93Z6EFvGZ
          stance: supports
          locator: CBDB:266983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266983）
          source: &a1
            id: s_JxwaNHDTFD7kd93Z6EFvGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 266983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json
            external_identifier: CBDB:266983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RLVDDixwugdKJaYyiF3Ce5
        subject_person_id: p_GZiUYnnrLjUkWy49TPto1R
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
        - id: cs_GD7qu6rL4oyBMspH7JMeeh
          claim_id: c_RLVDDixwugdKJaYyiF3Ce5
          source_id: s_JxwaNHDTFD7kd93Z6EFvGZ
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
  descendants:
    - claim:
        id: c_AujGplPhdSeg_OZRRq7xPE
        subject_person_id: p_GZiUYnnrLjUkWy49TPto1R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvYZ8kn5Y9Dq0G8THr5_6N
          claim_id: c_AujGplPhdSeg_OZRRq7xPE
          source_id: s_JxwaNHDTFD7kd93Z6EFvGZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q8jv2duMSqfqCbpkkK9Wow
        status: active
        display_name: 王魯
        merged_into_person_id: null
  other: []
---

# 王德明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_q8jv2duMSqfqCbpkkK9Wow | 王魯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德明（CBDB 266983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json)
