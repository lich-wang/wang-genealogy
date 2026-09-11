---
schema: wang-person/v1
id: p_dP3bbqg6GCtoDDpAsegVgd
status: active
merged_into: null
display_name: 王永齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CwrBYP7CH4T5r7M49PvVyG
        subject_person_id: p_dP3bbqg6GCtoDDpAsegVgd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ySLUC6gnrfq2mGXL3JYGGP
          claim_id: c_CwrBYP7CH4T5r7M49PvVyG
          source_id: s_2R8qoz7Hyh7c5avEPgQLu2
          stance: supports
          locator: CBDB:288340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288340）
          source: &a1
            id: s_2R8qoz7Hyh7c5avEPgQLu2
            source_type: api_record
            title: 中国历代人物传记资料库：王永齡（CBDB 288340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288340&o=json
            external_identifier: CBDB:288340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cX6o8FV1M5xFFiefuzAC1m
        subject_person_id: p_dP3bbqg6GCtoDDpAsegVgd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永齡，明人物。嘉靖八年進士，籍贯鄉寧。（中国历代人物传记资料库 CBDB 288340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4Whd1VEtznINrXykp3xMc
          claim_id: c_cX6o8FV1M5xFFiefuzAC1m
          source_id: s_2R8qoz7Hyh7c5avEPgQLu2
          stance: supports
          locator: CBDB:288340
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

# 王永齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永齡 | accepted |
| bio.summary | 王永齡，明人物。嘉靖八年進士，籍贯鄉寧。（中国历代人物传记资料库 CBDB 288340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永齡（CBDB 288340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288340&o=json)
