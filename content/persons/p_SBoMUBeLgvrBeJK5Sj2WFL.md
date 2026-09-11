---
schema: wang-person/v1
id: p_SBoMUBeLgvrBeJK5Sj2WFL
status: active
merged_into: null
display_name: 姚氏
revision: 1
cbdb_id: 280454
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GAR2y6vVp5EV71iIIyRPU8
        subject_person_id: p_SBoMUBeLgvrBeJK5Sj2WFL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280454）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFvWmMpsKV9RZed1a1MHwd
          claim_id: c_GAR2y6vVp5EV71iIIyRPU8
          source_id: s_e-ANLmc9ryQyu4K6T3PZzM
          stance: supports
          locator: CBDB:280454
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e-ANLmc9ryQyu4K6T3PZzM
            source_type: api_record
            title: 中国历代人物传记资料库：姚氏(王鎔妻)（CBDB 280454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280454&o=json
            external_identifier: CBDB:280454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_IhEN2kIGW7LrkKs5dS443D
        subject_person_id: p_SBoMUBeLgvrBeJK5Sj2WFL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mh8957g7ZetAKuou9KE4hQ
          claim_id: c_IhEN2kIGW7LrkKs5dS443D
          source_id: s_e-ANLmc9ryQyu4K6T3PZzM
          stance: supports
          locator: CBDB:280454
          quotation: null
          interpretation_note: CBDB 明确记录的王鎔配偶
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
        id: c_aAHAQZqC4myGjspT4EspAB
        subject_person_id: p_GPJWbNZBxqcAyFkJPjejib
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SBoMUBeLgvrBeJK5Sj2WFL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuKB8vosC497OH_ogmFzwE
          claim_id: c_aAHAQZqC4myGjspT4EspAB
          source_id: s_e-ANLmc9ryQyu4K6T3PZzM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GPJWbNZBxqcAyFkJPjejib
        status: active
        display_name: 王鎔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姚氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姚氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280454） | accepted |
| name.primary | 姚氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GPJWbNZBxqcAyFkJPjejib | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：姚氏(王鎔妻)（CBDB 280454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280454&o=json)
