---
schema: wang-person/v1
id: p_8czeh974Qo3btMNcDRFxT5
status: active
merged_into: null
display_name: 王宗祐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DCcpXAbdLFVHozx2Lh3nw
        subject_person_id: p_8czeh974Qo3btMNcDRFxT5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tLTmBFfHXQZLLM7TGKXr8j
          claim_id: c_6DCcpXAbdLFVHozx2Lh3nw
          source_id: s_vQE758QkuyUW4YADqSnh7h
          stance: supports
          locator: CBDB:69278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69278）
          source: &a1
            id: s_vQE758QkuyUW4YADqSnh7h
            source_type: api_record
            title: 中国历代人物传记资料库：王宗祐（CBDB 69278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69278&o=json
            external_identifier: CBDB:69278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jw4tt59HQMXF3WoYofHuxT
        subject_person_id: p_8czeh974Qo3btMNcDRFxT5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JPLtiChuL7BDe9gooMnc2e
          claim_id: c_jw4tt59HQMXF3WoYofHuxT
          source_id: s_vQE758QkuyUW4YADqSnh7h
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
        id: c_UVpxiXxU4m8Nb4CQkvXgiT
        subject_person_id: p_8czeh974Qo3btMNcDRFxT5
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
        - id: cs_kDs8THF5ve85vfgKiVau2v
          claim_id: c_UVpxiXxU4m8Nb4CQkvXgiT
          source_id: s_vQE758QkuyUW4YADqSnh7h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r5mMhgg8zp8KWX6cHnagJj
        subject_person_id: p_MLjvQJGgLxTU5iBjM66S3c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8czeh974Qo3btMNcDRFxT5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F2_ZoK_yWBhCmVUmY7mWsk
          claim_id: c_r5mMhgg8zp8KWX6cHnagJj
          source_id: s_vQE758QkuyUW4YADqSnh7h
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12981：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MLjvQJGgLxTU5iBjM66S3c
        status: active
        display_name: 王呈瑞
        merged_into_person_id: null
  children:
    - claim:
        id: c_tGSPsHbzA5a8x5ZglQMw1l
        subject_person_id: p_8czeh974Qo3btMNcDRFxT5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6PkMv7VBKQJZFPnWqTcQ6X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vpx10dOdprQ0oiKZbHKMKB
          claim_id: c_tGSPsHbzA5a8x5ZglQMw1l
          source_id: s_vQE758QkuyUW4YADqSnh7h
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12981：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6PkMv7VBKQJZFPnWqTcQ6X
        status: active
        display_name: 王振基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗祐 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MLjvQJGgLxTU5iBjM66S3c | 王呈瑞 | accepted |
| children | p_6PkMv7VBKQJZFPnWqTcQ6X | 王振基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗祐（CBDB 69278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69278&o=json)
