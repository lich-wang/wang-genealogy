---
schema: wang-person/v1
id: p_M6LEcXJ4fAxH6NMLaBJTYV
status: active
merged_into: null
display_name: 王達孚
cbdb_id: 324570
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NeL9MqQ8CQfQKP74BcyHHi
        subject_person_id: p_M6LEcXJ4fAxH6NMLaBJTYV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達孚，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_esGq9H04PrZMoUR0mt16Gj
          claim_id: c_NeL9MqQ8CQfQKP74BcyHHi
          source_id: s_N2tHnZBmL9vcFEej46RfPN
          stance: supports
          locator: CBDB:324570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N2tHnZBmL9vcFEej46RfPN
            source_type: api_record
            title: 中国历代人物传记资料库：王達孚（CBDB 324570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json
            external_identifier: CBDB:324570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SSvDtAVqKt4PbRLGPx2KAJ
        subject_person_id: p_M6LEcXJ4fAxH6NMLaBJTYV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cJWL4XJxpPqEfXdpVrrMFa
          claim_id: c_SSvDtAVqKt4PbRLGPx2KAJ
          source_id: s_N2tHnZBmL9vcFEej46RfPN
          stance: supports
          locator: CBDB:324570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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

# 王達孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王達孚，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324570） | accepted |
| name.primary | 王達孚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達孚（CBDB 324570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json)
