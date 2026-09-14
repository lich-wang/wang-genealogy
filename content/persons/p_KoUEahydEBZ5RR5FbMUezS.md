---
schema: wang-person/v1
id: p_KoUEahydEBZ5RR5FbMUezS
status: active
merged_into: null
display_name: 王守臣
cbdb_id: 282047
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jGCshKKYBpxwP7Hzn8wMiu
        subject_person_id: p_KoUEahydEBZ5RR5FbMUezS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XLZZjIod_SQCjAtMNQ9cGk
          claim_id: c_jGCshKKYBpxwP7Hzn8wMiu
          source_id: s_4cegZj4WqXaCqnNqfdmSQL
          stance: supports
          locator: CBDB:282047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4cegZj4WqXaCqnNqfdmSQL
            source_type: api_record
            title: 中国历代人物传记资料库：王守臣（CBDB 282047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json
            external_identifier: CBDB:282047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ku1TbDFHKzcoXcVgkNVAoN
        subject_person_id: p_KoUEahydEBZ5RR5FbMUezS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vKbCmWATKrtGYQk7Z6uswq
          claim_id: c_ku1TbDFHKzcoXcVgkNVAoN
          source_id: s_4cegZj4WqXaCqnNqfdmSQL
          stance: supports
          locator: CBDB:282047
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f6Or_reHnH3Zbx2MzSE7fd
        subject_person_id: p_sp87Q8ktX7kHeJfazKTe3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KoUEahydEBZ5RR5FbMUezS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lwKZmfbkXVlR6p8u4qPvRO
          claim_id: c_f6Or_reHnH3Zbx2MzSE7fd
          source_id: s_KsRHobB--pzVIPmmf8h2zs
          stance: supports
          locator: CBDB：兄弟 王翰臣（202016）之父／母 王琛
          quotation: null
          interpretation_note: 由兄弟关系推断：王守臣 与 王翰臣 为同胞（CBDB 记「兄」），王翰臣 之父／母即 王守臣 之父／母。
          source:
            id: s_KsRHobB--pzVIPmmf8h2zs
            source_type: api_record
            title: 中国历代人物传记资料库：王守臣（CBDB 282047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json
            external_identifier: CBDB:282047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sp87Q8ktX7kHeJfazKTe3u
        status: active
        display_name: 王琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_j8WvNkT4cJTcLxFJHKuQEZ
        subject_person_id: p_KoUEahydEBZ5RR5FbMUezS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9rZyB3lBuQeDJjOJamOAdB
          claim_id: c_j8WvNkT4cJTcLxFJHKuQEZ
          source_id: s_KsRHobB--pzVIPmmf8h2zs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202016 王翰臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KsRHobB--pzVIPmmf8h2zs
            source_type: api_record
            title: 中国历代人物传记资料库：王守臣（CBDB 282047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json
            external_identifier: CBDB:282047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mm4Feno3TMRLDtespKCU2Q
        status: active
        display_name: 王翰臣
        merged_into_person_id: null
---

# 王守臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282047） | accepted |
| name.primary | 王守臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sp87Q8ktX7kHeJfazKTe3u | 王琛 | accepted |
| other | p_Mm4Feno3TMRLDtespKCU2Q | 王翰臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守臣（CBDB 282047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282047&o=json)
