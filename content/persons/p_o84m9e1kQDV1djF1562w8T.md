---
schema: wang-person/v1
id: p_o84m9e1kQDV1djF1562w8T
status: active
merged_into: null
display_name: 王璽
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qtGuNGM9Q95ayHjH11ZJ6N
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMejH6r5vBmHgNqJXWFEVX
          claim_id: c_qtGuNGM9Q95ayHjH11ZJ6N
          source_id: s_mRDW9EyYHrm3gzLzoUVdcS
          stance: supports
          locator: CBDB:126871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126871）
          source: &a1
            id: s_mRDW9EyYHrm3gzLzoUVdcS
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 126871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126871&o=json
            external_identifier: CBDB:126871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxMHV1v4M3XLD23yU1qL7A
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。明清進士進士，籍贯南豐，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126871）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1uyAAWYsAKZT7qoaghJ7Cz
          claim_id: c_bxMHV1v4M3XLD23yU1qL7A
          source_id: s_mRDW9EyYHrm3gzLzoUVdcS
          stance: supports
          locator: CBDB:126871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UPmNBWt4_eoOzyTkyIzGls
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFV8yfeYgpmpJF-LjKgC_C
          claim_id: c_UPmNBWt4_eoOzyTkyIzGls
          source_id: s_DDVornPTAzrLPAYD1qMnKU
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DDVornPTAzrLPAYD1qMnKU
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 331067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331067&o=json
            external_identifier: CBDB:331067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GfRo7ojPV7D16XBUWZ7Rwa
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DCMZEqht5oEDA_pYwKxF9r
        subject_person_id: p_9uVXATu3GMhr4M4zzJo3Mk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Wq0uNMaG5Rx6zCvU21oBw
          claim_id: c_DCMZEqht5oEDA_pYwKxF9r
          source_id: s_iPQ5pt2MS2ZhsQGQWBo8sY
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iPQ5pt2MS2ZhsQGQWBo8sY
            source_type: api_record
            title: 中国历代人物传记资料库：王廷亮（CBDB 331066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331066&o=json
            external_identifier: CBDB:331066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9uVXATu3GMhr4M4zzJo3Mk
        status: active
        display_name: 王廷亮
        merged_into_person_id: null
    - claim:
        id: c_iBBH0MZV1Vqid1pMEOhI2e
        subject_person_id: p_TWhRzRTj17tBBvV29kZjE9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ErIkskvAkVF_628opUgNw_
          claim_id: c_iBBH0MZV1Vqid1pMEOhI2e
          source_id: s_HDJL2oz2yhamnPjB1Qx6qQ
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HDJL2oz2yhamnPjB1Qx6qQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宇寬（CBDB 331064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331064&o=json
            external_identifier: CBDB:331064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TWhRzRTj17tBBvV29kZjE9
        status: active
        display_name: 王宇寬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_loCwCSzERe1ML4NoBSFQtJ
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WgEageQF439ag64n3xlgIR
          claim_id: c_loCwCSzERe1ML4NoBSFQtJ
          source_id: s__hjrxw45MmsqfwmLXp5-3p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__hjrxw45MmsqfwmLXp5-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YV1nnuxqk7zB52jg5UQVY8
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_noDzOj35qr6kMARTPz4Rr5
        subject_person_id: p_jZVzbtGhJHDytzxBB75tC2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uH1G6Hvy6QrNAC3uTHpnyY
          claim_id: c_noDzOj35qr6kMARTPz4Rr5
          source_id: s_oN5KP1AgDZf7zp_RGyEmLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oN5KP1AgDZf7zp_RGyEmLI
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 331071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json
            external_identifier: CBDB:331071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jZVzbtGhJHDytzxBB75tC2
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_Z9l3l6VkF-Ujb-1IGJkcKP
        subject_person_id: p_o84m9e1kQDV1djF1562w8T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r5vKuJADPEciARjgn1mpBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AebKBXq3ztSAbreGSmPLqb
          claim_id: c_Z9l3l6VkF-Ujb-1IGJkcKP
          source_id: s_F4zewVNXt4ppomxNdP6aXQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F4zewVNXt4ppomxNdP6aXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 331070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json
            external_identifier: CBDB:331070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r5vKuJADPEciARjgn1mpBk
        status: active
        display_name: 王璧
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。明清進士進士，籍贯南豐，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GfRo7ojPV7D16XBUWZ7Rwa | 王紹 | accepted |
| ancestors | p_9uVXATu3GMhr4M4zzJo3Mk | 王廷亮 | accepted |
| ancestors | p_TWhRzRTj17tBBvV29kZjE9 | 王宇寬 | accepted |
| other | p_YV1nnuxqk7zB52jg5UQVY8 | 王瑩 | accepted |
| other | p_jZVzbtGhJHDytzxBB75tC2 | 王寶 | accepted |
| other | p_r5vKuJADPEciARjgn1mpBk | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 331071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json)
- [中国历代人物传记资料库：王璧（CBDB 331070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json)
- [中国历代人物传记资料库：王紹（CBDB 331067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331067&o=json)
- [中国历代人物传记资料库：王廷亮（CBDB 331066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331066&o=json)
- [中国历代人物传记资料库：王璽（CBDB 126871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126871&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 331072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json)
- [中国历代人物传记资料库：王宇寬（CBDB 331064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331064&o=json)
