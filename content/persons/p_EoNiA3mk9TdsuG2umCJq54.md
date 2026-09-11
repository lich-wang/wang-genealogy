---
schema: wang-person/v1
id: p_EoNiA3mk9TdsuG2umCJq54
status: active
merged_into: null
display_name: 王得勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MpHx5e4E844gBTrEXwBUoH
        subject_person_id: p_EoNiA3mk9TdsuG2umCJq54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LuJwD4sztD7kk6bKQMo7Aa
          claim_id: c_MpHx5e4E844gBTrEXwBUoH
          source_id: s_Qe9iH9LkhBJRd7eat75TBn
          stance: supports
          locator: CBDB:486971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486971）
          source: &a1
            id: s_Qe9iH9LkhBJRd7eat75TBn
            source_type: api_record
            title: 中国历代人物传记资料库：王得勝（CBDB 486971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486971&o=json
            external_identifier: CBDB:486971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yf1ZmYYZ3a92xgjDUZQQSs
        subject_person_id: p_EoNiA3mk9TdsuG2umCJq54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 486971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vZjArACo2zDYbi9xvWMrHT
          claim_id: c_Yf1ZmYYZ3a92xgjDUZQQSs
          source_id: s_Qe9iH9LkhBJRd7eat75TBn
          stance: supports
          locator: CBDB:486971
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

# 王得勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得勝 | accepted |
| bio.summary | 王得勝，明人物。曾任遊擊將軍。（中国历代人物传记资料库 CBDB 486971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得勝（CBDB 486971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486971&o=json)
