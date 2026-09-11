---
schema: wang-person/v1
id: p_HB9WE5fDPZG8PptT6L6pNS
status: active
merged_into: null
display_name: 王應先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGHviTNr7Qb74mf46Kt9d4
        subject_person_id: p_HB9WE5fDPZG8PptT6L6pNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ttC6XYfq2KB6DTkR45Hk2
          claim_id: c_YGHviTNr7Qb74mf46Kt9d4
          source_id: s_hDB2NNTF3hSdRKnRqUK7Hz
          stance: supports
          locator: CBDB:297736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297736）
          source: &a1
            id: s_hDB2NNTF3hSdRKnRqUK7Hz
            source_type: api_record
            title: 中国历代人物传记资料库：王應先（CBDB 297736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json
            external_identifier: CBDB:297736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uQmCHtFeknwJ2H4cU9PYYs
        subject_person_id: p_HB9WE5fDPZG8PptT6L6pNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應先，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bmG5e_YAdy7LuBkjE5POg0
          claim_id: c_uQmCHtFeknwJ2H4cU9PYYs
          source_id: s_hDB2NNTF3hSdRKnRqUK7Hz
          stance: supports
          locator: CBDB:297736
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

# 王應先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應先 | accepted |
| bio.summary | 王應先，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應先（CBDB 297736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json)
