---
schema: wang-person/v1
id: p_rBG19bSzAnK5M9XCPANpBh
status: active
merged_into: null
display_name: 王仲雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fR7ZA6AWEdPH4WvQvzwLKe
        subject_person_id: p_rBG19bSzAnK5M9XCPANpBh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5QtwtReYsefsRGvMZ9NZx
          claim_id: c_fR7ZA6AWEdPH4WvQvzwLKe
          source_id: s_aUy8fHNSdo2Fi6dbDnPA3G
          stance: supports
          locator: CBDB:538646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538646）
          source: &a1
            id: s_aUy8fHNSdo2Fi6dbDnPA3G
            source_type: api_record
            title: 中国历代人物传记资料库：王仲雅（CBDB 538646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538646&o=json
            external_identifier: CBDB:538646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aBSXGAFHAENczucynkwVY7
        subject_person_id: p_rBG19bSzAnK5M9XCPANpBh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲雅，宋人物。籍贯分寧，入仕進士。（中国历代人物传记资料库 CBDB 538646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mzeL3-qQomwTyh--JGcpjx
          claim_id: c_aBSXGAFHAENczucynkwVY7
          source_id: s_aUy8fHNSdo2Fi6dbDnPA3G
          stance: supports
          locator: CBDB:538646
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

# 王仲雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲雅 | accepted |
| bio.summary | 王仲雅，宋人物。籍贯分寧，入仕進士。（中国历代人物传记资料库 CBDB 538646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲雅（CBDB 538646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538646&o=json)
