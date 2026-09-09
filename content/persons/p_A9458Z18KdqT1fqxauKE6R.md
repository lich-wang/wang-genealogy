---
schema: wang-person/v1
id: p_A9458Z18KdqT1fqxauKE6R
status: active
merged_into: null
display_name: 王銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59kFGDwBurF9GUcUQV3FTe
        subject_person_id: p_A9458Z18KdqT1fqxauKE6R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PukHXgdN3T1yydhbr8eJxw
          claim_id: c_59kFGDwBurF9GUcUQV3FTe
          source_id: s_cKuNKCd3YC44wJCMg79NR9
          stance: supports
          locator: CBDB:265932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265932）
          source: &a1
            id: s_cKuNKCd3YC44wJCMg79NR9
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 265932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265932&o=json
            external_identifier: CBDB:265932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pCVnM3iC8ZUuFu6Zs61nX7
        subject_person_id: p_A9458Z18KdqT1fqxauKE6R
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
        - id: cs_83GQkWp6aVMhuJEUYb5ABs
          claim_id: c_pCVnM3iC8ZUuFu6Zs61nX7
          source_id: s_cKuNKCd3YC44wJCMg79NR9
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

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 265932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265932&o=json)
