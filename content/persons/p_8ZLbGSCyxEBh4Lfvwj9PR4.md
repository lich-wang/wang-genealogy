---
schema: wang-person/v1
id: p_8ZLbGSCyxEBh4Lfvwj9PR4
status: active
merged_into: null
display_name: 王廷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CpKWPn5mhEuSa7SD2bhhEk
        subject_person_id: p_8ZLbGSCyxEBh4Lfvwj9PR4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2jdkAeXu7KXBD9bGbCaek
          claim_id: c_CpKWPn5mhEuSa7SD2bhhEk
          source_id: s_DFCprvg6rhThB5Qx8SM4Me
          stance: supports
          locator: CBDB:117577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117577）
          source: &a1
            id: s_DFCprvg6rhThB5Qx8SM4Me
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 117577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117577&o=json
            external_identifier: CBDB:117577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_33GRUqJGCaGszfR3w44LGL
        subject_person_id: p_8ZLbGSCyxEBh4Lfvwj9PR4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gjzttWGKBCEfLPMmsN7157
          claim_id: c_33GRUqJGCaGszfR3w44LGL
          source_id: s_DFCprvg6rhThB5Qx8SM4Me
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
        id: c_6Ay6pA8W6kfM_agg1BpBpX
        subject_person_id: p_1vBCPUgRpVvobPPkBz7XUQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZLbGSCyxEBh4Lfvwj9PR4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHbp9I7uT20EZ9zwlxlRbZ
          claim_id: c_6Ay6pA8W6kfM_agg1BpBpX
          source_id: s_dKCY1Jzny5vGF2C9SvxsVp
          stance: supports
          locator: 元人傳記資料索引，18631：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dKCY1Jzny5vGF2C9SvxsVp
            source_type: api_record
            title: 中国历代人物传记资料库：王榮祖（CBDB 117601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117601&o=json
            external_identifier: CBDB:117601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vBCPUgRpVvobPPkBz7XUQ
        status: active
        display_name: 王榮祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vBCPUgRpVvobPPkBz7XUQ | 王榮祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮祖（CBDB 117601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117601&o=json)
- [中国历代人物传记资料库：王廷（CBDB 117577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117577&o=json)
