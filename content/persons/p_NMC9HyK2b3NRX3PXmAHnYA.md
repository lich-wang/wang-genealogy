---
schema: wang-person/v1
id: p_NMC9HyK2b3NRX3PXmAHnYA
status: active
merged_into: null
display_name: 王從讓
cbdb_id: 231573
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W36Z46M9j3ZsK57gMhfweo
        subject_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從讓，明人物。宣德八年進士，籍贯大城。（中国历代人物传记资料库 CBDB 231573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F-tiA43yYKo6g9kuBYOrt9
          claim_id: c_W36Z46M9j3ZsK57gMhfweo
          source_id: s_SAnZb3SHeH7dHYnXUrJ22K
          stance: supports
          locator: CBDB:231573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SAnZb3SHeH7dHYnXUrJ22K
            source_type: api_record
            title: 中国历代人物传记资料库：王從讓（CBDB 231573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json
            external_identifier: CBDB:231573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VhMh49mLJyriaTQbDZ1ieV
        subject_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5QUPfem2wXmdqSbNAtge2R
          claim_id: c_VhMh49mLJyriaTQbDZ1ieV
          source_id: s_SAnZb3SHeH7dHYnXUrJ22K
          stance: supports
          locator: CBDB:231573
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BJ-RIJca5g6DTpvDnipe_y
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7uSjFFPNZ-YWCxswWE_yE
          claim_id: c_BJ-RIJca5g6DTpvDnipe_y
          source_id: s_V5VsyaDofccSEy-js-Zutp
          stance: supports
          locator: CBDB：兄弟 王亮（207345）之父／母 王甫林
          quotation: null
          interpretation_note: 由兄弟关系推断：王從讓 与 王亮 为同胞（CBDB 记「弟」），王亮 之父／母即 王從讓 之父／母。
          source:
            id: s_V5VsyaDofccSEy-js-Zutp
            source_type: api_record
            title: 中国历代人物传记资料库：王從讓（CBDB 231573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json
            external_identifier: CBDB:231573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        status: active
        display_name: 王甫林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JJIYkV_nYDQmc4BRKF8sKw
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j77n6vmXq5sAeF5wRgjRFX
          claim_id: c_JJIYkV_nYDQmc4BRKF8sKw
          source_id: s_V5VsyaDofccSEy-js-Zutp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207345 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V5VsyaDofccSEy-js-Zutp
            source_type: api_record
            title: 中国历代人物传记资料库：王從讓（CBDB 231573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json
            external_identifier: CBDB:231573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1GhPFs5m4G2BPwjpU26jtR
        status: active
        display_name: 王亮
        merged_into_person_id: null
---

# 王從讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從讓，明人物。宣德八年進士，籍贯大城。（中国历代人物传记资料库 CBDB 231573） | accepted |
| name.primary | 王從讓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jn7Z5DoHyCUh3Tr3UBMSXH | 王甫林 | accepted |
| other | p_1GhPFs5m4G2BPwjpU26jtR | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從讓（CBDB 231573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json)
