---
schema: wang-person/v1
id: p_XR5LUae2NCUcyYpQzrdDhk
status: active
merged_into: null
display_name: 王希樂
cbdb_id: 232997
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GXoJzu8s11nsLNs3Q5ac21
        subject_person_id: p_XR5LUae2NCUcyYpQzrdDhk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希樂，明人物。籍贯通許。（中国历代人物传记资料库 CBDB 232997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tLopD3_LxGwLlTpHmN6-WU
          claim_id: c_GXoJzu8s11nsLNs3Q5ac21
          source_id: s_hUfM2LnFg51VWamZonorw5
          stance: supports
          locator: CBDB:232997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hUfM2LnFg51VWamZonorw5
            source_type: api_record
            title: 中国历代人物传记资料库：王希樂（CBDB 232997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232997&o=json
            external_identifier: CBDB:232997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4spsLqrBE7QAVtr4kPA3Du
        subject_person_id: p_XR5LUae2NCUcyYpQzrdDhk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8cACJAFUNrSFxj76jb2Kkh
          claim_id: c_4spsLqrBE7QAVtr4kPA3Du
          source_id: s_hUfM2LnFg51VWamZonorw5
          stance: supports
          locator: CBDB:232997
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WJGiJIRpArMLiXclggci9P
        subject_person_id: p_XR5LUae2NCUcyYpQzrdDhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttkW0plTBCaW52imnC33wV
          claim_id: c_WJGiJIRpArMLiXclggci9P
          source_id: s_hUfM2LnFg51VWamZonorw5
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hUfM2LnFg51VWamZonorw5
            source_type: api_record
            title: 中国历代人物传记资料库：王希樂（CBDB 232997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232997&o=json
            external_identifier: CBDB:232997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xFXiQ1xtVHC3hhy55VEnSX
        status: active
        display_name: 王順行
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希樂，明人物。籍贯通許。（中国历代人物传记资料库 CBDB 232997） | accepted |
| name.primary | 王希樂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xFXiQ1xtVHC3hhy55VEnSX | 王順行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希樂（CBDB 232997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232997&o=json)
