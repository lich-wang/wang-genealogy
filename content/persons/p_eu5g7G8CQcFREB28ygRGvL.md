---
schema: wang-person/v1
id: p_eu5g7G8CQcFREB28ygRGvL
status: active
merged_into: null
display_name: 王自成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQJzzHG7FvRicJqGQKcdLL
        subject_person_id: p_eu5g7G8CQcFREB28ygRGvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AzdSSiQ5c4S97d1h9FY2CA
          claim_id: c_KQJzzHG7FvRicJqGQKcdLL
          source_id: s_v24YJorKXm98KFQqZd8fVH
          stance: supports
          locator: CBDB:38828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38828）
          source: &a1
            id: s_v24YJorKXm98KFQqZd8fVH
            source_type: api_record
            title: 中国历代人物传记资料库：王自成（CBDB 38828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38828&o=json
            external_identifier: CBDB:38828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BpLC1DjNGqAVW6zkiny8xc
        subject_person_id: p_eu5g7G8CQcFREB28ygRGvL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6UMm7pRuEvG9XvrVANtsK
          claim_id: c_BpLC1DjNGqAVW6zkiny8xc
          source_id: s_v24YJorKXm98KFQqZd8fVH
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
        id: c_AB3Z4QLTUoCnniWTu9FwP2
        subject_person_id: p_eu5g7G8CQcFREB28ygRGvL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1221年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vLHjq1BPfs5rdH3d2AbtKp
          claim_id: c_AB3Z4QLTUoCnniWTu9FwP2
          source_id: s_v24YJorKXm98KFQqZd8fVH
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
        id: c_UNFHMT2b713PVju2L9BHkW
        subject_person_id: p_eu5g7G8CQcFREB28ygRGvL
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
        - id: cs_syXua5y6outFhcvEDTrFzJ
          claim_id: c_UNFHMT2b713PVju2L9BHkW
          source_id: s_v24YJorKXm98KFQqZd8fVH
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
        id: c_rh5KUCCnRXKInUm3LgXtrC
        subject_person_id: p_NXxbPAGfW2NxRmG2DVsB19
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eu5g7G8CQcFREB28ygRGvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iINh6bRyZWqV-l_N72JkS4
          claim_id: c_rh5KUCCnRXKInUm3LgXtrC
          source_id: s_v24YJorKXm98KFQqZd8fVH
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NXxbPAGfW2NxRmG2DVsB19
        status: active
        display_name: 王進之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王自成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自成 | accepted |
| birth.date | 1169年 | accepted |
| death.date | 1221年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NXxbPAGfW2NxRmG2DVsB19 | 王進之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王自成（CBDB 38828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38828&o=json)
