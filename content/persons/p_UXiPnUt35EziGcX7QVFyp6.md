---
schema: wang-person/v1
id: p_UXiPnUt35EziGcX7QVFyp6
status: active
merged_into: null
display_name: 王運恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BDs8yG3BVknyuCfFrU55M
        subject_person_id: p_UXiPnUt35EziGcX7QVFyp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tn5DymiFL4u2AmLPQo1FHL
          claim_id: c_7BDs8yG3BVknyuCfFrU55M
          source_id: s_dB9XJKjsA2473dMjLxApUV
          stance: supports
          locator: CBDB:640439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640439）
          source: &a1
            id: s_dB9XJKjsA2473dMjLxApUV
            source_type: api_record
            title: 中国历代人物传记资料库：王運恆（CBDB 640439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640439&o=json
            external_identifier: CBDB:640439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QfV4PGHZTwETfeGtWKbd8A
        subject_person_id: p_UXiPnUt35EziGcX7QVFyp6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王運恆，清人物。籍贯饒州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640439）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_frStsk6-2ii4nkqzFJvc2y
          claim_id: c_QfV4PGHZTwETfeGtWKbd8A
          source_id: s_dB9XJKjsA2473dMjLxApUV
          stance: supports
          locator: CBDB:640439
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

# 王運恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運恆 | accepted |
| bio.summary | 王運恆，清人物。籍贯饒州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運恆（CBDB 640439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640439&o=json)
