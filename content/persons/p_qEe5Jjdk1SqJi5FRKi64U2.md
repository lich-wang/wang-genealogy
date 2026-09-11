---
schema: wang-person/v1
id: p_qEe5Jjdk1SqJi5FRKi64U2
status: active
merged_into: null
display_name: 王胤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8K7EvPgNgj7J7SsuMbFKfV
        subject_person_id: p_qEe5Jjdk1SqJi5FRKi64U2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3df3t3xeHvAz8fH7MtZit
          claim_id: c_8K7EvPgNgj7J7SsuMbFKfV
          source_id: s_fw8LFfkHKDHHTNZ9dbXCn6
          stance: supports
          locator: CBDB:244997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244997）
          source: &a1
            id: s_fw8LFfkHKDHHTNZ9dbXCn6
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 244997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json
            external_identifier: CBDB:244997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aiK2Ycrh2TLLY8zs5doRRJ
        subject_person_id: p_qEe5Jjdk1SqJi5FRKi64U2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 244997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0i_S3FHEbz4T5ziwoXqaHm
          claim_id: c_aiK2Ycrh2TLLY8zs5doRRJ
          source_id: s_fw8LFfkHKDHHTNZ9dbXCn6
          stance: supports
          locator: CBDB:244997
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

# 王胤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胤 | accepted |
| bio.summary | 王胤，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 244997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王胤（CBDB 244997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244997&o=json)
