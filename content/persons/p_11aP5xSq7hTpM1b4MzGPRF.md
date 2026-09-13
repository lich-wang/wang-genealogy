---
schema: wang-person/v1
id: p_11aP5xSq7hTpM1b4MzGPRF
status: active
merged_into: null
display_name: 王孟洮
cbdb_id: 71835
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLBywY75RXywL1yQB4bSBb
        subject_person_id: p_11aP5xSq7hTpM1b4MzGPRF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟洮（生于1812年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_E9m9I7N-fTP43eROYvQvvG
          claim_id: c_nLBywY75RXywL1yQB4bSBb
          source_id: s_KRJfQapbE4nx8g8LK9yshR
          stance: supports
          locator: CBDB:71835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KRJfQapbE4nx8g8LK9yshR
            source_type: api_record
            title: 中国历代人物传记资料库：王孟洮（CBDB 71835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71835&o=json
            external_identifier: CBDB:71835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FGgvohqsnGgPr9EQ8By989
        subject_person_id: p_11aP5xSq7hTpM1b4MzGPRF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1812年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1812-01-01
            latest: 1812-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rmdmBdGAzvZXRdQ78fB3G8
          claim_id: c_FGgvohqsnGgPr9EQ8By989
          source_id: s_KRJfQapbE4nx8g8LK9yshR
          stance: supports
          locator: CBDB:71835
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1812
          source:
            id: s_KRJfQapbE4nx8g8LK9yshR
            source_type: api_record
            title: 中国历代人物传记资料库：王孟洮（CBDB 71835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71835&o=json
            external_identifier: CBDB:71835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sKWThrzV8hsA2r7WE88egp
        subject_person_id: p_11aP5xSq7hTpM1b4MzGPRF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟洮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tVADw5aF9XMSHcHA4smZAS
          claim_id: c_sKWThrzV8hsA2r7WE88egp
          source_id: s_KRJfQapbE4nx8g8LK9yshR
          stance: supports
          locator: CBDB:71835
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1812
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

# 王孟洮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟洮（生于1812年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71835） | accepted |
| birth.date | 1812年 | accepted |
| name.primary | 王孟洮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟洮（CBDB 71835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71835&o=json)
