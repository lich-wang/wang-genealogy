---
schema: wang-person/v1
id: p_hPKBZGKSmX4LRiVGxmbriL
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_teQrKtL6DT73xVDcgNZCFr
        subject_person_id: p_hPKBZGKSmX4LRiVGxmbriL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hvWwgJxRcNeM1QDKWC49Tq
          claim_id: c_teQrKtL6DT73xVDcgNZCFr
          source_id: s_8r1VQKWWcjTX8RVJ2R2bo2
          stance: supports
          locator: CBDB:71200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71200）
          source: &a1
            id: s_8r1VQKWWcjTX8RVJ2R2bo2
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 71200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71200&o=json
            external_identifier: CBDB:71200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A11S6HejuMbdEc2awKb3iK
        subject_person_id: p_hPKBZGKSmX4LRiVGxmbriL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8gQKNseQ74869WEJXMN9t8
          claim_id: c_A11S6HejuMbdEc2awKb3iK
          source_id: s_8r1VQKWWcjTX8RVJ2R2bo2
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
        id: c_PUtNvq2gwKBHZtLT7o8PQA
        subject_person_id: p_hPKBZGKSmX4LRiVGxmbriL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章（生于1603年），清人物。明清進士進士，籍贯萊陽，入仕進士。（中国历代人物传记资料库 CBDB 71200）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mJVlGJAfj0tn3ao2gvs8FR
          claim_id: c_PUtNvq2gwKBHZtLT7o8PQA
          source_id: s_8r1VQKWWcjTX8RVJ2R2bo2
          stance: supports
          locator: CBDB:71200
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| birth.date | 1603年 | accepted |
| bio.summary | 王章（生于1603年），清人物。明清進士進士，籍贯萊陽，入仕進士。（中国历代人物传记资料库 CBDB 71200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 71200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71200&o=json)
