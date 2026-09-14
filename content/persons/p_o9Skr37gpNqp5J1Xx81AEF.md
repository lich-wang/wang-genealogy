---
schema: wang-person/v1
id: p_o9Skr37gpNqp5J1Xx81AEF
status: active
merged_into: null
display_name: 王儼
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGJYL54CeYxFY2CZjKwoyn
        subject_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1scRi8Pi4HpP6ZNg384vuV
          claim_id: c_GGJYL54CeYxFY2CZjKwoyn
          source_id: s_vVRoQ5T4zLgusALURoRGWA
          stance: supports
          locator: CBDB:126888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126888）
          source: &a1
            id: s_vVRoQ5T4zLgusALURoRGWA
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126888&o=json
            external_identifier: CBDB:126888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jcCAdbgauVED1zyRNy7KJP
        subject_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。明清進士進士，籍贯泰和，入仕進士，曾任主簿。（中国历代人物传记资料库 CBDB 126888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SToZlTvkU6CZTAiVWsnQ6F
          claim_id: c_jcCAdbgauVED1zyRNy7KJP
          source_id: s_vVRoQ5T4zLgusALURoRGWA
          stance: supports
          locator: CBDB:126888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZLzlSWmL8qWztUUvIFAE6U
        subject_person_id: p_jgwf2uNVHXZcoqA2QFFrzJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oFedZNAlvvIEoee-DV1elY
          claim_id: c_ZLzlSWmL8qWztUUvIFAE6U
          source_id: s_KqKeCRqWSdUKtktoExWfzb
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KqKeCRqWSdUKtktoExWfzb
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瑞（CBDB 237906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237906&o=json
            external_identifier: CBDB:237906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jgwf2uNVHXZcoqA2QFFrzJ
        status: active
        display_name: 王彥瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_RSjlwSuZ4b62L914eZzGOn
        subject_person_id: p_JKkrL45mghx3yN3Xd9pH7X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NgrvEWq8MoCkdaByi488O2
          claim_id: c_RSjlwSuZ4b62L914eZzGOn
          source_id: s_Jt1HopWFQVgduEMP2PEAfG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jt1HopWFQVgduEMP2PEAfG
            source_type: api_record
            title: 中国历代人物传记资料库：王復初（CBDB 237904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237904&o=json
            external_identifier: CBDB:237904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JKkrL45mghx3yN3Xd9pH7X
        status: active
        display_name: 王復初
        merged_into_person_id: null
    - claim:
        id: c_EuBOq_gaGz8fv-m5qJpLXS
        subject_person_id: p_2MCcNR2xN2nrBoeM5CGALr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G9QcvFPt_MEPNFY9GqlekL
          claim_id: c_EuBOq_gaGz8fv-m5qJpLXS
          source_id: s_bcQeBUxMyijaphy2TqhpMN
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bcQeBUxMyijaphy2TqhpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王麟昭（CBDB 237905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237905&o=json
            external_identifier: CBDB:237905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2MCcNR2xN2nrBoeM5CGALr
        status: active
        display_name: 王麟昭
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_cQxsRgBFUysOObXSLiqUh9
        subject_person_id: p_A4EUEFdw1QJgH3Q73hDNbn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ISX5RMz-15RXDiL4-_FIUT
          claim_id: c_cQxsRgBFUysOObXSLiqUh9
          source_id: s_3ptCQ68xoixgqJTQS0--nv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126888 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3ptCQ68xoixgqJTQS0--nv
            source_type: api_record
            title: 中国历代人物传记资料库：王民表（CBDB 237912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237912&o=json
            external_identifier: CBDB:237912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A4EUEFdw1QJgH3Q73hDNbn
        status: active
        display_name: 王民表
        merged_into_person_id: null
    - claim:
        id: c_0YStDEJs2Culd9T5ZVEcoI
        subject_person_id: p_o9Skr37gpNqp5J1Xx81AEF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xDRKNL87aAnnFXNPmawwGJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HSzyp9QK5NgcYDt9DTigaQ
          claim_id: c_0YStDEJs2Culd9T5ZVEcoI
          source_id: s_BchYNd7o2xQmn9hYotRy1y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126888 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BchYNd7o2xQmn9hYotRy1y
            source_type: api_record
            title: 中国历代人物传记资料库：王民彝（CBDB 237911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237911&o=json
            external_identifier: CBDB:237911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xDRKNL87aAnnFXNPmawwGJ
        status: active
        display_name: 王民彝
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。明清進士進士，籍贯泰和，入仕進士，曾任主簿。（中国历代人物传记资料库 CBDB 126888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgwf2uNVHXZcoqA2QFFrzJ | 王彥瑞 | accepted |
| ancestors | p_JKkrL45mghx3yN3Xd9pH7X | 王復初 | accepted |
| ancestors | p_2MCcNR2xN2nrBoeM5CGALr | 王麟昭 | accepted |
| other | p_A4EUEFdw1QJgH3Q73hDNbn | 王民表 | accepted |
| other | p_xDRKNL87aAnnFXNPmawwGJ | 王民彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復初（CBDB 237904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237904&o=json)
- [中国历代人物传记资料库：王麟昭（CBDB 237905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237905&o=json)
- [中国历代人物传记资料库：王民表（CBDB 237912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237912&o=json)
- [中国历代人物传记资料库：王民彝（CBDB 237911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237911&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126888&o=json)
- [中国历代人物传记资料库：王彥瑞（CBDB 237906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237906&o=json)
