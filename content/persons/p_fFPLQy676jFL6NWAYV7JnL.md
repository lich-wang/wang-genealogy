---
schema: wang-person/v1
id: p_fFPLQy676jFL6NWAYV7JnL
status: active
merged_into: null
display_name: 王之臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TuGpiwysPzj9DKVgoUz9St
        subject_person_id: p_fFPLQy676jFL6NWAYV7JnL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bojkTLCpcLVeygk558NQaG
          claim_id: c_TuGpiwysPzj9DKVgoUz9St
          source_id: s_ERDUCMidAWBQaQbHPxHMZE
          stance: supports
          locator: CBDB:471454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471454）
          source: &a1
            id: s_ERDUCMidAWBQaQbHPxHMZE
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 471454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471454&o=json
            external_identifier: CBDB:471454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ErLeKFC43m6Zmi6MNKJwc
        subject_person_id: p_fFPLQy676jFL6NWAYV7JnL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣，清人物。曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 471454）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_74Kdsuoyz_4xuNHvQ2Xqp1
          claim_id: c_6ErLeKFC43m6Zmi6MNKJwc
          source_id: s_ERDUCMidAWBQaQbHPxHMZE
          stance: supports
          locator: CBDB:471454
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

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| bio.summary | 王之臣，清人物。曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 471454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之臣（CBDB 471454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471454&o=json)
