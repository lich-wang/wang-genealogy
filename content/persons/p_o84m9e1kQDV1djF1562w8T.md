---
schema: wang-person/v1
id: p_o84m9e1kQDV1djF1562w8T
status: active
merged_into: null
display_name: 王璽
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o5vqsjUdXfy45qCXNBq5nb
          claim_id: c_bxMHV1v4M3XLD23yU1qL7A
          source_id: s_mRDW9EyYHrm3gzLzoUVdcS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GfRo7ojPV7D16XBUWZ7Rwa | 王紹 | accepted |
| ancestors | p_9uVXATu3GMhr4M4zzJo3Mk | 王廷亮 | accepted |
| ancestors | p_TWhRzRTj17tBBvV29kZjE9 | 王宇寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 331067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331067&o=json)
- [中国历代人物传记资料库：王廷亮（CBDB 331066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331066&o=json)
- [中国历代人物传记资料库：王璽（CBDB 126871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126871&o=json)
- [中国历代人物传记资料库：王宇寬（CBDB 331064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331064&o=json)
