---
schema: wang-person/v1
id: p_XbrvKbMD9JFaZuVbjNVR7A
status: active
merged_into: null
display_name: 王嗣質
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3WJD1SuYfKWKmVBw3JPMxu
        subject_person_id: p_XbrvKbMD9JFaZuVbjNVR7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iPkH617nGTm56Au6LxkrJs
          claim_id: c_3WJD1SuYfKWKmVBw3JPMxu
          source_id: s_qDyov1rmVwrkDYa9uPtiML
          stance: supports
          locator: CBDB:636601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636601）
          source: &a1
            id: s_qDyov1rmVwrkDYa9uPtiML
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣質（CBDB 636601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636601&o=json
            external_identifier: CBDB:636601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29JMrdEHvoyLMoDJKSQJpR
        subject_person_id: p_XbrvKbMD9JFaZuVbjNVR7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣質，清人物。籍贯錢塘，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ltnQc6wEeeYT4rBA7sbBZ4
          claim_id: c_29JMrdEHvoyLMoDJKSQJpR
          source_id: s_qDyov1rmVwrkDYa9uPtiML
          stance: supports
          locator: CBDB:636601
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

# 王嗣質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣質 | accepted |
| bio.summary | 王嗣質，清人物。籍贯錢塘，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636601） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣質（CBDB 636601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636601&o=json)
