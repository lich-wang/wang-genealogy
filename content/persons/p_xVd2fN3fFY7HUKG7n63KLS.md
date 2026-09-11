---
schema: wang-person/v1
id: p_xVd2fN3fFY7HUKG7n63KLS
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pcx19AA2w6P3HWEDpHo9SC
        subject_person_id: p_xVd2fN3fFY7HUKG7n63KLS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GNCTNtR1DPAM3Jxgq7V85b
          claim_id: c_Pcx19AA2w6P3HWEDpHo9SC
          source_id: s_EKpZWRPDmMke7mX3yo9oXn
          stance: supports
          locator: CBDB:69419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69419）
          source: &a1
            id: s_EKpZWRPDmMke7mX3yo9oXn
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 69419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69419&o=json
            external_identifier: CBDB:69419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PBLi4zJfHQZB7A1y78HsjE
        subject_person_id: p_xVd2fN3fFY7HUKG7n63KLS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6K4GPSCgAsRYPRwFeu1bP5
          claim_id: c_PBLi4zJfHQZB7A1y78HsjE
          source_id: s_EKpZWRPDmMke7mX3yo9oXn
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
        id: c_LEPYyLvcAthgKPKJBB6Zpn
        subject_person_id: p_xVd2fN3fFY7HUKG7n63KLS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福（卒于1668年），清人物。籍贯杞縣。（中国历代人物传记资料库 CBDB 69419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x0zMZok97rpVQ75NAj-zeH
          claim_id: c_LEPYyLvcAthgKPKJBB6Zpn
          source_id: s_EKpZWRPDmMke7mX3yo9oXn
          stance: supports
          locator: CBDB:69419
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| death.date | 1668年 | accepted |
| bio.summary | 王福（卒于1668年），清人物。籍贯杞縣。（中国历代人物传记资料库 CBDB 69419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 69419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69419&o=json)
