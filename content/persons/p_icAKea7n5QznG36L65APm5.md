---
schema: wang-person/v1
id: p_icAKea7n5QznG36L65APm5
status: active
merged_into: null
display_name: 王均
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zgDnhDQwudQWaQhZqqbNGY
        subject_person_id: p_icAKea7n5QznG36L65APm5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_55iDxND2t4PK7FDoabW7z2
          claim_id: c_zgDnhDQwudQWaQhZqqbNGY
          source_id: s_UDBheMdrLRo6Aq3Fu9DogN
          stance: supports
          locator: CBDB:100665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100665）
          source: &a1
            id: s_UDBheMdrLRo6Aq3Fu9DogN
            source_type: api_record
            title: 中国历代人物传记资料库：王均（CBDB 100665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100665&o=json
            external_identifier: CBDB:100665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ikvRDWpzKeSa3pb68Jm963
        subject_person_id: p_icAKea7n5QznG36L65APm5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1227年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyenJW1i6yLG5dxKKGqQ82
          claim_id: c_ikvRDWpzKeSa3pb68Jm963
          source_id: s_UDBheMdrLRo6Aq3Fu9DogN
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
        id: c_PTEDZA9BQLQdMX71e6fChy
        subject_person_id: p_icAKea7n5QznG36L65APm5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Xitgd6FRSW2wqXq6mitky
          claim_id: c_PTEDZA9BQLQdMX71e6fChy
          source_id: s_UDBheMdrLRo6Aq3Fu9DogN
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
        id: c_K8z6C4z3CoZ26EE21vhaFn
        subject_person_id: p_icAKea7n5QznG36L65APm5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均（1227年—1290年），元人物。籍贯襄陽路，曾任郎中、行中書省員外郎、行中書省掾。（中国历代人物传记资料库 CBDB 100665）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lwg8AfGzIWzMfn6vcDqXB6
          claim_id: c_K8z6C4z3CoZ26EE21vhaFn
          source_id: s_UDBheMdrLRo6Aq3Fu9DogN
          stance: supports
          locator: CBDB:100665
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

# 王均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王均 | accepted |
| birth.date | 1227年 | accepted |
| death.date | 1290年 | accepted |
| bio.summary | 王均（1227年—1290年），元人物。籍贯襄陽路，曾任郎中、行中書省員外郎、行中書省掾。（中国历代人物传记资料库 CBDB 100665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王均（CBDB 100665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100665&o=json)
