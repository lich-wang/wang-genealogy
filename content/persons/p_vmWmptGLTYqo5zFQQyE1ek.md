---
schema: wang-person/v1
id: p_vmWmptGLTYqo5zFQQyE1ek
status: active
merged_into: null
display_name: 王瑾
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PyEV5jEV2SC1FnQ9NWPNWV
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BYFcS8Sbq94u2JjqMjPvLt
          claim_id: c_PyEV5jEV2SC1FnQ9NWPNWV
          source_id: s_5dZF8b5ovReRFLPxZ91Yx6
          stance: supports
          locator: CBDB:265730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265730）
          source: &a1
            id: s_5dZF8b5ovReRFLPxZ91Yx6
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 265730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265730&o=json
            external_identifier: CBDB:265730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EHJW3m3Yf35haVkM3EmK8G
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾，明人物。弘治六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 265730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__y4eUa1Ay8tek1Rgg4S4aM
          claim_id: c_EHJW3m3Yf35haVkM3EmK8G
          source_id: s_5dZF8b5ovReRFLPxZ91Yx6
          stance: supports
          locator: CBDB:265730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__Tr12bAUV9FL7T7DIPRKx6
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPGd3S8IKwbP3L_n97l35E
          claim_id: c__Tr12bAUV9FL7T7DIPRKx6
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eiGJS5K3CYMceZonDwA3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 67807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json
            external_identifier: CBDB:67807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfuEzx374a7WNXTfcMcWwd
        status: active
        display_name: 王獻臣
        merged_into_person_id: null
    - claim:
        id: c_ISSZ-iVKOYWDWV1d_JU4l2
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KDpb7Vx8XfqRVqdRsUpFyd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8695bYgBDV_o6YNGzN7m58
          claim_id: c_ISSZ-iVKOYWDWV1d_JU4l2
          source_id: s_LikcoNueijENcxPAnBAS7c
          stance: supports
          locator: CBDB：兄弟 王獻臣（67807）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻夫 与 王獻臣 为同胞（CBDB 记「兄」），王獻臣 之父／母即 王獻夫 之父／母。
          source:
            id: s_LikcoNueijENcxPAnBAS7c
            source_type: api_record
            title: 中国历代人物传记资料库：王獻夫（CBDB 265734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json
            external_identifier: CBDB:265734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KDpb7Vx8XfqRVqdRsUpFyd
        status: active
        display_name: 王獻夫
        merged_into_person_id: null
    - claim:
        id: c_k-OHlSL6qXwtjUAcjf48Py
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dTF8SyB54g9jSjGqYL8185
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSIeL3hT4JijJXqViJDQMk
          claim_id: c_k-OHlSL6qXwtjUAcjf48Py
          source_id: s_DYxhxUCLJJHHIMrqvh5si1
          stance: supports
          locator: CBDB：兄弟 王獻臣（67807）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻民 与 王獻臣 为同胞（CBDB 记「兄」），王獻臣 之父／母即 王獻民 之父／母。
          source:
            id: s_DYxhxUCLJJHHIMrqvh5si1
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 265733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265733&o=json
            external_identifier: CBDB:265733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dTF8SyB54g9jSjGqYL8185
        status: active
        display_name: 王獻民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑾 | accepted |
| bio.summary | 王瑾，明人物。弘治六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 265730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AfuEzx374a7WNXTfcMcWwd | 王獻臣 | accepted |
| children | p_KDpb7Vx8XfqRVqdRsUpFyd | 王獻夫 | accepted |
| children | p_dTF8SyB54g9jSjGqYL8185 | 王獻民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑾（CBDB 265730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265730&o=json)
- [中国历代人物传记资料库：王獻臣（CBDB 67807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json)
- [中国历代人物传记资料库：王獻夫（CBDB 265734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json)
- [中国历代人物传记资料库：王獻民（CBDB 265733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265733&o=json)
