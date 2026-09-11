---
schema: wang-person/v1
id: p_Aw33K7k1W4Rsa8EDciuADn
status: active
merged_into: null
display_name: 王秬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fBbpRj1bSZhXFh6cfdKaDA
        subject_person_id: p_Aw33K7k1W4Rsa8EDciuADn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HcCk4HnYWtZKFRUZc9TNT
          claim_id: c_fBbpRj1bSZhXFh6cfdKaDA
          source_id: s_TSMBWuKHyVfeEKXF2ZEJrr
          stance: supports
          locator: CBDB:309975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309975）
          source: &a1
            id: s_TSMBWuKHyVfeEKXF2ZEJrr
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 309975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309975&o=json
            external_identifier: CBDB:309975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1xTqJFrQGMw1pVRhn2dQEV
        subject_person_id: p_Aw33K7k1W4Rsa8EDciuADn
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
        - id: cs_CDy1Lw8tq66Di9KU4gKAtx
          claim_id: c_1xTqJFrQGMw1pVRhn2dQEV
          source_id: s_TSMBWuKHyVfeEKXF2ZEJrr
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
        id: c_zFSoEBT7ryVVOawH7Pj0Y5
        subject_person_id: p_Aw33K7k1W4Rsa8EDciuADn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xNn-85Vo8oEUPeOr2iaf7s
          claim_id: c_zFSoEBT7ryVVOawH7Pj0Y5
          source_id: s_TSMBWuKHyVfeEKXF2ZEJrr
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zCPZcY2xcN9dUGQk5upMkt
        status: active
        display_name: 王鈴
        merged_into_person_id: null
  other: []
---

# 王秬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zCPZcY2xcN9dUGQk5upMkt | 王鈴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秬（CBDB 309975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309975&o=json)
