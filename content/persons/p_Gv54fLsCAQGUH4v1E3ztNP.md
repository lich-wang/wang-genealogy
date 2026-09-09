---
schema: wang-person/v1
id: p_Gv54fLsCAQGUH4v1E3ztNP
status: active
merged_into: null
display_name: 王齊翼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXMukGrwZQWGRkM3eE9Bzy
        subject_person_id: p_Gv54fLsCAQGUH4v1E3ztNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zaCz41AVkGkcNaQ73BTycE
          claim_id: c_xXMukGrwZQWGRkM3eE9Bzy
          source_id: s_3z7HKq7jmAGL7dZKjmj67u
          stance: supports
          locator: CBDB:502341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502341）
          source: &a1
            id: s_3z7HKq7jmAGL7dZKjmj67u
            source_type: api_record
            title: 中国历代人物传记资料库：王齊翼（CBDB 502341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502341&o=json
            external_identifier: CBDB:502341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HzP5tdyBqxxDnJgfuwno8L
        subject_person_id: p_Gv54fLsCAQGUH4v1E3ztNP
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
        - id: cs_chxHKz5jUW75b5t2NBE6ky
          claim_id: c_HzP5tdyBqxxDnJgfuwno8L
          source_id: s_3z7HKq7jmAGL7dZKjmj67u
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

# 王齊翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊翼 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齊翼（CBDB 502341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502341&o=json)
