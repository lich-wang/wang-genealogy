---
schema: wang-person/v1
id: p_jdrPZMTDPdcjiLvaBVeZN4
status: active
merged_into: null
display_name: 王珩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kimHQwB32yw5ZKN5x2RDQL
        subject_person_id: p_jdrPZMTDPdcjiLvaBVeZN4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DHdRyVXRUcQ5soRY8AGSeo
          claim_id: c_kimHQwB32yw5ZKN5x2RDQL
          source_id: s_rHJPM1ZtNaiFh8Gt72XcHz
          stance: supports
          locator: CBDB:480809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480809）
          source: &a1
            id: s_rHJPM1ZtNaiFh8Gt72XcHz
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 480809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480809&o=json
            external_identifier: CBDB:480809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hFg726R1QbUHdmxpygdEAt
        subject_person_id: p_jdrPZMTDPdcjiLvaBVeZN4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 480809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8tGtczP2F4yBg60Qv1oY9S
          claim_id: c_hFg726R1QbUHdmxpygdEAt
          source_id: s_rHJPM1ZtNaiFh8Gt72XcHz
          stance: supports
          locator: CBDB:480809
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

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 480809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 480809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480809&o=json)
