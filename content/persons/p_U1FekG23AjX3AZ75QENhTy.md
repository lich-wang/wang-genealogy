---
schema: wang-person/v1
id: p_U1FekG23AjX3AZ75QENhTy
status: active
merged_into: null
display_name: 王繵庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RD8xfY61mYPyqcacJ39Z4M
        subject_person_id: p_U1FekG23AjX3AZ75QENhTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繵庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jsKXLLGwseWJAuZcDbVVrB
          claim_id: c_RD8xfY61mYPyqcacJ39Z4M
          source_id: s_3Si8WxoEFoyF1cCP9XER7a
          stance: supports
          locator: CBDB:639860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639860）
          source: &a1
            id: s_3Si8WxoEFoyF1cCP9XER7a
            source_type: api_record
            title: 中国历代人物传记资料库：王繵庭（CBDB 639860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639860&o=json
            external_identifier: CBDB:639860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEyJyguqhjJjbfuy5vhSFG
        subject_person_id: p_U1FekG23AjX3AZ75QENhTy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9c1ij6hakdLgReJe6u78ef
          claim_id: c_KEyJyguqhjJjbfuy5vhSFG
          source_id: s_3Si8WxoEFoyF1cCP9XER7a
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
  descendants: []
  other: []
---

# 王繵庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繵庭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繵庭（CBDB 639860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639860&o=json)
