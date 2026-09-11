---
schema: wang-person/v1
id: p_7iQEAvwuSnqitj7afi3AKf
status: active
merged_into: null
display_name: 王毓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JLrA1mZvEA4B7gwapy7SR7
        subject_person_id: p_7iQEAvwuSnqitj7afi3AKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nBRpgwoucGWyBsKbARoZZR
          claim_id: c_JLrA1mZvEA4B7gwapy7SR7
          source_id: s_efaxE2Q9UK2bXGRrtKt5e5
          stance: supports
          locator: CBDB:502062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502062）
          source: &a1
            id: s_efaxE2Q9UK2bXGRrtKt5e5
            source_type: api_record
            title: 中国历代人物传记资料库：王毓（CBDB 502062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502062&o=json
            external_identifier: CBDB:502062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7G3FXgAxFEmoxr4RnaD2g6
        subject_person_id: p_7iQEAvwuSnqitj7afi3AKf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 502062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aeWowHqMuWc_rcN-r66Oji
          claim_id: c_7G3FXgAxFEmoxr4RnaD2g6
          source_id: s_efaxE2Q9UK2bXGRrtKt5e5
          stance: supports
          locator: CBDB:502062
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

# 王毓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓 | accepted |
| bio.summary | 王毓，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 502062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓（CBDB 502062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502062&o=json)
