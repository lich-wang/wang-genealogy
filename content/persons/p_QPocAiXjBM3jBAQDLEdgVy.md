---
schema: wang-person/v1
id: p_QPocAiXjBM3jBAQDLEdgVy
status: active
merged_into: null
display_name: 王晉源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKqmRTsoM5KALFKkZq6nsV
        subject_person_id: p_QPocAiXjBM3jBAQDLEdgVy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EdmxFpDHPH2xZNik91mPR
          claim_id: c_cKqmRTsoM5KALFKkZq6nsV
          source_id: s_68be1NLpQK8H6N9anvTMDd
          stance: supports
          locator: CBDB:576116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576116）
          source: &a1
            id: s_68be1NLpQK8H6N9anvTMDd
            source_type: api_record
            title: 中国历代人物传记资料库：王晉源（CBDB 576116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576116&o=json
            external_identifier: CBDB:576116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XXgFhYptVM4n1bvhXawv3A
        subject_person_id: p_QPocAiXjBM3jBAQDLEdgVy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉源，清人物。籍贯泰州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tQD6Uc-IPITV2gjYQJwG72
          claim_id: c_XXgFhYptVM4n1bvhXawv3A
          source_id: s_68be1NLpQK8H6N9anvTMDd
          stance: supports
          locator: CBDB:576116
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

# 王晉源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉源 | accepted |
| bio.summary | 王晉源，清人物。籍贯泰州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉源（CBDB 576116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576116&o=json)
