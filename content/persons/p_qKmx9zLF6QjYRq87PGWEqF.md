---
schema: wang-person/v1
id: p_qKmx9zLF6QjYRq87PGWEqF
status: active
merged_into: null
display_name: 王戡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iECTwUF2aBjwgNEUNQPMGg
        subject_person_id: p_qKmx9zLF6QjYRq87PGWEqF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsuXAvnKkvrGQ6HNqKyGN8
          claim_id: c_iECTwUF2aBjwgNEUNQPMGg
          source_id: s_tGiCfcRX6WZBPLYMWrEcJN
          stance: supports
          locator: CBDB:192237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192237）
          source: &a1
            id: s_tGiCfcRX6WZBPLYMWrEcJN
            source_type: api_record
            title: 中国历代人物传记资料库：王戡（CBDB 192237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192237&o=json
            external_identifier: CBDB:192237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ypz8BhmK1ZbT6scsetTgCt
        subject_person_id: p_qKmx9zLF6QjYRq87PGWEqF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eJyfkJt5Q25jzA4Gdc6bwJ
          claim_id: c_Ypz8BhmK1ZbT6scsetTgCt
          source_id: s_tGiCfcRX6WZBPLYMWrEcJN
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
        id: c_Pa5aT2sk9rPmM9RHsboaC8
        subject_person_id: p_qKmx9zLF6QjYRq87PGWEqF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AB8rYDFRkbNEitK738SHK9
          claim_id: c_Pa5aT2sk9rPmM9RHsboaC8
          source_id: s_tGiCfcRX6WZBPLYMWrEcJN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王戡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王戡 | accepted |
| death.date | 844年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王戡（CBDB 192237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192237&o=json)
