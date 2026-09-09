---
schema: wang-person/v1
id: p_BGZ3Xya3EBe2Q1KNp6DVk3
status: active
merged_into: null
display_name: 王紹鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X94gfQT9P89Gk2P4ms8oRg
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MK4AYxjGS4uWRXQuR1M6C4
          claim_id: c_X94gfQT9P89Gk2P4ms8oRg
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: CBDB:159540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159540）
          source: &a1
            id: s_8Qx7mCtqguJx1LnrSReN3k
            source_type: api_record
            title: 中国历代人物传记资料库：王紹鼎（CBDB 159540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json
            external_identifier: CBDB:159540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n55Yu8x8MXf9X2A2NNC533
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
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
        - id: cs_pkUfoJ8dJrCsg1dArAH6b1
          claim_id: c_n55Yu8x8MXf9X2A2NNC533
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
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

# 王紹鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹鼎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹鼎（CBDB 159540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json)
