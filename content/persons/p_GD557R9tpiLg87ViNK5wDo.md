---
schema: wang-person/v1
id: p_GD557R9tpiLg87ViNK5wDo
status: active
merged_into: null
display_name: 王璇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LikoZ2pmkMJtDdcPoezx2n
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3uKRcKv2Zz4F3AKx3Ks3RJ
          claim_id: c_LikoZ2pmkMJtDdcPoezx2n
          source_id: s_rzt2VMG8dn2UUF86CpEhNL
          stance: supports
          locator: CBDB:324185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324185）
          source: &a1
            id: s_rzt2VMG8dn2UUF86CpEhNL
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GSTyekBUoLrfHXkAeApfUR
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。天順四年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 324185）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JGNO3YreTv5svABzIbazZ
          claim_id: c_GSTyekBUoLrfHXkAeApfUR
          source_id: s_rzt2VMG8dn2UUF86CpEhNL
          stance: supports
          locator: CBDB:324185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mOYluAwWg5FBU2DZUCY13l
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GD557R9tpiLg87ViNK5wDo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAEKrYge3XuoApzFqS4A89
          claim_id: c_mOYluAwWg5FBU2DZUCY13l
          source_id: s__t-Xkvj-kVVTDOgyGCVSYH
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王璇 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璇 之父／母。
          source:
            id: s__t-Xkvj-kVVTDOgyGCVSYH
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q794sLSCL4J2grKV4vicPg
        status: active
        display_name: 王時佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Gn85B1bmra4KgzILjKLOuz
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MIf6M7PLJbOcoGjoXYIEI7
          claim_id: c_Gn85B1bmra4KgzILjKLOuz
          source_id: s__t-Xkvj-kVVTDOgyGCVSYH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__t-Xkvj-kVVTDOgyGCVSYH
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HvKxCmK79R4YwoS4fwu3e3
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。天順四年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 324185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q794sLSCL4J2grKV4vicPg | 王時佐 | accepted |
| other | p_HvKxCmK79R4YwoS4fwu3e3 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 324185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json)
