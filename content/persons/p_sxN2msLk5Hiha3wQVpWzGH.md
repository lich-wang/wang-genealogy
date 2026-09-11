---
schema: wang-person/v1
id: p_sxN2msLk5Hiha3wQVpWzGH
status: active
merged_into: null
display_name: 王晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_msq7WeGYPggMfoGmkJLCdQ
        subject_person_id: p_sxN2msLk5Hiha3wQVpWzGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LZS4zbLjmJbuhCkjTHF3t9
          claim_id: c_msq7WeGYPggMfoGmkJLCdQ
          source_id: s_gFtNjCvCmBUcwaE34J2qe2
          stance: supports
          locator: CBDB:341833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341833）
          source: &a1
            id: s_gFtNjCvCmBUcwaE34J2qe2
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 341833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341833&o=json
            external_identifier: CBDB:341833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_on9FVzmVjuy71osdaDw9ir
        subject_person_id: p_sxN2msLk5Hiha3wQVpWzGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉，清人物。明清進士進士，籍贯江陰，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 341833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8mwJZ7en9FJ_RtWJ3waGVL
          claim_id: c_on9FVzmVjuy71osdaDw9ir
          source_id: s_gFtNjCvCmBUcwaE34J2qe2
          stance: supports
          locator: CBDB:341833
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

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，清人物。明清進士進士，籍贯江陰，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 341833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 341833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341833&o=json)
