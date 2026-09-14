---
schema: wang-person/v1
id: p_aHPF2nHn3ZpvQSzEyKNrmv
status: active
merged_into: null
display_name: 王籛
cbdb_id: 328177
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AbCZwbRJj5xN2zcRKNUED
        subject_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王籛，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6rz7HWcTogmZrRFCzflVad
          claim_id: c_7AbCZwbRJj5xN2zcRKNUED
          source_id: s_JiuZ3UAebC7C8VGmHJunhk
          stance: supports
          locator: CBDB:328177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JiuZ3UAebC7C8VGmHJunhk
            source_type: api_record
            title: 中国历代人物传记资料库：王籛（CBDB 328177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json
            external_identifier: CBDB:328177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_35Aq8GuUKFx5C5tMtPesCE
        subject_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王籛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SA65V9UgSs6SqGoxp1VtZy
          claim_id: c_35Aq8GuUKFx5C5tMtPesCE
          source_id: s_JiuZ3UAebC7C8VGmHJunhk
          stance: supports
          locator: CBDB:328177
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y_MziKLl8jWXpxbvKZCuQF
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJpsNComGjFKAAOEIb_bbI
          claim_id: c_y_MziKLl8jWXpxbvKZCuQF
          source_id: s_-VIsHXN7AJCt3sCCcrH60U
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王籛 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王籛 之父／母。
          source:
            id: s_-VIsHXN7AJCt3sCCcrH60U
            source_type: api_record
            title: 中国历代人物传记资料库：王籛（CBDB 328177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json
            external_identifier: CBDB:328177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ay_IVRwjEGC4iDCcFz6w-L
        subject_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI-LtNo9tn_mt2okf6B93o
          claim_id: c_Ay_IVRwjEGC4iDCcFz6w-L
          source_id: s_-VIsHXN7AJCt3sCCcrH60U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-VIsHXN7AJCt3sCCcrH60U
            source_type: api_record
            title: 中国历代人物传记资料库：王籛（CBDB 328177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json
            external_identifier: CBDB:328177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
---

# 王籛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王籛，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328177） | accepted |
| name.primary | 王籛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| other | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王籛（CBDB 328177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json)
