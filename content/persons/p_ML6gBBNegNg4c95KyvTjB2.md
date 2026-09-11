---
schema: wang-person/v1
id: p_ML6gBBNegNg4c95KyvTjB2
status: active
merged_into: null
display_name: 王良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EbskhECZTNv583K4hcr6ea
        subject_person_id: p_ML6gBBNegNg4c95KyvTjB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Qoh7NGxBdBrgFQF357imf
          claim_id: c_EbskhECZTNv583K4hcr6ea
          source_id: s_sqn8fU5LdEAejErJsV6gSz
          stance: supports
          locator: CBDB:262069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262069）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9kWRAipDfc4LEnWrskbMMm
        subject_person_id: p_ML6gBBNegNg4c95KyvTjB2
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
        - id: cs_NsjQT9FCSC3REgzFYnaHbN
          claim_id: c_9kWRAipDfc4LEnWrskbMMm
          source_id: s_sqn8fU5LdEAejErJsV6gSz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
          source: *a1
      object_person:
        id: p_vfLJWcSYWHpLtF3oqEp42D
        status: active
        display_name: 王臣
        merged_into_person_id: null
  other: []
---

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vfLJWcSYWHpLtF3oqEp42D | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 262069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262069&o=json)
