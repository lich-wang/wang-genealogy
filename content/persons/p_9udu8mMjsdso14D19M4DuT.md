---
schema: wang-person/v1
id: p_9udu8mMjsdso14D19M4DuT
status: active
merged_into: null
display_name: 王月升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rTHygmx1KctX4yxz69LNEF
        subject_person_id: p_9udu8mMjsdso14D19M4DuT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cDEjuhGETu5MVCc87P81ZB
          claim_id: c_rTHygmx1KctX4yxz69LNEF
          source_id: s_uXR3U18F4cpm2PRg7s7AUr
          stance: supports
          locator: CBDB:638577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638577）
          source: &a1
            id: s_uXR3U18F4cpm2PRg7s7AUr
            source_type: api_record
            title: 中国历代人物传记资料库：王月升（CBDB 638577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638577&o=json
            external_identifier: CBDB:638577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHGGsJZXPgGdsaHJdRkvUn
        subject_person_id: p_9udu8mMjsdso14D19M4DuT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月升，清人物。籍贯浙江省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GqgSLEMJO6s1tSFsvvj2NT
          claim_id: c_fHGGsJZXPgGdsaHJdRkvUn
          source_id: s_uXR3U18F4cpm2PRg7s7AUr
          stance: supports
          locator: CBDB:638577
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

# 王月升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王月升 | accepted |
| bio.summary | 王月升，清人物。籍贯浙江省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王月升（CBDB 638577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638577&o=json)
