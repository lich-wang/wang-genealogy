---
schema: wang-person/v1
id: p_6G7ptwRpCYfMhqCPVfSHjK
status: active
merged_into: null
display_name: 王鑰陽
cbdb_id: 221874
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBTyj2AoL85QKc4exRBRxC
        subject_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_otkhfQfPZC6Lh7mmn4ar7V
          claim_id: c_DBTyj2AoL85QKc4exRBRxC
          source_id: s_ae7ajaenoN9ZFNoNrMenjw
          stance: supports
          locator: CBDB:221874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ae7ajaenoN9ZFNoNrMenjw
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰陽（CBDB 221874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json
            external_identifier: CBDB:221874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJM4xNEfpdzSDkfnyf7M92
        subject_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2FUPyP2GLT4otpC6ZeyAYJ
          claim_id: c_aJM4xNEfpdzSDkfnyf7M92
          source_id: s_ae7ajaenoN9ZFNoNrMenjw
          stance: supports
          locator: CBDB:221874
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iZVYHhLLzpS_ubIoPUz_sm
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IW8Fgg-0ApnuJom8KQhLy1
          claim_id: c_iZVYHhLLzpS_ubIoPUz_sm
          source_id: s_Dl0YtOvr5uAs2kgxKQuJkG
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王鑰陽 之父／母。
          source:
            id: s_Dl0YtOvr5uAs2kgxKQuJkG
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰陽（CBDB 221874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json
            external_identifier: CBDB:221874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_g725Aaji6FgBsVjIlNQO4j
        subject_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0wtZi3LHb0iZ-BjKo_PcW9
          claim_id: c_g725Aaji6FgBsVjIlNQO4j
          source_id: s_Dl0YtOvr5uAs2kgxKQuJkG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Dl0YtOvr5uAs2kgxKQuJkG
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰陽（CBDB 221874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json
            external_identifier: CBDB:221874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王鑰陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鑰陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221874） | accepted |
| name.primary | 王鑰陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑰陽（CBDB 221874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json)
