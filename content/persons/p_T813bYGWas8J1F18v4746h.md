---
schema: wang-person/v1
id: p_T813bYGWas8J1F18v4746h
status: active
merged_into: null
display_name: 王環
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vq7GUjL3H4yR5z3KsMSKP6
        subject_person_id: p_T813bYGWas8J1F18v4746h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_khdzt3U2cDKsgGtPX9ZPGu
          claim_id: c_vq7GUjL3H4yR5z3KsMSKP6
          source_id: s_SrYb1YEE4orpW3PovGBj4D
          stance: supports
          locator: CBDB:186280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186280）
          source: &a1
            id: s_SrYb1YEE4orpW3PovGBj4D
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 186280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186280&o=json
            external_identifier: CBDB:186280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M3pAEp3QaA3KPMXZv4b68Q
        subject_person_id: p_T813bYGWas8J1F18v4746h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 888年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFoHUANDHYmkheaBwrQH4D
          claim_id: c_M3pAEp3QaA3KPMXZv4b68Q
          source_id: s_SrYb1YEE4orpW3PovGBj4D
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
        id: c_m6CivKNpM8rkcJxq16kHcE
        subject_person_id: p_T813bYGWas8J1F18v4746h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環（卒于888年），史料所见人物。本项目依据《中国历代人物传记资料库：王環（CBDB 186280）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__ho0oBlvQ4WLEkFAgwSFsX
          claim_id: c_m6CivKNpM8rkcJxq16kHcE
          source_id: s_SrYb1YEE4orpW3PovGBj4D
          stance: supports
          locator: CBDB:186280
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

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| death.date | 888年 | accepted |
| bio.summary | 王環（卒于888年），史料所见人物。本项目依据《中国历代人物传记资料库：王環（CBDB 186280）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 186280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186280&o=json)
