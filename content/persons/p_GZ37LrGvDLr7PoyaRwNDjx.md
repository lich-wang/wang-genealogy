---
schema: wang-person/v1
id: p_GZ37LrGvDLr7PoyaRwNDjx
status: active
merged_into: null
display_name: 王筠仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfaSvKAwpkMyrEZJYvELdv
        subject_person_id: p_GZ37LrGvDLr7PoyaRwNDjx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_72TKi42KtdkPhpuS914L6j
          claim_id: c_BfaSvKAwpkMyrEZJYvELdv
          source_id: s_2hcEKxGoyDjJiw5nepbfLr
          stance: supports
          locator: CBDB:568771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568771）
          source: &a1
            id: s_2hcEKxGoyDjJiw5nepbfLr
            source_type: api_record
            title: 中国历代人物传记资料库：王筠仙（CBDB 568771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568771&o=json
            external_identifier: CBDB:568771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L1bkBPpW6VJGR9Xhys9ZHU
        subject_person_id: p_GZ37LrGvDLr7PoyaRwNDjx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠仙，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568771）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xAaKBOF9wRly0vCyp9Mk7v
          claim_id: c_L1bkBPpW6VJGR9Xhys9ZHU
          source_id: s_2hcEKxGoyDjJiw5nepbfLr
          stance: supports
          locator: CBDB:568771
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

# 王筠仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠仙 | accepted |
| bio.summary | 王筠仙，清人物。籍贯上海。（中国历代人物传记资料库 CBDB 568771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筠仙（CBDB 568771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568771&o=json)
