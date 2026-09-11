---
schema: wang-person/v1
id: p_W6RsvLEBM6s648Sp94cWaJ
status: active
merged_into: null
display_name: 王桓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3fx1wJq5SWBBYi1c8gAC3Z
        subject_person_id: p_W6RsvLEBM6s648Sp94cWaJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y6UL5rMVLW3PaFNXZsVPD2
          claim_id: c_3fx1wJq5SWBBYi1c8gAC3Z
          source_id: s_L2M3on2ZuK67sJvSfUugXd
          stance: supports
          locator: CBDB:117588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117588）
          source: &a1
            id: s_L2M3on2ZuK67sJvSfUugXd
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 117588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117588&o=json
            external_identifier: CBDB:117588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAgpKF13P2hn4fCgP7LUu1
        subject_person_id: p_W6RsvLEBM6s648Sp94cWaJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓，元人物。曾任行徽政副使。（中国历代人物传记资料库 CBDB 117588）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4FcTAKOGXOtE_kV_OPfeld
          claim_id: c_ZAgpKF13P2hn4fCgP7LUu1
          source_id: s_L2M3on2ZuK67sJvSfUugXd
          stance: supports
          locator: CBDB:117588
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

# 王桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桓 | accepted |
| bio.summary | 王桓，元人物。曾任行徽政副使。（中国历代人物传记资料库 CBDB 117588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桓（CBDB 117588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117588&o=json)
