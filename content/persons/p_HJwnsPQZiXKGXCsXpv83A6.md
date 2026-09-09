---
schema: wang-person/v1
id: p_HJwnsPQZiXKGXCsXpv83A6
status: active
merged_into: null
display_name: 王延翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_in9cbKA4Tv5sf68MjGVkJb
        subject_person_id: p_HJwnsPQZiXKGXCsXpv83A6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_12FbhxTZG3Z3SkZ2Q3aC9A
          claim_id: c_in9cbKA4Tv5sf68MjGVkJb
          source_id: s_Ba7kQgLsUggyUYc6jivU1A
          stance: supports
          locator: CBDB:479055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479055）
          source: &a1
            id: s_Ba7kQgLsUggyUYc6jivU1A
            source_type: api_record
            title: 中国历代人物传记资料库：王延翰（CBDB 479055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479055&o=json
            external_identifier: CBDB:479055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_12DKN6xCMAD67N48Dgfxkk
        subject_person_id: p_HJwnsPQZiXKGXCsXpv83A6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为閩國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2N413WHaiVRZrReeLfEZeg
          claim_id: c_12DKN6xCMAD67N48Dgfxkk
          source_id: s_Ba7kQgLsUggyUYc6jivU1A
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

# 王延翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延翰 | accepted |
| bio.summary | CBDB 记载为閩國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延翰（CBDB 479055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479055&o=json)
