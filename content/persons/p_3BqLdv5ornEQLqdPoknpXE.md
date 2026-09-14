---
schema: wang-person/v1
id: p_3BqLdv5ornEQLqdPoknpXE
status: active
merged_into: null
display_name: 王屏
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yxn4rF4dqiX2Fvs6LnUGMo
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D2wCzrax8U4PUG6YW5L1iX
          claim_id: c_Yxn4rF4dqiX2Fvs6LnUGMo
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: CBDB:199995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199995）
          source: &a1
            id: s_7w1N5HRLcjZW1QnPCRLxtB
            source_type: api_record
            title: 中国历代人物传记资料库：王屏（CBDB 199995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json
            external_identifier: CBDB:199995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MD6JoWd21aFETK7cegs3QS
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkBQK8fNPX6kHLpXb39A5n
          claim_id: c_MD6JoWd21aFETK7cegs3QS
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
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
        id: c_hC59Zt9wP85AaUPp4Hhf8R
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屏（生于1447年），明人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 199995）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UcPgcb8aFlkKXzHn-JYVz9
          claim_id: c_hC59Zt9wP85AaUPp4Hhf8R
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: CBDB:199995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lb9Aw9CzMd6BDTtJB39n8U
        subject_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3BqLdv5ornEQLqdPoknpXE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8EbPOSkgTrAJWvmVNYu-dl
          claim_id: c_Lb9Aw9CzMd6BDTtJB39n8U
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xG6Uatb4hvJpHFBwk8TY1u
        status: active
        display_name: 王祐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0SoUqE7Bs8AlPVTUrgj2dJ
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_o8c4bC8L1A92CoVxkpYjmr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8Mz7vIpGWN5MHGQGTURcr
          claim_id: c_0SoUqE7Bs8AlPVTUrgj2dJ
          source_id: s_r0-RjdMysDNBAMv5oemWA1
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r0-RjdMysDNBAMv5oemWA1
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王屏妻)（CBDB 252360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252360&o=json
            external_identifier: CBDB:252360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o8c4bC8L1A92CoVxkpYjmr
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_eRDIwMGOv6eKKb0Bz7_ZMj
        subject_person_id: p_cCQdbNu8vKtiv9UU7u2aGs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3BqLdv5ornEQLqdPoknpXE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7zPiNuhIVExiv7T8oOtlM7
          claim_id: c_eRDIwMGOv6eKKb0Bz7_ZMj
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cCQdbNu8vKtiv9UU7u2aGs
        status: active
        display_name: 王彥暉
        merged_into_person_id: null
    - claim:
        id: c_EIeW9U_vnLSUXaN61GpRRf
        subject_person_id: p_Dufhb5NoCZnQdaJkaB21gq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3BqLdv5ornEQLqdPoknpXE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tNptHXdorI7F3qkPPTRhu
          claim_id: c_EIeW9U_vnLSUXaN61GpRRf
          source_id: s_7w1N5HRLcjZW1QnPCRLxtB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Dufhb5NoCZnQdaJkaB21gq
        status: active
        display_name: 王璘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_YWZdi2BKTWMArr7HbyAB_L
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jG2RSY6E84mjGaik9Hn6qk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMSGFeUx6rgspdZqtA7_lp
          claim_id: c_YWZdi2BKTWMArr7HbyAB_L
          source_id: s_JBwyXfRThbwJZyqkEfB2hQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199995 王屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JBwyXfRThbwJZyqkEfB2hQ
            source_type: api_record
            title: 中国历代人物传记资料库：王幹（CBDB 252361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252361&o=json
            external_identifier: CBDB:252361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jG2RSY6E84mjGaik9Hn6qk
        status: active
        display_name: 王幹
        merged_into_person_id: null
    - claim:
        id: c_yyMUIfFsMSO_GN-_p0SDHL
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v5Zg5veSk3WFL4Q7CvgAYw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mmUpdtZKJAIujCGcdtU23o
          claim_id: c_yyMUIfFsMSO_GN-_p0SDHL
          source_id: s_liIQ6WdSf7f2ZVrb085G6K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199995 王屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_liIQ6WdSf7f2ZVrb085G6K
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 252362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json
            external_identifier: CBDB:252362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v5Zg5veSk3WFL4Q7CvgAYw
        status: active
        display_name: 王翊
        merged_into_person_id: null
---

# 王屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王屏 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | 王屏（生于1447年），明人物。明清進士進士，籍贯華亭，入仕進士。（中国历代人物传记资料库 CBDB 199995） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xG6Uatb4hvJpHFBwk8TY1u | 王祐 | accepted |
| spouses | p_o8c4bC8L1A92CoVxkpYjmr | 趙氏 | accepted |
| ancestors | p_cCQdbNu8vKtiv9UU7u2aGs | 王彥暉 | accepted |
| ancestors | p_Dufhb5NoCZnQdaJkaB21gq | 王璘 | accepted |
| other | p_jG2RSY6E84mjGaik9Hn6qk | 王幹 | accepted |
| other | p_v5Zg5veSk3WFL4Q7CvgAYw | 王翊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幹（CBDB 252361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252361&o=json)
- [中国历代人物传记资料库：王屏（CBDB 199995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199995&o=json)
- [中国历代人物传记资料库：王翊（CBDB 252362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json)
- [中国历代人物传记资料库：趙氏(王屏妻)（CBDB 252360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252360&o=json)
