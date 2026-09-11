---
schema: wang-person/v1
id: p_hLrUxEGVr77H64HjhHt1ff
status: active
merged_into: null
display_name: 王介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XapJXSAtE5LAPEL8qif3oV
        subject_person_id: p_hLrUxEGVr77H64HjhHt1ff
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tBiZdp8ti4q2X3rJeyhDK
          claim_id: c_XapJXSAtE5LAPEL8qif3oV
          source_id: s_Q658UPXF1zfhVGbxixq62v
          stance: supports
          locator: CBDB:100629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100629）
          source: &a1
            id: s_Q658UPXF1zfhVGbxixq62v
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 100629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100629&o=json
            external_identifier: CBDB:100629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5Z6LgTXPe5Qr4CSDLudJr8
        subject_person_id: p_hLrUxEGVr77H64HjhHt1ff
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1294年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a853MedA5o1zHsSrg2sk5K
          claim_id: c_5Z6LgTXPe5Qr4CSDLudJr8
          source_id: s_Q658UPXF1zfhVGbxixq62v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Le7G9S8eyPowNLMKHMfkBB
        subject_person_id: p_hLrUxEGVr77H64HjhHt1ff
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1371年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DfBCzNFqBtMkpqXLAo3gBv
          claim_id: c_Le7G9S8eyPowNLMKHMfkBB
          source_id: s_Q658UPXF1zfhVGbxixq62v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRsph4WK9GiTeCaXhgMr8j
        subject_person_id: p_hLrUxEGVr77H64HjhHt1ff
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介（1294年—1371年），明人物。籍贯上虞，入仕薦舉 (保任,保舉)，曾任縣學教諭、路學正。（中国历代人物传记资料库 CBDB 100629）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_meSfBtSMUGn1HiPF1WEZBH
          claim_id: c_ZRsph4WK9GiTeCaXhgMr8j
          source_id: s_Q658UPXF1zfhVGbxixq62v
          stance: supports
          locator: CBDB:100629
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

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| birth.date | 1294年 | accepted |
| death.date | 1371年 | accepted |
| bio.summary | 王介（1294年—1371年），明人物。籍贯上虞，入仕薦舉 (保任,保舉)，曾任縣學教諭、路學正。（中国历代人物传记资料库 CBDB 100629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 100629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100629&o=json)
