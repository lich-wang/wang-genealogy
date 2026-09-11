---
schema: wang-person/v1
id: p_tq3U7shta2xfMiCUuLV3Jc
status: active
merged_into: null
display_name: 王福徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MpTjh2gPZqpA8P82586qjY
        subject_person_id: p_tq3U7shta2xfMiCUuLV3Jc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zta6ojTTZfQHv6LuWq4eCq
          claim_id: c_MpTjh2gPZqpA8P82586qjY
          source_id: s_X9QJyqpK1GXn89F4org9sH
          stance: supports
          locator: CBDB:72140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72140）
          source: &a1
            id: s_X9QJyqpK1GXn89F4org9sH
            source_type: api_record
            title: 中国历代人物传记资料库：王福徵（CBDB 72140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72140&o=json
            external_identifier: CBDB:72140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LNQtPmkGWEebH8NUnQGWY1
        subject_person_id: p_tq3U7shta2xfMiCUuLV3Jc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1817年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37HQ1iEWnKSKaGYK6mSnfY
          claim_id: c_LNQtPmkGWEebH8NUnQGWY1
          source_id: s_X9QJyqpK1GXn89F4org9sH
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
        id: c_HjPGSSsbgEbndffvo83otX
        subject_person_id: p_tq3U7shta2xfMiCUuLV3Jc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1876年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ULKMYKyXojxsC1krP5QP2G
          claim_id: c_HjPGSSsbgEbndffvo83otX
          source_id: s_X9QJyqpK1GXn89F4org9sH
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
        id: c_ELKyDiAdjit4LR8p8M4BZC
        subject_person_id: p_tq3U7shta2xfMiCUuLV3Jc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福徵（1817年—1876年），清人物。籍贯韓城。（中国历代人物传记资料库 CBDB 72140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6-KYQpXWitph-OVxP1X-lH
          claim_id: c_ELKyDiAdjit4LR8p8M4BZC
          source_id: s_X9QJyqpK1GXn89F4org9sH
          stance: supports
          locator: CBDB:72140
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

# 王福徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福徵 | accepted |
| birth.date | 1817年 | accepted |
| death.date | 1876年 | accepted |
| bio.summary | 王福徵（1817年—1876年），清人物。籍贯韓城。（中国历代人物传记资料库 CBDB 72140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福徵（CBDB 72140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72140&o=json)
