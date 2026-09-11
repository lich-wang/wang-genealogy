---
schema: wang-person/v1
id: p_jL9SC7QsJdnNg3TUQTeZEA
status: active
merged_into: null
display_name: 王以堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HeSbGZDw8BEu3UT5bB64Gm
        subject_person_id: p_jL9SC7QsJdnNg3TUQTeZEA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFudpE2KQkLWc6qVSAdBcn
          claim_id: c_HeSbGZDw8BEu3UT5bB64Gm
          source_id: s_A5XJJkV8DCn4H9M2tD9RWi
          stance: supports
          locator: CBDB:635916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635916）
          source: &a1
            id: s_A5XJJkV8DCn4H9M2tD9RWi
            source_type: api_record
            title: 中国历代人物传记资料库：王以堯（CBDB 635916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635916&o=json
            external_identifier: CBDB:635916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TMr9C2pdDn2hBCm74Np2Pq
        subject_person_id: p_jL9SC7QsJdnNg3TUQTeZEA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以堯，清人物。籍贯建平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fNnuU6gYRptjbND_2MaEKW
          claim_id: c_TMr9C2pdDn2hBCm74Np2Pq
          source_id: s_A5XJJkV8DCn4H9M2tD9RWi
          stance: supports
          locator: CBDB:635916
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

# 王以堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以堯 | accepted |
| bio.summary | 王以堯，清人物。籍贯建平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以堯（CBDB 635916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635916&o=json)
