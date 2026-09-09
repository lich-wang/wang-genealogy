---
schema: wang-person/v1
id: p_Twe1TZKJwAM5y4NPmBAiBC
status: active
merged_into: null
display_name: 王鞏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JZhTNUs6qGpiGPhBfYCH8R
        subject_person_id: p_Twe1TZKJwAM5y4NPmBAiBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ai3HgNf4n6G5W3tFWb6Pi1
          claim_id: c_JZhTNUs6qGpiGPhBfYCH8R
          source_id: s_wRFmG3gEHyKKPt71DcyHad
          stance: supports
          locator: CBDB:134094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134094）
          source: &a1
            id: s_wRFmG3gEHyKKPt71DcyHad
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏（CBDB 134094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134094&o=json
            external_identifier: CBDB:134094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iz9j5bugAojGEvPTPypAFj
        subject_person_id: p_Twe1TZKJwAM5y4NPmBAiBC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1063年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iEa6zqgriMuNd9m8c2TCPH
          claim_id: c_iz9j5bugAojGEvPTPypAFj
          source_id: s_wRFmG3gEHyKKPt71DcyHad
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
        id: c_bvn4CDBsTVb927oZ22L6R6
        subject_person_id: p_Twe1TZKJwAM5y4NPmBAiBC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJQXBgKoqk7fsEvbWZ52uc
          claim_id: c_bvn4CDBsTVb927oZ22L6R6
          source_id: s_wRFmG3gEHyKKPt71DcyHad
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
        id: c_QyvUotVHXjL1KE7VA7rHAn
        subject_person_id: p_Twe1TZKJwAM5y4NPmBAiBC
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
        - id: cs_3UTmKy7Fb9yqRFEdApwhAz
          claim_id: c_QyvUotVHXjL1KE7VA7rHAn
          source_id: s_wRFmG3gEHyKKPt71DcyHad
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

# 王鞏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鞏 | accepted |
| birth.date | 1063年 | accepted |
| death.date | 1119年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鞏（CBDB 134094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134094&o=json)
