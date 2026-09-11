---
schema: wang-person/v1
id: p_N1iF33bMLLrLHQoZoLAq3k
status: active
merged_into: null
display_name: 王衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zfUTPuRVfvwJqczsRN7AKx
        subject_person_id: p_N1iF33bMLLrLHQoZoLAq3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rygtnyytoHxZfyQy6f1yN4
          claim_id: c_zfUTPuRVfvwJqczsRN7AKx
          source_id: s_sDBQqk9d4KFfsyz69Wb5pJ
          stance: supports
          locator: CBDB:499428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499428）
          source: &a1
            id: s_sDBQqk9d4KFfsyz69Wb5pJ
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 499428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499428&o=json
            external_identifier: CBDB:499428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WoEsbsuvDzYM5if7BTCEgG
        subject_person_id: p_N1iF33bMLLrLHQoZoLAq3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 499428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m_h31JFbcbE7jE3hCTWnlU
          claim_id: c_WoEsbsuvDzYM5if7BTCEgG
          source_id: s_sDBQqk9d4KFfsyz69Wb5pJ
          stance: supports
          locator: CBDB:499428
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

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| bio.summary | 王衍，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 499428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍（CBDB 499428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499428&o=json)
