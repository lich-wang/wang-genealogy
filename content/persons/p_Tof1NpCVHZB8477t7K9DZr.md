---
schema: wang-person/v1
id: p_Tof1NpCVHZB8477t7K9DZr
status: active
merged_into: null
display_name: 王獎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mnj4aXCFafu8A1dGi4NmVP
        subject_person_id: p_Tof1NpCVHZB8477t7K9DZr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZoXXYgw4zpsR6WQAw8d6FB
          claim_id: c_Mnj4aXCFafu8A1dGi4NmVP
          source_id: s_K6LQwF49NsgJD5v2Hc68PV
          stance: supports
          locator: CBDB:223423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223423）
          source: &a1
            id: s_K6LQwF49NsgJD5v2Hc68PV
            source_type: api_record
            title: 中国历代人物传记资料库：王獎（CBDB 223423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223423&o=json
            external_identifier: CBDB:223423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nF7xs3xCpVXYhsqDfZFoj5
        subject_person_id: p_Tof1NpCVHZB8477t7K9DZr
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
        - id: cs_FAtkwYAJBDPacPBDvjTCBp
          claim_id: c_nF7xs3xCpVXYhsqDfZFoj5
          source_id: s_K6LQwF49NsgJD5v2Hc68PV
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
        id: c_cwZXi0MV0wBXgXNVsnB9ke
        subject_person_id: p_Tof1NpCVHZB8477t7K9DZr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3D1ztFEygAVyyfATLEVR1H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kLKiP1_2JY_ycaR1hC_hv1
          claim_id: c_cwZXi0MV0wBXgXNVsnB9ke
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WyiFq24QS7Fy2DiGFUazoa
            source_type: api_record
            title: 中国历代人物传记资料库：王之棟（CBDB 206799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json
            external_identifier: CBDB:206799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3D1ztFEygAVyyfATLEVR1H
        status: active
        display_name: 王之棟
        merged_into_person_id: null
  other: []
---

# 王獎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3D1ztFEygAVyyfATLEVR1H | 王之棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獎（CBDB 223423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223423&o=json)
- [中国历代人物传记资料库：王之棟（CBDB 206799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json)
