---
schema: wang-person/v1
id: p_NJ1FnMUfkBY1Q2LFwCXEzP
status: active
merged_into: null
display_name: 王志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cxthe5bPfo4TdEtimbQKAf
        subject_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gS9baUmHCffDGF6oMQ8hj9
          claim_id: c_Cxthe5bPfo4TdEtimbQKAf
          source_id: s_7W8qZ36mAWLCALnL2npAQB
          stance: supports
          locator: CBDB:242213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242213）
          source: &a1
            id: s_7W8qZ36mAWLCALnL2npAQB
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fXY9TGvG4xC7kfWpNwEZxF
        subject_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eDSK3Z5Jr5SXX0oE2uCGUd
          claim_id: c_fXY9TGvG4xC7kfWpNwEZxF
          source_id: s_7W8qZ36mAWLCALnL2npAQB
          stance: supports
          locator: CBDB:242213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WQGKujvQtNtdhpdil1pp95
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TtM_bwarqZF8y2HXouGJ7S
          claim_id: c_WQGKujvQtNtdhpdil1pp95
          source_id: s_YTck9oFpxjwPryux56cxNS
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王義 为同胞（CBDB 记「弟」），王義 之父／母即 王志 之父／母。
          source:
            id: s_YTck9oFpxjwPryux56cxNS
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZSdmaffBtX3DKbv12A8Zie
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7JhmUap90ywFcaKUvhCloR
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5xr4JqQR2Yd8M4NuuzdZK
          claim_id: c_7JhmUap90ywFcaKUvhCloR
          source_id: s_YTck9oFpxjwPryux56cxNS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YTck9oFpxjwPryux56cxNS
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSdmaffBtX3DKbv12A8Zie | 王輝 | accepted |
| other | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 242213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json)
