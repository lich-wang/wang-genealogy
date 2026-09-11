---
schema: wang-person/v1
id: p_cas8EaKU9HS1e5N2DqFoQF
status: active
merged_into: null
display_name: 王士珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NkAPPcGQNgTnhS6d29eMou
        subject_person_id: p_cas8EaKU9HS1e5N2DqFoQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kYk1ZyJ3B36yd9vUXUzcpT
          claim_id: c_NkAPPcGQNgTnhS6d29eMou
          source_id: s_8f5KNJU4J6Ee7kj14XMtjC
          stance: supports
          locator: CBDB:71322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71322）
          source: &a1
            id: s_8f5KNJU4J6Ee7kj14XMtjC
            source_type: api_record
            title: 中国历代人物传记资料库：王士珠（CBDB 71322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71322&o=json
            external_identifier: CBDB:71322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5Tsj48GtZyQKQ8HxFKW7wh
        subject_person_id: p_cas8EaKU9HS1e5N2DqFoQF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aau3Dyg28CBML4yWRhz9sk
          claim_id: c_5Tsj48GtZyQKQ8HxFKW7wh
          source_id: s_8f5KNJU4J6Ee7kj14XMtjC
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
        id: c_kWT2sMM8NcQW2nB1TiLBMt
        subject_person_id: p_cas8EaKU9HS1e5N2DqFoQF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1854年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXaidUm8RP1NwS3zBpUvNT
          claim_id: c_kWT2sMM8NcQW2nB1TiLBMt
          source_id: s_8f5KNJU4J6Ee7kj14XMtjC
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
        id: c_Ni8yhNcnKJujmWC4aKwbM3
        subject_person_id: p_cas8EaKU9HS1e5N2DqFoQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珠（1790年—1854年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71322）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_drWbPSpSx0PRkXBs7IgW6X
          claim_id: c_Ni8yhNcnKJujmWC4aKwbM3
          source_id: s_8f5KNJU4J6Ee7kj14XMtjC
          stance: supports
          locator: CBDB:71322
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

# 王士珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珠 | accepted |
| birth.date | 1790年 | accepted |
| death.date | 1854年 | accepted |
| bio.summary | 王士珠（1790年—1854年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71322） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士珠（CBDB 71322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71322&o=json)
