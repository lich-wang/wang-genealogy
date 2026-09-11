---
schema: wang-person/v1
id: p_16MmSS3utaAD7uCEKL7nkU
status: active
merged_into: null
display_name: 王來聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sNbJ15FCgacgpzL7XHn6qK
        subject_person_id: p_16MmSS3utaAD7uCEKL7nkU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDAcitK9PZKcVDdpJj17Pz
          claim_id: c_sNbJ15FCgacgpzL7XHn6qK
          source_id: s_gVFKp4X1PmqaFGppQsHwLM
          stance: supports
          locator: CBDB:335619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335619）
          source: &a1
            id: s_gVFKp4X1PmqaFGppQsHwLM
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 335619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335619&o=json
            external_identifier: CBDB:335619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J6QuGF6sWSNqAfuQQ1kH6Q
        subject_person_id: p_16MmSS3utaAD7uCEKL7nkU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KmZ65BgLPkq2j2fa40R848
          claim_id: c_J6QuGF6sWSNqAfuQQ1kH6Q
          source_id: s_gVFKp4X1PmqaFGppQsHwLM
          stance: supports
          locator: CBDB:335619
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

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | 王來聘，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 335619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335619&o=json)
