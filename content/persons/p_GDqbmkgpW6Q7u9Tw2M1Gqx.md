---
schema: wang-person/v1
id: p_GDqbmkgpW6Q7u9Tw2M1Gqx
status: active
merged_into: null
display_name: 王培榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F47wXm8eqcCDHNNMf1PedS
        subject_person_id: p_GDqbmkgpW6Q7u9Tw2M1Gqx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4cAxFrPc8jXTuzpQkVp7c
          claim_id: c_F47wXm8eqcCDHNNMf1PedS
          source_id: s_b5RNP9YwZDzGJRQyT1LwZE
          stance: supports
          locator: CBDB:69342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69342）
          source: &a1
            id: s_b5RNP9YwZDzGJRQyT1LwZE
            source_type: api_record
            title: 中国历代人物传记资料库：王培榮（CBDB 69342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69342&o=json
            external_identifier: CBDB:69342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ezaX4FC4PmoJyDHbC8yMt7
        subject_person_id: p_GDqbmkgpW6Q7u9Tw2M1Gqx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHnpEQhAhwqjFEVypUU4H8
          claim_id: c_ezaX4FC4PmoJyDHbC8yMt7
          source_id: s_b5RNP9YwZDzGJRQyT1LwZE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5ZQmmMKDJsgxtKxx2b6Yy
        subject_person_id: p_GDqbmkgpW6Q7u9Tw2M1Gqx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培榮（卒于1859年），清人物。籍贯羅田，曾任縣知縣。（中国历代人物传记资料库 CBDB 69342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fZoTd7aIj-tyLAzkBubv8-
          claim_id: c_Z5ZQmmMKDJsgxtKxx2b6Yy
          source_id: s_b5RNP9YwZDzGJRQyT1LwZE
          stance: supports
          locator: CBDB:69342
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

# 王培榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培榮 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | 王培榮（卒于1859年），清人物。籍贯羅田，曾任縣知縣。（中国历代人物传记资料库 CBDB 69342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培榮（CBDB 69342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69342&o=json)
