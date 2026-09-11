---
schema: wang-person/v1
id: p_KnHGwZGuybTKYVcBkKt9Qi
status: active
merged_into: null
display_name: 王汝績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApbC5WgGGNnAABzRwg7oFR
        subject_person_id: p_KnHGwZGuybTKYVcBkKt9Qi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cXybxEKxvCULUM6bYA9jtr
          claim_id: c_ApbC5WgGGNnAABzRwg7oFR
          source_id: s_5cWCzTkyYDicaaxRF4j8ER
          stance: supports
          locator: CBDB:126504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126504）
          source: &a1
            id: s_5cWCzTkyYDicaaxRF4j8ER
            source_type: api_record
            title: 中国历代人物传记资料库：王汝績（CBDB 126504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126504&o=json
            external_identifier: CBDB:126504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QQA4yFmP1sokksPyVXa9Zh
        subject_person_id: p_KnHGwZGuybTKYVcBkKt9Qi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1396年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QRMpLCg1XKu3WAu5uTiGKk
          claim_id: c_QQA4yFmP1sokksPyVXa9Zh
          source_id: s_5cWCzTkyYDicaaxRF4j8ER
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
        id: c_e3mdukRApi8xhLuWiXA4B2
        subject_person_id: p_KnHGwZGuybTKYVcBkKt9Qi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXjN3HdZRVBvo2A82HJHkx
          claim_id: c_e3mdukRApi8xhLuWiXA4B2
          source_id: s_5cWCzTkyYDicaaxRF4j8ER
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
        id: c_Zs36AJigEhG16hySVPX6cN
        subject_person_id: p_KnHGwZGuybTKYVcBkKt9Qi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝績（1396年—1450年），明人物。籍贯金谿，入仕鄉貢舉人，曾任訓導、知縣、知州。（中国历代人物传记资料库 CBDB 126504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tahWxyt7mQqcP4Txr8_R2t
          claim_id: c_Zs36AJigEhG16hySVPX6cN
          source_id: s_5cWCzTkyYDicaaxRF4j8ER
          stance: supports
          locator: CBDB:126504
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

# 王汝績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝績 | accepted |
| birth.date | 1396年 | accepted |
| death.date | 1450年 | accepted |
| bio.summary | 王汝績（1396年—1450年），明人物。籍贯金谿，入仕鄉貢舉人，曾任訓導、知縣、知州。（中国历代人物传记资料库 CBDB 126504） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝績（CBDB 126504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126504&o=json)
