---
schema: wang-person/v1
id: p_xX7RjeZLFSJsheodyNAzU3
status: active
merged_into: null
display_name: 王則正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7mTVHk9C1ijy82VadJEb2
        subject_person_id: p_xX7RjeZLFSJsheodyNAzU3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Am39CLyZYaD7yjj7785V6J
          claim_id: c_d7mTVHk9C1ijy82VadJEb2
          source_id: s_SpMbToYH9t7ZEH7oGy57Qh
          stance: supports
          locator: CBDB:571281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571281）
          source: &a1
            id: s_SpMbToYH9t7ZEH7oGy57Qh
            source_type: api_record
            title: 中国历代人物传记资料库：王則正（CBDB 571281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571281&o=json
            external_identifier: CBDB:571281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zhHNyFew7rT5MuiQXiz4an
        subject_person_id: p_xX7RjeZLFSJsheodyNAzU3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則正，明人物。身份为義民/義官。（中国历代人物传记资料库 CBDB 571281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YxYhzxMDvlbhMaygk1Mv2U
          claim_id: c_zhHNyFew7rT5MuiQXiz4an
          source_id: s_SpMbToYH9t7ZEH7oGy57Qh
          stance: supports
          locator: CBDB:571281
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

# 王則正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則正 | accepted |
| bio.summary | 王則正，明人物。身份为義民/義官。（中国历代人物传记资料库 CBDB 571281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王則正（CBDB 571281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571281&o=json)
