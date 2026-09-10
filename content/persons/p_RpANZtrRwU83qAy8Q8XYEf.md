---
schema: wang-person/v1
id: p_RpANZtrRwU83qAy8Q8XYEf
status: active
merged_into: null
display_name: 王實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAQgsmT7Vd9u79hSKuVbgS
        subject_person_id: p_RpANZtrRwU83qAy8Q8XYEf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_45VNoDzDBGj26shjvHpoL8
          claim_id: c_jAQgsmT7Vd9u79hSKuVbgS
          source_id: s_EF1LSqMcSN4392RkJCM1S1
          stance: supports
          locator: CBDB:324273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324273）
          source: &a1
            id: s_EF1LSqMcSN4392RkJCM1S1
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 324273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324273&o=json
            external_identifier: CBDB:324273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GVMhGmd5gG1z5GvEJHEAWi
        subject_person_id: p_RpANZtrRwU83qAy8Q8XYEf
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
        - id: cs_oosiT4efAenbqy6G4yPvT1
          claim_id: c_GVMhGmd5gG1z5GvEJHEAWi
          source_id: s_EF1LSqMcSN4392RkJCM1S1
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
          source: &a2
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
        id: p_WvSGc6pWDJNiRH33Kr62rr
        status: active
        display_name: 王言
        merged_into_person_id: null
  children:
    - claim:
        id: c_2d7JWQ_ZcHGByFmaBQ5GYp
        subject_person_id: p_RpANZtrRwU83qAy8Q8XYEf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m9QLtFof8trVhJCPC8QcyA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2KthGj8BR39VYyN-LiK_h
          claim_id: c_2d7JWQ_ZcHGByFmaBQ5GYp
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: 嘉靖三十八年進士登科錄，第三甲第三十三名：祖父王實、父王憲
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_m9QLtFof8trVhJCPC8QcyA
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WvSGc6pWDJNiRH33Kr62rr | 王言 | accepted |
| children | p_m9QLtFof8trVhJCPC8QcyA | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 204801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json)
- [中国历代人物传记资料库：王實（CBDB 324273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324273&o=json)
