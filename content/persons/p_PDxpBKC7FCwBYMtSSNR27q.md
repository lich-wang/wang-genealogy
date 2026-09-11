---
schema: wang-person/v1
id: p_PDxpBKC7FCwBYMtSSNR27q
status: active
merged_into: null
display_name: 王雲裁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_op1HHnM4Rdzdhs2JSBAzjR
        subject_person_id: p_PDxpBKC7FCwBYMtSSNR27q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲裁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vLEJSmkPowbG6mJckzD3VZ
          claim_id: c_op1HHnM4Rdzdhs2JSBAzjR
          source_id: s_P7sQ4FALH3qnh3wADJo4FM
          stance: supports
          locator: CBDB:640819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640819）
          source: &a1
            id: s_P7sQ4FALH3qnh3wADJo4FM
            source_type: api_record
            title: 中国历代人物传记资料库：王雲裁（CBDB 640819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640819&o=json
            external_identifier: CBDB:640819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S4FZWznsH2QBB6TvFfDVSs
        subject_person_id: p_PDxpBKC7FCwBYMtSSNR27q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲裁，清人物。籍贯大興，曾任經歷。（中国历代人物传记资料库 CBDB 640819）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5hyXu4uunVeVDxywvkgQhf
          claim_id: c_S4FZWznsH2QBB6TvFfDVSs
          source_id: s_P7sQ4FALH3qnh3wADJo4FM
          stance: supports
          locator: CBDB:640819
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

# 王雲裁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲裁 | accepted |
| bio.summary | 王雲裁，清人物。籍贯大興，曾任經歷。（中国历代人物传记资料库 CBDB 640819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲裁（CBDB 640819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640819&o=json)
