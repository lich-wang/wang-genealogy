---
schema: wang-person/v1
id: p_S7JJYYDxKWx39DSsf52cUj
status: active
merged_into: null
display_name: 王鲂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKZdu4qG1TZZCiVG4pUSzR
        subject_person_id: p_S7JJYYDxKWx39DSsf52cUj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鲂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dftSZCiQ6zQDZmZxF6dUzG
          claim_id: c_HKZdu4qG1TZZCiVG4pUSzR
          source_id: s_wW5WtxSAtQM7LuqyCfKFKE
          stance: supports
          locator: CBDB:415630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415630）
          source: &a1
            id: s_wW5WtxSAtQM7LuqyCfKFKE
            source_type: api_record
            title: 中国历代人物传记资料库：王鲂（CBDB 415630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415630&o=json
            external_identifier: CBDB:415630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7BVhEpqkAnQJSgCB4imeuN
        subject_person_id: p_S7JJYYDxKWx39DSsf52cUj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为三國蜀人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bZwKVMDAu3b2vrrdSz1ZBU
          claim_id: c_7BVhEpqkAnQJSgCB4imeuN
          source_id: s_wW5WtxSAtQM7LuqyCfKFKE
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

# 王鲂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鲂 | accepted |
| bio.summary | CBDB 记载为三國蜀人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鲂（CBDB 415630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415630&o=json)
