---
schema: wang-person/v1
id: p_VzREVG9zqkmWPrWDHfGpmG
status: active
merged_into: null
display_name: 王楊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CcjBS32W2pgVqXrCGncFEz
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47V612hNWzRtQHpXi2jGzn
          claim_id: c_CcjBS32W2pgVqXrCGncFEz
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
          stance: supports
          locator: CBDB:202111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202111）
          source: &a1
            id: s_zwDHxsU2zXkinfauZuk8Ha
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 202111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202111&o=json
            external_identifier: CBDB:202111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TpsMmXy4zPMe7ugtSHGEw
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1HSLzAm6E2XK9CBGkRqUP
          claim_id: c_7TpsMmXy4zPMe7ugtSHGEw
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
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
        id: c_vV6axvWZ62snYNQEphskDu
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
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
        - id: cs_Hyppxvc8WxBokiLUZonorj
          claim_id: c_vV6axvWZ62snYNQEphskDu
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
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
        id: c_-spPFdJX8F8qXJ2oyOFgtX
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q76CzQbilqRHviKOmTCejN
          claim_id: c_-spPFdJX8F8qXJ2oyOFgtX
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CYD2TTsF_5cI6qpfLk4_zB
        subject_person_id: p_jPTs2aJkrLkZiHjYSYA58S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7n1IPLL3rTvzBmxFYr4Dy_
          claim_id: c_CYD2TTsF_5cI6qpfLk4_zB
          source_id: s_3nx7D8qK1jFr1GVzDUxr2A
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nx7D8qK1jFr1GVzDUxr2A
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 283694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json
            external_identifier: CBDB:283694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jPTs2aJkrLkZiHjYSYA58S
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楊 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| ancestors | p_jPTs2aJkrLkZiHjYSYA58S | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 283694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json)
- [中国历代人物传记资料库：王楊（CBDB 202111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202111&o=json)
- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
