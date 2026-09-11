---
schema: wang-person/v1
id: p_VxVTJzv3gG8BG6P5j5b6D3
status: active
merged_into: null
display_name: 王田
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7NyM8T4GwDpVPQ39HRa8XU
        subject_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1LUpmZnFX22A2p1CaR1FQ
          claim_id: c_7NyM8T4GwDpVPQ39HRa8XU
          source_id: s_Vw4sGLcveeTYHYTzQJTwPY
          stance: supports
          locator: CBDB:1885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1885）
          source: &a1
            id: s_Vw4sGLcveeTYHYTzQJTwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 1885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1885&o=json
            external_identifier: CBDB:1885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nzG9uoTfrcauKCSx1fJVKM
        subject_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJBSQCdcU2mixHsHvcvWYp
          claim_id: c_nzG9uoTfrcauKCSx1fJVKM
          source_id: s_Vw4sGLcveeTYHYTzQJTwPY
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
        id: c_nuM2otTYKGpScbip1Bpw3v
        subject_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NvWiq6kaAAXa4H1Tc1KN7c
          claim_id: c_nuM2otTYKGpScbip1Bpw3v
          source_id: s_Vw4sGLcveeTYHYTzQJTwPY
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
        id: c_NYAU5wFN4CYimYTK2Vfu7R
        subject_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
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
        - id: cs_esMHdzBBAk1MZYvoYrFk33
          claim_id: c_NYAU5wFN4CYimYTK2Vfu7R
          source_id: s_Vw4sGLcveeTYHYTzQJTwPY
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
        id: c_RWPBOlcKYMFycHiXGQfNW2
        subject_person_id: p_7YfpL25vUrnwFFcc6SBg38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VxVTJzv3gG8BG6P5j5b6D3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHa2X7UFGeBcVbK4O2VYk9
          claim_id: c_RWPBOlcKYMFycHiXGQfNW2
          source_id: s_mQaAmDqENzDB2HX8BBBFyG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，594：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQaAmDqENzDB2HX8BBBFyG
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7YfpL25vUrnwFFcc6SBg38
        status: active
        display_name: 王博文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王田 | accepted |
| birth.date | 991年 | accepted |
| death.date | 1065年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7YfpL25vUrnwFFcc6SBg38 | 王博文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
- [中国历代人物传记资料库：王田（CBDB 1885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1885&o=json)
