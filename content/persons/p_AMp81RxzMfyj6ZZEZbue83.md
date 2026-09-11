---
schema: wang-person/v1
id: p_AMp81RxzMfyj6ZZEZbue83
status: active
merged_into: null
display_name: 王豹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PXcwBXP1RPb7zFvnMYHVfM
        subject_person_id: p_AMp81RxzMfyj6ZZEZbue83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RFVpV46ph16Mc3RYzNY3h
          claim_id: c_PXcwBXP1RPb7zFvnMYHVfM
          source_id: s_1CGAVpe9kZFzw5N6CW98BJ
          stance: supports
          locator: CBDB:504583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504583）
          source: &a1
            id: s_1CGAVpe9kZFzw5N6CW98BJ
            source_type: api_record
            title: 中国历代人物传记资料库：王豹（CBDB 504583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504583&o=json
            external_identifier: CBDB:504583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m5nn1pa8G9ySmN4brzR5Cq
        subject_person_id: p_AMp81RxzMfyj6ZZEZbue83
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豹，明人物。曾任守備。（中国历代人物传记资料库 CBDB 504583）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1G1uscvifpqmJf6JCxhoIA
          claim_id: c_m5nn1pa8G9ySmN4brzR5Cq
          source_id: s_1CGAVpe9kZFzw5N6CW98BJ
          stance: supports
          locator: CBDB:504583
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

# 王豹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豹 | accepted |
| bio.summary | 王豹，明人物。曾任守備。（中国历代人物传记资料库 CBDB 504583） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豹（CBDB 504583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504583&o=json)
