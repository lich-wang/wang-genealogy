---
schema: wang-person/v1
id: p_i61WbpSXRDYWobPpN3GbDr
status: active
merged_into: null
display_name: 王孟春
cbdb_id: 320867
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8A8NcB6HruF9vQ2t6arWBB
        subject_person_id: p_i61WbpSXRDYWobPpN3GbDr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_y2T4s2UtqiNq8jZW6RNT5u
          claim_id: c_8A8NcB6HruF9vQ2t6arWBB
          source_id: s_2tV1ukWxHjRBFjBxTzwQFN
          stance: supports
          locator: CBDB:320867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2tV1ukWxHjRBFjBxTzwQFN
            source_type: api_record
            title: 中国历代人物传记资料库：王孟春（CBDB 320867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json
            external_identifier: CBDB:320867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bqWWGVS7cQMd4n2Ki9wnRZ
        subject_person_id: p_i61WbpSXRDYWobPpN3GbDr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XcyRbVDRAL1xJjBK3GNK9P
          claim_id: c_bqWWGVS7cQMd4n2Ki9wnRZ
          source_id: s_2tV1ukWxHjRBFjBxTzwQFN
          stance: supports
          locator: CBDB:320867
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KvIdwFzs2GHHNoRonHx6TE
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i61WbpSXRDYWobPpN3GbDr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHNh4LoXQk3n_pZwCAxyWo
          claim_id: c_KvIdwFzs2GHHNoRonHx6TE
          source_id: s_4gBGvcmCFPGaJ8Y6LsWZnx
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟春 与 王得春 为同胞（CBDB 记「弟」），王得春 之父／母即 王孟春 之父／母。
          source:
            id: s_4gBGvcmCFPGaJ8Y6LsWZnx
            source_type: api_record
            title: 中国历代人物传记资料库：王孟春（CBDB 320867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json
            external_identifier: CBDB:320867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T1r6INZtTJUoCAJNhl3zA6
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i61WbpSXRDYWobPpN3GbDr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PrQ7NyW1LxOmJ1EuZv-sg
          claim_id: c_T1r6INZtTJUoCAJNhl3zA6
          source_id: s_4gBGvcmCFPGaJ8Y6LsWZnx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4gBGvcmCFPGaJ8Y6LsWZnx
            source_type: api_record
            title: 中国历代人物传记资料库：王孟春（CBDB 320867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json
            external_identifier: CBDB:320867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
---

# 王孟春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320867） | accepted |
| name.primary | 王孟春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| other | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟春（CBDB 320867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320867&o=json)
