---
schema: wang-person/v1
id: p_eNfmXWwQAqx11jVRqVFu7o
status: active
merged_into: null
display_name: 王中立
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzx9RMk5wjxaTEYNQbRFQ1
        subject_person_id: p_eNfmXWwQAqx11jVRqVFu7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FJdY7J1Y5Buew82FGNhJNP
          claim_id: c_mzx9RMk5wjxaTEYNQbRFQ1
          source_id: s_J7ASRzcFbLcmHLjfSY2GFC
          stance: supports
          locator: CBDB:246477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246477）
          source: &a1
            id: s_J7ASRzcFbLcmHLjfSY2GFC
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 246477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json
            external_identifier: CBDB:246477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5VdwJ7X2t4GY1fDUoscEJG
        subject_person_id: p_eNfmXWwQAqx11jVRqVFu7o
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
        - id: cs_1FqggEsjZBC6gbHU7KDLJj
          claim_id: c_5VdwJ7X2t4GY1fDUoscEJG
          source_id: s_J7ASRzcFbLcmHLjfSY2GFC
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
        id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
        subject_person_id: p_eNfmXWwQAqx11jVRqVFu7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Gwb0R9bNH-U8D_Nt9bdxF
          claim_id: c_x0QT3Bj2IIQ8xN3ZC-xWi9
          source_id: s_J7ASRzcFbLcmHLjfSY2GFC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rPERXxEMwZa9gPH43DGT1J
        status: active
        display_name: 王肅
        merged_into_person_id: null
  other: []
---

# 王中立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中立 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rPERXxEMwZa9gPH43DGT1J | 王肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中立（CBDB 246477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246477&o=json)
