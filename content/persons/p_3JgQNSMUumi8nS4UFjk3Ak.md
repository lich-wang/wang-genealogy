---
schema: wang-person/v1
id: p_3JgQNSMUumi8nS4UFjk3Ak
status: active
merged_into: null
display_name: 王通
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qEfcY7V1FeFKxbkAVWm5na
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qD9gMYduqSsRs31zA6NdM1
          claim_id: c_qEfcY7V1FeFKxbkAVWm5na
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: CBDB:261851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261851）
          source: &a1
            id: s_Y1jKFycxFKXmLJvd3427y6
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 261851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json
            external_identifier: CBDB:261851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3tBozmxk8BizWJa8wP9a8E
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dBe1hWdkhrGOQDTTiUA--e
          claim_id: c_3tBozmxk8BizWJa8wP9a8E
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: CBDB:261851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_25JmxVronWt1CCrwOVGsnH
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCWNpYtH5_0HFHbNp6LYt-
          claim_id: c_25JmxVronWt1CCrwOVGsnH
          source_id: s_Y1jKFycxFKXmLJvd3427y6
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7nQdqDRU7gCLFFCzrrRkDE
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_hz4Rvl1WWcLI4jxl0ll8wX
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gu1VbpWsnqmLpKXriFxvq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5Z_m8O-upMTkZLuAxMvHx
          claim_id: c_hz4Rvl1WWcLI4jxl0ll8wX
          source_id: s_x0ANkC0KfEDtzaqurGcPOr
          stance: supports
          locator: CBDB：兄弟 王錦（200715）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鋼 与 王錦 为同胞（CBDB 记「兄」），王錦 之父／母即 王鋼 之父／母。
          source:
            id: s_x0ANkC0KfEDtzaqurGcPOr
            source_type: api_record
            title: 中国历代人物传记资料库：王鋼（CBDB 261861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261861&o=json
            external_identifier: CBDB:261861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gu1VbpWsnqmLpKXriFxvq
        status: active
        display_name: 王鋼
        merged_into_person_id: null
    - claim:
        id: c_jotdB-kEa-zn699iC_R_HR
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ve79Gah1QJ6z9G3A7P3KL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDkIc8zH85ysnKrSbkPjQV
          claim_id: c_jotdB-kEa-zn699iC_R_HR
          source_id: s_7Hjv3NsWhtAry9LN7Ud9Jh
          stance: supports
          locator: CBDB：兄弟 王錦（200715）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王錦 为同胞（CBDB 记「兄」），王錦 之父／母即 王鏞 之父／母。
          source:
            id: s_7Hjv3NsWhtAry9LN7Ud9Jh
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 261857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261857&o=json
            external_identifier: CBDB:261857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ve79Gah1QJ6z9G3A7P3KL
        status: active
        display_name: 王鏞
        merged_into_person_id: null
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
        id: p_YmaMpD3P84vGTGfnziUQ6D
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_L6G1Zmx-DrPMVuV-kAodpQ
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ow1Qky4ESS1QSdTm9YhT7V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zXOU1A2Erp3Df9O-0NRTTT
          claim_id: c_L6G1Zmx-DrPMVuV-kAodpQ
          source_id: s_1sCQjYZA8XJtoz2hEHElzj
          stance: supports
          locator: CBDB：兄弟 王錦（200715）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈗 与 王錦 为同胞（CBDB 记「兄」），王錦 之父／母即 王鈗 之父／母。
          source:
            id: s_1sCQjYZA8XJtoz2hEHElzj
            source_type: api_record
            title: 中国历代人物传记资料库：王鈗（CBDB 261860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261860&o=json
            external_identifier: CBDB:261860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ow1Qky4ESS1QSdTm9YhT7V
        status: active
        display_name: 王鈗
        merged_into_person_id: null
    - claim:
        id: c_-fB4RCF_qggphSchTPk6Qu
        subject_person_id: p_3JgQNSMUumi8nS4UFjk3Ak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pWfxJiK5LxVy6PcqvFExyi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cnlso-m1irdlKd78TmMp3D
          claim_id: c_-fB4RCF_qggphSchTPk6Qu
          source_id: s_wt1uhmKafW8DhvZCpbiU--
          stance: supports
          locator: CBDB：兄弟 王錦（200715）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑭 与 王錦 为同胞（CBDB 记「兄」），王錦 之父／母即 王鑭 之父／母。
          source:
            id: s_wt1uhmKafW8DhvZCpbiU--
            source_type: api_record
            title: 中国历代人物传记资料库：王鑭（CBDB 261856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261856&o=json
            external_identifier: CBDB:261856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pWfxJiK5LxVy6PcqvFExyi
        status: active
        display_name: 王鑭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。弘治三年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 261851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7nQdqDRU7gCLFFCzrrRkDE | 王錦 | accepted |
| children | p_3gu1VbpWsnqmLpKXriFxvq | 王鋼 | accepted |
| children | p_3ve79Gah1QJ6z9G3A7P3KL | 王鏞 | accepted |
| children | p_YmaMpD3P84vGTGfnziUQ6D | 王鉉 | accepted |
| children | p_ow1Qky4ESS1QSdTm9YhT7V | 王鈗 | accepted |
| children | p_pWfxJiK5LxVy6PcqvFExyi | 王鑭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鋼（CBDB 261861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261861&o=json)
- [中国历代人物传记资料库：王鑭（CBDB 261856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261856&o=json)
- [中国历代人物传记资料库：王通（CBDB 261851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 261855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 261857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261857&o=json)
- [中国历代人物传记资料库：王鈗（CBDB 261860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261860&o=json)
