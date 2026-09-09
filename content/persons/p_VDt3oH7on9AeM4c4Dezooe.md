---
schema: wang-person/v1
id: p_VDt3oH7on9AeM4c4Dezooe
status: active
merged_into: null
display_name: 王景美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyHKUhtf6yw4HVtvk8YGGE
        subject_person_id: p_VDt3oH7on9AeM4c4Dezooe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXkPB9TPKCj4EPvNiY9dZd
          claim_id: c_tyHKUhtf6yw4HVtvk8YGGE
          source_id: s_6Vv5pNNfdZjSQq59ZZAQY1
          stance: supports
          locator: CBDB:72069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72069）
          source: &a1
            id: s_6Vv5pNNfdZjSQq59ZZAQY1
            source_type: api_record
            title: 中国历代人物传记资料库：王景美（CBDB 72069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72069&o=json
            external_identifier: CBDB:72069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D3cAHL9DGjPEJ971WoWfp6
        subject_person_id: p_VDt3oH7on9AeM4c4Dezooe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pnUka3d1QrSKZFWA3FTcsD
          claim_id: c_D3cAHL9DGjPEJ971WoWfp6
          source_id: s_6Vv5pNNfdZjSQq59ZZAQY1
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
        id: c_uCpqwq4J5z7JDpGKo1zN3y
        subject_person_id: p_VDt3oH7on9AeM4c4Dezooe
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
        - id: cs_qyPBXpVS37TiPhCfHtCBTb
          claim_id: c_uCpqwq4J5z7JDpGKo1zN3y
          source_id: s_6Vv5pNNfdZjSQq59ZZAQY1
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

# 王景美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景美 | accepted |
| birth.date | 1790年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景美（CBDB 72069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72069&o=json)
