---
schema: wang-person/v1
id: p_WvSGc6pWDJNiRH33Kr62rr
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nSKfRdufJG8VeLRoWduHck
        subject_person_id: p_WvSGc6pWDJNiRH33Kr62rr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTAmeq3q2BgjMjQhawtT92
          claim_id: c_nSKfRdufJG8VeLRoWduHck
          source_id: s_iuCiM8dEjNCtLQczF8yqyZ
          stance: supports
          locator: CBDB:324272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324272）
          source: &a1
            id: s_iuCiM8dEjNCtLQczF8yqyZ
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 324272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324272&o=json
            external_identifier: CBDB:324272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9rLYUqhMcHgCjkYchDVfi
        subject_person_id: p_WvSGc6pWDJNiRH33Kr62rr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 324272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aEsjUUAQ9gdFG5JRmTAcTt
          claim_id: c_E9rLYUqhMcHgCjkYchDVfi
          source_id: s_iuCiM8dEjNCtLQczF8yqyZ
          stance: supports
          locator: CBDB:324272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SQXs5nD1wBhM5pT8RD-8KE
        subject_person_id: p_WvSGc6pWDJNiRH33Kr62rr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RpANZtrRwU83qAy8Q8XYEf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKgejFq68iBLVgR4eqg6DI
          claim_id: c_SQXs5nD1wBhM5pT8RD-8KE
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: 嘉靖三十八年進士登科錄，第三甲第三十三名：曾祖父王言、祖父王實、父王憲
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aqLBfQMHvnd42UxRDzycyR
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 204801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json
            external_identifier: CBDB:204801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RpANZtrRwU83qAy8Q8XYEf
        status: active
        display_name: 王實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ljWwrRkpr23PD_JXWpVMwy
        subject_person_id: p_WvSGc6pWDJNiRH33Kr62rr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vT1hKVPxXs-mFm4IG9CbQz
          claim_id: c_ljWwrRkpr23PD_JXWpVMwy
          source_id: s_iuCiM8dEjNCtLQczF8yqyZ
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_16nv23omiPWM5bXpCbD3EC
        status: active
        display_name: 王儒
        merged_into_person_id: null
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 324272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RpANZtrRwU83qAy8Q8XYEf | 王實 | accepted |
| descendants | p_16nv23omiPWM5bXpCbD3EC | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 204801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json)
- [中国历代人物传记资料库：王言（CBDB 324272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324272&o=json)
