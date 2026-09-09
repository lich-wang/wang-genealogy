---
schema: wang-person/v1
id: p_jajPuq8xqfFEmv2zKdfZYU
status: active
merged_into: null
display_name: 王纂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X2EWaL5ECbn1KpPRpqz7Fy
        subject_person_id: p_jajPuq8xqfFEmv2zKdfZYU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rBG1a2cezBeepg6x67sfpv
          claim_id: c_X2EWaL5ECbn1KpPRpqz7Fy
          source_id: s_98ApGH2nNxa7jAFJ658E7o
          stance: supports
          locator: CBDB:139518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139518）
          source: &a1
            id: s_98ApGH2nNxa7jAFJ658E7o
            source_type: api_record
            title: 中国历代人物传记资料库：王纂（CBDB 139518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139518&o=json
            external_identifier: CBDB:139518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xbqsej8fvcbNZzUSWsvSbF
        subject_person_id: p_jajPuq8xqfFEmv2zKdfZYU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 598年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mzfUF7C2hYCEP45w7BT7f4
          claim_id: c_xbqsej8fvcbNZzUSWsvSbF
          source_id: s_98ApGH2nNxa7jAFJ658E7o
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
        id: c_tFanKE56syGY6aXrBZQ3rX
        subject_person_id: p_jajPuq8xqfFEmv2zKdfZYU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 650年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5D42jqCijnz9F3hR3bYtvC
          claim_id: c_tFanKE56syGY6aXrBZQ3rX
          source_id: s_98ApGH2nNxa7jAFJ658E7o
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
        id: c_7vGKCQaMMJ95kWRBWLWJSh
        subject_person_id: p_jajPuq8xqfFEmv2zKdfZYU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mk265Eth3qYwV9n9Rcu2EJ
          claim_id: c_7vGKCQaMMJ95kWRBWLWJSh
          source_id: s_98ApGH2nNxa7jAFJ658E7o
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

# 王纂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纂 | accepted |
| birth.date | 598年 | accepted |
| death.date | 650年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王纂（CBDB 139518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139518&o=json)
