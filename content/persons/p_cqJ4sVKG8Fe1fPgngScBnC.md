---
schema: wang-person/v1
id: p_cqJ4sVKG8Fe1fPgngScBnC
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BB9E7ZNCgHWpb3YF4eKnzE
        subject_person_id: p_cqJ4sVKG8Fe1fPgngScBnC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D81NhM5NJGFxToGW1HBj2G
          claim_id: c_BB9E7ZNCgHWpb3YF4eKnzE
          source_id: s_Z6arzqRTv5C2oCazBMAwGL
          stance: supports
          locator: CBDB:303982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303982）
          source: &a1
            id: s_Z6arzqRTv5C2oCazBMAwGL
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 303982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303982&o=json
            external_identifier: CBDB:303982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MuiE9GuwVEtRBW8Umg1oi
        subject_person_id: p_cqJ4sVKG8Fe1fPgngScBnC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2iPecFV_mCqURtB3bXHfPE
          claim_id: c_1MuiE9GuwVEtRBW8Umg1oi
          source_id: s_Z6arzqRTv5C2oCazBMAwGL
          stance: supports
          locator: CBDB:303982
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
  descendants: []
  other: []
---

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | 王霖，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 303982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303982&o=json)
