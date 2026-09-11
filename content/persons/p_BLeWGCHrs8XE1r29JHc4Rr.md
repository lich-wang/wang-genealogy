---
schema: wang-person/v1
id: p_BLeWGCHrs8XE1r29JHc4Rr
status: active
merged_into: null
display_name: 王彥清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FP4znjQX3xztpALZMpKTQo
        subject_person_id: p_BLeWGCHrs8XE1r29JHc4Rr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9WmruGqsa9kUp4R9V1x2UY
          claim_id: c_FP4znjQX3xztpALZMpKTQo
          source_id: s_pRgcYghYzddQsqvRnJ4xYi
          stance: supports
          locator: CBDB:637628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637628）
          source: &a1
            id: s_pRgcYghYzddQsqvRnJ4xYi
            source_type: api_record
            title: 中国历代人物传记资料库：王彥清（CBDB 637628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637628&o=json
            external_identifier: CBDB:637628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJ61Ym5ADrR9Rs4A3mh1No
        subject_person_id: p_BLeWGCHrs8XE1r29JHc4Rr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥清，清人物。籍贯甘肅省，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 637628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VRrwNLHSU4cINx1Duef2Ny
          claim_id: c_xJ61Ym5ADrR9Rs4A3mh1No
          source_id: s_pRgcYghYzddQsqvRnJ4xYi
          stance: supports
          locator: CBDB:637628
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

# 王彥清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥清 | accepted |
| bio.summary | 王彥清，清人物。籍贯甘肅省，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 637628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥清（CBDB 637628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637628&o=json)
