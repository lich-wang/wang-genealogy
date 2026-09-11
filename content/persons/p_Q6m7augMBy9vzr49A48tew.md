---
schema: wang-person/v1
id: p_Q6m7augMBy9vzr49A48tew
status: active
merged_into: null
display_name: 王鳳梧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u95t5EyynBosaESCmRr2w2
        subject_person_id: p_Q6m7augMBy9vzr49A48tew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳梧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LwDvcpeCUuoLGD71redZxV
          claim_id: c_u95t5EyynBosaESCmRr2w2
          source_id: s_mHwMqTTwFbvcmHaGZa2qBz
          stance: supports
          locator: CBDB:640937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640937）
          source: &a1
            id: s_mHwMqTTwFbvcmHaGZa2qBz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳梧（CBDB 640937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640937&o=json
            external_identifier: CBDB:640937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oER68EkZpHExK7hDmYeN3s
        subject_person_id: p_Q6m7augMBy9vzr49A48tew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳梧，清人物。籍贯宛平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3kUzTZcn6Lyy42T81yyAzq
          claim_id: c_oER68EkZpHExK7hDmYeN3s
          source_id: s_mHwMqTTwFbvcmHaGZa2qBz
          stance: supports
          locator: CBDB:640937
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

# 王鳳梧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳梧 | accepted |
| bio.summary | 王鳳梧，清人物。籍贯宛平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳梧（CBDB 640937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640937&o=json)
