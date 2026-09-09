---
schema: wang-person/v1
id: p_W8ddMSvM8B1QH5ierhttiX
status: active
merged_into: null
display_name: 王元輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngoPCCGzx1pbXWSQ7Mn1d3
        subject_person_id: p_W8ddMSvM8B1QH5ierhttiX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZkQy4oMWjgiAWGp1zXXCW
          claim_id: c_ngoPCCGzx1pbXWSQ7Mn1d3
          source_id: s_rEWgfPxuEAWN6Jpxvdw1ws
          stance: supports
          locator: CBDB:379267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379267）
          source: &a1
            id: s_rEWgfPxuEAWN6Jpxvdw1ws
            source_type: api_record
            title: 中国历代人物传记资料库：王元輔（CBDB 379267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379267&o=json
            external_identifier: CBDB:379267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fGsuxdV34xsKocLe2v2V5z
        subject_person_id: p_W8ddMSvM8B1QH5ierhttiX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1dpqGa69o2bzs6LQDdMNs
          claim_id: c_fGsuxdV34xsKocLe2v2V5z
          source_id: s_rEWgfPxuEAWN6Jpxvdw1ws
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

# 王元輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元輔 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元輔（CBDB 379267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379267&o=json)
