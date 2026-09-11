---
schema: wang-person/v1
id: p_JdCEFRx5YL1h1BY2yE8JJT
status: active
merged_into: null
display_name: 王嵩高
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPZeDWMdkJx3Sz2HGJgT6T
        subject_person_id: p_JdCEFRx5YL1h1BY2yE8JJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DTM4NJeXeZ3iiU7DkMDdeA
          claim_id: c_wPZeDWMdkJx3Sz2HGJgT6T
          source_id: s_oqNL6krTfDU8a6v6cGS1PV
          stance: supports
          locator: CBDB:500457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500457）
          source: &a1
            id: s_oqNL6krTfDU8a6v6cGS1PV
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩高（CBDB 500457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500457&o=json
            external_identifier: CBDB:500457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tgNEKKgvVBZGWryDtBYhWL
        subject_person_id: p_JdCEFRx5YL1h1BY2yE8JJT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩高，清人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 500457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0d13BtaGpKA1qeBG4qEpUW
          claim_id: c_tgNEKKgvVBZGWryDtBYhWL
          source_id: s_oqNL6krTfDU8a6v6cGS1PV
          stance: supports
          locator: CBDB:500457
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

# 王嵩高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩高 | accepted |
| bio.summary | 王嵩高，清人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 500457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩高（CBDB 500457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500457&o=json)
