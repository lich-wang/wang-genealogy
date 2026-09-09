---
schema: wang-person/v1
id: p_XhwWPURzo2A5NL2Lx4uXcu
status: active
merged_into: null
display_name: 王遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G38SxkyV3pAwMRR8JdeTcd
        subject_person_id: p_XhwWPURzo2A5NL2Lx4uXcu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZbhvCkd5N6BzC7jXeZsJCp
          claim_id: c_G38SxkyV3pAwMRR8JdeTcd
          source_id: s_QhgK7iMRJ34gCEYzJFMWk6
          stance: supports
          locator: CBDB:574826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574826）
          source: &a1
            id: s_QhgK7iMRJ34gCEYzJFMWk6
            source_type: api_record
            title: 中国历代人物传记资料库：王遠（CBDB 574826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574826&o=json
            external_identifier: CBDB:574826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fAJyho6kRvhkcNuS23tL6p
        subject_person_id: p_XhwWPURzo2A5NL2Lx4uXcu
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
        - id: cs_SN6L7ftk7vA159VSXEFRB2
          claim_id: c_fAJyho6kRvhkcNuS23tL6p
          source_id: s_QhgK7iMRJ34gCEYzJFMWk6
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

# 王遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遠（CBDB 574826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574826&o=json)
