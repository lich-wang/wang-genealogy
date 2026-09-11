---
schema: wang-person/v1
id: p_fRwJJNCCFvvrf3j6AGqUbG
status: active
merged_into: null
display_name: 王泰交
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tw6pWbW1SJYMcnkz2fPS7X
        subject_person_id: p_fRwJJNCCFvvrf3j6AGqUbG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰交
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dJpnoAwHC6P7434mZW7fRA
          claim_id: c_tw6pWbW1SJYMcnkz2fPS7X
          source_id: s_caw7cZeByeMLpMKpW9Atkn
          stance: supports
          locator: CBDB:455455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455455）
          source: &a1
            id: s_caw7cZeByeMLpMKpW9Atkn
            source_type: api_record
            title: 中国历代人物传记资料库：王泰交（CBDB 455455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455455&o=json
            external_identifier: CBDB:455455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ud67DGgwzi2kbKLWGi9fTL
        subject_person_id: p_fRwJJNCCFvvrf3j6AGqUbG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰交，明人物。曾任戶部分司。（中国历代人物传记资料库 CBDB 455455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_anYGZP7PquEOh433f8Th3h
          claim_id: c_ud67DGgwzi2kbKLWGi9fTL
          source_id: s_caw7cZeByeMLpMKpW9Atkn
          stance: supports
          locator: CBDB:455455
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

# 王泰交

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰交 | accepted |
| bio.summary | 王泰交，明人物。曾任戶部分司。（中国历代人物传记资料库 CBDB 455455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰交（CBDB 455455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455455&o=json)
