---
schema: wang-person/v1
id: p_1E46KsM7pMvrQftHvAkFrZ
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GTqY26GC4XE8uoZToCPF7o
        subject_person_id: p_1E46KsM7pMvrQftHvAkFrZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6LA3fn7KJd9w2bnAbVqPmA
          claim_id: c_GTqY26GC4XE8uoZToCPF7o
          source_id: s_TNg1XKceU3SbBcgabJXfx9
          stance: supports
          locator: CBDB:126776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126776）
          source: &a1
            id: s_TNg1XKceU3SbBcgabJXfx9
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 126776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126776&o=json
            external_identifier: CBDB:126776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfkN9nfkWqp8McL4h9AZyo
        subject_person_id: p_1E46KsM7pMvrQftHvAkFrZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。籍贯長洲，身份为畫家、行醫。（中国历代人物传记资料库 CBDB 126776）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cpq3zlR6vkbejlB8TIE8kD
          claim_id: c_KfkN9nfkWqp8McL4h9AZyo
          source_id: s_TNg1XKceU3SbBcgabJXfx9
          stance: supports
          locator: CBDB:126776
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。籍贯長洲，身份为畫家、行醫。（中国历代人物传记资料库 CBDB 126776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 126776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126776&o=json)
