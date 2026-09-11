---
schema: wang-person/v1
id: p_9jnvd4Fa9587U7YHhYhBqm
status: active
merged_into: null
display_name: 王逸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mPbSUWG2XoXq8py3DsCf2n
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvQe3M5VfLscUXcNqMsYDm
          claim_id: c_mPbSUWG2XoXq8py3DsCf2n
          source_id: s_q1CPrBKUaWyV4qTEFCr3v4
          stance: supports
          locator: CBDB:35619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35619）
          source: &a1
            id: s_q1CPrBKUaWyV4qTEFCr3v4
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 35619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35619&o=json
            external_identifier: CBDB:35619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MUnf5aPT2bJKTs4akuiB4e
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35619）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g9i9TRXLZa0sUiVksVuWlf
          claim_id: c_MUnf5aPT2bJKTs4akuiB4e
          source_id: s_q1CPrBKUaWyV4qTEFCr3v4
          stance: supports
          locator: CBDB:35619
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

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸 | accepted |
| bio.summary | 王逸，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逸（CBDB 35619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35619&o=json)
