---
schema: wang-person/v1
id: p_pCiPU87ML8y6kMVY1qK1Am
status: active
merged_into: null
display_name: 王康佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5gHqurucgpD91EDjwXQSEq
        subject_person_id: p_pCiPU87ML8y6kMVY1qK1Am
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hoKQHYe6FzEkW5MaC817h5
          claim_id: c_5gHqurucgpD91EDjwXQSEq
          source_id: s_HGnFqykrVFExy8EnxLsMav
          stance: supports
          locator: CBDB:341577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341577）
          source: &a1
            id: s_HGnFqykrVFExy8EnxLsMav
            source_type: api_record
            title: 中国历代人物传记资料库：王康佐（CBDB 341577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341577&o=json
            external_identifier: CBDB:341577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JA3GzM41aiRPFMDbrkdVQm
        subject_person_id: p_pCiPU87ML8y6kMVY1qK1Am
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康佐，清人物。明清進士進士，籍贯句容，入仕進士，曾任庶吉士、同考官。（中国历代人物传记资料库 CBDB 341577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WsjG-699dXVMBMOoyV_ndp
          claim_id: c_JA3GzM41aiRPFMDbrkdVQm
          source_id: s_HGnFqykrVFExy8EnxLsMav
          stance: supports
          locator: CBDB:341577
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

# 王康佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康佐 | accepted |
| bio.summary | 王康佐，清人物。明清進士進士，籍贯句容，入仕進士，曾任庶吉士、同考官。（中国历代人物传记资料库 CBDB 341577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康佐（CBDB 341577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341577&o=json)
