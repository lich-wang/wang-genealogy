---
schema: wang-person/v1
id: p_DNsBP8nNSzNPzkLKAQ7YXa
status: active
merged_into: null
display_name: 王閏孫
cbdb_id: 101372
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cmqB5XVXYtB1zRZJmoQ8yx
        subject_person_id: p_DNsBP8nNSzNPzkLKAQ7YXa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏孫，元人物。籍贯青田。（中国历代人物传记资料库 CBDB 101372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xBR5jZusbleGREb74-DQ4G
          claim_id: c_cmqB5XVXYtB1zRZJmoQ8yx
          source_id: s_nG7Lz7DMyjPWpVAT9L7m1V
          stance: supports
          locator: CBDB:101372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nG7Lz7DMyjPWpVAT9L7m1V
            source_type: api_record
            title: 中国历代人物传记资料库：王閏孫（CBDB 101372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101372&o=json
            external_identifier: CBDB:101372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5YqZeCfkwRGdb9CFvPX6J
        subject_person_id: p_DNsBP8nNSzNPzkLKAQ7YXa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7mmFK3kzmipRTewH94Frkq
          claim_id: c_n5YqZeCfkwRGdb9CFvPX6J
          source_id: s_nG7Lz7DMyjPWpVAT9L7m1V
          stance: supports
          locator: CBDB:101372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 元
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

# 王閏孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王閏孫，元人物。籍贯青田。（中国历代人物传记资料库 CBDB 101372） | accepted |
| name.primary | 王閏孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閏孫（CBDB 101372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101372&o=json)
