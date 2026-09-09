---
schema: wang-person/v1
id: p_gFc3Rf5a5Mfq6rFLvqYhTf
status: active
merged_into: null
display_name: 王真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6iQj1FQYFGg49KW7VBTb9
        subject_person_id: p_gFc3Rf5a5Mfq6rFLvqYhTf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DW8CP87JJZSwogq3qpZ3eu
          claim_id: c_e6iQj1FQYFGg49KW7VBTb9
          source_id: s_j2mCVcTRwCEH9QUBwGURvp
          stance: supports
          locator: CBDB:274036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274036）
          source: &a1
            id: s_j2mCVcTRwCEH9QUBwGURvp
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 274036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274036&o=json
            external_identifier: CBDB:274036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yN8C4CS9TghNPaKC1Y7QBD
        subject_person_id: p_gFc3Rf5a5Mfq6rFLvqYhTf
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
        - id: cs_j1PGmd1jECVHn78shJUyp6
          claim_id: c_yN8C4CS9TghNPaKC1Y7QBD
          source_id: s_j2mCVcTRwCEH9QUBwGURvp
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

# 王真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王真（CBDB 274036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274036&o=json)
