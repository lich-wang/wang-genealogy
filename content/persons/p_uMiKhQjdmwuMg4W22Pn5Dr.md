---
schema: wang-person/v1
id: p_uMiKhQjdmwuMg4W22Pn5Dr
status: active
merged_into: null
display_name: 王德明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LqPQyL3HXf5A4tKzEPy5YP
        subject_person_id: p_uMiKhQjdmwuMg4W22Pn5Dr
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
        - id: cs_XyBrZkuDgFkwHEPCX9YsZK
          claim_id: c_LqPQyL3HXf5A4tKzEPy5YP
          source_id: s_ShT41MZNCRj6sY8AEpiTj8
          stance: supports
          locator: CBDB:342319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342319）
          source: &a1
            id: s_ShT41MZNCRj6sY8AEpiTj8
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 342319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342319&o=json
            external_identifier: CBDB:342319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCQ4yoXdPtYU3tXvkhXaPB
        subject_person_id: p_uMiKhQjdmwuMg4W22Pn5Dr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德明，明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 342319）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RjYMBpujPSo_jxisY5K4H8
          claim_id: c_wCQ4yoXdPtYU3tXvkhXaPB
          source_id: s_ShT41MZNCRj6sY8AEpiTj8
          stance: supports
          locator: CBDB:342319
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
| bio.summary | 王德明，明人物。明清進士進士，籍贯清苑，入仕進士。（中国历代人物传记资料库 CBDB 342319） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德明（CBDB 342319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342319&o=json)
