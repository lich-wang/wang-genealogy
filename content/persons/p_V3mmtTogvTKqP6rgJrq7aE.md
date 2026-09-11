---
schema: wang-person/v1
id: p_V3mmtTogvTKqP6rgJrq7aE
status: active
merged_into: null
display_name: 王彥和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZZQAP5G9DdfLqAEwoGM3r
        subject_person_id: p_V3mmtTogvTKqP6rgJrq7aE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gU1KjiDfecxL2P8LyH6GMZ
          claim_id: c_FZZQAP5G9DdfLqAEwoGM3r
          source_id: s_f95UvDofto2X9sN7WLatTD
          stance: supports
          locator: CBDB:71902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71902）
          source: &a1
            id: s_f95UvDofto2X9sN7WLatTD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥和（CBDB 71902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71902&o=json
            external_identifier: CBDB:71902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7G9g7THxu8XMZDjRDEbVH2
        subject_person_id: p_V3mmtTogvTKqP6rgJrq7aE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8xBQefx7G1xBDDu9eUTooj
          claim_id: c_7G9g7THxu8XMZDjRDEbVH2
          source_id: s_f95UvDofto2X9sN7WLatTD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jtbtHDiKCfuAAxyHe4jA2E
        subject_person_id: p_V3mmtTogvTKqP6rgJrq7aE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGVgCey5jECDz59rN19dX8
          claim_id: c_jtbtHDiKCfuAAxyHe4jA2E
          source_id: s_f95UvDofto2X9sN7WLatTD
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
        id: c_u668MSunY4NimJGDuGm7vV
        subject_person_id: p_V3mmtTogvTKqP6rgJrq7aE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥和（1794年—1855年），清人物。籍贯高郵州。（中国历代人物传记资料库 CBDB 71902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_05Ms6OJpJo2GJFgCikk9Fq
          claim_id: c_u668MSunY4NimJGDuGm7vV
          source_id: s_f95UvDofto2X9sN7WLatTD
          stance: supports
          locator: CBDB:71902
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

# 王彥和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥和 | accepted |
| birth.date | 1794年 | accepted |
| death.date | 1855年 | accepted |
| bio.summary | 王彥和（1794年—1855年），清人物。籍贯高郵州。（中国历代人物传记资料库 CBDB 71902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥和（CBDB 71902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71902&o=json)
