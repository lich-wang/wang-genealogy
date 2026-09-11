---
schema: wang-person/v1
id: p_PV3VFLbMs96vmBgkTN2ETV
status: active
merged_into: null
display_name: 王恆滔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jsjjNtV5S2MBvwX8Q8fpfe
        subject_person_id: p_PV3VFLbMs96vmBgkTN2ETV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8vLghDqSadqKMhWtLrx1ZU
          claim_id: c_jsjjNtV5S2MBvwX8Q8fpfe
          source_id: s_PKCrHf2GxZwpAtCxQsUiJ2
          stance: supports
          locator: CBDB:156055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156055）
          source: &a1
            id: s_PKCrHf2GxZwpAtCxQsUiJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王恆滔（CBDB 156055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156055&o=json
            external_identifier: CBDB:156055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sLPJMxTag2RgmhTsDDzGN9
        subject_person_id: p_PV3VFLbMs96vmBgkTN2ETV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆滔，史料所见人物。本项目依据《中国历代人物传记资料库：王恆滔（CBDB 156055）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kp4TETfEUJwVawJ66g2Ajt
          claim_id: c_sLPJMxTag2RgmhTsDDzGN9
          source_id: s_PKCrHf2GxZwpAtCxQsUiJ2
          stance: supports
          locator: CBDB:156055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王恆滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆滔 | accepted |
| bio.summary | 王恆滔，史料所见人物。本项目依据《中国历代人物传记资料库：王恆滔（CBDB 156055）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆滔（CBDB 156055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156055&o=json)
