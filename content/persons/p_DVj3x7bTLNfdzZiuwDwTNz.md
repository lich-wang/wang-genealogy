---
schema: wang-person/v1
id: p_DVj3x7bTLNfdzZiuwDwTNz
status: active
merged_into: null
display_name: 王應選
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fxBWYhE8ZHQGCdSAhYBnh6
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zUjvNJTzA2NiBrRz2o54pN
          claim_id: c_fxBWYhE8ZHQGCdSAhYBnh6
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: CBDB:206025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206025）
          source: &a1
            id: s_N92t1qt6tC69nFxar3kdyC
            source_type: api_record
            title: 中国历代人物传记资料库：王應選（CBDB 206025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json
            external_identifier: CBDB:206025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_583SH8EBmBgPydmdF67Bjj
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yf7vxP7HShTVKBPfr7JmQA
          claim_id: c_583SH8EBmBgPydmdF67Bjj
          source_id: s_N92t1qt6tC69nFxar3kdyC
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
        id: c_4FH2StkdcHwpCxfMpAYgHh
        subject_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_77F4R7d2v4tH3MWyUX7b7Q
          claim_id: c_4FH2StkdcHwpCxfMpAYgHh
          source_id: s_N92t1qt6tC69nFxar3kdyC
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
        id: c_i2cnYUv5DyaBGRhmOJXKO9
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hrFkJ3WZPlubIIuUO8kMKw
          claim_id: c_i2cnYUv5DyaBGRhmOJXKO9
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ihrtmmYxDE76Umzs4UE6Cs
        status: active
        display_name: 王亮采
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_G9WKEKd2-oiCHhulONfELw
        subject_person_id: p_mK5D2X8Ro4CfZ376aeXdHw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_615pO42QSdNpGWnGjYjB7x
          claim_id: c_G9WKEKd2-oiCHhulONfELw
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mK5D2X8Ro4CfZ376aeXdHw
        status: active
        display_name: 王鋼
        merged_into_person_id: null
    - claim:
        id: c_B5yBVZ1_QHAEdLisfEE5xB
        subject_person_id: p_f9fKkrpc2WRdSRBHDWdsek
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hcTh8dlFhfo23ViNSd6A3W
          claim_id: c_B5yBVZ1_QHAEdLisfEE5xB
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f9fKkrpc2WRdSRBHDWdsek
        status: active
        display_name: 王游
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應選 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ihrtmmYxDE76Umzs4UE6Cs | 王亮采 | accepted |
| ancestors | p_mK5D2X8Ro4CfZ376aeXdHw | 王鋼 | accepted |
| ancestors | p_f9fKkrpc2WRdSRBHDWdsek | 王游 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應選（CBDB 206025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json)
