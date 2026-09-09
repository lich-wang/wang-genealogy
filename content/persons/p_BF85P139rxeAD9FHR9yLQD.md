---
schema: wang-person/v1
id: p_BF85P139rxeAD9FHR9yLQD
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mua7kFxRNwqGJadNSmrPeq
        subject_person_id: p_BF85P139rxeAD9FHR9yLQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhNTUkBQDP5FcqQFG26d71
          claim_id: c_Mua7kFxRNwqGJadNSmrPeq
          source_id: s_Rx1VXCFwBG5vZPBH16rWgz
          stance: supports
          locator: CBDB:338291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338291）
          source: &a1
            id: s_Rx1VXCFwBG5vZPBH16rWgz
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 338291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338291&o=json
            external_identifier: CBDB:338291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_unuq39ZGN1F1wg22wCPbYw
        subject_person_id: p_BF85P139rxeAD9FHR9yLQD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1698年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHu2Df7pHB81gQom8aooEP
          claim_id: c_unuq39ZGN1F1wg22wCPbYw
          source_id: s_Rx1VXCFwBG5vZPBH16rWgz
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
        id: c_ewEY8gpFopTq5KULUQa3sG
        subject_person_id: p_BF85P139rxeAD9FHR9yLQD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1738年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YHGEx2RYvzBXzz2i1NAzuC
          claim_id: c_ewEY8gpFopTq5KULUQa3sG
          source_id: s_Rx1VXCFwBG5vZPBH16rWgz
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
        id: c_1L3sjfBaoswYsqSveQ3K9b
        subject_person_id: p_BF85P139rxeAD9FHR9yLQD
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
        - id: cs_frx2kpXHkdgJvTPnhXvKvV
          claim_id: c_1L3sjfBaoswYsqSveQ3K9b
          source_id: s_Rx1VXCFwBG5vZPBH16rWgz
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

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| birth.date | 1698年 | accepted |
| death.date | 1738年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 338291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338291&o=json)
