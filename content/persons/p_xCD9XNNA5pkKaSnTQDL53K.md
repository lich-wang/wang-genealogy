---
schema: wang-person/v1
id: p_xCD9XNNA5pkKaSnTQDL53K
status: active
merged_into: null
display_name: 王應禧
cbdb_id: 414651
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jp3aQ2uhG8kf1kjXmmKVbN
        subject_person_id: p_xCD9XNNA5pkKaSnTQDL53K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應禧，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3W7Axd4Fbts0fKX68zOQv5
          claim_id: c_Jp3aQ2uhG8kf1kjXmmKVbN
          source_id: s_P2FaFew5wjm7EYhZtsXRS8
          stance: supports
          locator: CBDB:414651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P2FaFew5wjm7EYhZtsXRS8
            source_type: api_record
            title: 中国历代人物传记资料库：王應禧（CBDB 414651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414651&o=json
            external_identifier: CBDB:414651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmwxfcBNWjbiB5jBTpa6BU
        subject_person_id: p_xCD9XNNA5pkKaSnTQDL53K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NwJu5xQWsXJmDB9AUZ8S1H
          claim_id: c_gmwxfcBNWjbiB5jBTpa6BU
          source_id: s_P2FaFew5wjm7EYhZtsXRS8
          stance: supports
          locator: CBDB:414651
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 明
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

# 王應禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應禧，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 414651） | accepted |
| name.primary | 王應禧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應禧（CBDB 414651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414651&o=json)
