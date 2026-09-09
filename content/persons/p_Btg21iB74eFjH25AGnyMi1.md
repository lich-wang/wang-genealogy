---
schema: wang-person/v1
id: p_Btg21iB74eFjH25AGnyMi1
status: active
merged_into: null
display_name: 王兆夢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJBdLg9jUT8fZbvK2UNYdo
        subject_person_id: p_Btg21iB74eFjH25AGnyMi1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆夢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A65D9mQofuKctovDtWgdWF
          claim_id: c_JJBdLg9jUT8fZbvK2UNYdo
          source_id: s_fZas28VRYK2hhhdb7Rdw3G
          stance: supports
          locator: CBDB:57122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57122）
          source: &a1
            id: s_fZas28VRYK2hhhdb7Rdw3G
            source_type: api_record
            title: 中国历代人物传记资料库：王兆夢（CBDB 57122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57122&o=json
            external_identifier: CBDB:57122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bpWf9YJnojZEVWJf8SqpHq
        subject_person_id: p_Btg21iB74eFjH25AGnyMi1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1821年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1sbumPGqiUMy3asi6pbGw3
          claim_id: c_bpWf9YJnojZEVWJf8SqpHq
          source_id: s_fZas28VRYK2hhhdb7Rdw3G
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
        id: c_tif2imikGx6u4Yp6xBEbzB
        subject_person_id: p_Btg21iB74eFjH25AGnyMi1
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
        - id: cs_fAPGoWAv6MpME4VKQ3R6uj
          claim_id: c_tif2imikGx6u4Yp6xBEbzB
          source_id: s_fZas28VRYK2hhhdb7Rdw3G
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

# 王兆夢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆夢 | accepted |
| death.date | 1821年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆夢（CBDB 57122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57122&o=json)
