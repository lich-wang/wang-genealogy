---
schema: wang-person/v1
id: p_LsdDG48jeWrB8CXdVQBT5s
status: active
merged_into: null
display_name: 王國琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBQZ1AZAPM5D6eNPntVobF
        subject_person_id: p_LsdDG48jeWrB8CXdVQBT5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VRpXuPm2FPmcS7cAWwVWNe
          claim_id: c_KBQZ1AZAPM5D6eNPntVobF
          source_id: s_PDscLqpZ1AUy5rdFWHcXeT
          stance: supports
          locator: CBDB:550579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550579）
          source: &a1
            id: s_PDscLqpZ1AUy5rdFWHcXeT
            source_type: api_record
            title: 中国历代人物传记资料库：王國琦（CBDB 550579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550579&o=json
            external_identifier: CBDB:550579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w8GVhTxHRgGNpW9YNFPNyW
        subject_person_id: p_LsdDG48jeWrB8CXdVQBT5s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國琦，明人物。籍贯新昌，入仕進士，曾任縣令、刑科給事中。（中国历代人物传记资料库 CBDB 550579）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Rbj3x7H0cNlnGK40XHXcr
          claim_id: c_w8GVhTxHRgGNpW9YNFPNyW
          source_id: s_PDscLqpZ1AUy5rdFWHcXeT
          stance: supports
          locator: CBDB:550579
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

# 王國琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國琦 | accepted |
| bio.summary | 王國琦，明人物。籍贯新昌，入仕進士，曾任縣令、刑科給事中。（中国历代人物传记资料库 CBDB 550579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國琦（CBDB 550579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550579&o=json)
