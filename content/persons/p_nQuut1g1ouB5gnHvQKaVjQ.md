---
schema: wang-person/v1
id: p_nQuut1g1ouB5gnHvQKaVjQ
status: active
merged_into: null
display_name: 王湯夫
cbdb_id: 264593
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TeTgx4aCyKWrVV39kPorN3
        subject_person_id: p_nQuut1g1ouB5gnHvQKaVjQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯夫，明人物。弘治六年進士，籍贯新都。（中国历代人物传记资料库 CBDB 264593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_g3TsOQKP8IYEX3iLAHNn_S
          claim_id: c_TeTgx4aCyKWrVV39kPorN3
          source_id: s_gzqDJqdr2daFHyeTMsNA3X
          stance: supports
          locator: CBDB:264593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gzqDJqdr2daFHyeTMsNA3X
            source_type: api_record
            title: 中国历代人物传记资料库：王湯夫（CBDB 264593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json
            external_identifier: CBDB:264593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d12LtVj6mt8ERqbLBiGKqQ
        subject_person_id: p_nQuut1g1ouB5gnHvQKaVjQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t7B2QjAzpDgfYAS7vim16C
          claim_id: c_d12LtVj6mt8ERqbLBiGKqQ
          source_id: s_gzqDJqdr2daFHyeTMsNA3X
          stance: supports
          locator: CBDB:264593
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r09E0vejTEgtE7FRSRuZGB
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQuut1g1ouB5gnHvQKaVjQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBCdS-wtjSv45818wFxphf
          claim_id: c_r09E0vejTEgtE7FRSRuZGB
          source_id: s_QPP6rvgN-CMswKnMEOpCuI
          stance: supports
          locator: CBDB：兄弟 王舜夫（200919）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王湯夫 与 王舜夫 为同胞（CBDB 记「兄」），王舜夫 之父／母即 王湯夫 之父／母。
          source:
            id: s_QPP6rvgN-CMswKnMEOpCuI
            source_type: api_record
            title: 中国历代人物传记资料库：王湯夫（CBDB 264593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json
            external_identifier: CBDB:264593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d6UDv6dAxjBQ8P1sMj6D6e
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IZvi-bkjhhjrc7SJosU1si
        subject_person_id: p_655CGkFBuWbBdZzbbcQcR6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nQuut1g1ouB5gnHvQKaVjQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CX3Uwme-489JGt1w5WElRG
          claim_id: c_IZvi-bkjhhjrc7SJosU1si
          source_id: s_QPP6rvgN-CMswKnMEOpCuI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200919 王舜夫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QPP6rvgN-CMswKnMEOpCuI
            source_type: api_record
            title: 中国历代人物传记资料库：王湯夫（CBDB 264593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json
            external_identifier: CBDB:264593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_655CGkFBuWbBdZzbbcQcR6
        status: active
        display_name: 王舜夫
        merged_into_person_id: null
---

# 王湯夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湯夫，明人物。弘治六年進士，籍贯新都。（中国历代人物传记资料库 CBDB 264593） | accepted |
| name.primary | 王湯夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d6UDv6dAxjBQ8P1sMj6D6e | 王昂 | accepted |
| other | p_655CGkFBuWbBdZzbbcQcR6 | 王舜夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湯夫（CBDB 264593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json)
