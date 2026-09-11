---
schema: wang-person/v1
id: p_Gf51oq3c7t3Nr2MoXSy1cH
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KjNxJw5hNY76RreUaUaLzb
        subject_person_id: p_Gf51oq3c7t3Nr2MoXSy1cH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_csyFViqPpCsAVQtDrtSgHG
          claim_id: c_KjNxJw5hNY76RreUaUaLzb
          source_id: s_MRk9k7mA3BMoxQsgPFJ55W
          stance: supports
          locator: CBDB:100915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100915）
          source: &a1
            id: s_MRk9k7mA3BMoxQsgPFJ55W
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 100915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100915&o=json
            external_identifier: CBDB:100915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFBZm4B7HJhbKaRn8r46n6
        subject_person_id: p_Gf51oq3c7t3Nr2MoXSy1cH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，元人物。籍贯新安。（中国历代人物传记资料库 CBDB 100915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ceQt4Qts3hR1UBULsXv_TW
          claim_id: c_UFBZm4B7HJhbKaRn8r46n6
          source_id: s_MRk9k7mA3BMoxQsgPFJ55W
          stance: supports
          locator: CBDB:100915
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，元人物。籍贯新安。（中国历代人物传记资料库 CBDB 100915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 100915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100915&o=json)
