---
schema: wang-person/v1
id: p_KAKxFtVrwdv1yKXQT7m9zk
status: active
merged_into: null
display_name: 王仲鏞
cbdb_id: 288166
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GTDdvQeMX8rajoFJYfX4Qg
        subject_person_id: p_KAKxFtVrwdv1yKXQT7m9zk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲鏞，明人物。嘉靖八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 288166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hq64jSi8Xxv6K_1Rdl_QM1
          claim_id: c_GTDdvQeMX8rajoFJYfX4Qg
          source_id: s_GmKFZ1u92vwA5ELePfFdX2
          stance: supports
          locator: CBDB:288166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GmKFZ1u92vwA5ELePfFdX2
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鏞（CBDB 288166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288166&o=json
            external_identifier: CBDB:288166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_53pk9WmYJ2w7twbAJNyM14
        subject_person_id: p_KAKxFtVrwdv1yKXQT7m9zk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5YdpNxPNtgZMKvU2uUpD2w
          claim_id: c_53pk9WmYJ2w7twbAJNyM14
          source_id: s_GmKFZ1u92vwA5ELePfFdX2
          stance: supports
          locator: CBDB:288166
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z8cVMu_dhqrUfXunEmkk5g
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KAKxFtVrwdv1yKXQT7m9zk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8MNZ5ZeA0W_gwwYy12hub
          claim_id: c_z8cVMu_dhqrUfXunEmkk5g
          source_id: s_skBucKj4wCiNCcrQS4QHs1
          stance: supports
          locator: CBDB：兄弟 王仲錦（202438）之父／母 王先明
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲鏞 与 王仲錦 为同胞（CBDB 记「兄」），王仲錦 之父／母即 王仲鏞 之父／母。
          source:
            id: s_skBucKj4wCiNCcrQS4QHs1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鏞（CBDB 288166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288166&o=json
            external_identifier: CBDB:288166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hWH4QC9TGn1hej6FkM79ja
        status: active
        display_name: 王先明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NQ6-e8uMzEOsMuIb___46B
        subject_person_id: p_B8unMbh7dYqs1NQhhGC4Lt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KAKxFtVrwdv1yKXQT7m9zk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1_AdhZweMypwNn8sJ3qQRK
          claim_id: c_NQ6-e8uMzEOsMuIb___46B
          source_id: s_skBucKj4wCiNCcrQS4QHs1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202438 王仲錦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_skBucKj4wCiNCcrQS4QHs1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鏞（CBDB 288166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288166&o=json
            external_identifier: CBDB:288166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B8unMbh7dYqs1NQhhGC4Lt
        status: active
        display_name: 王仲錦
        merged_into_person_id: null
---

# 王仲鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲鏞，明人物。嘉靖八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 288166） | accepted |
| name.primary | 王仲鏞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hWH4QC9TGn1hej6FkM79ja | 王先明 | accepted |
| other | p_B8unMbh7dYqs1NQhhGC4Lt | 王仲錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲鏞（CBDB 288166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288166&o=json)
