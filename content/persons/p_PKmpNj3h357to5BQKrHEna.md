---
schema: wang-person/v1
id: p_PKmpNj3h357to5BQKrHEna
status: active
merged_into: null
display_name: 王杞子
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9sQfd7u1vR68BYqXTbnAvJ
        subject_person_id: p_PKmpNj3h357to5BQKrHEna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xDWKx3TZ1Z5greXQxSRqVk
          claim_id: c_9sQfd7u1vR68BYqXTbnAvJ
          source_id: s_KnqPX8y9t17d9JmnQoK9k5
          stance: supports
          locator: CBDB:545720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545720）
          source: &a1
            id: s_KnqPX8y9t17d9JmnQoK9k5
            source_type: api_record
            title: 中国历代人物传记资料库：王杞子（CBDB 545720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545720&o=json
            external_identifier: CBDB:545720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_URAHetjV2VAxj47euAQm1q
        subject_person_id: p_PKmpNj3h357to5BQKrHEna
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞子，宋人物。籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 545720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ELj-uTar3eoS8_4Apm7L4V
          claim_id: c_URAHetjV2VAxj47euAQm1q
          source_id: s_KnqPX8y9t17d9JmnQoK9k5
          stance: supports
          locator: CBDB:545720
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

# 王杞子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞子 | accepted |
| bio.summary | 王杞子，宋人物。籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 545720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杞子（CBDB 545720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545720&o=json)
