---
schema: wang-person/v1
id: p_PWEFi3hzfMPEbMRRx9mP7o
status: active
merged_into: null
display_name: 王建鼎
cbdb_id: 414500
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cbr9Rxtrz9hwJc23vff62Y
        subject_person_id: p_PWEFi3hzfMPEbMRRx9mP7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建鼎，清人物。曾任州判。（中国历代人物传记资料库 CBDB 414500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0F9LInrojE63NNhtZc1YYT
          claim_id: c_cbr9Rxtrz9hwJc23vff62Y
          source_id: s_gUcreKFL8WyiFkV91JPNXs
          stance: supports
          locator: CBDB:414500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gUcreKFL8WyiFkV91JPNXs
            source_type: api_record
            title: 中国历代人物传记资料库：王建鼎（CBDB 414500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414500&o=json
            external_identifier: CBDB:414500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:34.838Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_54BVx24qMV6fbHX3oPpKqq
        subject_person_id: p_PWEFi3hzfMPEbMRRx9mP7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m4NmES6nDvWf6XwPjknCM3
          claim_id: c_54BVx24qMV6fbHX3oPpKqq
          source_id: s_gUcreKFL8WyiFkV91JPNXs
          stance: supports
          locator: CBDB:414500
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5501-5600）｜历史性依据：CBDB 朝代 = 清
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

# 王建鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建鼎，清人物。曾任州判。（中国历代人物传记资料库 CBDB 414500） | accepted |
| name.primary | 王建鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建鼎（CBDB 414500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414500&o=json)
