---
schema: wang-person/v1
id: p_AvqsNG8WVPMw4JNV3mKopi
status: active
merged_into: null
display_name: 王錫九
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wVNFXtNvBi9o63GDKcmBbF
        subject_person_id: p_AvqsNG8WVPMw4JNV3mKopi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gvuukqc26QvJ8fTduthW5D
          claim_id: c_wVNFXtNvBi9o63GDKcmBbF
          source_id: s_vzPtvFm449UmvRV827HnPr
          stance: supports
          locator: CBDB:72112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72112）
          source: &a1
            id: s_vzPtvFm449UmvRV827HnPr
            source_type: api_record
            title: 中国历代人物传记资料库：王錫九（CBDB 72112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72112&o=json
            external_identifier: CBDB:72112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jsA2En4hBKTfzD8K1xCF15
        subject_person_id: p_AvqsNG8WVPMw4JNV3mKopi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1684年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2WcTzL4Dw5UPyhwhCiuR6z
          claim_id: c_jsA2En4hBKTfzD8K1xCF15
          source_id: s_vzPtvFm449UmvRV827HnPr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3K2t244Da8HtVYyrQMZCqa
        subject_person_id: p_AvqsNG8WVPMw4JNV3mKopi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫九（生于1684年），清人物。籍贯汾西。（中国历代人物传记资料库 CBDB 72112）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9QOmV-O9esPJHpM-_YgI2d
          claim_id: c_3K2t244Da8HtVYyrQMZCqa
          source_id: s_vzPtvFm449UmvRV827HnPr
          stance: supports
          locator: CBDB:72112
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

# 王錫九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫九 | accepted |
| birth.date | 1684年 | accepted |
| bio.summary | 王錫九（生于1684年），清人物。籍贯汾西。（中国历代人物传记资料库 CBDB 72112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫九（CBDB 72112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72112&o=json)
