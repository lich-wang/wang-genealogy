---
schema: wang-person/v1
id: p_TYP4pVLne6ZnxE7bpVxSaX
status: active
merged_into: null
display_name: 王晏權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YiDtuJ29EHMP6tBLsJUeG5
        subject_person_id: p_TYP4pVLne6ZnxE7bpVxSaX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAJ6paL2qHASpxsCfr8TJG
          claim_id: c_YiDtuJ29EHMP6tBLsJUeG5
          source_id: s_EqRE9WjrXVPovMVpLKuugW
          stance: supports
          locator: CBDB:384315
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384315）
          source: &a1
            id: s_EqRE9WjrXVPovMVpLKuugW
            source_type: api_record
            title: 中国历代人物传记资料库：王晏權（CBDB 384315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384315&o=json
            external_identifier: CBDB:384315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iSWigLb4xDmzmuAnXVUzxE
        subject_person_id: p_TYP4pVLne6ZnxE7bpVxSaX
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
        - id: cs_HzAgQNMPL4FMUoB66bWmEA
          claim_id: c_iSWigLb4xDmzmuAnXVUzxE
          source_id: s_EqRE9WjrXVPovMVpLKuugW
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

# 王晏權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏權 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏權（CBDB 384315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384315&o=json)
