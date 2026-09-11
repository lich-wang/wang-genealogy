---
schema: wang-person/v1
id: p_1qFNNFzs4996RToNKGEdK3
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fr6g6MLkCp77mPB6djzkHd
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UG1w5NyR6F3pwtAUCNFcew
          claim_id: c_fr6g6MLkCp77mPB6djzkHd
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: CBDB:301946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301946）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PbxPQjoahLFBRthC8AiUmN
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
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
        - id: cs_swwcW5HvMDwWQPYm4GJWge
          claim_id: c_PbxPQjoahLFBRthC8AiUmN
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 301946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json)
