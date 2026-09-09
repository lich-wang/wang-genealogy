---
schema: wang-person/v1
id: p_rV56cD5Ah5aGuEGQK6fKDN
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krfVKS5zUrEsJ1iJpfA45R
        subject_person_id: p_rV56cD5Ah5aGuEGQK6fKDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xG1aY1Vw2do1iGzd7PaDza
          claim_id: c_krfVKS5zUrEsJ1iJpfA45R
          source_id: s_8P3XDixtU1Y7E9irSRFrKZ
          stance: supports
          locator: CBDB:71161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71161）
          source: &a1
            id: s_8P3XDixtU1Y7E9irSRFrKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 71161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71161&o=json
            external_identifier: CBDB:71161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7GuZTinm68e5RGDsY5e4iQ
        subject_person_id: p_rV56cD5Ah5aGuEGQK6fKDN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YYH9v7xZWG2TErVZzTEWw
          claim_id: c_7GuZTinm68e5RGDsY5e4iQ
          source_id: s_8P3XDixtU1Y7E9irSRFrKZ
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
        id: c_LNa2Gy8PKz52hSmZaLHKEF
        subject_person_id: p_rV56cD5Ah5aGuEGQK6fKDN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1746年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1RgCSKSJNTeYeZbUpnBJ7k
          claim_id: c_LNa2Gy8PKz52hSmZaLHKEF
          source_id: s_8P3XDixtU1Y7E9irSRFrKZ
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
        id: c_u1WTyRp1Y1yvtWDb4htYxk
        subject_person_id: p_rV56cD5Ah5aGuEGQK6fKDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nDLeUCiz3MCtBFPK1GBQft
          claim_id: c_u1WTyRp1Y1yvtWDb4htYxk
          source_id: s_8P3XDixtU1Y7E9irSRFrKZ
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| birth.date | 1669年 | accepted |
| death.date | 1746年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 71161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71161&o=json)
