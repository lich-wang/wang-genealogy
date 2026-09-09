---
schema: wang-person/v1
id: p_EwNPNustBQxxCU5PjvQLo4
status: active
merged_into: null
display_name: 王睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKTdWxrNm4JNmKa1qz5Evw
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yu2xTE5YDguK374Qzig5YN
          claim_id: c_zKTdWxrNm4JNmKa1qz5Evw
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
          stance: supports
          locator: CBDB:145126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145126）
          source: &a1
            id: s_LYrNrmBcf5P7Ra2VcWpnth
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 145126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145126&o=json
            external_identifier: CBDB:145126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e8Ccd7LpABQ9LocSHT9UPg
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qCo3MLVNvQNNurtGaHSKn
          claim_id: c_e8Ccd7LpABQ9LocSHT9UPg
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
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
        id: c_Q1rL1xcnxXJQCzGZp39rP5
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 872年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Pz9i6AQYxbxAQ7KQDnJ3m
          claim_id: c_Q1rL1xcnxXJQCzGZp39rP5
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
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
        id: c_CYUR8DZvKgH1fnZqiSUUCb
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
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
        - id: cs_ehHrgs5qMrLqYysbsaQC6a
          claim_id: c_CYUR8DZvKgH1fnZqiSUUCb
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
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

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| birth.date | 810年 | accepted |
| death.date | 872年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王睿（CBDB 145126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145126&o=json)
