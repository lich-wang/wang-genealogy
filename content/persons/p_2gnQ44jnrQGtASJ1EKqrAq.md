---
schema: wang-person/v1
id: p_2gnQ44jnrQGtASJ1EKqrAq
status: active
merged_into: null
display_name: 王繼庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gVN1qH4xQ1oWMHAKytdSZj
        subject_person_id: p_2gnQ44jnrQGtASJ1EKqrAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EUN5SgWoX7ERzoSjNrr3Sx
          claim_id: c_gVN1qH4xQ1oWMHAKytdSZj
          source_id: s_bBGR1X6RLi38sTDyWttQhV
          stance: supports
          locator: CBDB:71983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71983）
          source: &a1
            id: s_bBGR1X6RLi38sTDyWttQhV
            source_type: api_record
            title: 中国历代人物传记资料库：王繼庭（CBDB 71983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71983&o=json
            external_identifier: CBDB:71983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S9X676wFan3rLsfWS9jhhW
        subject_person_id: p_2gnQ44jnrQGtASJ1EKqrAq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1874年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqaWEpe7uBE7WeBjUG3Vrr
          claim_id: c_S9X676wFan3rLsfWS9jhhW
          source_id: s_bBGR1X6RLi38sTDyWttQhV
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
        id: c_mTN5Sic8PHqr6bQQwVxdhJ
        subject_person_id: p_2gnQ44jnrQGtASJ1EKqrAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼庭（卒于1874年），清人物。籍贯武清。（中国历代人物传记资料库 CBDB 71983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nTIuBQp4XR1lEp4o-jQl6x
          claim_id: c_mTN5Sic8PHqr6bQQwVxdhJ
          source_id: s_bBGR1X6RLi38sTDyWttQhV
          stance: supports
          locator: CBDB:71983
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

# 王繼庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼庭 | accepted |
| death.date | 1874年 | accepted |
| bio.summary | 王繼庭（卒于1874年），清人物。籍贯武清。（中国历代人物传记资料库 CBDB 71983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼庭（CBDB 71983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71983&o=json)
