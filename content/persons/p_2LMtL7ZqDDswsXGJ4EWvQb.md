---
schema: wang-person/v1
id: p_2LMtL7ZqDDswsXGJ4EWvQb
status: active
merged_into: null
display_name: 王理
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oSYd4AAsUihzRqKwX6tLLa
        subject_person_id: p_2LMtL7ZqDDswsXGJ4EWvQb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uFPgw4P8uAKiAavnUbTdec
          claim_id: c_oSYd4AAsUihzRqKwX6tLLa
          source_id: s_1isqkz59xBv926Qm4gviFg
          stance: supports
          locator: CBDB:100805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100805）
          source: &a1
            id: s_1isqkz59xBv926Qm4gviFg
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 100805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100805&o=json
            external_identifier: CBDB:100805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8LakM94Khh2bdcn59dr151
        subject_person_id: p_2LMtL7ZqDDswsXGJ4EWvQb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1242年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DwEMTsfZFAAFwYBrUSsfn1
          claim_id: c_8LakM94Khh2bdcn59dr151
          source_id: s_1isqkz59xBv926Qm4gviFg
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
        id: c_5D1toDZhwYVLedspRWw7Ny
        subject_person_id: p_2LMtL7ZqDDswsXGJ4EWvQb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1328年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7vF9dH626Zkch4RoNKJow
          claim_id: c_5D1toDZhwYVLedspRWw7Ny
          source_id: s_1isqkz59xBv926Qm4gviFg
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
        id: c_AZH8aw5vaZxTeRrG7ygWvi
        subject_person_id: p_2LMtL7ZqDDswsXGJ4EWvQb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理（1242年—1328年），元人物。籍贯紹興路，身份为隱居不仕。（中国历代人物传记资料库 CBDB 100805）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rM_4v8r1bDT0QNoFLFxEZi
          claim_id: c_AZH8aw5vaZxTeRrG7ygWvi
          source_id: s_1isqkz59xBv926Qm4gviFg
          stance: supports
          locator: CBDB:100805
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

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| birth.date | 1242年 | accepted |
| death.date | 1328年 | accepted |
| bio.summary | 王理（1242年—1328年），元人物。籍贯紹興路，身份为隱居不仕。（中国历代人物传记资料库 CBDB 100805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 100805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100805&o=json)
