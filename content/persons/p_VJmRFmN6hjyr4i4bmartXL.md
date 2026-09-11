---
schema: wang-person/v1
id: p_VJmRFmN6hjyr4i4bmartXL
status: active
merged_into: null
display_name: 王克義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SCcR9uDK3PHqW96zNJTAcE
        subject_person_id: p_VJmRFmN6hjyr4i4bmartXL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nENhaR7R3KoWXGaCbQDNuX
          claim_id: c_SCcR9uDK3PHqW96zNJTAcE
          source_id: s_vqSwB48jGofK4o16Z4g9nQ
          stance: supports
          locator: CBDB:342976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342976）
          source: &a1
            id: s_vqSwB48jGofK4o16Z4g9nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王克義（CBDB 342976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342976&o=json
            external_identifier: CBDB:342976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bYdUwbGMMr7ibyoD9YeQGd
        subject_person_id: p_VJmRFmN6hjyr4i4bmartXL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克義，明人物。明清進士進士，籍贯瓊山，入仕進士。（中国历代人物传记资料库 CBDB 342976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NHj5JTgjyNT_MFwKxh4p7S
          claim_id: c_bYdUwbGMMr7ibyoD9YeQGd
          source_id: s_vqSwB48jGofK4o16Z4g9nQ
          stance: supports
          locator: CBDB:342976
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

# 王克義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克義 | accepted |
| bio.summary | 王克義，明人物。明清進士進士，籍贯瓊山，入仕進士。（中国历代人物传记资料库 CBDB 342976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克義（CBDB 342976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342976&o=json)
