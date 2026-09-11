---
schema: wang-person/v1
id: p_KUzC6p349oQVGcz58BJonS
status: active
merged_into: null
display_name: 王燕堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WbMZWF3Fe7KtT3Z8vrDiJ4
        subject_person_id: p_KUzC6p349oQVGcz58BJonS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1jPFP1uBVZMadvp2s2WtaD
          claim_id: c_WbMZWF3Fe7KtT3Z8vrDiJ4
          source_id: s_P4mx7nxrr749sfqNvxWKwM
          stance: supports
          locator: CBDB:72210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72210）
          source: &a1
            id: s_P4mx7nxrr749sfqNvxWKwM
            source_type: api_record
            title: 中国历代人物传记资料库：王燕堂（CBDB 72210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72210&o=json
            external_identifier: CBDB:72210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rt688MhRKSv1NxwXxrqg2K
        subject_person_id: p_KUzC6p349oQVGcz58BJonS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QRUAce4RcQSVEZJqUuUMZn
          claim_id: c_rt688MhRKSv1NxwXxrqg2K
          source_id: s_P4mx7nxrr749sfqNvxWKwM
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
        id: c_wNbFPBD2KoVtNZXMNHCNYr
        subject_person_id: p_KUzC6p349oQVGcz58BJonS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qMKr39JHFh24dpNx4qf6VX
          claim_id: c_wNbFPBD2KoVtNZXMNHCNYr
          source_id: s_P4mx7nxrr749sfqNvxWKwM
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
        id: c_4stPm3zbThjK27DGMNjCZ4
        subject_person_id: p_KUzC6p349oQVGcz58BJonS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕堂（1796年—1852年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 72210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e9LWk1W5eXwP8omGcX8IG7
          claim_id: c_4stPm3zbThjK27DGMNjCZ4
          source_id: s_P4mx7nxrr749sfqNvxWKwM
          stance: supports
          locator: CBDB:72210
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

# 王燕堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燕堂 | accepted |
| birth.date | 1796年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王燕堂（1796年—1852年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 72210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燕堂（CBDB 72210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72210&o=json)
