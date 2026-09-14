---
schema: wang-person/v1
id: p_3F4tUNNkku3vfja1G5JLt6
status: active
merged_into: null
display_name: 王宗浹
cbdb_id: 305715
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JVxyqKuPgxsMx8vdr27EV3
        subject_person_id: p_3F4tUNNkku3vfja1G5JLt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗浹，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hJFzT748oVEWyMeNo3l1Lg
          claim_id: c_JVxyqKuPgxsMx8vdr27EV3
          source_id: s_fkjk8H9sFAt6bAmNyyVaNZ
          stance: supports
          locator: CBDB:305715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fkjk8H9sFAt6bAmNyyVaNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗浹（CBDB 305715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json
            external_identifier: CBDB:305715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dxt2L2ufNni98zG4SzEToW
        subject_person_id: p_3F4tUNNkku3vfja1G5JLt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗浹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LjtmPq3RLdsGAQkkyB2qdQ
          claim_id: c_Dxt2L2ufNni98zG4SzEToW
          source_id: s_fkjk8H9sFAt6bAmNyyVaNZ
          stance: supports
          locator: CBDB:305715
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tkFM2So8w4RpMG7Qjim0Cn
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3F4tUNNkku3vfja1G5JLt6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2zmSsgW5Vpiplae0GzGBX
          claim_id: c_tkFM2So8w4RpMG7Qjim0Cn
          source_id: s_0XPf_MTY6XL4IaV8QsG1Hm
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗浹 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗浹 之父／母。
          source:
            id: s_0XPf_MTY6XL4IaV8QsG1Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗浹（CBDB 305715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json
            external_identifier: CBDB:305715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        status: active
        display_name: 王训
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZN5d2_nxVumJsglfnw1dht
        subject_person_id: p_3F4tUNNkku3vfja1G5JLt6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_trUE1ub3cUR7dMLX7JC1NK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kd-h4gP9WN9PtHT9kw-xVT
          claim_id: c_ZN5d2_nxVumJsglfnw1dht
          source_id: s_0XPf_MTY6XL4IaV8QsG1Hm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 35065 王宗沐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0XPf_MTY6XL4IaV8QsG1Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗浹（CBDB 305715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json
            external_identifier: CBDB:305715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_trUE1ub3cUR7dMLX7JC1NK
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
---

# 王宗浹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗浹，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305715） | accepted |
| name.primary | 王宗浹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZ1ZKEEFmDKA3BH7yDPbwn | 王训 | accepted |
| other | p_trUE1ub3cUR7dMLX7JC1NK | 王宗沐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗浹（CBDB 305715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json)
