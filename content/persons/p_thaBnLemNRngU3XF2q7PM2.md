---
schema: wang-person/v1
id: p_thaBnLemNRngU3XF2q7PM2
status: active
merged_into: null
display_name: 王行義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gJi7Gf76Hk8sJi4Abs8c8c
        subject_person_id: p_thaBnLemNRngU3XF2q7PM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZgRWnWmMJB3uvRPB7BxguS
          claim_id: c_gJi7Gf76Hk8sJi4Abs8c8c
          source_id: s_uLFgm8AVqex3v3stfwwrC4
          stance: supports
          locator: CBDB:457360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457360）
          source: &a1
            id: s_uLFgm8AVqex3v3stfwwrC4
            source_type: api_record
            title: 中国历代人物传记资料库：王行義（CBDB 457360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457360&o=json
            external_identifier: CBDB:457360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6bbzipQ9fkLcKp1hbEaQYi
        subject_person_id: p_thaBnLemNRngU3XF2q7PM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行義，清人物。曾任千總。（中国历代人物传记资料库 CBDB 457360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LP-L4R4-g_Ir_yW4YtvjOw
          claim_id: c_6bbzipQ9fkLcKp1hbEaQYi
          source_id: s_uLFgm8AVqex3v3stfwwrC4
          stance: supports
          locator: CBDB:457360
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

# 王行義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行義 | accepted |
| bio.summary | 王行義，清人物。曾任千總。（中国历代人物传记资料库 CBDB 457360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行義（CBDB 457360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457360&o=json)
