---
schema: wang-person/v1
id: p_Hpkb5p14cGd4ZGWstBx7hV
status: active
merged_into: null
display_name: 王晤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxL8kN86wwi2LVzokUYyFJ
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SWgeoeEzTmrreXaSGSSAd7
          claim_id: c_MxL8kN86wwi2LVzokUYyFJ
          source_id: s_idVqaUxQv9h9182j1mi7EL
          stance: supports
          locator: CBDB:191809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191809）
          source: &a1
            id: s_idVqaUxQv9h9182j1mi7EL
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 191809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json
            external_identifier: CBDB:191809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_91KjvfhM64Aud6YPACvcXs
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3aYSku99KpJP2gKm2G1Eq
          claim_id: c_91KjvfhM64Aud6YPACvcXs
          source_id: s_idVqaUxQv9h9182j1mi7EL
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
        id: c_GuSqiyLd7Rm3bcWvK5Q3uR
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
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
        - id: cs_SCeAr2NyEMGayk9K5JjkDZ
          claim_id: c_GuSqiyLd7Rm3bcWvK5Q3uR
          source_id: s_idVqaUxQv9h9182j1mi7EL
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
        id: c_UK0CfDiPPErGw1kkrdtMYR
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5xuS9KuBCdZJ3SiNJXQuXd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5ensFUw06qcSOFg26SZCW
          claim_id: c_UK0CfDiPPErGw1kkrdtMYR
          source_id: s_aA6Gp6aLH7DnMqVRdDgtuP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aA6Gp6aLH7DnMqVRdDgtuP
            source_type: api_record
            title: 中国历代人物传记资料库：王湘（CBDB 191815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191815&o=json
            external_identifier: CBDB:191815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5xuS9KuBCdZJ3SiNJXQuXd
        status: active
        display_name: 王湘
        merged_into_person_id: null
    - claim:
        id: c_pWLx7Ma-PT97xupSq4XEwJ
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B66VrJAyU3hBdXV8CQML3u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCYJthTBqSHh0cjBBCIkms
          claim_id: c_pWLx7Ma-PT97xupSq4XEwJ
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qWP13BHjavAoPZxayrpxCb
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 144925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json
            external_identifier: CBDB:144925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B66VrJAyU3hBdXV8CQML3u
        status: active
        display_name: 王渭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晤 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5xuS9KuBCdZJ3SiNJXQuXd | 王湘 | accepted |
| children | p_B66VrJAyU3hBdXV8CQML3u | 王渭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 144925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json)
- [中国历代人物传记资料库：王晤（CBDB 191809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json)
- [中国历代人物传记资料库：王湘（CBDB 191815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191815&o=json)
