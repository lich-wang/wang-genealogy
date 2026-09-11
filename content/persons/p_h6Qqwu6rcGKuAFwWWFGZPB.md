---
schema: wang-person/v1
id: p_h6Qqwu6rcGKuAFwWWFGZPB
status: active
merged_into: null
display_name: 王大平
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJ1MrmK5AnFPmH6HJmW8Rb
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iv5YzxZDQzeFJfUHMymKu
          claim_id: c_cJ1MrmK5AnFPmH6HJmW8Rb
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
          stance: supports
          locator: CBDB:203248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203248）
          source: &a1
            id: s_9zYcMDAcKEGNaFqJVYbRxq
            source_type: api_record
            title: 中国历代人物传记资料库：王大平（CBDB 203248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203248&o=json
            external_identifier: CBDB:203248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BwFCeWhxFFmh24JYkTVXZv
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qvm4d3r1mAREnXRLYeHHbk
          claim_id: c_BwFCeWhxFFmh24JYkTVXZv
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
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
        id: c_1vLaKpMF8nY19Av3zJeH6F
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
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
        - id: cs_ML3Y3xgZze7SBEoD7bQwp5
          claim_id: c_1vLaKpMF8nY19Av3zJeH6F
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
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
        id: c_quevHbUnY4sUjZVCegOt4P
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xfEhECfyvKi2T0xZL__uy
          claim_id: c_quevHbUnY4sUjZVCegOt4P
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAj1ZAry8QMdax8UaGcBmn
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 301946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json
            external_identifier: CBDB:301946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_A4TuMs1x3mdnK8Ud3JDxEB
        subject_person_id: p_MqJmH3PbgPZ48RJzP22fHC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSVHMEDwZ5ZicD4IphmSKM
          claim_id: c_A4TuMs1x3mdnK8Ud3JDxEB
          source_id: s_mHaW9QtQ8tDCKSMc2UCAUe
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mHaW9QtQ8tDCKSMc2UCAUe
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 301944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301944&o=json
            external_identifier: CBDB:301944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MqJmH3PbgPZ48RJzP22fHC
        status: active
        display_name: 王振
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大平 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| ancestors | p_MqJmH3PbgPZ48RJzP22fHC | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大平（CBDB 203248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203248&o=json)
- [中国历代人物传记资料库：王玉（CBDB 301946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json)
- [中国历代人物传记资料库：王振（CBDB 301944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301944&o=json)
