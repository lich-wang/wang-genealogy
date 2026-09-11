---
schema: wang-person/v1
id: p_SQUBxHcrFDcLNGP7FjeBw9
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3fvicQ3w9PXPs6CjCKAdNk
        subject_person_id: p_SQUBxHcrFDcLNGP7FjeBw9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A7uVuGL7gYGskd9mFgmQ5L
          claim_id: c_3fvicQ3w9PXPs6CjCKAdNk
          source_id: s_hP4aDkMhwP4rF99Gepa79o
          stance: supports
          locator: CBDB:296144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296144）
          source: &a1
            id: s_hP4aDkMhwP4rF99Gepa79o
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 296144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296144&o=json
            external_identifier: CBDB:296144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TG3nGAprnrzqjPMc2HGtEg
        subject_person_id: p_SQUBxHcrFDcLNGP7FjeBw9
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
        - id: cs_6tGZgBSCMqn2RpURJ6A5t9
          claim_id: c_TG3nGAprnrzqjPMc2HGtEg
          source_id: s_hP4aDkMhwP4rF99Gepa79o
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
        id: c_kuT7uolovaoXiHMKiOOneE
        subject_person_id: p_SQUBxHcrFDcLNGP7FjeBw9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8hx_zj21Awox-HQpOF6Y-
          claim_id: c_kuT7uolovaoXiHMKiOOneE
          source_id: s_hP4aDkMhwP4rF99Gepa79o
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x7zHx1JQBodQZpV9KHxSJL
        status: active
        display_name: 王達
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_x7zHx1JQBodQZpV9KHxSJL | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 296144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296144&o=json)
