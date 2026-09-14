---
schema: wang-person/v1
id: p_hWH4QC9TGn1hej6FkM79ja
status: active
merged_into: null
display_name: 王先明
cbdb_id: 288161
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4WMAxik3inLpAC5DGZ5ZBb
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先明，明人物。嘉靖八年進士，籍贯吉水，曾任副千戶。（中国历代人物传记资料库 CBDB 288161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OqsdFGLJKpaSJerU0rqtUc
          claim_id: c_4WMAxik3inLpAC5DGZ5ZBb
          source_id: s_5dP4tKkiKr8WfojNC94mqt
          stance: supports
          locator: CBDB:288161
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5dP4tKkiKr8WfojNC94mqt
            source_type: api_record
            title: 中国历代人物传记资料库：王先明（CBDB 288161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288161&o=json
            external_identifier: CBDB:288161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_89YiYCoy2BZ85vGEdCkiUf
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EgVBJGtFFtJoqWNG2sD1b7
          claim_id: c_89YiYCoy2BZ85vGEdCkiUf
          source_id: s_5dP4tKkiKr8WfojNC94mqt
          stance: supports
          locator: CBDB:288161
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bVIMJhwh6yRpj9-8SIBaGv
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B8unMbh7dYqs1NQhhGC4Lt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZE_rEllQ4ApN_EXjj8Bsx
          claim_id: c_bVIMJhwh6yRpj9-8SIBaGv
          source_id: s_5dP4tKkiKr8WfojNC94mqt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5dP4tKkiKr8WfojNC94mqt
            source_type: api_record
            title: 中国历代人物传记资料库：王先明（CBDB 288161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288161&o=json
            external_identifier: CBDB:288161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_B8unMbh7dYqs1NQhhGC4Lt
        status: active
        display_name: 王仲錦
        merged_into_person_id: null
    - claim:
        id: c_0BQ7uiiOAUanjaWEE6RzyD
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_53zPmG5Fk9uaK67HiEix6i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Fy0M7Ju5nm7GIwnM4PuWI
          claim_id: c_0BQ7uiiOAUanjaWEE6RzyD
          source_id: s_oAzZr_GCT6jbIfgFX2PBVa
          stance: supports
          locator: CBDB：兄弟 王仲錦（202438）之父／母 王先明
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲鎡 与 王仲錦 为同胞（CBDB 记「兄」），王仲錦 之父／母即 王仲鎡 之父／母。
          source:
            id: s_oAzZr_GCT6jbIfgFX2PBVa
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鎡（CBDB 288167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288167&o=json
            external_identifier: CBDB:288167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_53zPmG5Fk9uaK67HiEix6i
        status: active
        display_name: 王仲鎡
        merged_into_person_id: null
    - claim:
        id: c_Ll0y6kQ-gQAVFOxQF960OB
        subject_person_id: p_hWH4QC9TGn1hej6FkM79ja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5KKdWvczqV4ZRJHzEcYzxa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lsg4dCYve6mEyvcFpr9NqO
          claim_id: c_Ll0y6kQ-gQAVFOxQF960OB
          source_id: s_43TVuHgH7z81B7nrxJjkVx
          stance: supports
          locator: CBDB：兄弟 王仲錦（202438）之父／母 王先明
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲銓 与 王仲錦 为同胞（CBDB 记「兄」），王仲錦 之父／母即 王仲銓 之父／母。
          source:
            id: s_43TVuHgH7z81B7nrxJjkVx
            source_type: api_record
            title: 中国历代人物传记资料库：王仲銓（CBDB 288165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288165&o=json
            external_identifier: CBDB:288165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5KKdWvczqV4ZRJHzEcYzxa
        status: active
        display_name: 王仲銓
        merged_into_person_id: null
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
        id: p_KAKxFtVrwdv1yKXQT7m9zk
        status: active
        display_name: 王仲鏞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王先明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王先明，明人物。嘉靖八年進士，籍贯吉水，曾任副千戶。（中国历代人物传记资料库 CBDB 288161） | accepted |
| name.primary | 王先明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_B8unMbh7dYqs1NQhhGC4Lt | 王仲錦 | accepted |
| children | p_53zPmG5Fk9uaK67HiEix6i | 王仲鎡 | accepted |
| children | p_5KKdWvczqV4ZRJHzEcYzxa | 王仲銓 | accepted |
| children | p_KAKxFtVrwdv1yKXQT7m9zk | 王仲鏞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王先明（CBDB 288161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288161&o=json)
- [中国历代人物传记资料库：王仲銓（CBDB 288165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288165&o=json)
- [中国历代人物传记资料库：王仲鏞（CBDB 288166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288166&o=json)
- [中国历代人物传记资料库：王仲鎡（CBDB 288167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288167&o=json)
