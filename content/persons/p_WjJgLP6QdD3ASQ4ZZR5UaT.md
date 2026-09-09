---
schema: wang-person/v1
id: p_WjJgLP6QdD3ASQ4ZZR5UaT
status: active
merged_into: null
display_name: 王壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eoy346rJzF2xGvX7LtDWsF
        subject_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z934s64JGLU1fzJ33gA7Ni
          claim_id: c_Eoy346rJzF2xGvX7LtDWsF
          source_id: s_VWjzcyzHeBomHbm6ymhfP4
          stance: supports
          locator: CBDB:261844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261844）
          source: &a1
            id: s_VWjzcyzHeBomHbm6ymhfP4
            source_type: api_record
            title: 中国历代人物传记资料库：王壁（CBDB 261844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json
            external_identifier: CBDB:261844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHgCpzr53ruK1H1wTsReDQ
        subject_person_id: p_WjJgLP6QdD3ASQ4ZZR5UaT
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
        - id: cs_KqbXQL8AKmp11ByCM5zAMi
          claim_id: c_zHgCpzr53ruK1H1wTsReDQ
          source_id: s_VWjzcyzHeBomHbm6ymhfP4
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

# 王壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壁（CBDB 261844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261844&o=json)
