---
schema: wang-person/v1
id: p_vsiJdPHKW5x8uNUbMQB1QX
status: active
merged_into: null
display_name: 王霂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCocHrUcmsZD2afa6KLWiL
        subject_person_id: p_vsiJdPHKW5x8uNUbMQB1QX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iJQf73S3QA4MF657hJFhmP
          claim_id: c_JCocHrUcmsZD2afa6KLWiL
          source_id: s_BUiCu8gJ1hjQmWENdCFizv
          stance: supports
          locator: CBDB:303984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303984）
          source: &a1
            id: s_BUiCu8gJ1hjQmWENdCFizv
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 303984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json
            external_identifier: CBDB:303984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xpMPxk6qLiNkDQ83adGhZF
        subject_person_id: p_vsiJdPHKW5x8uNUbMQB1QX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霂，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303984）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ncio5Y-bKX-kf52zTq_Jzr
          claim_id: c_xpMPxk6qLiNkDQ83adGhZF
          source_id: s_BUiCu8gJ1hjQmWENdCFizv
          stance: supports
          locator: CBDB:303984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j5TNXknMmGRj0fD5otufZS
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vsiJdPHKW5x8uNUbMQB1QX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVjcHN0wJVxPxj3OH9NCDC
          claim_id: c_j5TNXknMmGRj0fD5otufZS
          source_id: s_-r0LKWtV5Cmg5oU-bl2mM0
          stance: supports
          locator: CBDB：兄弟 王霽（203388）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王霂 与 王霽 为同胞（CBDB 记「兄」），王霽 之父／母即 王霂 之父／母。
          source:
            id: s_-r0LKWtV5Cmg5oU-bl2mM0
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 303984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json
            external_identifier: CBDB:303984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MrBW6wRCgoY5prUKEsRfTq
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d3uIZW9f-ts8hMCJjzaBfH
        subject_person_id: p_vsiJdPHKW5x8uNUbMQB1QX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r6jZ8BKVrAfcd1lP1FUd2t
          claim_id: c_d3uIZW9f-ts8hMCJjzaBfH
          source_id: s_-r0LKWtV5Cmg5oU-bl2mM0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203388 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-r0LKWtV5Cmg5oU-bl2mM0
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 303984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json
            external_identifier: CBDB:303984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xpckQ2G2t7wTNrXzHWsi53
        status: active
        display_name: 王霽
        merged_into_person_id: null
---

# 王霂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霂 | accepted |
| bio.summary | 王霂，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MrBW6wRCgoY5prUKEsRfTq | 王廷賓 | accepted |
| other | p_xpckQ2G2t7wTNrXzHWsi53 | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霂（CBDB 303984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json)
