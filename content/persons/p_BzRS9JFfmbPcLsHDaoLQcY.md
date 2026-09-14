---
schema: wang-person/v1
id: p_BzRS9JFfmbPcLsHDaoLQcY
status: active
merged_into: null
display_name: 王玶
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sHFzydFGoTKgC1MopRGyJa
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SumT9gQvwGJRKj1hf7c8D2
          claim_id: c_sHFzydFGoTKgC1MopRGyJa
          source_id: s_A3WsLP9uN76BDjX2s7xc3W
          stance: supports
          locator: CBDB:309422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309422）
          source: &a1
            id: s_A3WsLP9uN76BDjX2s7xc3W
            source_type: api_record
            title: 中国历代人物传记资料库：王玶（CBDB 309422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309422&o=json
            external_identifier: CBDB:309422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aK8NmNUtPZgN51nLqQwP2t
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玶，明人物。嘉靖二十六年進士，籍贯寧津，曾任都司都事。（中国历代人物传记资料库 CBDB 309422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QNdRuGFLRXCzx6mw8BHJnN
          claim_id: c_aK8NmNUtPZgN51nLqQwP2t
          source_id: s_A3WsLP9uN76BDjX2s7xc3W
          stance: supports
          locator: CBDB:309422
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xFrbIMppadLb9W1QN1jQAG
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66ObeX6P8aSA9QKUjCZjvx
          claim_id: c_xFrbIMppadLb9W1QN1jQAG
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4gLzeKTw3AayU519ocN97
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 126530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json
            external_identifier: CBDB:126530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
    - claim:
        id: c_QBtCafGYFobigEVXrL2Uw8
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LdrAUpv6xQEub6YGNkASRW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yc-_P958ZFpPTEYQCWs9QV
          claim_id: c_QBtCafGYFobigEVXrL2Uw8
          source_id: s_TBfe6oZ23zxzJCoExFnneJ
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良史 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良史 之父／母。
          source:
            id: s_TBfe6oZ23zxzJCoExFnneJ
            source_type: api_record
            title: 中国历代人物传记资料库：王良史（CBDB 309430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json
            external_identifier: CBDB:309430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LdrAUpv6xQEub6YGNkASRW
        status: active
        display_name: 王良史
        merged_into_person_id: null
    - claim:
        id: c_Mv8rgyOSFkwSWH0tMmf-lG
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MLikYG8QhwVJUZ5hXPsjPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ynx9M7EM2_aKmPh9MjErW
          claim_id: c_Mv8rgyOSFkwSWH0tMmf-lG
          source_id: s_Z9nN2sDiHs_IGtYXBj7DHh
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良士 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良士 之父／母。
          source:
            id: s_Z9nN2sDiHs_IGtYXBj7DHh
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 309427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json
            external_identifier: CBDB:309427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MLikYG8QhwVJUZ5hXPsjPN
        status: active
        display_name: 王良士
        merged_into_person_id: null
    - claim:
        id: c_rNwy1a15bOwKS9vhGJHyNZ
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3aLnkpLYSuKDFkPBYNPFW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7OuEPRG19noPVNl6-0DXT
          claim_id: c_rNwy1a15bOwKS9vhGJHyNZ
          source_id: s_GnvH8SsXFaSw-Cryr6wzEX
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良器 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良器 之父／母。
          source:
            id: s_GnvH8SsXFaSw-Cryr6wzEX
            source_type: api_record
            title: 中国历代人物传记资料库：王良器（CBDB 309428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309428&o=json
            external_identifier: CBDB:309428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X3aLnkpLYSuKDFkPBYNPFW
        status: active
        display_name: 王良器
        merged_into_person_id: null
    - claim:
        id: c_0cGOjEE5YBXQNy3k0PWPwl
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6kWprUPxfj48uKMWi4Fvm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YIHZh5qHpt-Mim7stoxeo
          claim_id: c_0cGOjEE5YBXQNy3k0PWPwl
          source_id: s_eldfpPdnhDopDzo2-QqHrh
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良材 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良材 之父／母。
          source:
            id: s_eldfpPdnhDopDzo2-QqHrh
            source_type: api_record
            title: 中国历代人物传记资料库：王良材（CBDB 309426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json
            external_identifier: CBDB:309426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6kWprUPxfj48uKMWi4Fvm
        status: active
        display_name: 王良材
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玶 | accepted |
| bio.summary | 王玶，明人物。嘉靖二十六年進士，籍贯寧津，曾任都司都事。（中国历代人物传记资料库 CBDB 309422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |
| children | p_LdrAUpv6xQEub6YGNkASRW | 王良史 | accepted |
| children | p_MLikYG8QhwVJUZ5hXPsjPN | 王良士 | accepted |
| children | p_X3aLnkpLYSuKDFkPBYNPFW | 王良器 | accepted |
| children | p_z6kWprUPxfj48uKMWi4Fvm | 王良材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良材（CBDB 309426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json)
- [中国历代人物传记资料库：王良貴（CBDB 126530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json)
- [中国历代人物传记资料库：王良器（CBDB 309428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309428&o=json)
- [中国历代人物传记资料库：王良史（CBDB 309430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json)
- [中国历代人物传记资料库：王良士（CBDB 309427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309427&o=json)
- [中国历代人物传记资料库：王玶（CBDB 309422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309422&o=json)
