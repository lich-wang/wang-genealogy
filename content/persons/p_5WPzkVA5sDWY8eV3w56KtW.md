---
schema: wang-person/v1
id: p_5WPzkVA5sDWY8eV3w56KtW
status: active
merged_into: null
display_name: 王玳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dT376WB96bzZj5bFyq8Q6m
        subject_person_id: p_5WPzkVA5sDWY8eV3w56KtW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2X8KJ4fQNfA6MhqJiK1QSS
          claim_id: c_dT376WB96bzZj5bFyq8Q6m
          source_id: s_NWhZiw8a8D5s6deFiVHKbx
          stance: supports
          locator: CBDB:284308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284308）
          source: &a1
            id: s_NWhZiw8a8D5s6deFiVHKbx
            source_type: api_record
            title: 中国历代人物传记资料库：王玳（CBDB 284308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json
            external_identifier: CBDB:284308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5qZf5ka4PLgU2Dde7mVT8
        subject_person_id: p_5WPzkVA5sDWY8eV3w56KtW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTsePmYS1QKgV84gBECgtU
          claim_id: c_w5qZf5ka4PLgU2Dde7mVT8
          source_id: s_NWhZiw8a8D5s6deFiVHKbx
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

# 王玳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玳（CBDB 284308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json)
