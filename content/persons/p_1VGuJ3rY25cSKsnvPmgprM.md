---
schema: wang-person/v1
id: p_1VGuJ3rY25cSKsnvPmgprM
status: active
merged_into: null
display_name: 程氏
revision: 1
cbdb_id: 288685
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLObaw2Exsha7SNAJ_lXqT
        subject_person_id: p_1VGuJ3rY25cSKsnvPmgprM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_USaYKxp_EqoNKwSxoVWc0y
          claim_id: c_NLObaw2Exsha7SNAJ_lXqT
          source_id: s_qGcvbckta1llcewuaSjT0H
          stance: supports
          locator: CBDB:288685
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qGcvbckta1llcewuaSjT0H
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王鉅妻)（CBDB 288685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288685&o=json
            external_identifier: CBDB:288685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gxf33Ug_EfxePnak_hCwtQ
        subject_person_id: p_1VGuJ3rY25cSKsnvPmgprM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UcQJ64pglDMNZ3gb8Q6sBF
          claim_id: c_gxf33Ug_EfxePnak_hCwtQ
          source_id: s_qGcvbckta1llcewuaSjT0H
          stance: supports
          locator: CBDB:288685
          quotation: null
          interpretation_note: CBDB 明确记录的王鉅配偶
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
        id: c_QzndNh1Td7pMFlqi3N3-yP
        subject_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1VGuJ3rY25cSKsnvPmgprM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIRSxAdqNYgJ5r6NUxOZ58
          claim_id: c_QzndNh1Td7pMFlqi3N3-yP
          source_id: s_qGcvbckta1llcewuaSjT0H
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hdA2EX5rq1DHua8Wnk5XqK
        status: active
        display_name: 王鉅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 程氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 程氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288685） | accepted |
| name.primary | 程氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hdA2EX5rq1DHua8Wnk5XqK | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王鉅妻)（CBDB 288685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288685&o=json)
