---
schema: wang-person/v1
id: p_xzwhd9F2mUCEYUfRq6pquP
status: active
merged_into: null
display_name: 王崇禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77qz3gYxMj8copRNYvVm7Q
        subject_person_id: p_xzwhd9F2mUCEYUfRq6pquP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9sT8RCytceLk1SFTX71GQa
          claim_id: c_77qz3gYxMj8copRNYvVm7Q
          source_id: s_PkFg6rN1tkQPQ1ar9kzBPU
          stance: supports
          locator: CBDB:266143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266143）
          source: &a1
            id: s_PkFg6rN1tkQPQ1ar9kzBPU
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 266143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266143&o=json
            external_identifier: CBDB:266143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wisyj6gCFD6JB2Uizb17sB
        subject_person_id: p_xzwhd9F2mUCEYUfRq6pquP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇禮，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J5nIsoaKXZQCEw-Zsp9RuZ
          claim_id: c_Wisyj6gCFD6JB2Uizb17sB
          source_id: s_PkFg6rN1tkQPQ1ar9kzBPU
          stance: supports
          locator: CBDB:266143
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

# 王崇禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇禮 | accepted |
| bio.summary | 王崇禮，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266143） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇禮（CBDB 266143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266143&o=json)
