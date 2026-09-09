---
schema: wang-person/v1
id: p_VxSRV8LPBFFKntsqFCx12o
status: active
merged_into: null
display_name: 王喜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNgFmfZzF2LC4jyBrAEsec
        subject_person_id: p_VxSRV8LPBFFKntsqFCx12o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2XtPDKF7d6sH216HnnyZ8L
          claim_id: c_GNgFmfZzF2LC4jyBrAEsec
          source_id: s_98w11ffpRxE5zHYKTLeaKp
          stance: supports
          locator: CBDB:38387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38387）
          source: &a1
            id: s_98w11ffpRxE5zHYKTLeaKp
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 38387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38387&o=json
            external_identifier: CBDB:38387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HyCAAmqE34EdV9p4pJ9agU
        subject_person_id: p_VxSRV8LPBFFKntsqFCx12o
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
        - id: cs_Ci2dZDjVxWs6eRnTTjaMEF
          claim_id: c_HyCAAmqE34EdV9p4pJ9agU
          source_id: s_98w11ffpRxE5zHYKTLeaKp
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

# 王喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜（CBDB 38387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38387&o=json)
