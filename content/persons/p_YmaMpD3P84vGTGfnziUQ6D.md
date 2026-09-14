---
schema: wang-person/v1
id: p_YmaMpD3P84vGTGfnziUQ6D
status: active
merged_into: null
display_name: 王鉉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VSN6UjSB9UUiUXF21W2rPt
        subject_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsghkYSa6eGt3SN78XE9a6
          claim_id: c_VSN6UjSB9UUiUXF21W2rPt
          source_id: s_iGseEPduq9MM6iwxFdMzYm
          stance: supports
          locator: CBDB:261855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261855）
          source: &a1
            id: s_iGseEPduq9MM6iwxFdMzYm
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 261855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json
            external_identifier: CBDB:261855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DYPepeFm7e2CTiaYxKsyvt
        subject_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aovE1Mn1bTSfEcN3tN8sVx
          claim_id: c_DYPepeFm7e2CTiaYxKsyvt
          source_id: s_iGseEPduq9MM6iwxFdMzYm
          stance: supports
          locator: CBDB:261855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7rFeKn1glyRK3K_p3AQIZB
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3QIgilV_BfYpZW4qMg6HS
          claim_id: c_7rFeKn1glyRK3K_p3AQIZB
          source_id: s_DEixL5-eiAItHrG7xaX5Ap
          stance: supports
          locator: CBDB：兄弟 王錦（200715）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉉 与 王錦 为同胞（CBDB 记「弟」），王錦 之父／母即 王鉉 之父／母。
          source:
            id: s_DEixL5-eiAItHrG7xaX5Ap
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 261855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json
            external_identifier: CBDB:261855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JgQNSMUumi8nS4UFjk3Ak
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aut5ZdD0FiKQ4uBuh1GN6s
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YmaMpD3P84vGTGfnziUQ6D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AFzQmW6WHSbh4Oqc1dRtBq
          claim_id: c_aut5ZdD0FiKQ4uBuh1GN6s
          source_id: s_DEixL5-eiAItHrG7xaX5Ap
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200715 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DEixL5-eiAItHrG7xaX5Ap
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 261855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json
            external_identifier: CBDB:261855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nQdqDRU7gCLFFCzrrRkDE
        status: active
        display_name: 王錦
        merged_into_person_id: null
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JgQNSMUumi8nS4UFjk3Ak | 王通 | accepted |
| other | p_7nQdqDRU7gCLFFCzrrRkDE | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 261855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json)
