---
schema: wang-person/v1
id: p_ABeFB86yFXShBxQZMKaD1w
status: active
merged_into: null
display_name: 王增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8YBFXhy7E9MmFETL4LRso
        subject_person_id: p_ABeFB86yFXShBxQZMKaD1w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cFHm8ghgmjyDF8SfKh1Qr8
          claim_id: c_t8YBFXhy7E9MmFETL4LRso
          source_id: s_VjbfJhhHkUJEmbvR7myu3B
          stance: supports
          locator: CBDB:458992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458992）
          source: &a1
            id: s_VjbfJhhHkUJEmbvR7myu3B
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 458992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458992&o=json
            external_identifier: CBDB:458992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5n9iCt3wqUbB1Jrp91B81
        subject_person_id: p_ABeFB86yFXShBxQZMKaD1w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 458992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kOwUDP_iHDJHXAQpXfZuXT
          claim_id: c_N5n9iCt3wqUbB1Jrp91B81
          source_id: s_VjbfJhhHkUJEmbvR7myu3B
          stance: supports
          locator: CBDB:458992
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

# 王增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增 | accepted |
| bio.summary | 王增，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 458992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增（CBDB 458992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458992&o=json)
