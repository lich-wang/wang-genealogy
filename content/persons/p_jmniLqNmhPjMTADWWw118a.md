---
schema: wang-person/v1
id: p_jmniLqNmhPjMTADWWw118a
status: active
merged_into: null
display_name: 賀氏
revision: 1
cbdb_id: 555395
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58dtK4o8k1Vehe2iyWpQAf
        subject_person_id: p_jmniLqNmhPjMTADWWw118a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 賀氏，清人物。籍贯南召，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 555395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lZoqiDA1PM2ul9saGoFKqQ
          claim_id: c_58dtK4o8k1Vehe2iyWpQAf
          source_id: s_yRT58MzHze4sG4UklPAJXR
          stance: supports
          locator: CBDB:555395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yRT58MzHze4sG4UklPAJXR
            source_type: api_record
            title: 中国历代人物传记资料库：賀氏(王師元妻)（CBDB 555395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555395&o=json
            external_identifier: CBDB:555395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bp6YFtIfcaq5nwHyBS3NU2
        subject_person_id: p_jmniLqNmhPjMTADWWw118a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 賀氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pEk50AR1hGdhIQ9DRaNTVP
          claim_id: c_bp6YFtIfcaq5nwHyBS3NU2
          source_id: s_yRT58MzHze4sG4UklPAJXR
          stance: supports
          locator: CBDB:555395
          quotation: null
          interpretation_note: CBDB 明确记录的王師元配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gUR7J7uVATO9b-7hYd33nF
        subject_person_id: p_AxvvbWXS7bT111A7Ymvsf5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jmniLqNmhPjMTADWWw118a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k38BO7dJhAyKMdNatLEMS7
          claim_id: c_gUR7J7uVATO9b-7hYd33nF
          source_id: s_yRT58MzHze4sG4UklPAJXR
          stance: supports
          locator: 南陽府志，lgid=878692：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AxvvbWXS7bT111A7Ymvsf5
        status: active
        display_name: 王師元
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 賀氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 賀氏，清人物。籍贯南召，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 555395） | accepted |
| name.primary | 賀氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AxvvbWXS7bT111A7Ymvsf5 | 王師元 | accepted |

## 外部来源

- [中国历代人物传记资料库：賀氏(王師元妻)（CBDB 555395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555395&o=json)
