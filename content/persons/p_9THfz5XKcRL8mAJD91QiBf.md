---
schema: wang-person/v1
id: p_9THfz5XKcRL8mAJD91QiBf
status: active
merged_into: null
display_name: 王秉鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b85yC5bzw3j7rgVZ8y37ca
        subject_person_id: p_9THfz5XKcRL8mAJD91QiBf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HnQuTGnzagYkghtBEahBsh
          claim_id: c_b85yC5bzw3j7rgVZ8y37ca
          source_id: s_SK7LRA1uQLG7dhgV9Sg64a
          stance: supports
          locator: CBDB:342133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342133）
          source: &a1
            id: s_SK7LRA1uQLG7dhgV9Sg64a
            source_type: api_record
            title: 中国历代人物传记资料库：王秉鑑（CBDB 342133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342133&o=json
            external_identifier: CBDB:342133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HhoLxC9TAZCwij8tGY5eiA
        subject_person_id: p_9THfz5XKcRL8mAJD91QiBf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉鑑，清人物。明清進士進士，籍贯蘭陽，入仕進士，曾任吏部員外郎、同考官。（中国历代人物传记资料库 CBDB 342133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N77ByU3Of7eA3ad_F6vohO
          claim_id: c_HhoLxC9TAZCwij8tGY5eiA
          source_id: s_SK7LRA1uQLG7dhgV9Sg64a
          stance: supports
          locator: CBDB:342133
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

# 王秉鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉鑑 | accepted |
| bio.summary | 王秉鑑，清人物。明清進士進士，籍贯蘭陽，入仕進士，曾任吏部員外郎、同考官。（中国历代人物传记资料库 CBDB 342133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉鑑（CBDB 342133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342133&o=json)
