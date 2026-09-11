---
schema: wang-person/v1
id: p_6WQUN1niuq5L7JL3JSUcF6
status: active
merged_into: null
display_name: 王葆恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4uMSLeiM3y4TPGwn1GKB7p
        subject_person_id: p_6WQUN1niuq5L7JL3JSUcF6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UCMjaarEcVM1fcRvW9RUUU
          claim_id: c_4uMSLeiM3y4TPGwn1GKB7p
          source_id: s_oXwdkHZtn15kJLiLurPynA
          stance: supports
          locator: CBDB:640133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640133）
          source: &a1
            id: s_oXwdkHZtn15kJLiLurPynA
            source_type: api_record
            title: 中国历代人物传记资料库：王葆恆（CBDB 640133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640133&o=json
            external_identifier: CBDB:640133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnwrEeD4ZiQvK74gipfjuy
        subject_person_id: p_6WQUN1niuq5L7JL3JSUcF6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆恆，清人物。籍贯山陰，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 640133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WVMZEh68vwTxlIcyuHKoJz
          claim_id: c_ZnwrEeD4ZiQvK74gipfjuy
          source_id: s_oXwdkHZtn15kJLiLurPynA
          stance: supports
          locator: CBDB:640133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王葆恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆恆 | accepted |
| bio.summary | 王葆恆，清人物。籍贯山陰，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 640133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆恆（CBDB 640133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640133&o=json)
