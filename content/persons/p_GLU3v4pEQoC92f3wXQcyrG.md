---
schema: wang-person/v1
id: p_GLU3v4pEQoC92f3wXQcyrG
status: active
merged_into: null
display_name: 王克仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PPVdo6oY7oJL2E4PJKApTx
        subject_person_id: p_GLU3v4pEQoC92f3wXQcyrG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hk6Pe46aNU8mG5Dd1vZmM5
          claim_id: c_PPVdo6oY7oJL2E4PJKApTx
          source_id: s_mdqcBrV3dv8hLpQJnQUEVx
          stance: supports
          locator: CBDB:39017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39017）
          source: &a1
            id: s_mdqcBrV3dv8hLpQJnQUEVx
            source_type: api_record
            title: 中国历代人物传记资料库：王克仁（CBDB 39017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39017&o=json
            external_identifier: CBDB:39017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LZc7ksV9UADVJKLp3DeWiR
        subject_person_id: p_GLU3v4pEQoC92f3wXQcyrG
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
        - id: cs_khr4a3DNkB6ozrjEFjXSPp
          claim_id: c_LZc7ksV9UADVJKLp3DeWiR
          source_id: s_mdqcBrV3dv8hLpQJnQUEVx
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

# 王克仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克仁 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克仁（CBDB 39017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39017&o=json)
