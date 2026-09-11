---
schema: wang-person/v1
id: p_K9CV69LndWNdhX8Sejx4tC
status: active
merged_into: null
display_name: 王士龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cW2wjKeo5QEKrs8jsdmSL8
        subject_person_id: p_K9CV69LndWNdhX8Sejx4tC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LRrZgJxV9J4TPKR4te9x4G
          claim_id: c_cW2wjKeo5QEKrs8jsdmSL8
          source_id: s_Q4CRMfKyEDD2Qs7ig2VXkJ
          stance: supports
          locator: CBDB:122295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122295）
          source: &a1
            id: s_Q4CRMfKyEDD2Qs7ig2VXkJ
            source_type: api_record
            title: 中国历代人物传记资料库：王士龍（CBDB 122295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122295&o=json
            external_identifier: CBDB:122295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rqiDh9P8z5txNyjAPhtdy4
        subject_person_id: p_K9CV69LndWNdhX8Sejx4tC
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
        - id: cs_hvLhpnFV5o1rBRona8HCpC
          claim_id: c_rqiDh9P8z5txNyjAPhtdy4
          source_id: s_Q4CRMfKyEDD2Qs7ig2VXkJ
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
        id: c_M-cflAnnXOD75mXRRIyFV3
        subject_person_id: p_K9CV69LndWNdhX8Sejx4tC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hgfrs7sQ1QVJHjzXStgS27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZNHqroPkbf9n0oFmYlMxa
          claim_id: c_M-cflAnnXOD75mXRRIyFV3
          source_id: s_VtRb71HrM1BZPcRh9sD7Dc
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4689：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VtRb71HrM1BZPcRh9sD7Dc
            source_type: api_record
            title: 中国历代人物传记资料库：王嬌鸞（CBDB 122285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122285&o=json
            external_identifier: CBDB:122285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hgfrs7sQ1QVJHjzXStgS27
        status: active
        display_name: 王嬌鸞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士龍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Hgfrs7sQ1QVJHjzXStgS27 | 王嬌鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嬌鸞（CBDB 122285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122285&o=json)
- [中国历代人物传记资料库：王士龍（CBDB 122295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122295&o=json)
