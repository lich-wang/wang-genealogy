---
schema: wang-person/v1
id: p_2oAxBsuJQKXAAm52SsY22K
status: active
merged_into: null
display_name: 王媛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4EdcTF29A1oEegnnjVbzk
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gXWi8Hg8R4JAmWx45t6XNp
          claim_id: c_F4EdcTF29A1oEegnnjVbzk
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
          stance: supports
          locator: CBDB:140074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140074）
          source: &a1
            id: s_rrZQDbmNdXf25Pr9VFLCFN
            source_type: api_record
            title: 中国历代人物传记资料库：王媛（CBDB 140074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json
            external_identifier: CBDB:140074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CR3RfV7gK6zZHDKivkdEFc
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 641年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQ9ZCCuc52byJmKneveizA
          claim_id: c_CR3RfV7gK6zZHDKivkdEFc
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
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
        id: c_oZNCsGxuTPNUWuAHiH8PQG
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YkH9UnSPbLy2VeZULGJL5e
          claim_id: c_oZNCsGxuTPNUWuAHiH8PQG
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
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
        id: c_jo4JpDeTNMj5CQnHYRBn1Z
        subject_person_id: p_2oAxBsuJQKXAAm52SsY22K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6FFcACrQvWCSAXofLLehf7
          claim_id: c_jo4JpDeTNMj5CQnHYRBn1Z
          source_id: s_rrZQDbmNdXf25Pr9VFLCFN
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

# 王媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王媛 | accepted |
| birth.date | 641年 | accepted |
| death.date | 699年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王媛（CBDB 140074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140074&o=json)
