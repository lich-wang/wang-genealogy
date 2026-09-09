---
schema: wang-person/v1
id: p_gDuFEfd7yGt11bzV1vVuLz
status: active
merged_into: null
display_name: 王律
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iqQLri4pxkWieLehwyfk8a
        subject_person_id: p_gDuFEfd7yGt11bzV1vVuLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王律
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ceYRGhgJnRrTBbBYcgNLha
          claim_id: c_iqQLri4pxkWieLehwyfk8a
          source_id: s_VNwRdgHBHW637MBdp8jAYH
          stance: supports
          locator: CBDB:38074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38074）
          source: &a1
            id: s_VNwRdgHBHW637MBdp8jAYH
            source_type: api_record
            title: 中国历代人物传记资料库：王律（CBDB 38074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38074&o=json
            external_identifier: CBDB:38074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xJi5AKC13Ja2TW9gMcTZcP
        subject_person_id: p_gDuFEfd7yGt11bzV1vVuLz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1018年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K2ATGLKqpuJYrFVFoxV8F8
          claim_id: c_xJi5AKC13Ja2TW9gMcTZcP
          source_id: s_VNwRdgHBHW637MBdp8jAYH
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
        id: c_tii2vqfTpWUX8nvALhkQ4j
        subject_person_id: p_gDuFEfd7yGt11bzV1vVuLz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gvY1oxDJvDfd4kr64pk3o
          claim_id: c_tii2vqfTpWUX8nvALhkQ4j
          source_id: s_VNwRdgHBHW637MBdp8jAYH
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
        id: c_ys2672mdXex2BLTxG617rr
        subject_person_id: p_gDuFEfd7yGt11bzV1vVuLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z8UyQaVMbSrBRNggjByGcL
          claim_id: c_ys2672mdXex2BLTxG617rr
          source_id: s_VNwRdgHBHW637MBdp8jAYH
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

# 王律

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王律 | accepted |
| birth.date | 1018年 | accepted |
| death.date | 1078年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王律（CBDB 38074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38074&o=json)
