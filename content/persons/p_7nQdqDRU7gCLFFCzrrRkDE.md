---
schema: wang-person/v1
id: p_7nQdqDRU7gCLFFCzrrRkDE
status: active
merged_into: null
display_name: 王錦
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_myn9uyGmLb3Xb8o7kCjiQ5
          claim_id: c_GrGEaSrNaCvmWHPN8nisWS
          source_id: s_4qbZRSJuU5KyE6H1cV6VZ6
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
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JgQNSMUumi8nS4UFjk3Ak | 王通 | accepted |
| ancestors | p_rgVM34AhoiLib36Ag9rXAh | 王友道 | accepted |
| ancestors | p_yBC5C2JQMnzo8GPxwr5Tb7 | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 200715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200715&o=json)
- [中国历代人物传记资料库：王倫（CBDB 261850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261850&o=json)
- [中国历代人物传记资料库：王通（CBDB 261851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261851&o=json)
- [中国历代人物传记资料库：王友道（CBDB 261849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261849&o=json)
