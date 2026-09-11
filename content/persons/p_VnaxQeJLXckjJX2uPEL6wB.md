---
schema: wang-person/v1
id: p_VnaxQeJLXckjJX2uPEL6wB
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKNkrHKkzUKCNtaJVzAVmc
        subject_person_id: p_VnaxQeJLXckjJX2uPEL6wB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FdwV5PfK5J5MS9NdLFYF2E
          claim_id: c_UKNkrHKkzUKCNtaJVzAVmc
          source_id: s_Euc7RhRiEiQK2YYLyn9bUC
          stance: supports
          locator: CBDB:343843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343843）
          source: &a1
            id: s_Euc7RhRiEiQK2YYLyn9bUC
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 343843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343843&o=json
            external_identifier: CBDB:343843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUJyvjt5GQvi8GdDbCoKa9
        subject_person_id: p_VnaxQeJLXckjJX2uPEL6wB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 343843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxSToeuEuKr3Dob5eFDT6-
          claim_id: c_DUJyvjt5GQvi8GdDbCoKa9
          source_id: s_Euc7RhRiEiQK2YYLyn9bUC
          stance: supports
          locator: CBDB:343843
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 343843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 343843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343843&o=json)
