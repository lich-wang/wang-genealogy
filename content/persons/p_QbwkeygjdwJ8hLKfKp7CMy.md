---
schema: wang-person/v1
id: p_QbwkeygjdwJ8hLKfKp7CMy
status: active
merged_into: null
display_name: 王鱗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YTv9gKaYiVhJ1kd8tfT38c
        subject_person_id: p_QbwkeygjdwJ8hLKfKp7CMy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鱗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7girgakXBoUNSWsL6JtHn3
          claim_id: c_YTv9gKaYiVhJ1kd8tfT38c
          source_id: s_eWX55teoanyWL86qUps83x
          stance: supports
          locator: CBDB:326704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326704）
          source: &a1
            id: s_eWX55teoanyWL86qUps83x
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 326704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326704&o=json
            external_identifier: CBDB:326704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_umXHiWZSHN2hBs1aucGc59
        subject_person_id: p_QbwkeygjdwJ8hLKfKp7CMy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鱗，明人物。嘉靖四十一年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 326704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YXKOlojBZ932YN4S76ewR
          claim_id: c_umXHiWZSHN2hBs1aucGc59
          source_id: s_eWX55teoanyWL86qUps83x
          stance: supports
          locator: CBDB:326704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tokJ3LEAcFm91c1VhkxBze
        subject_person_id: p_9HDvakpcay3o3koSS4dhyb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QbwkeygjdwJ8hLKfKp7CMy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l12ttaf3n0M3ErncocOh9z
          claim_id: c_tokJ3LEAcFm91c1VhkxBze
          source_id: s_Nhc0Zh34yW5YCO1qvdHZZy
          stance: supports
          locator: CBDB：兄弟 王錫命（204975）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王鱗 与 王錫命 为同胞（CBDB 记「兄」），王錫命 之父／母即 王鱗 之父／母。
          source:
            id: s_Nhc0Zh34yW5YCO1qvdHZZy
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 326704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326704&o=json
            external_identifier: CBDB:326704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9HDvakpcay3o3koSS4dhyb
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F36JAANFo_fG3bssIOhfB0
        subject_person_id: p_4A5DBME64j8hrumwV1y25Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QbwkeygjdwJ8hLKfKp7CMy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKYa2-yXazAS-2_x2Gr8NK
          claim_id: c_F36JAANFo_fG3bssIOhfB0
          source_id: s_Nhc0Zh34yW5YCO1qvdHZZy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204975 王錫命）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nhc0Zh34yW5YCO1qvdHZZy
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 326704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326704&o=json
            external_identifier: CBDB:326704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4A5DBME64j8hrumwV1y25Y
        status: active
        display_name: 王錫命
        merged_into_person_id: null
---

# 王鱗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鱗 | accepted |
| bio.summary | 王鱗，明人物。嘉靖四十一年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 326704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9HDvakpcay3o3koSS4dhyb | 王鸞 | accepted |
| other | p_4A5DBME64j8hrumwV1y25Y | 王錫命 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鱗（CBDB 326704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326704&o=json)
