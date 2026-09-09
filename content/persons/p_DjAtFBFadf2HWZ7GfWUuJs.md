---
schema: wang-person/v1
id: p_DjAtFBFadf2HWZ7GfWUuJs
status: active
merged_into: null
display_name: 王繼洛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egmtqbyvbN1VLKiHGNfcci
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FfDTfZU2MLYsYuHzXi1ak5
          claim_id: c_egmtqbyvbN1VLKiHGNfcci
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: CBDB:203382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203382）
          source: &a1
            id: s_g3jYSKyZuQxGcb6EfTExYw
            source_type: api_record
            title: 中国历代人物传记资料库：王繼洛（CBDB 203382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json
            external_identifier: CBDB:203382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C7Pu4U8czf2779cY62Mkrk
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ph5nmeziB9FSYSxyjpuPYC
          claim_id: c_C7Pu4U8czf2779cY62Mkrk
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ikkKsW2TfDP2HA3uxdDp4z
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rGnozQFv8ezLAPWUbEM3Ke
          claim_id: c_ikkKsW2TfDP2HA3uxdDp4z
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
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

# 王繼洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼洛 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼洛（CBDB 203382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json)
