---
schema: wang-person/v1
id: p_XKYpoAkffGNBucwKhcaNGH
status: active
merged_into: null
display_name: 王琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_86b2MKJ1ZgQb6PTsP6Piiw
        subject_person_id: p_XKYpoAkffGNBucwKhcaNGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bFaLRgpAqgJsV1pN92WpPn
          claim_id: c_86b2MKJ1ZgQb6PTsP6Piiw
          source_id: s_b4ZSVyDUBPeUfaGwYa5hm3
          stance: supports
          locator: CBDB:71207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71207）
          source: &a1
            id: s_b4ZSVyDUBPeUfaGwYa5hm3
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 71207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71207&o=json
            external_identifier: CBDB:71207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gaEA2fr7LNQCWN3vtvAWQk
        subject_person_id: p_XKYpoAkffGNBucwKhcaNGH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p25GNp4LvMz2MWczDr1GC1
          claim_id: c_gaEA2fr7LNQCWN3vtvAWQk
          source_id: s_b4ZSVyDUBPeUfaGwYa5hm3
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
        id: c_Qsv83kwohHwZPLJhirNDER
        subject_person_id: p_XKYpoAkffGNBucwKhcaNGH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1762年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHC9TmQFu8PdABGd4vkN6D
          claim_id: c_Qsv83kwohHwZPLJhirNDER
          source_id: s_b4ZSVyDUBPeUfaGwYa5hm3
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
        id: c_ejaJCbWajFVrdj4z2HPzK6
        subject_person_id: p_XKYpoAkffGNBucwKhcaNGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛（1681年—1762年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tbuk5zLv4wA0akU_Kx-cAL
          claim_id: c_ejaJCbWajFVrdj4z2HPzK6
          source_id: s_b4ZSVyDUBPeUfaGwYa5hm3
          stance: supports
          locator: CBDB:71207
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

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| birth.date | 1681年 | accepted |
| death.date | 1762年 | accepted |
| bio.summary | 王琛（1681年—1762年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 71207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71207&o=json)
