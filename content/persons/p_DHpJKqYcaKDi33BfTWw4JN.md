---
schema: wang-person/v1
id: p_DHpJKqYcaKDi33BfTWw4JN
status: active
merged_into: null
display_name: 王顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6Ker82ZTsKC2xJMNRLfNZ
        subject_person_id: p_DHpJKqYcaKDi33BfTWw4JN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jo56BXo8vSy7wPmXm9DA6F
          claim_id: c_N6Ker82ZTsKC2xJMNRLfNZ
          source_id: s_bURGQjTNxU529fqT1YBBN6
          stance: supports
          locator: CBDB:145793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145793）
          source: &a1
            id: s_bURGQjTNxU529fqT1YBBN6
            source_type: api_record
            title: 中国历代人物传记资料库：王顏（CBDB 145793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145793&o=json
            external_identifier: CBDB:145793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HDFrVASsR5Lgoe4pH6m7ew
        subject_person_id: p_DHpJKqYcaKDi33BfTWw4JN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 728年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdUfLZ4gBH8PKrzRaxBT6p
          claim_id: c_HDFrVASsR5Lgoe4pH6m7ew
          source_id: s_bURGQjTNxU529fqT1YBBN6
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
        id: c_ZCz16Cc4BgiBg3nkTmEPGw
        subject_person_id: p_DHpJKqYcaKDi33BfTWw4JN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iNK9Uiw3acbvsBnbrJLM8v
          claim_id: c_ZCz16Cc4BgiBg3nkTmEPGw
          source_id: s_bURGQjTNxU529fqT1YBBN6
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
        id: c_dj8B83jqZzykuU3CXRFa2P
        subject_person_id: p_DHpJKqYcaKDi33BfTWw4JN
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
        - id: cs_jcPKEYQUMn7C79L47HDJun
          claim_id: c_dj8B83jqZzykuU3CXRFa2P
          source_id: s_bURGQjTNxU529fqT1YBBN6
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

# 王顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顏 | accepted |
| birth.date | 728年 | accepted |
| death.date | 802年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顏（CBDB 145793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145793&o=json)
