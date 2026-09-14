---
schema: wang-person/v1
id: p_dqmEghqiiEQ92yHeRUQXnZ
status: active
merged_into: null
display_name: 王憲恭
cbdb_id: 235988
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pPmqGEwMiU8kfLB2ESb9e
        subject_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲恭，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IS1LEk-HEGlhczAbarHsaM
          claim_id: c_8pPmqGEwMiU8kfLB2ESb9e
          source_id: s_BZMdQ2WH29MQCMvaujBh3g
          stance: supports
          locator: CBDB:235988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BZMdQ2WH29MQCMvaujBh3g
            source_type: api_record
            title: 中国历代人物传记资料库：王憲恭（CBDB 235988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json
            external_identifier: CBDB:235988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ERWSsiAg1atwPo1K5DrW85
        subject_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ckbGG9m7UvdwiwzbcME7FB
          claim_id: c_ERWSsiAg1atwPo1K5DrW85
          source_id: s_BZMdQ2WH29MQCMvaujBh3g
          stance: supports
          locator: CBDB:235988
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8f9yCCSCgH8zAFnZB7NHw6
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zfscJnOZ7KXMeRX9LKBu2-
          claim_id: c_8f9yCCSCgH8zAFnZB7NHw6
          source_id: s_KwDCPjOqjilmI_4ODmds5G
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲恭 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王憲恭 之父／母。
          source:
            id: s_KwDCPjOqjilmI_4ODmds5G
            source_type: api_record
            title: 中国历代人物传记资料库：王憲恭（CBDB 235988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json
            external_identifier: CBDB:235988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ufk-fF2R3A0yhgU5_BwCTm
        subject_person_id: p_dqmEghqiiEQ92yHeRUQXnZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7H3F6vX0Cdt-MmTvZoOvg
          claim_id: c_ufk-fF2R3A0yhgU5_BwCTm
          source_id: s_KwDCPjOqjilmI_4ODmds5G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KwDCPjOqjilmI_4ODmds5G
            source_type: api_record
            title: 中国历代人物传记资料库：王憲恭（CBDB 235988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json
            external_identifier: CBDB:235988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王憲恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王憲恭，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235988） | accepted |
| name.primary | 王憲恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲恭（CBDB 235988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235988&o=json)
