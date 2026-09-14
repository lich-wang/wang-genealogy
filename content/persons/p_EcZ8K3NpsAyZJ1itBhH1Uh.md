---
schema: wang-person/v1
id: p_EcZ8K3NpsAyZJ1itBhH1Uh
status: active
merged_into: null
display_name: 王鎮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3EAXocL99cDgB9pRLMJg6a
        subject_person_id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8zkpRiLFxmHZGLnDU6AcQC
          claim_id: c_3EAXocL99cDgB9pRLMJg6a
          source_id: s_mSvE4JqF8CSyLb9x9BWBLG
          stance: supports
          locator: CBDB:289110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289110）
          source: &a1
            id: s_mSvE4JqF8CSyLb9x9BWBLG
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 289110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json
            external_identifier: CBDB:289110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CxBu5UcQs1bAWRmQRxBw6
        subject_person_id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。嘉靖八年進士，籍贯信陽衛。（中国历代人物传记资料库 CBDB 289110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9k117h8EceE_Nwai5Ulrkj
          claim_id: c_7CxBu5UcQs1bAWRmQRxBw6
          source_id: s_mSvE4JqF8CSyLb9x9BWBLG
          stance: supports
          locator: CBDB:289110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tTEUK4NWrS9SihOEDMhpxH
        subject_person_id: p_J6vGZQ2XeYqBCDgqSMhjF4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LARHOg15oGlT2qeFzhZuA
          claim_id: c_tTEUK4NWrS9SihOEDMhpxH
          source_id: s_KP1nMpGoUo_b6XAi9f6-pR
          stance: supports
          locator: CBDB：兄弟 王銳（202497）之父／母 王虎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王銳 为同胞（CBDB 记「弟」），王銳 之父／母即 王鎮 之父／母。
          source:
            id: s_KP1nMpGoUo_b6XAi9f6-pR
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 289110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json
            external_identifier: CBDB:289110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J6vGZQ2XeYqBCDgqSMhjF4
        status: active
        display_name: 王虎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZeO05NA3vktHztFGdwt1oz
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AuP9LXfdqU3zCQ542T9A8D
          claim_id: c_ZeO05NA3vktHztFGdwt1oz
          source_id: s_KP1nMpGoUo_b6XAi9f6-pR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KP1nMpGoUo_b6XAi9f6-pR
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 289110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json
            external_identifier: CBDB:289110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9uL4CzY8WtBqKSLRcVb8TP
        status: active
        display_name: 王銳
        merged_into_person_id: null
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。嘉靖八年進士，籍贯信陽衛。（中国历代人物传记资料库 CBDB 289110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J6vGZQ2XeYqBCDgqSMhjF4 | 王虎 | accepted |
| other | p_9uL4CzY8WtBqKSLRcVb8TP | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 289110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json)
