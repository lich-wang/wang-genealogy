---
schema: wang-person/v1
id: p_vMevNWYN32QXU3ybSEDDSn
status: active
merged_into: null
display_name: 王組經
cbdb_id: 264942
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NZ9C9h1w46cvzpoL5sLUoJ
        subject_person_id: p_vMevNWYN32QXU3ybSEDDSn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組經，明人物。弘治六年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 264942）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OgZ4G6avJcHuog0bT_0Bzv
          claim_id: c_NZ9C9h1w46cvzpoL5sLUoJ
          source_id: s_e33DGcPmLVoqFFoEFg2Aug
          stance: supports
          locator: CBDB:264942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e33DGcPmLVoqFFoEFg2Aug
            source_type: api_record
            title: 中国历代人物传记资料库：王組經（CBDB 264942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json
            external_identifier: CBDB:264942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dcFCuGfgmAkkBf2vecB1JG
        subject_person_id: p_vMevNWYN32QXU3ybSEDDSn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AY6B8w8rYH3VDyWuu2EVuY
          claim_id: c_dcFCuGfgmAkkBf2vecB1JG
          source_id: s_e33DGcPmLVoqFFoEFg2Aug
          stance: supports
          locator: CBDB:264942
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nPTD2lR2VKn59K4slc4XZb
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMevNWYN32QXU3ybSEDDSn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbPgw4szcU1oxgQZIBGawa
          claim_id: c_nPTD2lR2VKn59K4slc4XZb
          source_id: s_n1QmD_hvEaH3Pfj7UiqVlT
          stance: supports
          locator: CBDB：兄弟 王縝（68275）之父／母 王恪
          quotation: null
          interpretation_note: 由兄弟关系推断：王組經 与 王縝 为同胞（CBDB 记「弟」），王縝 之父／母即 王組經 之父／母。
          source:
            id: s_n1QmD_hvEaH3Pfj7UiqVlT
            source_type: api_record
            title: 中国历代人物传记资料库：王組經（CBDB 264942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json
            external_identifier: CBDB:264942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zQAyFcVTh8uEFRKFQtkku9
        status: active
        display_name: 王恪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tG6Z9a_UJgF7-NFF1m-LDE
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vMevNWYN32QXU3ybSEDDSn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12IhNpNsSgXJFNFwmgV1Dq
          claim_id: c_tG6Z9a_UJgF7-NFF1m-LDE
          source_id: s_n1QmD_hvEaH3Pfj7UiqVlT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68275 王縝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n1QmD_hvEaH3Pfj7UiqVlT
            source_type: api_record
            title: 中国历代人物传记资料库：王組經（CBDB 264942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json
            external_identifier: CBDB:264942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9esUYZvNqsWNd3UXAh8qx5
        status: active
        display_name: 王縝
        merged_into_person_id: null
---

# 王組經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王組經，明人物。弘治六年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 264942） | accepted |
| name.primary | 王組經 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQAyFcVTh8uEFRKFQtkku9 | 王恪 | accepted |
| other | p_9esUYZvNqsWNd3UXAh8qx5 | 王縝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王組經（CBDB 264942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264942&o=json)
