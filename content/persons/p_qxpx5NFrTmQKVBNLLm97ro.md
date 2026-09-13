---
schema: wang-person/v1
id: p_qxpx5NFrTmQKVBNLLm97ro
status: active
merged_into: null
display_name: 王炤威
cbdb_id: 415062
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d1yrh8cZHfGLfXmU8mQtVM
        subject_person_id: p_qxpx5NFrTmQKVBNLLm97ro
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炤威，史料所见人物。本项目依据《中国历代人物传记资料库：王炤威（CBDB 415062）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ctdRkXBBBrgcCWOOx-s-1B
          claim_id: c_d1yrh8cZHfGLfXmU8mQtVM
          source_id: s_f8a6iumcsEbzR2dGiVsSMA
          stance: supports
          locator: CBDB:415062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_f8a6iumcsEbzR2dGiVsSMA
            source_type: api_record
            title: 中国历代人物传记资料库：王炤威（CBDB 415062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415062&o=json
            external_identifier: CBDB:415062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:51.632Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FMPWf3beLjLJ9B73BNJgqP
        subject_person_id: p_qxpx5NFrTmQKVBNLLm97ro
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炤威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GWsEKAhiJK53EoLRTEqkwu
          claim_id: c_FMPWf3beLjLJ9B73BNJgqP
          source_id: s_f8a6iumcsEbzR2dGiVsSMA
          stance: supports
          locator: CBDB:415062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6001-6100）｜历史性依据：CBDB 朝代 = 清
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

# 王炤威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炤威，史料所见人物。本项目依据《中国历代人物传记资料库：王炤威（CBDB 415062）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王炤威 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炤威（CBDB 415062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415062&o=json)
