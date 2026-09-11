---
schema: wang-person/v1
id: p_iG3GaHVYEkxg8QH8e8MfJT
status: active
merged_into: null
display_name: 王金
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaE9G1ojhB9sGE53ZcFJxf
        subject_person_id: p_iG3GaHVYEkxg8QH8e8MfJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PmKNKAVCz6Dcs2pBvJQieA
          claim_id: c_uaE9G1ojhB9sGE53ZcFJxf
          source_id: s_SBZbtWPup4TqHDcQnLQUzU
          stance: supports
          locator: CBDB:476749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476749）
          source: &a1
            id: s_SBZbtWPup4TqHDcQnLQUzU
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 476749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476749&o=json
            external_identifier: CBDB:476749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tn7rm4ZD2XFdqid9HCmZJz
        subject_person_id: p_iG3GaHVYEkxg8QH8e8MfJT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金，明人物。入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 476749）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o0H5SQPLp6Mt1vyan1cyO4
          claim_id: c_Tn7rm4ZD2XFdqid9HCmZJz
          source_id: s_SBZbtWPup4TqHDcQnLQUzU
          stance: supports
          locator: CBDB:476749
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

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| bio.summary | 王金，明人物。入仕鄉貢舉人，曾任通判。（中国历代人物传记资料库 CBDB 476749） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 476749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476749&o=json)
