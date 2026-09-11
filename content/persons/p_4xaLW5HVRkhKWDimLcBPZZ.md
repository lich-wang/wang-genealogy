---
schema: wang-person/v1
id: p_4xaLW5HVRkhKWDimLcBPZZ
status: active
merged_into: null
display_name: 王秉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tp2oCFSG3UGPcJCrhuVFD3
        subject_person_id: p_4xaLW5HVRkhKWDimLcBPZZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPaJQPcuiygJGZZi5h4yWT
          claim_id: c_Tp2oCFSG3UGPcJCrhuVFD3
          source_id: s_Q7mgxyyorjsQKSgDBmy4iH
          stance: supports
          locator: CBDB:571649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571649）
          source: &a1
            id: s_Q7mgxyyorjsQKSgDBmy4iH
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 571649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571649&o=json
            external_identifier: CBDB:571649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RFkKPVTq67rXh8EWQnjAvP
        subject_person_id: p_4xaLW5HVRkhKWDimLcBPZZ
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
        - id: cs_hJJWYyuzJ6DvPirvEVH8Hf
          claim_id: c_RFkKPVTq67rXh8EWQnjAvP
          source_id: s_Q7mgxyyorjsQKSgDBmy4iH
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
        id: c_yikTPtwlp_ZqVOEH27iY8j
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4xaLW5HVRkhKWDimLcBPZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r_CYb2HLuZD3knRbGjOYLK
          claim_id: c_yikTPtwlp_ZqVOEH27iY8j
          source_id: s_Q7mgxyyorjsQKSgDBmy4iH
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        status: active
        display_name: 王彭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7QK6Yqt4A5YCYRDZUuZNJ | 王彭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 571649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571649&o=json)
