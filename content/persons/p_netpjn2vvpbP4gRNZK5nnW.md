---
schema: wang-person/v1
id: p_netpjn2vvpbP4gRNZK5nnW
status: active
merged_into: null
display_name: 王畿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uuRzf7VVNGMcg8FD4j2o8W
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pk1ncixo6xBcTDJAsP5WdD
          claim_id: c_uuRzf7VVNGMcg8FD4j2o8W
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: CBDB:126814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126814）
          source: &a1
            id: s_TrML3YJ2G39dZdxXUabmPv
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4uu6CNkMtdrM2Si6AohU45
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQwexVy4eiFyZ4UJaMj8qL
          claim_id: c_4uu6CNkMtdrM2Si6AohU45
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jrDBorkCnxfvmsCxQihCCQ
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1583年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FP6xQp756wwzGFDPnAssyW
          claim_id: c_jrDBorkCnxfvmsCxQihCCQ
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2JQhJpRoyaCkaUNyTQVNNc
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
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
        - id: cs_nCbmdJafsdnCeECi4QD7dc
          claim_id: c_2JQhJpRoyaCkaUNyTQVNNc
          source_id: s_TrML3YJ2G39dZdxXUabmPv
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
        id: c_fWXZAr-xrHITdNKtGW1ASs
        subject_person_id: p_8gY9eTVRT2EQWmPPoaXa3X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arHMdzxH67c5uhvW4A5FTm
          claim_id: c_fWXZAr-xrHITdNKtGW1ASs
          source_id: s_ACJ8vLgd7tcqS4LiqB3W8Z
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ACJ8vLgd7tcqS4LiqB3W8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 232114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232114&o=json
            external_identifier: CBDB:232114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8gY9eTVRT2EQWmPPoaXa3X
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-RioqltpBhlvUFcUxzMYw3
        subject_person_id: p_nk86JnBN3H44SSosh8zCKQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5sNpQ_o7HTDKm6699X1uAf
          claim_id: c_-RioqltpBhlvUFcUxzMYw3
          source_id: s_picJY4WWYs49eM1wbidthu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_picJY4WWYs49eM1wbidthu
            source_type: api_record
            title: 中国历代人物传记资料库：王可旺（CBDB 294860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json
            external_identifier: CBDB:294860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nk86JnBN3H44SSosh8zCKQ
        status: active
        display_name: 王可旺
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_cfP9ta_jO0iwSm2kue8dmU
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4uQcLGsJMcc6S6nmViKGi7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJPBnxAu2Kc1Djcm5qHqrR
          claim_id: c_cfP9ta_jO0iwSm2kue8dmU
          source_id: s_jUpznhbdy97D8J8yRxixRR
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jUpznhbdy97D8J8yRxixRR
            source_type: api_record
            title: 中国历代人物传记资料库：王繼炳（CBDB 294879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294879&o=json
            external_identifier: CBDB:294879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4uQcLGsJMcc6S6nmViKGi7
        status: active
        display_name: 王繼炳
        merged_into_person_id: null
  other: []
---

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| birth.date | 1498年 | accepted |
| death.date | 1583年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8gY9eTVRT2EQWmPPoaXa3X | 王經 | accepted |
| ancestors | p_nk86JnBN3H44SSosh8zCKQ | 王可旺 | accepted |
| descendants | p_4uQcLGsJMcc6S6nmViKGi7 | 王繼炳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
- [中国历代人物传记资料库：王繼炳（CBDB 294879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294879&o=json)
- [中国历代人物传记资料库：王經（CBDB 232114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232114&o=json)
- [中国历代人物传记资料库：王可旺（CBDB 294860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json)
