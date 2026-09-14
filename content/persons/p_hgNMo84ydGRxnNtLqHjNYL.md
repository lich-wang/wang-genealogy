---
schema: wang-person/v1
id: p_hgNMo84ydGRxnNtLqHjNYL
status: active
merged_into: null
display_name: 王光佐
cbdb_id: 201648
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCrX6H3t5DCciujxExUkNF
        subject_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光佐（生于1464年），明人物。明清進士進士，籍贯新昌，入仕進士。（中国历代人物传记资料库 CBDB 201648）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MT73WH0IIojVlhx0FqQ4pT
          claim_id: c_zCrX6H3t5DCciujxExUkNF
          source_id: s_6ao1n5RSs4QWd3zSPLSqVq
          stance: supports
          locator: CBDB:201648
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6ao1n5RSs4QWd3zSPLSqVq
            source_type: api_record
            title: 中国历代人物传记资料库：王光佐（CBDB 201648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201648&o=json
            external_identifier: CBDB:201648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KyFEqGGzuvXWag4WJ6hNy6
        subject_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1464-01-01
            latest: 1464-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MwvdHLevAsM7w9HU7Mo9AF
          claim_id: c_KyFEqGGzuvXWag4WJ6hNy6
          source_id: s_6ao1n5RSs4QWd3zSPLSqVq
          stance: supports
          locator: CBDB:201648
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1464
          source:
            id: s_6ao1n5RSs4QWd3zSPLSqVq
            source_type: api_record
            title: 中国历代人物传记资料库：王光佐（CBDB 201648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201648&o=json
            external_identifier: CBDB:201648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1yP3DrUkoFCJfz4vBx8AH
        subject_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GZ8yuoXX2jLMVRmc3CxcV1
          claim_id: c_G1yP3DrUkoFCJfz4vBx8AH
          source_id: s_6ao1n5RSs4QWd3zSPLSqVq
          stance: supports
          locator: CBDB:201648
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1464
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OYqhBwK27vvZX3GKxaI3Sv
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JzYJz85lsKdzDD5BDPf4TT
          claim_id: c_OYqhBwK27vvZX3GKxaI3Sv
          source_id: s_EcHdfq9p5EBum8XxV3JGa1
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EcHdfq9p5EBum8XxV3JGa1
            source_type: api_record
            title: 中国历代人物传记资料库：王京幾（CBDB 275614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275614&o=json
            external_identifier: CBDB:275614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3pGecEKBQ7L7i74yoHX3og
        status: active
        display_name: 王京幾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_r00iaImOfEL-8haYsrgby-
        subject_person_id: p_cHxaP3PsESPsJ7Myn1gf2Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwXsEa_eOR3q8blE78G78s
          claim_id: c_r00iaImOfEL-8haYsrgby-
          source_id: s_5Di7uM3HUuhXWfmFj2GGho
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Di7uM3HUuhXWfmFj2GGho
            source_type: api_record
            title: 中国历代人物传记资料库：王彥常（CBDB 275612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275612&o=json
            external_identifier: CBDB:275612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cHxaP3PsESPsJ7Myn1gf2Z
        status: active
        display_name: 王彥常
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_4hJOTtKBCfedxTAJVUqGA8
        subject_person_id: p_43iz8zXuv3uGf9Xq8n94JD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbjpEB9cauZhAqSt0QDOEu
          claim_id: c_4hJOTtKBCfedxTAJVUqGA8
          source_id: s_SApntJKlTUvgroF_SkzxC5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201648 王光佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SApntJKlTUvgroF_SkzxC5
            source_type: api_record
            title: 中国历代人物传记资料库：王光仕（CBDB 275621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json
            external_identifier: CBDB:275621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43iz8zXuv3uGf9Xq8n94JD
        status: active
        display_name: 王光仕
        merged_into_person_id: null
    - claim:
        id: c_0-BXLj3Hly0xn9SJAtgd7v
        subject_person_id: p_aGdGkp2dMBSExgBGBbzFsu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4qLMjHqaI3cxhc87wv94D
          claim_id: c_0-BXLj3Hly0xn9SJAtgd7v
          source_id: s_rNfgx8CCm8YL4LGTebqwLV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201648 王光佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rNfgx8CCm8YL4LGTebqwLV
            source_type: api_record
            title: 中国历代人物传记资料库：王光儒（CBDB 275622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json
            external_identifier: CBDB:275622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aGdGkp2dMBSExgBGBbzFsu
        status: active
        display_name: 王光儒
        merged_into_person_id: null
---

# 王光佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光佐（生于1464年），明人物。明清進士進士，籍贯新昌，入仕進士。（中国历代人物传记资料库 CBDB 201648） | accepted |
| birth.date | 1464年 | accepted |
| name.primary | 王光佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3pGecEKBQ7L7i74yoHX3og | 王京幾 | accepted |
| ancestors | p_cHxaP3PsESPsJ7Myn1gf2Z | 王彥常 | accepted |
| other | p_43iz8zXuv3uGf9Xq8n94JD | 王光仕 | accepted |
| other | p_aGdGkp2dMBSExgBGBbzFsu | 王光儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光儒（CBDB 275622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json)
- [中国历代人物传记资料库：王光仕（CBDB 275621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json)
- [中国历代人物传记资料库：王光佐（CBDB 201648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201648&o=json)
- [中国历代人物传记资料库：王京幾（CBDB 275614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275614&o=json)
- [中国历代人物传记资料库：王彥常（CBDB 275612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275612&o=json)
