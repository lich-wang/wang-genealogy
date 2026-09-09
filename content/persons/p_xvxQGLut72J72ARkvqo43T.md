---
schema: wang-person/v1
id: p_xvxQGLut72J72ARkvqo43T
status: active
merged_into: null
display_name: 王應霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xine8Vz2ELvec4r1VqF9tb
        subject_person_id: p_xvxQGLut72J72ARkvqo43T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B3jUL7122CNnq64NUGWL4Q
          claim_id: c_Xine8Vz2ELvec4r1VqF9tb
          source_id: s_6zebXAuXYuHLPZw2JdE4m5
          stance: supports
          locator: CBDB:638003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638003）
          source: &a1
            id: s_6zebXAuXYuHLPZw2JdE4m5
            source_type: api_record
            title: 中国历代人物传记资料库：王應霖（CBDB 638003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638003&o=json
            external_identifier: CBDB:638003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jkoGzGQR5sGsF37sPCV4gj
        subject_person_id: p_xvxQGLut72J72ARkvqo43T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u328ZLLP4oXLypjfXM55jx
          claim_id: c_jkoGzGQR5sGsF37sPCV4gj
          source_id: s_6zebXAuXYuHLPZw2JdE4m5
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

# 王應霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應霖（CBDB 638003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638003&o=json)
