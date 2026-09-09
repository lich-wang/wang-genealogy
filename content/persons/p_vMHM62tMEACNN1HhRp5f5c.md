---
schema: wang-person/v1
id: p_vMHM62tMEACNN1HhRp5f5c
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iH3JMFmLt6RFK1oD7J8cp9
        subject_person_id: p_vMHM62tMEACNN1HhRp5f5c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EkQRbpWoLFcimhtGQbP1WU
          claim_id: c_iH3JMFmLt6RFK1oD7J8cp9
          source_id: s_vhW5nmYyyDLYdnCqdnGMD3
          stance: supports
          locator: CBDB:204676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204676）
          source: &a1
            id: s_vhW5nmYyyDLYdnCqdnGMD3
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 204676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204676&o=json
            external_identifier: CBDB:204676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AhyAt6qWrfoUHmNLDNbkeT
        subject_person_id: p_vMHM62tMEACNN1HhRp5f5c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ezh9cBPbM5VVDiRjmN5ri2
          claim_id: c_AhyAt6qWrfoUHmNLDNbkeT
          source_id: s_vhW5nmYyyDLYdnCqdnGMD3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6sWkkRNJvwA2BheFTBCZL4
        subject_person_id: p_vMHM62tMEACNN1HhRp5f5c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17xQqoH8ehzCMUD7VkEFrX
          claim_id: c_6sWkkRNJvwA2BheFTBCZL4
          source_id: s_vhW5nmYyyDLYdnCqdnGMD3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| birth.date | 1402年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 204676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204676&o=json)
