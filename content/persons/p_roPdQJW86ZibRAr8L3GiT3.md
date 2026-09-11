---
schema: wang-person/v1
id: p_roPdQJW86ZibRAr8L3GiT3
status: active
merged_into: null
display_name: 王正位
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9LZQ1LLQSe8J1mQpFTZHM
        subject_person_id: p_roPdQJW86ZibRAr8L3GiT3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正位
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4LED9NY3vVYqmefTgM2UVf
          claim_id: c_C9LZQ1LLQSe8J1mQpFTZHM
          source_id: s_RErakEDE6tbLcxRT8eJCgC
          stance: supports
          locator: CBDB:638884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638884）
          source: &a1
            id: s_RErakEDE6tbLcxRT8eJCgC
            source_type: api_record
            title: 中国历代人物传记资料库：王正位（CBDB 638884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638884&o=json
            external_identifier: CBDB:638884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gX2rnztN3tQM45qTY7rKDN
        subject_person_id: p_roPdQJW86ZibRAr8L3GiT3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正位，清人物。籍贯南陽，曾任訓導。（中国历代人物传记资料库 CBDB 638884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4lwZ4yuFvQTkwZaCWpUAw_
          claim_id: c_gX2rnztN3tQM45qTY7rKDN
          source_id: s_RErakEDE6tbLcxRT8eJCgC
          stance: supports
          locator: CBDB:638884
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

# 王正位

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正位 | accepted |
| bio.summary | 王正位，清人物。籍贯南陽，曾任訓導。（中国历代人物传记资料库 CBDB 638884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正位（CBDB 638884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638884&o=json)
