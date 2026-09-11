---
schema: wang-person/v1
id: p_1gMJ6NpQ7CbPiCgahWrTwG
status: active
merged_into: null
display_name: 王京
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u7VuRF4TcjoD7BSuhHccze
        subject_person_id: p_1gMJ6NpQ7CbPiCgahWrTwG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoFpLg4DvA3bzdMBDBQvpT
          claim_id: c_u7VuRF4TcjoD7BSuhHccze
          source_id: s_BTWFBHpMR6hb3Wanm2MPtX
          stance: supports
          locator: CBDB:294431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294431）
          source: &a1
            id: s_BTWFBHpMR6hb3Wanm2MPtX
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 294431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json
            external_identifier: CBDB:294431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xfCpYmMF2Jba6VMbWRGjze
        subject_person_id: p_1gMJ6NpQ7CbPiCgahWrTwG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京，明人物。嘉靖十一年進士，曾任推官。（中国历代人物传记资料库 CBDB 294431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HqiKU9BbHS6ymvqFlv1WBY
          claim_id: c_xfCpYmMF2Jba6VMbWRGjze
          source_id: s_BTWFBHpMR6hb3Wanm2MPtX
          stance: supports
          locator: CBDB:294431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_2-JulN6C0GSRyv2WDBz0PA
        subject_person_id: p_1gMJ6NpQ7CbPiCgahWrTwG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDyohAfI1Jp67xtww_762A
          claim_id: c_2-JulN6C0GSRyv2WDBz0PA
          source_id: s_BTWFBHpMR6hb3Wanm2MPtX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| bio.summary | 王京，明人物。嘉靖十一年進士，曾任推官。（中国历代人物传记资料库 CBDB 294431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 294431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json)
