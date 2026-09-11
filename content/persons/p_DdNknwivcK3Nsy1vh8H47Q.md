---
schema: wang-person/v1
id: p_DdNknwivcK3Nsy1vh8H47Q
status: active
merged_into: null
display_name: 王思賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2bVmwTNBougz5YCERSsLEr
        subject_person_id: p_DdNknwivcK3Nsy1vh8H47Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PxpWJ8jvpR8tDKSqUgRBp9
          claim_id: c_2bVmwTNBougz5YCERSsLEr
          source_id: s_XnsPeuU2BEAkxLGYoZdUE5
          stance: supports
          locator: CBDB:497950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497950）
          source: &a1
            id: s_XnsPeuU2BEAkxLGYoZdUE5
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 497950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497950&o=json
            external_identifier: CBDB:497950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cmSSWZy4oHeC6gfq8F7as5
        subject_person_id: p_DdNknwivcK3Nsy1vh8H47Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思賢，清人物。曾任縣丞。（中国历代人物传记资料库 CBDB 497950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mwDl4MTucH1qVGadomnlkb
          claim_id: c_cmSSWZy4oHeC6gfq8F7as5
          source_id: s_XnsPeuU2BEAkxLGYoZdUE5
          stance: supports
          locator: CBDB:497950
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

# 王思賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思賢 | accepted |
| bio.summary | 王思賢，清人物。曾任縣丞。（中国历代人物传记资料库 CBDB 497950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思賢（CBDB 497950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497950&o=json)
