---
schema: wang-person/v1
id: p_EQhsHJqekwoq4p9Ujyhijt
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dfUP8gLV27WS3qhf7KpDzZ
        subject_person_id: p_EQhsHJqekwoq4p9Ujyhijt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oXXsW3HRggWBd4BDMghBS9
          claim_id: c_dfUP8gLV27WS3qhf7KpDzZ
          source_id: s_LcKNFNGPkFwLM4cETuKYPR
          stance: supports
          locator: CBDB:453310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453310）
          source: &a1
            id: s_LcKNFNGPkFwLM4cETuKYPR
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 453310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453310&o=json
            external_identifier: CBDB:453310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KoLM5GKPFQ43RD6uzXW1sD
        subject_person_id: p_EQhsHJqekwoq4p9Ujyhijt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。曾任典史。（中国历代人物传记资料库 CBDB 453310）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t02bCA636E0HMrottbzCUq
          claim_id: c_KoLM5GKPFQ43RD6uzXW1sD
          source_id: s_LcKNFNGPkFwLM4cETuKYPR
          stance: supports
          locator: CBDB:453310
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。曾任典史。（中国历代人物传记资料库 CBDB 453310） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 453310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453310&o=json)
