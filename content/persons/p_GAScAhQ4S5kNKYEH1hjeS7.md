---
schema: wang-person/v1
id: p_GAScAhQ4S5kNKYEH1hjeS7
status: active
merged_into: null
display_name: 王子謹
cbdb_id: 267624
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQMzHbbrYP7Djc1ne5b6gv
        subject_person_id: p_GAScAhQ4S5kNKYEH1hjeS7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謹，明人物。弘治九年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 267624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Z9nMC9O8ifMUON8ICDcZ2w
          claim_id: c_MQMzHbbrYP7Djc1ne5b6gv
          source_id: s_MdXZPoa4irxdP6LFfeSPE1
          stance: supports
          locator: CBDB:267624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MdXZPoa4irxdP6LFfeSPE1
            source_type: api_record
            title: 中国历代人物传记资料库：王子謹（CBDB 267624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json
            external_identifier: CBDB:267624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4t8HQyYGmvtQJuCy2iMDVF
        subject_person_id: p_GAScAhQ4S5kNKYEH1hjeS7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9SzP5HSfrhH4AK86TYR1Rs
          claim_id: c_4t8HQyYGmvtQJuCy2iMDVF
          source_id: s_MdXZPoa4irxdP6LFfeSPE1
          stance: supports
          locator: CBDB:267624
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AcMoqktvKMlcl4j1HgzMaU
        subject_person_id: p_GAScAhQ4S5kNKYEH1hjeS7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Syc31fNwi32wruZuRYZrtu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PdogaFWlyNf61z9svLNpgI
          claim_id: c_AcMoqktvKMlcl4j1HgzMaU
          source_id: s_nx8ahTg6yMDNPNxFDZVoIz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201131 王子言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nx8ahTg6yMDNPNxFDZVoIz
            source_type: api_record
            title: 中国历代人物传记资料库：王子謹（CBDB 267624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json
            external_identifier: CBDB:267624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syc31fNwi32wruZuRYZrtu
        status: active
        display_name: 王子言
        merged_into_person_id: null
    - claim:
        id: c_mOlGasyEVRDfIvIM8Um9BL
        subject_person_id: p_GAScAhQ4S5kNKYEH1hjeS7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJ7_1tcKo-zHmNw9ySfqtp
          claim_id: c_mOlGasyEVRDfIvIM8Um9BL
          source_id: s_nx8ahTg6yMDNPNxFDZVoIz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201582 王子謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nx8ahTg6yMDNPNxFDZVoIz
            source_type: api_record
            title: 中国历代人物传记资料库：王子謹（CBDB 267624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json
            external_identifier: CBDB:267624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTQ9DBgLuTWCqCSppicxY6
        status: active
        display_name: 王子謨
        merged_into_person_id: null
---

# 王子謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子謹，明人物。弘治九年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 267624） | accepted |
| name.primary | 王子謹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_Syc31fNwi32wruZuRYZrtu | 王子言 | accepted |
| other | p_TTQ9DBgLuTWCqCSppicxY6 | 王子謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子謹（CBDB 267624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json)
