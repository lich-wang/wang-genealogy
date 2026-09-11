---
schema: wang-person/v1
id: p_QfQL38ri3xbji5mmm44EQC
status: active
merged_into: null
display_name: 王士龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6eA1Jk98KMyaWHU5kjoR8
        subject_person_id: p_QfQL38ri3xbji5mmm44EQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qr8289QqQ72epbgy1iQ7PT
          claim_id: c_v6eA1Jk98KMyaWHU5kjoR8
          source_id: s_C9XKyyFrG6ZTB4dtbCVQNF
          stance: supports
          locator: CBDB:466738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466738）
          source: &a1
            id: s_C9XKyyFrG6ZTB4dtbCVQNF
            source_type: api_record
            title: 中国历代人物传记资料库：王士龍（CBDB 466738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466738&o=json
            external_identifier: CBDB:466738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cqBQohxGrKG5xe5K6uMMrU
        subject_person_id: p_QfQL38ri3xbji5mmm44EQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士龍，清人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 466738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mLymt1-zTcdoke_a_YW9Up
          claim_id: c_cqBQohxGrKG5xe5K6uMMrU
          source_id: s_C9XKyyFrG6ZTB4dtbCVQNF
          stance: supports
          locator: CBDB:466738
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

# 王士龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士龍 | accepted |
| bio.summary | 王士龍，清人物。入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 466738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士龍（CBDB 466738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466738&o=json)
