---
schema: wang-person/v1
id: p_QuTZuBRxdGccR9i2YCkQNS
status: active
merged_into: null
display_name: 王志勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SGLYKribnQsCuZKDAu91bi
        subject_person_id: p_QuTZuBRxdGccR9i2YCkQNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EpNaGbpNJW8rNB8jwQZQkH
          claim_id: c_SGLYKribnQsCuZKDAu91bi
          source_id: s_iyUhmWmzM6iZocsPkK3pf7
          stance: supports
          locator: CBDB:637748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637748）
          source: &a1
            id: s_iyUhmWmzM6iZocsPkK3pf7
            source_type: api_record
            title: 中国历代人物传记资料库：王志勲（CBDB 637748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637748&o=json
            external_identifier: CBDB:637748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DG3HR98r1v4CDfNpC4TVDF
        subject_person_id: p_QuTZuBRxdGccR9i2YCkQNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志勲，清人物。籍贯天津，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1WiJSlrd4VWNaqwkfyOcso
          claim_id: c_DG3HR98r1v4CDfNpC4TVDF
          source_id: s_iyUhmWmzM6iZocsPkK3pf7
          stance: supports
          locator: CBDB:637748
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

# 王志勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志勲 | accepted |
| bio.summary | 王志勲，清人物。籍贯天津，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志勲（CBDB 637748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637748&o=json)
