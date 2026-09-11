---
schema: wang-person/v1
id: p_UQApzTyciQtVRjporwyA5H
status: active
merged_into: null
display_name: 王志學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQNNd6BMwvP64HRxUJLD4Y
        subject_person_id: p_UQApzTyciQtVRjporwyA5H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wvtMKfzxEc9Awmrn1No4Jp
          claim_id: c_mQNNd6BMwvP64HRxUJLD4Y
          source_id: s_cdifm7Wt8QL2b5TPMowN6V
          stance: supports
          locator: CBDB:71656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71656）
          source: &a1
            id: s_cdifm7Wt8QL2b5TPMowN6V
            source_type: api_record
            title: 中国历代人物传记资料库：王志學（CBDB 71656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71656&o=json
            external_identifier: CBDB:71656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.808Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KLmAYKHwPGAgXEKmSeVreo
        subject_person_id: p_UQApzTyciQtVRjporwyA5H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1667年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZciqiiNULX7RKHDtWDLRBq
          claim_id: c_KLmAYKHwPGAgXEKmSeVreo
          source_id: s_cdifm7Wt8QL2b5TPMowN6V
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
        id: c_u7Noi7ktArhgrDwnXxUFb9
        subject_person_id: p_UQApzTyciQtVRjporwyA5H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MabFBTstUUnnFoDvENjNCr
          claim_id: c_u7Noi7ktArhgrDwnXxUFb9
          source_id: s_cdifm7Wt8QL2b5TPMowN6V
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
        id: c_2KK85JqtDYYyrm3DSD819i
        subject_person_id: p_UQApzTyciQtVRjporwyA5H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志學（1667年—1743年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71656）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mn7ouQwi1QGQeFM3rqMV7L
          claim_id: c_2KK85JqtDYYyrm3DSD819i
          source_id: s_cdifm7Wt8QL2b5TPMowN6V
          stance: supports
          locator: CBDB:71656
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

# 王志學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志學 | accepted |
| birth.date | 1667年 | accepted |
| death.date | 1743年 | accepted |
| bio.summary | 王志學（1667年—1743年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志學（CBDB 71656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71656&o=json)
