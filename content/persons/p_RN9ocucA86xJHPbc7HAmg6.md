---
schema: wang-person/v1
id: p_RN9ocucA86xJHPbc7HAmg6
status: active
merged_into: null
display_name: 王濟民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrorS5DL6T89aLZbxrsxiK
        subject_person_id: p_RN9ocucA86xJHPbc7HAmg6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPM1e8uZiz69ALQofohv4E
          claim_id: c_YrorS5DL6T89aLZbxrsxiK
          source_id: s_wqehtt7pK1BSTuuC18ygDJ
          stance: supports
          locator: CBDB:209989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209989）
          source: &a1
            id: s_wqehtt7pK1BSTuuC18ygDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6GyM2A9Xddu2pv21c7FVx
        subject_person_id: p_RN9ocucA86xJHPbc7HAmg6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gkBeRUwhhX4aaTmEE5O4Yv
          claim_id: c_Z6GyM2A9Xddu2pv21c7FVx
          source_id: s_wqehtt7pK1BSTuuC18ygDJ
          stance: supports
          locator: CBDB:209989
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gh2G3yHkf0HHDpHwQr8C9Z
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RN9ocucA86xJHPbc7HAmg6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0a9M469kHTRYySO5-p-uKs
          claim_id: c_Gh2G3yHkf0HHDpHwQr8C9Z
          source_id: s_OW248VDGMOZbgqJZ5DLpIw
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王濟民 之父／母。
          source:
            id: s_OW248VDGMOZbgqJZ5DLpIw
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_v3Jh_lZ4o4yn-EV5zGV_GS
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RN9ocucA86xJHPbc7HAmg6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZP39ZE_v9d81anHWziE3Gs
          claim_id: c_v3Jh_lZ4o4yn-EV5zGV_GS
          source_id: s_OW248VDGMOZbgqJZ5DLpIw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OW248VDGMOZbgqJZ5DLpIw
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
---

# 王濟民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟民 | accepted |
| bio.summary | 王濟民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| other | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟民（CBDB 209989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json)
