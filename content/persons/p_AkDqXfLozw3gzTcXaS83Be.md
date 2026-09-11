---
schema: wang-person/v1
id: p_AkDqXfLozw3gzTcXaS83Be
status: active
merged_into: null
display_name: 王庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJ1ME6w42oMNCfeN8vffUC
        subject_person_id: p_AkDqXfLozw3gzTcXaS83Be
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7zrH2z4BxfNZ7aEgQtDNr6
          claim_id: c_LJ1ME6w42oMNCfeN8vffUC
          source_id: s_1Dpd8pK5oM9RTjsnLJ74R7
          stance: supports
          locator: CBDB:341579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341579）
          source: &a1
            id: s_1Dpd8pK5oM9RTjsnLJ74R7
            source_type: api_record
            title: 中国历代人物传记资料库：王庚（CBDB 341579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341579&o=json
            external_identifier: CBDB:341579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CqPcQB94FRZh4CwuE8pcY7
        subject_person_id: p_AkDqXfLozw3gzTcXaS83Be
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚，明人物。明清進士進士，籍贯灤州，入仕進士。（中国历代人物传记资料库 CBDB 341579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_raLkhLjUc9FVsS3B-rOZFW
          claim_id: c_CqPcQB94FRZh4CwuE8pcY7
          source_id: s_1Dpd8pK5oM9RTjsnLJ74R7
          stance: supports
          locator: CBDB:341579
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

# 王庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庚 | accepted |
| bio.summary | 王庚，明人物。明清進士進士，籍贯灤州，入仕進士。（中国历代人物传记资料库 CBDB 341579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庚（CBDB 341579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341579&o=json)
