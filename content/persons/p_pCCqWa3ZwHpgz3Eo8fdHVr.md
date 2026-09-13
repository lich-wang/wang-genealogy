---
schema: wang-person/v1
id: p_pCCqWa3ZwHpgz3Eo8fdHVr
status: active
merged_into: null
display_name: 王應圖
cbdb_id: 97900
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eU9uAFiHWaie8xUfvfEuD9
        subject_person_id: p_pCCqWa3ZwHpgz3Eo8fdHVr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應圖，宋人物。曾任太子中舍人。（中国历代人物传记资料库 CBDB 97900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fZwwX5ZJSVkwWKHD0ig7dq
          claim_id: c_eU9uAFiHWaie8xUfvfEuD9
          source_id: s_nb2QAX1fyzc7Qs8A1RQaD6
          stance: supports
          locator: CBDB:97900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nb2QAX1fyzc7Qs8A1RQaD6
            source_type: api_record
            title: 中国历代人物传记资料库：王應圖（CBDB 97900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97900&o=json
            external_identifier: CBDB:97900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SB2e7t38W688VPcG5SRvkf
        subject_person_id: p_pCCqWa3ZwHpgz3Eo8fdHVr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x5rtUNWLzbj7DRcftiLrK7
          claim_id: c_SB2e7t38W688VPcG5SRvkf
          source_id: s_nb2QAX1fyzc7Qs8A1RQaD6
          stance: supports
          locator: CBDB:97900
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 宋
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

# 王應圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應圖，宋人物。曾任太子中舍人。（中国历代人物传记资料库 CBDB 97900） | accepted |
| name.primary | 王應圖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應圖（CBDB 97900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97900&o=json)
