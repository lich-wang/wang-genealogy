---
schema: wang-person/v1
id: p_Yra9TSxJfSZYYESyN2uWoA
status: active
merged_into: null
display_name: 王如璧
cbdb_id: 215084
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVnpZ5T9tEEDZGoLek57qq
        subject_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如璧，明人物。萬曆二年進士，籍贯永嘉，曾任典史、錦衣衛副千戶。（中国历代人物传记资料库 CBDB 215084）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kS83oX741YTGj1Kk874gws
          claim_id: c_EVnpZ5T9tEEDZGoLek57qq
          source_id: s_6ELmWHgF6BM8SCLv5BhtAx
          stance: supports
          locator: CBDB:215084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6ELmWHgF6BM8SCLv5BhtAx
            source_type: api_record
            title: 中国历代人物传记资料库：王如璧（CBDB 215084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json
            external_identifier: CBDB:215084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8wE2ZxuVtVYyypjzvjKByE
        subject_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5qpzLRN2SeNe2kevzF4MsT
          claim_id: c_8wE2ZxuVtVYyypjzvjKByE
          source_id: s_6ELmWHgF6BM8SCLv5BhtAx
          stance: supports
          locator: CBDB:215084
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wUZ9LU4OuP63QrxWW1TIhM
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q2u_l1Cwv_PTCvqDrl0DIw
          claim_id: c_wUZ9LU4OuP63QrxWW1TIhM
          source_id: s_54bPpTc7jN5cpSNzhOBgfa
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王如璧 与 王繼明 为同胞（CBDB 记「兄」），王繼明 之父／母即 王如璧 之父／母。
          source:
            id: s_54bPpTc7jN5cpSNzhOBgfa
            source_type: api_record
            title: 中国历代人物传记资料库：王如璧（CBDB 215084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json
            external_identifier: CBDB:215084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UHRTa4PaBxDuWwXBDjnQVB
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yra9TSxJfSZYYESyN2uWoA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M_b0la9VITlev5mvuTxnKC
          claim_id: c_UHRTa4PaBxDuWwXBDjnQVB
          source_id: s_54bPpTc7jN5cpSNzhOBgfa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_54bPpTc7jN5cpSNzhOBgfa
            source_type: api_record
            title: 中国历代人物传记资料库：王如璧（CBDB 215084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json
            external_identifier: CBDB:215084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
---

# 王如璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如璧，明人物。萬曆二年進士，籍贯永嘉，曾任典史、錦衣衛副千戶。（中国历代人物传记资料库 CBDB 215084） | accepted |
| name.primary | 王如璧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| other | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如璧（CBDB 215084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215084&o=json)
