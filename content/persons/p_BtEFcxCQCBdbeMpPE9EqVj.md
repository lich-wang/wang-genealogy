---
schema: wang-person/v1
id: p_BtEFcxCQCBdbeMpPE9EqVj
status: active
merged_into: null
display_name: 王良驄
cbdb_id: 210735
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JTRrGcsoDv1SDp2U2284wz
        subject_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驄，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_COws9VeQfiwkA1sOfFjUw8
          claim_id: c_JTRrGcsoDv1SDp2U2284wz
          source_id: s_TpPpqiJtFwtLQHo2nEqBpc
          stance: supports
          locator: CBDB:210735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TpPpqiJtFwtLQHo2nEqBpc
            source_type: api_record
            title: 中国历代人物传记资料库：王良驄（CBDB 210735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json
            external_identifier: CBDB:210735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Bsg5MY3vnxuUxDCzSYmz4
        subject_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6GudCXTMWNgC9Pm9Cy5LTw
          claim_id: c_2Bsg5MY3vnxuUxDCzSYmz4
          source_id: s_TpPpqiJtFwtLQHo2nEqBpc
          stance: supports
          locator: CBDB:210735
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jUD5ppbgEVVuPSKTD-9SRO
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SNtw-K2IdToyltatIaPwxY
          claim_id: c_jUD5ppbgEVVuPSKTD-9SRO
          source_id: s_0cw_MTbXvdMVZesweQ2Uex
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驄 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良驄 之父／母。
          source:
            id: s_0cw_MTbXvdMVZesweQ2Uex
            source_type: api_record
            title: 中国历代人物传记资料库：王良驄（CBDB 210735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json
            external_identifier: CBDB:210735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Zs_ToPjV8DceUqx-jY_so8
        subject_person_id: p_BtEFcxCQCBdbeMpPE9EqVj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAOSg3CpKxd9gzecU5ExaV
          claim_id: c_Zs_ToPjV8DceUqx-jY_so8
          source_id: s_0cw_MTbXvdMVZesweQ2Uex
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0cw_MTbXvdMVZesweQ2Uex
            source_type: api_record
            title: 中国历代人物传记资料库：王良驄（CBDB 210735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json
            external_identifier: CBDB:210735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良驄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良驄，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210735） | accepted |
| name.primary | 王良驄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良驄（CBDB 210735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210735&o=json)
