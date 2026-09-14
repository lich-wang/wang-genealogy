---
schema: wang-person/v1
id: p_EDzigNMTevNdyF2FMvjkcn
status: active
merged_into: null
display_name: 王淑縉
cbdb_id: 331195
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5e2umJnY9w8AR54FW76G9X
        subject_person_id: p_EDzigNMTevNdyF2FMvjkcn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑縉，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UC9RN6QOOQ4U1kx_udl3r2
          claim_id: c_5e2umJnY9w8AR54FW76G9X
          source_id: s_DcGAk4fu8vTwBB9xkWT458
          stance: supports
          locator: CBDB:331195
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DcGAk4fu8vTwBB9xkWT458
            source_type: api_record
            title: 中国历代人物传记资料库：王淑縉（CBDB 331195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json
            external_identifier: CBDB:331195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7xEwc51TsqdvyVfAKYj5VQ
        subject_person_id: p_EDzigNMTevNdyF2FMvjkcn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oaFr35m1hJwcPYiqTceKbo
          claim_id: c_7xEwc51TsqdvyVfAKYj5VQ
          source_id: s_DcGAk4fu8vTwBB9xkWT458
          stance: supports
          locator: CBDB:331195
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qPuVKaPF1YP3upTqJS8Nck
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EDzigNMTevNdyF2FMvjkcn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUjW1CzSZNQaR-EMIlipvn
          claim_id: c_qPuVKaPF1YP3upTqJS8Nck
          source_id: s_9DbTVxmnyiLQM1wVeZ1iOm
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑縉 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑縉 之父／母。
          source:
            id: s_9DbTVxmnyiLQM1wVeZ1iOm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑縉（CBDB 331195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json
            external_identifier: CBDB:331195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2h6VrbxHxkZQOXtLjc6QhJ
        subject_person_id: p_EDzigNMTevNdyF2FMvjkcn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCJFX8K-yNpH_8n_hy2JNH
          claim_id: c_2h6VrbxHxkZQOXtLjc6QhJ
          source_id: s_9DbTVxmnyiLQM1wVeZ1iOm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9DbTVxmnyiLQM1wVeZ1iOm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑縉（CBDB 331195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json
            external_identifier: CBDB:331195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑縉，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331195） | accepted |
| name.primary | 王淑縉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑縉（CBDB 331195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json)
