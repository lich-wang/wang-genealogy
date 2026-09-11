---
schema: wang-person/v1
id: p_h3CXNojG2YSiYzwGfbYd94
status: active
merged_into: null
display_name: 王開基
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y8eNchRk6Z4JTB79kP4h52
        subject_person_id: p_h3CXNojG2YSiYzwGfbYd94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TJv5RQMfdi8yCRcmFNSPB2
          claim_id: c_Y8eNchRk6Z4JTB79kP4h52
          source_id: s_pjbohRmn14AmGLZYLtFdvM
          stance: supports
          locator: CBDB:558202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558202）
          source: &a1
            id: s_pjbohRmn14AmGLZYLtFdvM
            source_type: api_record
            title: 中国历代人物传记资料库：王開基（CBDB 558202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558202&o=json
            external_identifier: CBDB:558202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xW7cYr7uDi8o7R4s8WDWon
        subject_person_id: p_h3CXNojG2YSiYzwGfbYd94
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
        - id: cs_bbRdxGBa3121sWSvxxv8tq
          claim_id: c_xW7cYr7uDi8o7R4s8WDWon
          source_id: s_pjbohRmn14AmGLZYLtFdvM
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
        id: c_ZTmnOuI8wMYXVKCcmXk00s
        subject_person_id: p_h3CXNojG2YSiYzwGfbYd94
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkFBHsgWrGkjjoSdDCeCAZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gAn90afhcoc1poVsgVNwRu
          claim_id: c_ZTmnOuI8wMYXVKCcmXk00s
          source_id: s_pjbohRmn14AmGLZYLtFdvM
          stance: supports
          locator: 南陽府志，lgid=878826：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QkFBHsgWrGkjjoSdDCeCAZ
        status: active
        display_name: 王鈵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_408oaIIPFPQzfmgkzhocHA
        subject_person_id: p_h3CXNojG2YSiYzwGfbYd94
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7sAr5tfnkYP9HJqJcGrP2i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vLEO64Bn22xgaP_CyLyVgO
          claim_id: c_408oaIIPFPQzfmgkzhocHA
          source_id: s_TJg_9K26jzxT_inmgccLoA
          stance: supports
          locator: 南陽府志，lgid=878826：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TJg_9K26jzxT_inmgccLoA
            source_type: api_record
            title: 中国历代人物传记资料库：杜氏(王開基妻)（CBDB 558203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558203&o=json
            external_identifier: CBDB:558203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7sAr5tfnkYP9HJqJcGrP2i
        status: active
        display_name: 杜氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王開基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開基 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QkFBHsgWrGkjjoSdDCeCAZ | 王鈵 | accepted |
| spouses | p_7sAr5tfnkYP9HJqJcGrP2i | 杜氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：杜氏(王開基妻)（CBDB 558203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558203&o=json)
- [中国历代人物传记资料库：王開基（CBDB 558202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558202&o=json)
