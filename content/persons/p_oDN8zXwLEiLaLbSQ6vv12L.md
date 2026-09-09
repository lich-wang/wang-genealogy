---
schema: wang-person/v1
id: p_oDN8zXwLEiLaLbSQ6vv12L
status: active
merged_into: null
display_name: 王朝倩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ftxF5B3wA8MnCEwrNFqyCf
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝倩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nAPpgP4B2GpEnJmqJTbMTQ
          claim_id: c_ftxF5B3wA8MnCEwrNFqyCf
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
          stance: supports
          locator: CBDB:191740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191740）
          source: &a1
            id: s_XmJf7fzhBSFFVH6X19v9Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王朝倩（CBDB 191740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191740&o=json
            external_identifier: CBDB:191740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W2FRMvvjVdms8FsKZEcmCU
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 846年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dA3Jt8AJcPamjPVGkEoCCj
          claim_id: c_W2FRMvvjVdms8FsKZEcmCU
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
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
        id: c_wGTFs6BVbGzwAAZerQ1bZn
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPJPMsNrdxKgCUohtv2njT
          claim_id: c_wGTFs6BVbGzwAAZerQ1bZn
          source_id: s_XmJf7fzhBSFFVH6X19v9Ys
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

# 王朝倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝倩 | accepted |
| death.date | 846年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝倩（CBDB 191740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191740&o=json)
