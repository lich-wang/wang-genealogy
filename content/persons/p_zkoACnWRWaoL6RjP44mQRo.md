---
schema: wang-person/v1
id: p_zkoACnWRWaoL6RjP44mQRo
status: active
merged_into: null
display_name: 王若之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M5rFxpVM8QpdTe9cajTrzy
        subject_person_id: p_zkoACnWRWaoL6RjP44mQRo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjPX2jd5H12aWBxChvNoBJ
          claim_id: c_M5rFxpVM8QpdTe9cajTrzy
          source_id: s_4jKMzQwXic1BrrB3tuu78C
          stance: supports
          locator: CBDB:338569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338569）
          source: &a1
            id: s_4jKMzQwXic1BrrB3tuu78C
            source_type: api_record
            title: 中国历代人物传记资料库：王若之（CBDB 338569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338569&o=json
            external_identifier: CBDB:338569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QKB3bdo3iMgPtcMa53V23h
        subject_person_id: p_zkoACnWRWaoL6RjP44mQRo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phusoJboxRhTCJwW1xjdbc
          claim_id: c_QKB3bdo3iMgPtcMa53V23h
          source_id: s_4jKMzQwXic1BrrB3tuu78C
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
        id: c_4BAyZTgj54jyZqjoaQ1fgt
        subject_person_id: p_zkoACnWRWaoL6RjP44mQRo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7xQcg3ZL5uGJB8pFSzVVv
          claim_id: c_4BAyZTgj54jyZqjoaQ1fgt
          source_id: s_4jKMzQwXic1BrrB3tuu78C
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
        id: c_WdKiEkyXc3oHLymuajnCrj
        subject_person_id: p_zkoACnWRWaoL6RjP44mQRo
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
        - id: cs_b1d68LJeHPYC89LS9NnDFD
          claim_id: c_WdKiEkyXc3oHLymuajnCrj
          source_id: s_4jKMzQwXic1BrrB3tuu78C
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

# 王若之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若之 | accepted |
| birth.date | 1593年 | accepted |
| death.date | 1646年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若之（CBDB 338569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338569&o=json)
