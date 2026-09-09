---
schema: wang-person/v1
id: p_jaE5P37FStPHDxPYMysxw3
status: active
merged_into: null
display_name: 王選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EKwktMZqXD9eGgL2LUUEdg
        subject_person_id: p_jaE5P37FStPHDxPYMysxw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hUikatfkCNw5rQPGezt1Zb
          claim_id: c_EKwktMZqXD9eGgL2LUUEdg
          source_id: s_xDRFfigPYWkx6dP8QHuwRU
          stance: supports
          locator: CBDB:494264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494264）
          source: &a1
            id: s_xDRFfigPYWkx6dP8QHuwRU
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 494264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494264&o=json
            external_identifier: CBDB:494264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5scS8j58nbkMj59ty3gZz
        subject_person_id: p_jaE5P37FStPHDxPYMysxw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Z8MxnbCutpSEnap7K6Q57
          claim_id: c_n5scS8j58nbkMj59ty3gZz
          source_id: s_xDRFfigPYWkx6dP8QHuwRU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 494264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494264&o=json)
