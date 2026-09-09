---
schema: wang-person/v1
id: p_e8Z59Em5hbj5KfsGE7UhVQ
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A3GVg6118z3QCMoWah9aRn
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9hDGGoUmunRNgy2KzTgYS
          claim_id: c_A3GVg6118z3QCMoWah9aRn
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: CBDB:126886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126886）
          source: &a1
            id: s_1SUmsFVocSHYtEuenTLpTH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 126886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json
            external_identifier: CBDB:126886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KoHF7mGZFJF252rUV41jNX
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWxNpqfGQboXkmxStipxnM
          claim_id: c_KoHF7mGZFJF252rUV41jNX
          source_id: s_1SUmsFVocSHYtEuenTLpTH
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
        id: c_HnneuCdcfBEgC73diJdvvb
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1590年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ndFEs9KBebKDHejuzmKGGN
          claim_id: c_HnneuCdcfBEgC73diJdvvb
          source_id: s_1SUmsFVocSHYtEuenTLpTH
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
        id: c_z4gWeB5jPMNrD9kxsgw1JU
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wCTEMxEUd2Qo6YkCCGUEr
          claim_id: c_z4gWeB5jPMNrD9kxsgw1JU
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| birth.date | 1520年 | accepted |
| death.date | 1590年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 126886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json)
