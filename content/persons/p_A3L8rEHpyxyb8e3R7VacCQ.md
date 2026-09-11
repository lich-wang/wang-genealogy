---
schema: wang-person/v1
id: p_A3L8rEHpyxyb8e3R7VacCQ
status: active
merged_into: null
display_name: 王思忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7FXZYNniJip8LUWWGxAw6
        subject_person_id: p_A3L8rEHpyxyb8e3R7VacCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uib4uhDCiCWWtJdGSToLry
          claim_id: c_y7FXZYNniJip8LUWWGxAw6
          source_id: s_JL3ZVr2rB9h6tEHB7gNNep
          stance: supports
          locator: CBDB:117584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117584）
          source: &a1
            id: s_JL3ZVr2rB9h6tEHB7gNNep
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 117584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117584&o=json
            external_identifier: CBDB:117584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogPHLWafMDVCbRRohM42uP
        subject_person_id: p_A3L8rEHpyxyb8e3R7VacCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠，元人物。曾任警巡院副使、知州。（中国历代人物传记资料库 CBDB 117584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sFB35v-igiJuyEyLWMj8Vz
          claim_id: c_ogPHLWafMDVCbRRohM42uP
          source_id: s_JL3ZVr2rB9h6tEHB7gNNep
          stance: supports
          locator: CBDB:117584
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

# 王思忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思忠 | accepted |
| bio.summary | 王思忠，元人物。曾任警巡院副使、知州。（中国历代人物传记资料库 CBDB 117584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思忠（CBDB 117584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117584&o=json)
