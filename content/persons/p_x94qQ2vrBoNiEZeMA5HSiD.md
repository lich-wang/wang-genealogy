---
schema: wang-person/v1
id: p_x94qQ2vrBoNiEZeMA5HSiD
status: active
merged_into: null
display_name: 王德明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tYrc9vaCkEnNWWe8ZyET9f
        subject_person_id: p_x94qQ2vrBoNiEZeMA5HSiD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HYnPcz1Hwc66NGduwc2hrU
          claim_id: c_tYrc9vaCkEnNWWe8ZyET9f
          source_id: s_N7Fe8QEo89CXanmvLcbpxJ
          stance: supports
          locator: CBDB:101415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101415）
          source: &a1
            id: s_N7Fe8QEo89CXanmvLcbpxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 101415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101415&o=json
            external_identifier: CBDB:101415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJL27VSdVt8PSCZtgeDQRA
        subject_person_id: p_x94qQ2vrBoNiEZeMA5HSiD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德明，元人物。曾任縣典史。（中国历代人物传记资料库 CBDB 101415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yRGQna6U_8-WQYJgjPgn3o
          claim_id: c_JJL27VSdVt8PSCZtgeDQRA
          source_id: s_N7Fe8QEo89CXanmvLcbpxJ
          stance: supports
          locator: CBDB:101415
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

# 王德明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德明 | accepted |
| bio.summary | 王德明，元人物。曾任縣典史。（中国历代人物传记资料库 CBDB 101415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德明（CBDB 101415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101415&o=json)
