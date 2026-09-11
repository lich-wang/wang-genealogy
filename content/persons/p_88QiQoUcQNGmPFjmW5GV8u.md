---
schema: wang-person/v1
id: p_88QiQoUcQNGmPFjmW5GV8u
status: active
merged_into: null
display_name: 王體仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x7Sx5trhuvr7XRaJevkCH1
        subject_person_id: p_88QiQoUcQNGmPFjmW5GV8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6XX2R125JhgLWB7f4kMRAw
          claim_id: c_x7Sx5trhuvr7XRaJevkCH1
          source_id: s_GEKT18o5p2G5MXszb9eat2
          stance: supports
          locator: CBDB:71674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71674）
          source: &a1
            id: s_GEKT18o5p2G5MXszb9eat2
            source_type: api_record
            title: 中国历代人物传记资料库：王體仁（CBDB 71674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71674&o=json
            external_identifier: CBDB:71674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_83JPs42DnKHreJNJc4Tw4n
        subject_person_id: p_88QiQoUcQNGmPFjmW5GV8u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecvDTEzNSzbp2HqEqWh2ss
          claim_id: c_83JPs42DnKHreJNJc4Tw4n
          source_id: s_GEKT18o5p2G5MXszb9eat2
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
        id: c_ZK3zoazZQ3AGHKEHk43FxW
        subject_person_id: p_88QiQoUcQNGmPFjmW5GV8u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1938年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHZg1Q6YNDEaQrKFjp2vHh
          claim_id: c_ZK3zoazZQ3AGHKEHk43FxW
          source_id: s_GEKT18o5p2G5MXszb9eat2
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
        id: c_H42Qb4euNUicFW4CyiMTnX
        subject_person_id: p_88QiQoUcQNGmPFjmW5GV8u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體仁（1873年—1938年），中華民國人物。籍贯紹興府。（中国历代人物传记资料库 CBDB 71674）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3OsFkUWFvy0YLhsz3QnPIm
          claim_id: c_H42Qb4euNUicFW4CyiMTnX
          source_id: s_GEKT18o5p2G5MXszb9eat2
          stance: supports
          locator: CBDB:71674
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

# 王體仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體仁 | accepted |
| birth.date | 1873年 | accepted |
| death.date | 1938年 | accepted |
| bio.summary | 王體仁（1873年—1938年），中華民國人物。籍贯紹興府。（中国历代人物传记资料库 CBDB 71674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體仁（CBDB 71674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71674&o=json)
