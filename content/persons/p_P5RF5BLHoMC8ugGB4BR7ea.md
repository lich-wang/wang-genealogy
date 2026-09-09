---
schema: wang-person/v1
id: p_P5RF5BLHoMC8ugGB4BR7ea
status: active
merged_into: null
display_name: 王光進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rbaJwPusAvQ7t6GhB2z2dK
        subject_person_id: p_P5RF5BLHoMC8ugGB4BR7ea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j3uMsUJq337DVNwtDdnYFr
          claim_id: c_rbaJwPusAvQ7t6GhB2z2dK
          source_id: s_BK2Sii4yJGooJK7xrUWGNp
          stance: supports
          locator: CBDB:189429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189429）
          source: &a1
            id: s_BK2Sii4yJGooJK7xrUWGNp
            source_type: api_record
            title: 中国历代人物传记资料库：王光進（CBDB 189429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189429&o=json
            external_identifier: CBDB:189429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dzUSWipjAkQDBLySeRoXZK
        subject_person_id: p_P5RF5BLHoMC8ugGB4BR7ea
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjFLw5atYAwJoqjcMGAhTH
          claim_id: c_dzUSWipjAkQDBLySeRoXZK
          source_id: s_BK2Sii4yJGooJK7xrUWGNp
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
        id: c_ZYAApZ793PmA2ofc6qkZZN
        subject_person_id: p_P5RF5BLHoMC8ugGB4BR7ea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mWLz1XvKGeLjrpdssPg7gg
          claim_id: c_ZYAApZ793PmA2ofc6qkZZN
          source_id: s_BK2Sii4yJGooJK7xrUWGNp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王光進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光進 | accepted |
| death.date | 826年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光進（CBDB 189429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189429&o=json)
