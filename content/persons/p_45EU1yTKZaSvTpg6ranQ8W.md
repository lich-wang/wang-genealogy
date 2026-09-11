---
schema: wang-person/v1
id: p_45EU1yTKZaSvTpg6ranQ8W
status: active
merged_into: null
display_name: 王允明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jaf24TUsCRQjxBruiL6iBE
        subject_person_id: p_45EU1yTKZaSvTpg6ranQ8W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4fNA1NAE2TTuwHJZgK4QH
          claim_id: c_Jaf24TUsCRQjxBruiL6iBE
          source_id: s_CY6exPAXEX4GjCiaGdb9CW
          stance: supports
          locator: CBDB:636123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636123）
          source: &a1
            id: s_CY6exPAXEX4GjCiaGdb9CW
            source_type: api_record
            title: 中国历代人物传记资料库：王允明（CBDB 636123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636123&o=json
            external_identifier: CBDB:636123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jae1gG92XcJhUjGJRtH2RL
        subject_person_id: p_45EU1yTKZaSvTpg6ranQ8W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允明，清人物。籍贯福山，曾任典史。（中国历代人物传记资料库 CBDB 636123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l9kcpRc3MACk6j2GEVp-5r
          claim_id: c_Jae1gG92XcJhUjGJRtH2RL
          source_id: s_CY6exPAXEX4GjCiaGdb9CW
          stance: supports
          locator: CBDB:636123
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

# 王允明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允明 | accepted |
| bio.summary | 王允明，清人物。籍贯福山，曾任典史。（中国历代人物传记资料库 CBDB 636123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允明（CBDB 636123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636123&o=json)
