---
schema: wang-person/v1
id: p_5qf6NUC5yGW75oMJ6WsHMF
status: active
merged_into: null
display_name: 王家幹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPTMZEF9A7GpaNtN6PoZzH
        subject_person_id: p_5qf6NUC5yGW75oMJ6WsHMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPgB1xm2ik558kM7zysqNU
          claim_id: c_wPTMZEF9A7GpaNtN6PoZzH
          source_id: s_EUQstqAnUAXbTfXg2mPTMd
          stance: supports
          locator: CBDB:71974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71974）
          source: &a1
            id: s_EUQstqAnUAXbTfXg2mPTMd
            source_type: api_record
            title: 中国历代人物传记资料库：王家幹（CBDB 71974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71974&o=json
            external_identifier: CBDB:71974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KVUMctAYx3pZHqtwS7xJwb
        subject_person_id: p_5qf6NUC5yGW75oMJ6WsHMF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1765年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yj7f9Nn5g3bJ35uE4Xk3vt
          claim_id: c_KVUMctAYx3pZHqtwS7xJwb
          source_id: s_EUQstqAnUAXbTfXg2mPTMd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yzqshdBu8AM5u6s139BpMi
        subject_person_id: p_5qf6NUC5yGW75oMJ6WsHMF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6dwGiDcEbUQZCeSCVYh8h
          claim_id: c_yzqshdBu8AM5u6s139BpMi
          source_id: s_EUQstqAnUAXbTfXg2mPTMd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3cQyh2qxNxm7eMVNaijEfs
        subject_person_id: p_5qf6NUC5yGW75oMJ6WsHMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZ4RAPMEzpDzmLUTGYrbzV
          claim_id: c_3cQyh2qxNxm7eMVNaijEfs
          source_id: s_EUQstqAnUAXbTfXg2mPTMd
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

# 王家幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家幹 | accepted |
| birth.date | 1765年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家幹（CBDB 71974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71974&o=json)
