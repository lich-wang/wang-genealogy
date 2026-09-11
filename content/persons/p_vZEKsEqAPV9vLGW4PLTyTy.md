---
schema: wang-person/v1
id: p_vZEKsEqAPV9vLGW4PLTyTy
status: active
merged_into: null
display_name: 黃荃
revision: 1
cbdb_id: 55883
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KvJPAE9UqCl6bhcDUhh6_L
        subject_person_id: p_vZEKsEqAPV9vLGW4PLTyTy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃荃，史料所见人物。本项目依据《中国历代人物传记资料库：黃荃（CBDB 55883）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRleQxyQjlCMFBziu60pdV
          claim_id: c_KvJPAE9UqCl6bhcDUhh6_L
          source_id: s_d_GzgUhOHwQmVFVoQrqy78
          stance: supports
          locator: CBDB:55883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_d_GzgUhOHwQmVFVoQrqy78
            source_type: api_record
            title: 中国历代人物传记资料库：黃荃（CBDB 55883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55883&o=json
            external_identifier: CBDB:55883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rVsLi6rn85uxN6R0z5z37b
        subject_person_id: p_vZEKsEqAPV9vLGW4PLTyTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃荃
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKfbbZR25SjD1VZQyNbNNd
          claim_id: c_rVsLi6rn85uxN6R0z5z37b
          source_id: s_d_GzgUhOHwQmVFVoQrqy78
          stance: supports
          locator: CBDB:55883
          quotation: null
          interpretation_note: CBDB 明确记录的王路配偶
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
        id: c_FVHEGYbEBACIfiE-MQ1Ii3
        subject_person_id: p_cABjR9EJr88tcRcAtynLqD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vZEKsEqAPV9vLGW4PLTyTy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f6fsnE1WhNQTnEpvB-ARDR
          claim_id: c_FVHEGYbEBACIfiE-MQ1Ii3
          source_id: s_d_GzgUhOHwQmVFVoQrqy78
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #641, HuWenKai #661：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cABjR9EJr88tcRcAtynLqD
        status: active
        display_name: 王路
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黃荃，史料所见人物。本项目依据《中国历代人物传记资料库：黃荃（CBDB 55883）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 黃荃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cABjR9EJr88tcRcAtynLqD | 王路 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃荃（CBDB 55883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55883&o=json)
