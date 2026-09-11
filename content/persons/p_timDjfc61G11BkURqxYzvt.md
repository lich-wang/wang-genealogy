---
schema: wang-person/v1
id: p_timDjfc61G11BkURqxYzvt
status: active
merged_into: null
display_name: 王仁壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGLWdzM1wM3rVxmFEzVPQL
        subject_person_id: p_timDjfc61G11BkURqxYzvt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V9tE961mRUcYJXY23iJWRg
          claim_id: c_pGLWdzM1wM3rVxmFEzVPQL
          source_id: s_b9sJPXnBWpxmBE3RZhWwE5
          stance: supports
          locator: CBDB:635882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635882）
          source: &a1
            id: s_b9sJPXnBWpxmBE3RZhWwE5
            source_type: api_record
            title: 中国历代人物传记资料库：王仁壽（CBDB 635882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635882&o=json
            external_identifier: CBDB:635882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UYoszxEMa1ResqqUmHJmy6
        subject_person_id: p_timDjfc61G11BkURqxYzvt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁壽，清人物。籍贯吳縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yVN9hy8AWHUfoKn-xTwd_N
          claim_id: c_UYoszxEMa1ResqqUmHJmy6
          source_id: s_b9sJPXnBWpxmBE3RZhWwE5
          stance: supports
          locator: CBDB:635882
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

# 王仁壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁壽 | accepted |
| bio.summary | 王仁壽，清人物。籍贯吳縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁壽（CBDB 635882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635882&o=json)
