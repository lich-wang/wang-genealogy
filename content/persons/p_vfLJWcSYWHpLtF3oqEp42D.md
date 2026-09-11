---
schema: wang-person/v1
id: p_vfLJWcSYWHpLtF3oqEp42D
status: active
merged_into: null
display_name: 王臣
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mSXNTdgg5Ky4waTaAZKEM
        subject_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WY6Z2wKKhehLbK6Q2AA3Rs
          claim_id: c_9mSXNTdgg5Ky4waTaAZKEM
          source_id: s_eBBzJKQ1e7iUK5GptMApGk
          stance: supports
          locator: CBDB:198359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198359）
          source: &a1
            id: s_eBBzJKQ1e7iUK5GptMApGk
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 198359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198359&o=json
            external_identifier: CBDB:198359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aS33A1MZq1D595FBFmNCNa
        subject_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R2YHkJqtboadheQB2m5kL7
          claim_id: c_aS33A1MZq1D595FBFmNCNa
          source_id: s_eBBzJKQ1e7iUK5GptMApGk
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
        id: c_K63nmxYChYTgGMiFK8Y6Sx
        subject_person_id: p_vfLJWcSYWHpLtF3oqEp42D
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
        - id: cs_SQr8NX7eSksKDCsHK8fQh4
          claim_id: c_K63nmxYChYTgGMiFK8Y6Sx
          source_id: s_eBBzJKQ1e7iUK5GptMApGk
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
        id: c_SOvspP3FAvC0EpG_0Zr11B
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_waSnXVmJSVJAwZ4KjZEL8u
          claim_id: c_SOvspP3FAvC0EpG_0Zr11B
          source_id: s_BXuvhETUeu7HtmhUUopQ8x
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BXuvhETUeu7HtmhUUopQ8x
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 262092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262092&o=json
            external_identifier: CBDB:262092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bR5Mj6EERgYToXyn5l6GWK
        subject_person_id: p_ML6gBBNegNg4c95KyvTjB2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXPGDoCPu9hOeVr2MOfV-3
          claim_id: c_bR5Mj6EERgYToXyn5l6GWK
          source_id: s_sqn8fU5LdEAejErJsV6gSz
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sqn8fU5LdEAejErJsV6gSz
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 262069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262069&o=json
            external_identifier: CBDB:262069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ML6gBBNegNg4c95KyvTjB2
        status: active
        display_name: 王良
        merged_into_person_id: null
    - claim:
        id: c_DNye7NYny1YnndmaDa9B2G
        subject_person_id: p_hhfsjR22x1fcmZjyczG8DB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etVc8LtiF8DLAXzn1QmGFP
          claim_id: c_DNye7NYny1YnndmaDa9B2G
          source_id: s_ydvXDB5RA5Drso9QoymAvN
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ydvXDB5RA5Drso9QoymAvN
            source_type: api_record
            title: 中国历代人物传记资料库：王曾瑀（CBDB 262081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262081&o=json
            external_identifier: CBDB:262081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hhfsjR22x1fcmZjyczG8DB
        status: active
        display_name: 王曾瑀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z6SSx6JCsA5rPQ9sKcT6Nz | 王珪 | accepted |
| ancestors | p_ML6gBBNegNg4c95KyvTjB2 | 王良 | accepted |
| ancestors | p_hhfsjR22x1fcmZjyczG8DB | 王曾瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾瑀（CBDB 262081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262081&o=json)
- [中国历代人物传记资料库：王臣（CBDB 198359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198359&o=json)
- [中国历代人物传记资料库：王珪（CBDB 262092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262092&o=json)
- [中国历代人物传记资料库：王良（CBDB 262069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262069&o=json)
