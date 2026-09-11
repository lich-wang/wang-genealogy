---
schema: wang-person/v1
id: p_1Lp8N9VtHrqGvUZVVJKLwg
status: active
merged_into: null
display_name: 王睿生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WXfhc7JRy5cXRk9wYZDQrj
        subject_person_id: p_1Lp8N9VtHrqGvUZVVJKLwg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E5D6JbrCVXUiQDQxDE5eVu
          claim_id: c_WXfhc7JRy5cXRk9wYZDQrj
          source_id: s_rJsivpWUKa45nXihp6BqGL
          stance: supports
          locator: CBDB:639549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639549）
          source: &a1
            id: s_rJsivpWUKa45nXihp6BqGL
            source_type: api_record
            title: 中国历代人物传记资料库：王睿生（CBDB 639549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639549&o=json
            external_identifier: CBDB:639549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JggHwHfP5BS9A5c19yw6gm
        subject_person_id: p_1Lp8N9VtHrqGvUZVVJKLwg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿生，清人物。籍贯廣西直隸州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8neze-kPQU-E3rmdp-GvZ_
          claim_id: c_JggHwHfP5BS9A5c19yw6gm
          source_id: s_rJsivpWUKa45nXihp6BqGL
          stance: supports
          locator: CBDB:639549
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

# 王睿生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿生 | accepted |
| bio.summary | 王睿生，清人物。籍贯廣西直隸州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639549） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王睿生（CBDB 639549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639549&o=json)
