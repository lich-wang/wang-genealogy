---
schema: wang-person/v1
id: p_Gp6y1q4dJWg2vQcGdDyeHS
status: active
merged_into: null
display_name: 王申鍚
cbdb_id: 333002
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3nFfNvg59DGk4PPxadmDAg
        subject_person_id: p_Gp6y1q4dJWg2vQcGdDyeHS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 333002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IcwjyNNVrwTkjirLgiFGHR
          claim_id: c_3nFfNvg59DGk4PPxadmDAg
          source_id: s_KxjdkoLeUEV9NFBcjMXCSZ
          stance: supports
          locator: CBDB:333002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KxjdkoLeUEV9NFBcjMXCSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王申鍚（CBDB 333002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json
            external_identifier: CBDB:333002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3cxmuGGj3LTszQHtjGwV1n
        subject_person_id: p_Gp6y1q4dJWg2vQcGdDyeHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王申鍚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kMwEccqxE1ao5K2N8A9EkQ
          claim_id: c_3cxmuGGj3LTszQHtjGwV1n
          source_id: s_KxjdkoLeUEV9NFBcjMXCSZ
          stance: supports
          locator: CBDB:333002
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FuFk4yB4jOeGuBSqrsnRwW
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gp6y1q4dJWg2vQcGdDyeHS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHoJwtrMMjhfY0-s81M7YS
          claim_id: c_FuFk4yB4jOeGuBSqrsnRwW
          source_id: s_Qp0oneK32t5gkAW1uHAOy7
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王申鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王申鍚 之父／母。
          source:
            id: s_Qp0oneK32t5gkAW1uHAOy7
            source_type: api_record
            title: 中国历代人物传记资料库：王申鍚（CBDB 333002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json
            external_identifier: CBDB:333002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBNAibWSwiLJagKdPeWqgE
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fxWRuULdHyCCaStqtyi0YQ
        subject_person_id: p_Gp6y1q4dJWg2vQcGdDyeHS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uR8U8tVoBSnXXcFrEGcBq6
          claim_id: c_fxWRuULdHyCCaStqtyi0YQ
          source_id: s_Qp0oneK32t5gkAW1uHAOy7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205426 王三鍚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qp0oneK32t5gkAW1uHAOy7
            source_type: api_record
            title: 中国历代人物传记资料库：王申鍚（CBDB 333002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json
            external_identifier: CBDB:333002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RPorhHfNa1cjhpbMo2ZnFo
        status: active
        display_name: 王三鍚
        merged_into_person_id: null
---

# 王申鍚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王申鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 333002） | accepted |
| name.primary | 王申鍚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBNAibWSwiLJagKdPeWqgE | 王一陽 | accepted |
| other | p_RPorhHfNa1cjhpbMo2ZnFo | 王三鍚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王申鍚（CBDB 333002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json)
