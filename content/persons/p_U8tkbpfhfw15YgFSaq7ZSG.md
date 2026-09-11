---
schema: wang-person/v1
id: p_U8tkbpfhfw15YgFSaq7ZSG
status: active
merged_into: null
display_name: 王禔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRAE3sYQ9bLTVKGiuvAmb1
        subject_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uEPoCGXFNnmsMje7QvZtWA
          claim_id: c_oRAE3sYQ9bLTVKGiuvAmb1
          source_id: s_h9y4oT6A6XMdpJGHmqQSr5
          stance: supports
          locator: CBDB:17426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17426）
          source: &a1
            id: s_h9y4oT6A6XMdpJGHmqQSr5
            source_type: api_record
            title: 中国历代人物传记资料库：王禔（CBDB 17426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17426&o=json
            external_identifier: CBDB:17426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y3KZDCKHL3qJitRSNXLTtr
        subject_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hk3uR9V3aqiXnNPZ6j9Nbc
          claim_id: c_y3KZDCKHL3qJitRSNXLTtr
          source_id: s_h9y4oT6A6XMdpJGHmqQSr5
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
  spouses:
    - claim:
        id: c_RVbq2zcx5gDp2LCO30A_2-
        subject_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yo0e5gaJGJzE0Samz84vI3
          claim_id: c_RVbq2zcx5gDp2LCO30A_2-
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: 宋人傳記資料索引(電子版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ATTtADGT3pRCt1mbAJ8kNB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（38576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38576&o=json
            external_identifier: CBDB:38576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.511Z
            metadata_json: null
      object_person:
        id: p_WYN9msC554wb8dtjBJ3Ga4
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王禔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WYN9msC554wb8dtjBJ3Ga4 | 张氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禔（CBDB 17426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17426&o=json)
- [CBDB 中国历代人物传记资料库：張氏（38576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38576&o=json)
