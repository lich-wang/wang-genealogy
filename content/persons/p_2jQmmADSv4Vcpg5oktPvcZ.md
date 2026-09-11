---
schema: wang-person/v1
id: p_2jQmmADSv4Vcpg5oktPvcZ
status: active
merged_into: null
display_name: 王之綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2o1LfWtihLr68aZ9HFEXh2
        subject_person_id: p_2jQmmADSv4Vcpg5oktPvcZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a14QGmBjuepy1BuHEpcpEX
          claim_id: c_2o1LfWtihLr68aZ9HFEXh2
          source_id: s_1fhAMM3nqP3a1J9sQp8BZh
          stance: supports
          locator: CBDB:635811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635811）
          source: &a1
            id: s_1fhAMM3nqP3a1J9sQp8BZh
            source_type: api_record
            title: 中国历代人物传记资料库：王之綬（CBDB 635811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635811&o=json
            external_identifier: CBDB:635811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ZzNJA4q4d27V6DTab2U2m
        subject_person_id: p_2jQmmADSv4Vcpg5oktPvcZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之綬，清人物。籍贯澄邁，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任經歷。（中国历代人物传记资料库 CBDB 635811）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lRCgSXX-yBozycpDVejkpN
          claim_id: c_6ZzNJA4q4d27V6DTab2U2m
          source_id: s_1fhAMM3nqP3a1J9sQp8BZh
          stance: supports
          locator: CBDB:635811
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

# 王之綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之綬 | accepted |
| bio.summary | 王之綬，清人物。籍贯澄邁，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任經歷。（中国历代人物传记资料库 CBDB 635811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之綬（CBDB 635811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635811&o=json)
