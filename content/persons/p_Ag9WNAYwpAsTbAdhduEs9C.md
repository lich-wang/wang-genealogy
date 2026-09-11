---
schema: wang-person/v1
id: p_Ag9WNAYwpAsTbAdhduEs9C
status: active
merged_into: null
display_name: 王逢薦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQ8jSTaJSXrDu3AicER3xG
        subject_person_id: p_Ag9WNAYwpAsTbAdhduEs9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢薦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3iuBGuaEu9ic3ZHeRH6oz
          claim_id: c_KQ8jSTaJSXrDu3AicER3xG
          source_id: s_NpqQMzHzhEMszGRV5zJxrA
          stance: supports
          locator: CBDB:499592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499592）
          source: &a1
            id: s_NpqQMzHzhEMszGRV5zJxrA
            source_type: api_record
            title: 中国历代人物传记资料库：王逢薦（CBDB 499592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499592&o=json
            external_identifier: CBDB:499592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NZH7xU5jvTCL42h4kL7zbn
        subject_person_id: p_Ag9WNAYwpAsTbAdhduEs9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢薦，明人物。曾任典史。（中国历代人物传记资料库 CBDB 499592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Ga_d2hLwvPzU7wvvNG6vl
          claim_id: c_NZH7xU5jvTCL42h4kL7zbn
          source_id: s_NpqQMzHzhEMszGRV5zJxrA
          stance: supports
          locator: CBDB:499592
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

# 王逢薦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢薦 | accepted |
| bio.summary | 王逢薦，明人物。曾任典史。（中国历代人物传记资料库 CBDB 499592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢薦（CBDB 499592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499592&o=json)
