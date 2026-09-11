---
schema: wang-person/v1
id: p_655CGkFBuWbBdZzbbcQcR6
status: active
merged_into: null
display_name: 王舜夫
cbdb_id: 200919
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4cwhf2NX1LppTKM4zgWQKF
        subject_person_id: p_655CGkFBuWbBdZzbbcQcR6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜夫（生于1452年），明人物。中国历代人物传记资料库（CBDB）以人物编号 200919 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_dLjr7yK2W9Tzxfbd7og8dH
          claim_id: c_4cwhf2NX1LppTKM4zgWQKF
          source_id: s_oApnPekWLcyA6zne4ShRL1
          stance: supports
          locator: CBDB:200919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_oApnPekWLcyA6zne4ShRL1
            source_type: api_record
            title: 中国历代人物传记资料库：王舜夫（CBDB 200919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200919&o=json
            external_identifier: CBDB:200919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a7joAgg5MebxpzQwN7AkpB
        subject_person_id: p_655CGkFBuWbBdZzbbcQcR6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1452-01-01
            latest: 1452-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YFvvA473yLnde7971izkn
          claim_id: c_a7joAgg5MebxpzQwN7AkpB
          source_id: s_oApnPekWLcyA6zne4ShRL1
          stance: supports
          locator: CBDB:200919
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1452
          source:
            id: s_oApnPekWLcyA6zne4ShRL1
            source_type: api_record
            title: 中国历代人物传记资料库：王舜夫（CBDB 200919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200919&o=json
            external_identifier: CBDB:200919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4m2MDt5ATPU1JNE5mCeqv
        subject_person_id: p_655CGkFBuWbBdZzbbcQcR6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ezChjHWvvfYCanja8xNMPv
          claim_id: c_Z4m2MDt5ATPU1JNE5mCeqv
          source_id: s_oApnPekWLcyA6zne4ShRL1
          stance: supports
          locator: CBDB:200919
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1452
          source:
            id: s_oApnPekWLcyA6zne4ShRL1
            source_type: api_record
            title: 中国历代人物传记资料库：王舜夫（CBDB 200919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200919&o=json
            external_identifier: CBDB:200919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p7bV6mXM95MkOn4uY_R_ng
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_655CGkFBuWbBdZzbbcQcR6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2okWWnj66_vTZbLh4F9BE0
          claim_id: c_p7bV6mXM95MkOn4uY_R_ng
          source_id: s_Scx7Ydivj7ErSSyAYk5h5W
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Scx7Ydivj7ErSSyAYk5h5W
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 264588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264588&o=json
            external_identifier: CBDB:264588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d6UDv6dAxjBQ8P1sMj6D6e
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ylh8Lga2iMpgO3qfnixpE7
        subject_person_id: p_gMTJs34k6o9P9DFTJgdQqt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_655CGkFBuWbBdZzbbcQcR6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gHGqHltf8nOvXa0_EWwRG7
          claim_id: c_ylh8Lga2iMpgO3qfnixpE7
          source_id: s_fEc6oqhsAmZ1tNC3KpCKH6
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fEc6oqhsAmZ1tNC3KpCKH6
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 264586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264586&o=json
            external_identifier: CBDB:264586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gMTJs34k6o9P9DFTJgdQqt
        status: active
        display_name: 王鍾
        merged_into_person_id: null
    - claim:
        id: c_FsLOwf8n26HdNAw9lrdBX6
        subject_person_id: p_YD1K1ag2u994XzD6XR1i9Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_655CGkFBuWbBdZzbbcQcR6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cb6plCvMzZ7iTHGw5T4qLh
          claim_id: c_FsLOwf8n26HdNAw9lrdBX6
          source_id: s_VaKw2o3hH78D3Jc9RY4pXQ
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VaKw2o3hH78D3Jc9RY4pXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 264587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264587&o=json
            external_identifier: CBDB:264587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YD1K1ag2u994XzD6XR1i9Q
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王舜夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜夫（生于1452年），明人物。中国历代人物传记资料库（CBDB）以人物编号 200919 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1452年 | accepted |
| name.primary | 王舜夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d6UDv6dAxjBQ8P1sMj6D6e | 王昂 | accepted |
| ancestors | p_gMTJs34k6o9P9DFTJgdQqt | 王鍾 | accepted |
| ancestors | p_YD1K1ag2u994XzD6XR1i9Q | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 264588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264588&o=json)
- [中国历代人物传记资料库：王清（CBDB 264587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264587&o=json)
- [中国历代人物传记资料库：王舜夫（CBDB 200919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200919&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 264586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264586&o=json)
