---
schema: wang-person/v1
id: p_VhKPBBkWvif6wyZXCnNz2T
status: active
merged_into: null
display_name: 王光亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U8N56pSSLbJ8V8bgtWMtHm
        subject_person_id: p_VhKPBBkWvif6wyZXCnNz2T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WT3QQsHKxHmmJPsrydBEBX
          claim_id: c_U8N56pSSLbJ8V8bgtWMtHm
          source_id: s_UzFGwYXWUreaYff1ynBX9U
          stance: supports
          locator: CBDB:543464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543464）
          source: &a1
            id: s_UzFGwYXWUreaYff1ynBX9U
            source_type: api_record
            title: 中国历代人物传记资料库：王光亨（CBDB 543464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543464&o=json
            external_identifier: CBDB:543464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Md6Ft4fHmvkX21SeuKxUpu
        subject_person_id: p_VhKPBBkWvif6wyZXCnNz2T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光亨，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 543464）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6IEuvfEC_8BlsGszyBj01k
          claim_id: c_Md6Ft4fHmvkX21SeuKxUpu
          source_id: s_UzFGwYXWUreaYff1ynBX9U
          stance: supports
          locator: CBDB:543464
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

# 王光亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光亨 | accepted |
| bio.summary | 王光亨，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 543464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光亨（CBDB 543464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543464&o=json)
