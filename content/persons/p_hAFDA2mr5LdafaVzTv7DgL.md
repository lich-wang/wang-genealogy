---
schema: wang-person/v1
id: p_hAFDA2mr5LdafaVzTv7DgL
status: active
merged_into: null
display_name: 王立賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8FYCncKwq7jvkz5z35Rgfr
        subject_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CbXp5WaaRAf2waFQQeD5zB
          claim_id: c_8FYCncKwq7jvkz5z35Rgfr
          source_id: s_weALD6xp8GDi7gQdXqc8nC
          stance: supports
          locator: CBDB:292750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292750）
          source: &a1
            id: s_weALD6xp8GDi7gQdXqc8nC
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 292750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json
            external_identifier: CBDB:292750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_icCNiEVAEDx8A16NFu254o
        subject_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EGOmIMyQlYQSpLLTnpedV2
          claim_id: c_icCNiEVAEDx8A16NFu254o
          source_id: s_weALD6xp8GDi7gQdXqc8nC
          stance: supports
          locator: CBDB:292750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tYGiCXaRclhxoJmOPuPMYz
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rE7g9i1TY8B58g8MFDAsp-
          claim_id: c_tYGiCXaRclhxoJmOPuPMYz
          source_id: s_xm9yvmDpPGFH-SH4fjFV3h
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王立賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王立賢 之父／母。
          source:
            id: s_xm9yvmDpPGFH-SH4fjFV3h
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 292750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json
            external_identifier: CBDB:292750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OHFfLo_KWtXNeYZxdYSONA
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8RH_Ov90GV-y59jxy4TV0
          claim_id: c_OHFfLo_KWtXNeYZxdYSONA
          source_id: s_xm9yvmDpPGFH-SH4fjFV3h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xm9yvmDpPGFH-SH4fjFV3h
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 292750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json
            external_identifier: CBDB:292750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
---

# 王立賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立賢 | accepted |
| bio.summary | 王立賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| other | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立賢（CBDB 292750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json)
