---
schema: wang-person/v1
id: p_vLSVF2E29bhtHRC3R3t1gA
status: active
merged_into: null
display_name: 王朗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BFwUGag4ciSn8MRKemqxc6
        subject_person_id: p_vLSVF2E29bhtHRC3R3t1gA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bAZk5tPdiKZrWy7NrF3CA1
          claim_id: c_BFwUGag4ciSn8MRKemqxc6
          source_id: s_dwGpgP2t8366w8JuD13FTv
          stance: supports
          locator: CBDB:139242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139242）
          source: &a1
            id: s_dwGpgP2t8366w8JuD13FTv
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 139242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139242&o=json
            external_identifier: CBDB:139242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u2ce2Eujtmma3Gv74U3avh
        subject_person_id: p_vLSVF2E29bhtHRC3R3t1gA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 593年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YAxJ7vB6ip9zH7GMNxo5j7
          claim_id: c_u2ce2Eujtmma3Gv74U3avh
          source_id: s_dwGpgP2t8366w8JuD13FTv
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
        id: c_vUzaaE5jwh5VDB8aPMAtwm
        subject_person_id: p_vLSVF2E29bhtHRC3R3t1gA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy16Lg1W72aCmBDe4puCtS
          claim_id: c_vUzaaE5jwh5VDB8aPMAtwm
          source_id: s_dwGpgP2t8366w8JuD13FTv
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
        id: c_PGtDDWLe8JbA4zWTA9xHAx
        subject_person_id: p_vLSVF2E29bhtHRC3R3t1gA
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
        - id: cs_CyEv8Pkbn5LYRoqGWktAKC
          claim_id: c_PGtDDWLe8JbA4zWTA9xHAx
          source_id: s_dwGpgP2t8366w8JuD13FTv
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

# 王朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 | accepted |
| birth.date | 593年 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朗（CBDB 139242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139242&o=json)
