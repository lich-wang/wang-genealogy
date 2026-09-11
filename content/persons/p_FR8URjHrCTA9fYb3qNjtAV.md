---
schema: wang-person/v1
id: p_FR8URjHrCTA9fYb3qNjtAV
status: active
merged_into: null
display_name: 王嘉禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KLNN77GURL6bniLux1x9F
        subject_person_id: p_FR8URjHrCTA9fYb3qNjtAV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_genF4JrMAHx79NmJ2YaoTy
          claim_id: c_3KLNN77GURL6bniLux1x9F
          source_id: s_g3Gd7aFrHip6YF6nxtebJv
          stance: supports
          locator: CBDB:69413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69413）
          source: &a1
            id: s_g3Gd7aFrHip6YF6nxtebJv
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉禎（CBDB 69413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69413&o=json
            external_identifier: CBDB:69413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MxABpb1n9tTVwqYBcjk5zC
        subject_person_id: p_FR8URjHrCTA9fYb3qNjtAV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cE6DFiv4cPLVHL9JwfkJTV
          claim_id: c_MxABpb1n9tTVwqYBcjk5zC
          source_id: s_g3Gd7aFrHip6YF6nxtebJv
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
        id: c_PzqCZXjXWA1hnUHze74BJ4
        subject_person_id: p_FR8URjHrCTA9fYb3qNjtAV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉禎（卒于1655年），清人物。籍贯宛平，曾任守備、水師守備、營遊擊。（中国历代人物传记资料库 CBDB 69413）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4J2IJ5-sFmSNVWZBBqoHA1
          claim_id: c_PzqCZXjXWA1hnUHze74BJ4
          source_id: s_g3Gd7aFrHip6YF6nxtebJv
          stance: supports
          locator: CBDB:69413
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

# 王嘉禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉禎 | accepted |
| death.date | 1655年 | accepted |
| bio.summary | 王嘉禎（卒于1655年），清人物。籍贯宛平，曾任守備、水師守備、營遊擊。（中国历代人物传记资料库 CBDB 69413） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉禎（CBDB 69413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69413&o=json)
