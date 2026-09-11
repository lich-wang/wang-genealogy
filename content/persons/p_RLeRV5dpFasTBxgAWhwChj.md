---
schema: wang-person/v1
id: p_RLeRV5dpFasTBxgAWhwChj
status: active
merged_into: null
display_name: 王雍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nqGN35B3UyTuQo7gWunAFS
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LJaWLN6C221tJSEKsk3q1J
          claim_id: c_nqGN35B3UyTuQo7gWunAFS
          source_id: s_mDsH4KjQyjxxs2ogV1fmQP
          stance: supports
          locator: CBDB:7091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7091）
          source: &a1
            id: s_mDsH4KjQyjxxs2ogV1fmQP
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 7091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7091&o=json
            external_identifier: CBDB:7091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZodDxsXFrjfLhaHaL2ntoA
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 988年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yV9iWLR7ZJAEwvAJKPu3pn
          claim_id: c_ZodDxsXFrjfLhaHaL2ntoA
          source_id: s_mDsH4KjQyjxxs2ogV1fmQP
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
        id: c_NFi2fXzM1NZeiPEcXY7nUS
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1045年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UozdY1KJRS4B6Q5pEUdEQc
          claim_id: c_NFi2fXzM1NZeiPEcXY7nUS
          source_id: s_mDsH4KjQyjxxs2ogV1fmQP
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
        id: c_c2dHeZt3qmN1ZUMvb2kSbF
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
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
        - id: cs_NA2mHBQyjdGTJY2AanFCoZ
          claim_id: c_c2dHeZt3qmN1ZUMvb2kSbF
          source_id: s_mDsH4KjQyjxxs2ogV1fmQP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cWNPb65u3m0ntD8hkOaOY2
        subject_person_id: p_RLeRV5dpFasTBxgAWhwChj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7t1JzIWlq5Zwjw1sRAV87
          claim_id: c_cWNPb65u3m0ntD8hkOaOY2
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1039：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UPXA3cLM7jkbMSu2afxwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 1788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json
            external_identifier: CBDB:1788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AZk4wkgQ7UuXpAj8THZhSe
        status: active
        display_name: 王靖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雍 | accepted |
| birth.date | 988年 | accepted |
| death.date | 1045年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AZk4wkgQ7UuXpAj8THZhSe | 王靖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 1788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json)
- [中国历代人物传记资料库：王雍（CBDB 7091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7091&o=json)
