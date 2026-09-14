---
schema: wang-person/v1
id: p_dz9UYGUCmAwX3qeez8fHjJ
status: active
merged_into: null
display_name: 王俸
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNZb8bQDA41LzCQUseuUSJ
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rijFaWL8JwLh56GBSHiNKM
          claim_id: c_uNZb8bQDA41LzCQUseuUSJ
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
          stance: supports
          locator: CBDB:201386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201386）
          source: &a1
            id: s_oo6ub3W8xdQgnYNasq7HiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 201386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201386&o=json
            external_identifier: CBDB:201386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2XM2h9FWPT1GSbwnHgcNDw
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDZ411Cw14VB888tDZMiKq
          claim_id: c_2XM2h9FWPT1GSbwnHgcNDw
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iVz2XgiqBLgAhd3GyibNP7
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸（生于1467年），明人物。明清進士進士，籍贯三河，入仕進士。（中国历代人物传记资料库 CBDB 201386）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DVjS_xVmbCA45XF5rngnDG
          claim_id: c_iVz2XgiqBLgAhd3GyibNP7
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
          stance: supports
          locator: CBDB:201386
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I4xlr5wW82AvFxeQvUl74_
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ys_55hmnhOxoTKtAbBEtKZ
          claim_id: c_I4xlr5wW82AvFxeQvUl74_
          source_id: s_L7dy28x2pLVjMVBVHWsN34
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L7dy28x2pLVjMVBVHWsN34
            source_type: api_record
            title: 中国历代人物传记资料库：王文琮（CBDB 271492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json
            external_identifier: CBDB:271492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zTj1eNcAG3BPvbBjiJxYtN
        status: active
        display_name: 王文琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_88swZHcB-mBLuM1wdvIaeg
        subject_person_id: p_97newzyhq7uCYabtQtfnFW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVSKP5goOtzfi4LMAzkYwf
          claim_id: c_88swZHcB-mBLuM1wdvIaeg
          source_id: s_rchjDGUEbp3vQgcurWNEjv
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rchjDGUEbp3vQgcurWNEjv
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 271491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json
            external_identifier: CBDB:271491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_97newzyhq7uCYabtQtfnFW
        status: active
        display_name: 王祥
        merged_into_person_id: null
    - claim:
        id: c_8wXgiQQie0lG2CaoMwKg8b
        subject_person_id: p_KMpfjZPiJGQHC5a6Q1PYVp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4GN-ATpptCyrlHy0aKeDU
          claim_id: c_8wXgiQQie0lG2CaoMwKg8b
          source_id: s_1oaKuud9fgezFzDZQB28Lf
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1oaKuud9fgezFzDZQB28Lf
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 271490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271490&o=json
            external_identifier: CBDB:271490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KMpfjZPiJGQHC5a6Q1PYVp
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_0Wv7PdtTegiyNHOFU1ZUyN
        subject_person_id: p_8vvQzJPbkqSMR6bszunrHn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMjw6xVAU0M02R4DgN3ifV
          claim_id: c_0Wv7PdtTegiyNHOFU1ZUyN
          source_id: s_5h5D9I-YrJAb1Y9uQrXV7B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5h5D9I-YrJAb1Y9uQrXV7B
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json
            external_identifier: CBDB:271499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8vvQzJPbkqSMR6bszunrHn
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_FpTc_mJM-_K7ojCcnp_oCB
        subject_person_id: p_LqS3PiT77hGU8z9r23UiGH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EAixVohIlEiBy2ppXsPZ7a
          claim_id: c_FpTc_mJM-_K7ojCcnp_oCB
          source_id: s_8Y9GlNuRXWz4cJDiTsJNeg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8Y9GlNuRXWz4cJDiTsJNeg
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 271500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json
            external_identifier: CBDB:271500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LqS3PiT77hGU8z9r23UiGH
        status: active
        display_name: 王僅
        merged_into_person_id: null
    - claim:
        id: c_hDia2GVQj0etlz5BtACCqb
        subject_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLX9F_0-s8on63wASW2bD0
          claim_id: c_hDia2GVQj0etlz5BtACCqb
          source_id: s_McS1hZdiCX2xgujX2PcR5i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_McS1hZdiCX2xgujX2PcR5i
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 271501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json
            external_identifier: CBDB:271501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YHL34nZZtLDHrvcC6CJoi4
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_vLMEh3mRoPZ9tus2x9Txto
        subject_person_id: p_Zif2yp7BA6H3F1L6FZZe7h
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ABEfz0kVzGGxlo_tqaaSPE
          claim_id: c_vLMEh3mRoPZ9tus2x9Txto
          source_id: s_430t338dGk3ZE1V6hiz6Vv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_430t338dGk3ZE1V6hiz6Vv
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 271502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271502&o=json
            external_identifier: CBDB:271502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zif2yp7BA6H3F1L6FZZe7h
        status: active
        display_name: 王倫
        merged_into_person_id: null
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1467年 | accepted |
| bio.summary | 王俸（生于1467年），明人物。明清進士進士，籍贯三河，入仕進士。（中国历代人物传记资料库 CBDB 201386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zTj1eNcAG3BPvbBjiJxYtN | 王文琮 | accepted |
| ancestors | p_97newzyhq7uCYabtQtfnFW | 王祥 | accepted |
| ancestors | p_KMpfjZPiJGQHC5a6Q1PYVp | 王敬 | accepted |
| other | p_8vvQzJPbkqSMR6bszunrHn | 王俊 | accepted |
| other | p_LqS3PiT77hGU8z9r23UiGH | 王僅 | accepted |
| other | p_YHL34nZZtLDHrvcC6CJoi4 | 王儒 | accepted |
| other | p_Zif2yp7BA6H3F1L6FZZe7h | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 201386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201386&o=json)
- [中国历代人物传记资料库：王僅（CBDB 271500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json)
- [中国历代人物传记资料库：王敬（CBDB 271490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271490&o=json)
- [中国历代人物传记资料库：王俊（CBDB 271499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json)
- [中国历代人物传记资料库：王倫（CBDB 271502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271502&o=json)
- [中国历代人物传记资料库：王儒（CBDB 271501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json)
- [中国历代人物传记资料库：王文琮（CBDB 271492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json)
- [中国历代人物传记资料库：王祥（CBDB 271491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json)
