---
schema: wang-person/v1
id: p_4QshzPTu27VmDt7tuNUQhM
status: active
merged_into: null
display_name: 王鳴皋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cPK2XvNTvnZ3w6wjadY5n3
        subject_person_id: p_4QshzPTu27VmDt7tuNUQhM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iH7Y5s799pu79ie1YfmhKV
          claim_id: c_cPK2XvNTvnZ3w6wjadY5n3
          source_id: s_CLwdgnGesYFef4NtfLkSuf
          stance: supports
          locator: CBDB:640970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640970）
          source: &a1
            id: s_CLwdgnGesYFef4NtfLkSuf
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴皋（CBDB 640970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640970&o=json
            external_identifier: CBDB:640970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6xcDFWQbh3fr5BE3P1Pdu
        subject_person_id: p_4QshzPTu27VmDt7tuNUQhM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴皋，清人物。籍贯同州府，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640970）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BNuE5P1SubfVVwP8TX-zUH
          claim_id: c_Z6xcDFWQbh3fr5BE3P1Pdu
          source_id: s_CLwdgnGesYFef4NtfLkSuf
          stance: supports
          locator: CBDB:640970
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

# 王鳴皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴皋 | accepted |
| bio.summary | 王鳴皋，清人物。籍贯同州府，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640970） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴皋（CBDB 640970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640970&o=json)
