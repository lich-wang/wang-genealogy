---
schema: wang-person/v1
id: p_27Q2m4itJ8qnLXuQiT45vW
status: active
merged_into: null
display_name: 王得成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dpex9fgNzzH71KBNmJiEdD
        subject_person_id: p_27Q2m4itJ8qnLXuQiT45vW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NVaEb14vUPsqutqnRNyBa
          claim_id: c_Dpex9fgNzzH71KBNmJiEdD
          source_id: s_WKZjDx6JSW2vLS9gKWTMN2
          stance: supports
          locator: CBDB:460844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460844）
          source: &a1
            id: s_WKZjDx6JSW2vLS9gKWTMN2
            source_type: api_record
            title: 中国历代人物传记资料库：王得成（CBDB 460844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460844&o=json
            external_identifier: CBDB:460844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANHUEdqGhpkxK8PkcMQcpJ
        subject_person_id: p_27Q2m4itJ8qnLXuQiT45vW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得成，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 460844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yLdDGXkC6JWXaoiI-AVJTQ
          claim_id: c_ANHUEdqGhpkxK8PkcMQcpJ
          source_id: s_WKZjDx6JSW2vLS9gKWTMN2
          stance: supports
          locator: CBDB:460844
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

# 王得成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得成 | accepted |
| bio.summary | 王得成，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 460844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得成（CBDB 460844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460844&o=json)
