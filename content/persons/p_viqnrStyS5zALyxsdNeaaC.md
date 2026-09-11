---
schema: wang-person/v1
id: p_viqnrStyS5zALyxsdNeaaC
status: active
merged_into: null
display_name: 王國亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RnEVFTC5ZUjqfvznJEM2Rb
        subject_person_id: p_viqnrStyS5zALyxsdNeaaC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBNmFHG2N99GVeF9QtjR7A
          claim_id: c_RnEVFTC5ZUjqfvznJEM2Rb
          source_id: s_wMFdnwfDDJ2cJpRsFbJQxE
          stance: supports
          locator: CBDB:533283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533283）
          source: &a1
            id: s_wMFdnwfDDJ2cJpRsFbJQxE
            source_type: api_record
            title: 中国历代人物传记资料库：王國亨（CBDB 533283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533283&o=json
            external_identifier: CBDB:533283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dmJ1MhP42bQ8USaaCLsDUA
        subject_person_id: p_viqnrStyS5zALyxsdNeaaC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國亨，宋人物。籍贯合肥，入仕武舉進士。（中国历代人物传记资料库 CBDB 533283）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OBV_xl4-I3y23GuOBP388W
          claim_id: c_dmJ1MhP42bQ8USaaCLsDUA
          source_id: s_wMFdnwfDDJ2cJpRsFbJQxE
          stance: supports
          locator: CBDB:533283
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

# 王國亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國亨 | accepted |
| bio.summary | 王國亨，宋人物。籍贯合肥，入仕武舉進士。（中国历代人物传记资料库 CBDB 533283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國亨（CBDB 533283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533283&o=json)
