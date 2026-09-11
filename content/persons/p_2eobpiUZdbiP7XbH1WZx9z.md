---
schema: wang-person/v1
id: p_2eobpiUZdbiP7XbH1WZx9z
status: active
merged_into: null
display_name: 王高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yRLnRaiKCBjcab8ZRo4yfZ
        subject_person_id: p_2eobpiUZdbiP7XbH1WZx9z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_byeXdP2D45NHGdNmyBeXF3
          claim_id: c_yRLnRaiKCBjcab8ZRo4yfZ
          source_id: s_SFHGe1MAxHvSX8CB1EYiLt
          stance: supports
          locator: CBDB:460031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460031）
          source: &a1
            id: s_SFHGe1MAxHvSX8CB1EYiLt
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 460031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460031&o=json
            external_identifier: CBDB:460031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y7KN2F9EBcxxf8T4EoWdKa
        subject_person_id: p_2eobpiUZdbiP7XbH1WZx9z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，明人物。曾任巡檢。（中国历代人物传记资料库 CBDB 460031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2CTPzPSZFskSPTp3o6wimU
          claim_id: c_y7KN2F9EBcxxf8T4EoWdKa
          source_id: s_SFHGe1MAxHvSX8CB1EYiLt
          stance: supports
          locator: CBDB:460031
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

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，明人物。曾任巡檢。（中国历代人物传记资料库 CBDB 460031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 460031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460031&o=json)
