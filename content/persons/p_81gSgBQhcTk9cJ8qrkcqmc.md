---
schema: wang-person/v1
id: p_81gSgBQhcTk9cJ8qrkcqmc
status: active
merged_into: null
display_name: 王汝寵
cbdb_id: 313775
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NsU4DhKJDRH1RibzdJfr48
        subject_person_id: p_81gSgBQhcTk9cJ8qrkcqmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寵，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fK3BAT_dDBqmuB6ZZ9_p3b
          claim_id: c_NsU4DhKJDRH1RibzdJfr48
          source_id: s_3wVhf4m512V5R9qcNsRtWo
          stance: supports
          locator: CBDB:313775
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3wVhf4m512V5R9qcNsRtWo
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寵（CBDB 313775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json
            external_identifier: CBDB:313775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7jd2sWKvdynm9QXWj11F1
        subject_person_id: p_81gSgBQhcTk9cJ8qrkcqmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cf9nSExEc42FzsRuaJuNpa
          claim_id: c_J7jd2sWKvdynm9QXWj11F1
          source_id: s_3wVhf4m512V5R9qcNsRtWo
          stance: supports
          locator: CBDB:313775
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wxq1DDYY_RUUmXMRpWcP4f
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_81gSgBQhcTk9cJ8qrkcqmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cuw7ge1tHbhHA1i0qNYTa_
          claim_id: c_Wxq1DDYY_RUUmXMRpWcP4f
          source_id: s_3ZLCYvgNtbPxE3-j5FLlD7
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寵 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寵 之父／母。
          source:
            id: s_3ZLCYvgNtbPxE3-j5FLlD7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寵（CBDB 313775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json
            external_identifier: CBDB:313775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jr1uT74hLZawrDdoEK3XZV
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MVPJ2ETCjA732p08-_hKDl
        subject_person_id: p_81gSgBQhcTk9cJ8qrkcqmc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rl8P4xvPWkKX8WTNXu-C1E
          claim_id: c_MVPJ2ETCjA732p08-_hKDl
          source_id: s_3ZLCYvgNtbPxE3-j5FLlD7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204050 王汝安）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3ZLCYvgNtbPxE3-j5FLlD7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寵（CBDB 313775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json
            external_identifier: CBDB:313775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
---

# 王汝寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝寵，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313775） | accepted |
| name.primary | 王汝寵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jr1uT74hLZawrDdoEK3XZV | 王舉 | accepted |
| other | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝寵（CBDB 313775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json)
