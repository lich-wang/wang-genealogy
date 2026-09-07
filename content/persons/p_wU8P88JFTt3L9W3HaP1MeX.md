---
schema: wang-person/v1
id: p_wU8P88JFTt3L9W3HaP1MeX
status: active
merged_into: null
display_name: 王正大
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvUtAxnQcJ7iLK9oVRzQqf
        subject_person_id: p_wU8P88JFTt3L9W3HaP1MeX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正大，宋人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 35586 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_43oeFPURReuMW38rV166iJ
          claim_id: c_zvUtAxnQcJ7iLK9oVRzQqf
          source_id: s_1HAZkHDXa8ia7SLZ5PKuB2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1HAZkHDXa8ia7SLZ5PKuB2
            source_type: api_record
            title: 维基数据：王正大（Q45426607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426607
            external_identifier: Q45426607
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
        - id: cs_qElI4-Kq8Trq6RXTXUrDMH
          claim_id: c_zvUtAxnQcJ7iLK9oVRzQqf
          source_id: s_W8r1Pv3bNvvtK1qQtj3Qgj
          stance: supports
          locator: CBDB:35586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_W8r1Pv3bNvvtK1qQtj3Qgj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正大（35586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35586&o=json
            external_identifier: CBDB:35586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:15.816Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wt73JjJEWPHDGCC6YkwJ8t
        subject_person_id: p_wU8P88JFTt3L9W3HaP1MeX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正大
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c8QHkrM8kYyRGHCuXRyPEW
          claim_id: c_Wt73JjJEWPHDGCC6YkwJ8t
          source_id: s_W8r1Pv3bNvvtK1qQtj3Qgj
          stance: supports
          locator: Q45426607
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gGyQjG3kh1mBVYf8BiGVZA
          claim_id: c_Wt73JjJEWPHDGCC6YkwJ8t
          source_id: s_1HAZkHDXa8ia7SLZ5PKuB2
          stance: supports
          locator: Q45426607
          quotation: null
          interpretation_note: null
          source:
            id: s_1HAZkHDXa8ia7SLZ5PKuB2
            source_type: api_record
            title: 维基数据：王正大（Q45426607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426607
            external_identifier: Q45426607
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
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

# 王正大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正大，宋人物。CBDB 记录其籍贯记录为鄞縣。中国历代人物传记资料库（CBDB）以人物编号 35586 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王正大 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王正大（Q45426607）](https://www.wikidata.org/wiki/Q45426607)
- [CBDB 中国历代人物传记资料库：王正大（35586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35586&o=json)
