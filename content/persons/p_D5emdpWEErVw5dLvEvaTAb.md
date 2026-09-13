---
schema: wang-person/v1
id: p_D5emdpWEErVw5dLvEvaTAb
status: active
merged_into: null
display_name: 王珧
cbdb_id: 415108
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PFxEHgHkARwQBg3j87Z11z
        subject_person_id: p_D5emdpWEErVw5dLvEvaTAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珧，清人物。曾任通判。（中国历代人物传记资料库 CBDB 415108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fVR2Q-u1AERvaob1Vmwk29
          claim_id: c_PFxEHgHkARwQBg3j87Z11z
          source_id: s_D9kHzLu1zwAwgRPLb61jSw
          stance: supports
          locator: CBDB:415108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D9kHzLu1zwAwgRPLb61jSw
            source_type: api_record
            title: 中国历代人物传记资料库：王珧（CBDB 415108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415108&o=json
            external_identifier: CBDB:415108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:51.632Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zdCrh8eo7aTWA1hEuVrmZs
        subject_person_id: p_D5emdpWEErVw5dLvEvaTAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EBEF9mX9KWYfxRvdV2nJE1
          claim_id: c_zdCrh8eo7aTWA1hEuVrmZs
          source_id: s_D9kHzLu1zwAwgRPLb61jSw
          stance: supports
          locator: CBDB:415108
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6001-6100）｜历史性依据：CBDB 朝代 = 清
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

# 王珧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珧，清人物。曾任通判。（中国历代人物传记资料库 CBDB 415108） | accepted |
| name.primary | 王珧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珧（CBDB 415108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415108&o=json)
