---
schema: wang-person/v1
id: p_7nQdqDRU7gCLFFCzrrRkDE
status: active
merged_into: null
display_name: 王錦
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCMbxsd7dSpJjS1sFbijMx
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iKyHerTtQpo3corFEPXBHR
          claim_id: c_JCMbxsd7dSpJjS1sFbijMx
          source_id: s_4qbZRSJuU5KyE6H1cV6VZ6
          stance: supports
          locator: CBDB:200715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200715）
          source: &a1
            id: s_4qbZRSJuU5KyE6H1cV6VZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 200715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200715&o=json
            external_identifier: CBDB:200715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y5JKGFTCkCBTvUQDoFeXgc
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1zHpCZc2kRuJDDJmpxdFgd
          claim_id: c_Y5JKGFTCkCBTvUQDoFeXgc
          source_id: s_4qbZRSJuU5KyE6H1cV6VZ6
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
        id: c_GrGEaSrNaCvmWHPN8nisWS
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦（生于1459年），明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 200715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rcRAVPOwJd0OhR1rgkdMWp
          claim_id: c_GrGEaSrNaCvmWHPN8nisWS
          source_id: s_4qbZRSJuU5KyE6H1cV6VZ6
          stance: supports
          locator: CBDB:200715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_3JgQNSMUumi8nS4UFjk3Ak
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JQ5wItFUsY1hBhwo15pM4O
        subject_person_id: p_rgVM34AhoiLib36Ag9rXAh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-dmB0hn6d6IfhmbCnPKpR
          claim_id: c_JQ5wItFUsY1hBhwo15pM4O
          source_id: s_3x9a552BsjBct4KLwm4mVq
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3x9a552BsjBct4KLwm4mVq
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 261849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261849&o=json
            external_identifier: CBDB:261849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rgVM34AhoiLib36Ag9rXAh
        status: active
        display_name: 王友道
        merged_into_person_id: null
    - claim:
        id: c_pkqhrJgkqSy3DLG6lgPEZh
        subject_person_id: p_yBC5C2JQMnzo8GPxwr5Tb7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjYjVd7y8TUe8tM1gHrvy9
          claim_id: c_pkqhrJgkqSy3DLG6lgPEZh
          source_id: s_7Q4fMbSUGSdkNZjf6rwb6e
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Q4fMbSUGSdkNZjf6rwb6e
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 261850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261850&o=json
            external_identifier: CBDB:261850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yBC5C2JQMnzo8GPxwr5Tb7
        status: active
        display_name: 王倫
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_1aFjkHFsTtDeXRhlyy1bgp
        subject_person_id: p_3gu1VbpWsnqmLpKXriFxvq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ywCYedXZ-k53okhCmpgShi
          claim_id: c_1aFjkHFsTtDeXRhlyy1bgp
          source_id: s_x0ANkC0KfEDtzaqurGcPOr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200715 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_dd16gMWKe33ptQldNs3vxv
        subject_person_id: p_3ve79Gah1QJ6z9G3A7P3KL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKpumEDj6fvZ0iNYKyDZx9
          claim_id: c_dd16gMWKe33ptQldNs3vxv
          source_id: s_7Hjv3NsWhtAry9LN7Ud9Jh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200715 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_YmaMpD3P84vGTGfnziUQ6D
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_JRWCibuoI40tF9HOaf40La
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ow1Qky4ESS1QSdTm9YhT7V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-lslpivh4rHCFkO9tAotO8
          claim_id: c_JRWCibuoI40tF9HOaf40La
          source_id: s_1sCQjYZA8XJtoz2hEHElzj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200715 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_wHmrjO-aTGL5_-UkFMWjuv
        subject_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pWfxJiK5LxVy6PcqvFExyi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7FKeuL2qxkRf-ugCeQZoi
          claim_id: c_wHmrjO-aTGL5_-UkFMWjuv
          source_id: s_wt1uhmKafW8DhvZCpbiU--
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200715 王錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | 王錦（生于1459年），明人物。明清進士進士，籍贯醴泉，入仕進士。（中国历代人物传记资料库 CBDB 200715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JgQNSMUumi8nS4UFjk3Ak | 王通 | accepted |
| ancestors | p_rgVM34AhoiLib36Ag9rXAh | 王友道 | accepted |
| ancestors | p_yBC5C2JQMnzo8GPxwr5Tb7 | 王倫 | accepted |
| other | p_3gu1VbpWsnqmLpKXriFxvq | 王鋼 | accepted |
| other | p_3ve79Gah1QJ6z9G3A7P3KL | 王鏞 | accepted |
| other | p_YmaMpD3P84vGTGfnziUQ6D | 王鉉 | accepted |
| other | p_ow1Qky4ESS1QSdTm9YhT7V | 王鈗 | accepted |
| other | p_pWfxJiK5LxVy6PcqvFExyi | 王鑭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鋼（CBDB 261861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261861&o=json)
- [中国历代人物传记资料库：王錦（CBDB 200715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200715&o=json)
- [中国历代人物传记资料库：王鑭（CBDB 261856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261856&o=json)
- [中国历代人物传记资料库：王倫（CBDB 261850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261850&o=json)
- [中国历代人物传记资料库：王通（CBDB 261851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 261855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261855&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 261857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261857&o=json)
- [中国历代人物传记资料库：王友道（CBDB 261849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261849&o=json)
- [中国历代人物传记资料库：王鈗（CBDB 261860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261860&o=json)
