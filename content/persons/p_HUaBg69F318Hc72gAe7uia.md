---
schema: wang-person/v1
id: p_HUaBg69F318Hc72gAe7uia
status: active
merged_into: null
display_name: 王汝庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uepLoY97zcouDbNuTCBgfQ
        subject_person_id: p_HUaBg69F318Hc72gAe7uia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2x5wi6bJit4Wrw5aHiparM
          claim_id: c_uepLoY97zcouDbNuTCBgfQ
          source_id: s_eHCUrBCU6YNCFFKtkAaNtB
          stance: supports
          locator: CBDB:639009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639009）
          source: &a1
            id: s_eHCUrBCU6YNCFFKtkAaNtB
            source_type: api_record
            title: 中国历代人物传记资料库：王汝庚（CBDB 639009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639009&o=json
            external_identifier: CBDB:639009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRdV1qbZn45LQzawqFo7Qg
        subject_person_id: p_HUaBg69F318Hc72gAe7uia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝庚，清人物。籍贯福山，曾任知縣。（中国历代人物传记资料库 CBDB 639009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sOLpqq8zEZuOKmcsryirRT
          claim_id: c_HRdV1qbZn45LQzawqFo7Qg
          source_id: s_eHCUrBCU6YNCFFKtkAaNtB
          stance: supports
          locator: CBDB:639009
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

# 王汝庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝庚 | accepted |
| bio.summary | 王汝庚，清人物。籍贯福山，曾任知縣。（中国历代人物传记资料库 CBDB 639009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝庚（CBDB 639009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639009&o=json)
