---
schema: wang-person/v1
id: p_Kfghd4VC9pGgH5qCDQAosC
status: active
merged_into: null
display_name: 王渙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9ET85JtS5N6DC7feqrhpz
        subject_person_id: p_Kfghd4VC9pGgH5qCDQAosC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LTL9jfM4qQYs12r6Rbw6es
          claim_id: c_D9ET85JtS5N6DC7feqrhpz
          source_id: s_1Q2WTBF8cYYiNDZ59iaJou
          stance: supports
          locator: CBDB:35681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35681）
          source: &a1
            id: s_1Q2WTBF8cYYiNDZ59iaJou
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 35681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35681&o=json
            external_identifier: CBDB:35681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K2Fku1bYdSRWk3CE9m5JV7
        subject_person_id: p_Kfghd4VC9pGgH5qCDQAosC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lg67xUb5p6dT4Gzsdfss6S
          claim_id: c_K2Fku1bYdSRWk3CE9m5JV7
          source_id: s_1Q2WTBF8cYYiNDZ59iaJou
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

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 35681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35681&o=json)
