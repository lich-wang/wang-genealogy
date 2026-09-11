---
schema: wang-person/v1
id: p_2JDQMSDAsKSQcxAerh3Jv8
status: active
merged_into: null
display_name: 王耆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dvBGCBVEF5HP9TyLHioXGd
        subject_person_id: p_2JDQMSDAsKSQcxAerh3Jv8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w82rzA3nFQ394531p8uxQv
          claim_id: c_dvBGCBVEF5HP9TyLHioXGd
          source_id: s_Vg9hNTWYM4GTiMHQ8TzVvJ
          stance: supports
          locator: CBDB:539336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539336）
          source: &a1
            id: s_Vg9hNTWYM4GTiMHQ8TzVvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王耆（CBDB 539336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539336&o=json
            external_identifier: CBDB:539336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7eECiGh8rNENEfEDEGA9je
        subject_person_id: p_2JDQMSDAsKSQcxAerh3Jv8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耆，宋人物。籍贯華陽，入仕進士。（中国历代人物传记资料库 CBDB 539336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XAOL4bn82QZIH0XarmR0Hr
          claim_id: c_7eECiGh8rNENEfEDEGA9je
          source_id: s_Vg9hNTWYM4GTiMHQ8TzVvJ
          stance: supports
          locator: CBDB:539336
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

# 王耆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耆 | accepted |
| bio.summary | 王耆，宋人物。籍贯華陽，入仕進士。（中国历代人物传记资料库 CBDB 539336） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耆（CBDB 539336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539336&o=json)
