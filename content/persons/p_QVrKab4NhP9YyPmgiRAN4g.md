---
schema: wang-person/v1
id: p_QVrKab4NhP9YyPmgiRAN4g
status: active
merged_into: null
display_name: 王崇烈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NxNvGC5ehJ9L6ew4BNvz4c
        subject_person_id: p_QVrKab4NhP9YyPmgiRAN4g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nXk5sgB6Em3C1yBTGhoqzC
          claim_id: c_NxNvGC5ehJ9L6ew4BNvz4c
          source_id: s_REAomsRhNzDRenc5NxiDH6
          stance: supports
          locator: CBDB:517413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（517413）
          source: &a1
            id: s_REAomsRhNzDRenc5NxiDH6
            source_type: api_record
            title: 中国历代人物传记资料库：王崇烈（CBDB 517413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517413&o=json
            external_identifier: CBDB:517413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xWGeMajrc2gDXStkLA13Xw
        subject_person_id: p_QVrKab4NhP9YyPmgiRAN4g
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
        - id: cs_PJPhaHpdxwC6EJSzAoSoGU
          claim_id: c_xWGeMajrc2gDXStkLA13Xw
          source_id: s_REAomsRhNzDRenc5NxiDH6
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
        id: c_0sX2w9sEnL7NVy_9E0b7Ya
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QVrKab4NhP9YyPmgiRAN4g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPziNfXCRtB6lFfvTwXjxb
          claim_id: c_0sX2w9sEnL7NVy_9E0b7Ya
          source_id: s_REAomsRhNzDRenc5NxiDH6
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1876：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uHrCvB41gMR5178qTvwuSd
        status: active
        display_name: 王懿榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇烈 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uHrCvB41gMR5178qTvwuSd | 王懿榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇烈（CBDB 517413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517413&o=json)
