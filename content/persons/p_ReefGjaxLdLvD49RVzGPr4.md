---
schema: wang-person/v1
id: p_ReefGjaxLdLvD49RVzGPr4
status: active
merged_into: null
display_name: 王佑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhzB6YSh1BPR7fo4SjxN3W
        subject_person_id: p_ReefGjaxLdLvD49RVzGPr4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UcuwfztTXCJsyhz6MB3imL
          claim_id: c_qhzB6YSh1BPR7fo4SjxN3W
          source_id: s_UgmyGRnE82ct8aYuvfRonr
          stance: supports
          locator: CBDB:297024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297024）
          source: &a1
            id: s_UgmyGRnE82ct8aYuvfRonr
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 297024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json
            external_identifier: CBDB:297024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yi8k5N2sQTCg5YnTAbc3qh
        subject_person_id: p_ReefGjaxLdLvD49RVzGPr4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297024）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jXN8mDANNrbs7HxMjn4K6T
          claim_id: c_yi8k5N2sQTCg5YnTAbc3qh
          source_id: s_UgmyGRnE82ct8aYuvfRonr
          stance: supports
          locator: CBDB:297024
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sXdxG1NbEngTRgjYc2KEZk
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ReefGjaxLdLvD49RVzGPr4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HyOhz1x7BOATROFe_AVBzG
          claim_id: c_sXdxG1NbEngTRgjYc2KEZk
          source_id: s_AOa92-EOA1KRApV0gNVe_i
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佑 之父／母。
          source:
            id: s_AOa92-EOA1KRApV0gNVe_i
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 297024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json
            external_identifier: CBDB:297024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jl7j4zGdPel5rZRFqs7pVF
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ReefGjaxLdLvD49RVzGPr4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dxdzn9R7V-QkpzyLN-jX6a
          claim_id: c_jl7j4zGdPel5rZRFqs7pVF
          source_id: s_AOa92-EOA1KRApV0gNVe_i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AOa92-EOA1KRApV0gNVe_i
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 297024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json
            external_identifier: CBDB:297024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| other | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 297024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json)
