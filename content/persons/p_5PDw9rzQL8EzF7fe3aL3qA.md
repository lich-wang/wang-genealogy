---
schema: wang-person/v1
id: p_5PDw9rzQL8EzF7fe3aL3qA
status: active
merged_into: null
display_name: 王湧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4tetHNfHbeVN9juxjTckLt
        subject_person_id: p_5PDw9rzQL8EzF7fe3aL3qA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_spC4vvAq4en2pRVST9Ev64
          claim_id: c_4tetHNfHbeVN9juxjTckLt
          source_id: s_zv8vpNNTBkDD8jKXEPr87L
          stance: supports
          locator: CBDB:269152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269152）
          source: &a1
            id: s_zv8vpNNTBkDD8jKXEPr87L
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 269152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json
            external_identifier: CBDB:269152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LM8VuUrybAL7V6XqxQAQxq
        subject_person_id: p_5PDw9rzQL8EzF7fe3aL3qA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湧，明人物。弘治九年進士，籍贯象山。（中国历代人物传记资料库 CBDB 269152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jjejCq_3bLd3He76r7meuf
          claim_id: c_LM8VuUrybAL7V6XqxQAQxq
          source_id: s_zv8vpNNTBkDD8jKXEPr87L
          stance: supports
          locator: CBDB:269152
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

# 王湧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湧 | accepted |
| bio.summary | 王湧，明人物。弘治九年進士，籍贯象山。（中国历代人物传记资料库 CBDB 269152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湧（CBDB 269152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json)
