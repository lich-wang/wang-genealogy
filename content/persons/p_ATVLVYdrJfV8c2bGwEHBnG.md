---
schema: wang-person/v1
id: p_ATVLVYdrJfV8c2bGwEHBnG
status: active
merged_into: null
display_name: 王偕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNkY73KEftr2JTiCk8u58G
        subject_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EtLp47MRo9VtFXCpYj7hiL
          claim_id: c_CNkY73KEftr2JTiCk8u58G
          source_id: s_ycsk59tFkW5NgLpM7RVsVw
          stance: supports
          locator: CBDB:143165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143165）
          source: &a1
            id: s_ycsk59tFkW5NgLpM7RVsVw
            source_type: api_record
            title: 中国历代人物传记资料库：王偕（CBDB 143165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143165&o=json
            external_identifier: CBDB:143165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NXCQ9gf4HmbsvQrQoSWio1
        subject_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tuaNvB8TLqCzsJ4kr4YFKE
          claim_id: c_NXCQ9gf4HmbsvQrQoSWio1
          source_id: s_ycsk59tFkW5NgLpM7RVsVw
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
        id: c_oD6D43YHvPUoQjT4AByWya
        subject_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45gGRxsFEgGMRJjdSvbUPF
          claim_id: c_oD6D43YHvPUoQjT4AByWya
          source_id: s_ycsk59tFkW5NgLpM7RVsVw
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
        id: c_wF2RVPT2S2Hx236HXEWRUc
        subject_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
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
        - id: cs_2ga4kw2LHNUvkAyg2R6Tf6
          claim_id: c_wF2RVPT2S2Hx236HXEWRUc
          source_id: s_ycsk59tFkW5NgLpM7RVsVw
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
        id: c_szoo8uXrxVTI9TTnpcpF1W
        subject_person_id: p_ZWZ3nZDg2JiGnVuoyjy6p7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1_827EwGbP3NtMR6bP21Q
          claim_id: c_szoo8uXrxVTI9TTnpcpF1W
          source_id: s_ycsk59tFkW5NgLpM7RVsVw
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenyuan27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZWZ3nZDg2JiGnVuoyjy6p7
        status: active
        display_name: 王梁卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王偕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偕 | accepted |
| birth.date | 759年 | accepted |
| death.date | 792年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZWZ3nZDg2JiGnVuoyjy6p7 | 王梁卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偕（CBDB 143165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143165&o=json)
