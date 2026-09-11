---
schema: wang-person/v1
id: p_bNpK2yq4xv1ND4YGwGB8EA
status: active
merged_into: null
display_name: 王域
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1LuB5KH2suMg1uDdPB23A
        subject_person_id: p_bNpK2yq4xv1ND4YGwGB8EA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iKEx1cdVBmNWyTUkvXSJX5
          claim_id: c_m1LuB5KH2suMg1uDdPB23A
          source_id: s_8PsdFF7jaNHhEHK4GoT8U5
          stance: supports
          locator: CBDB:37943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37943）
          source: &a1
            id: s_8PsdFF7jaNHhEHK4GoT8U5
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 37943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37943&o=json
            external_identifier: CBDB:37943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ci6ho9EZArViw6rRrQT8n
        subject_person_id: p_bNpK2yq4xv1ND4YGwGB8EA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域，宋人物。籍贯昌州，曾任參軍。（中国历代人物传记资料库 CBDB 37943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_orvGnrYzl4HGlElha3YiHd
          claim_id: c_5ci6ho9EZArViw6rRrQT8n
          source_id: s_8PsdFF7jaNHhEHK4GoT8U5
          stance: supports
          locator: CBDB:37943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王域

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王域 | accepted |
| bio.summary | 王域，宋人物。籍贯昌州，曾任參軍。（中国历代人物传记资料库 CBDB 37943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王域（CBDB 37943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37943&o=json)
