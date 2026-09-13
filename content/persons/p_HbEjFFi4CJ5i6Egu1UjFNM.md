---
schema: wang-person/v1
id: p_HbEjFFi4CJ5i6Egu1UjFNM
status: active
merged_into: null
display_name: 王進善
cbdb_id: 415487
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBM99iGGTFm4YU3KL8D2XF
        subject_person_id: p_HbEjFFi4CJ5i6Egu1UjFNM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進善，明人物。曾任同知。（中国历代人物传记资料库 CBDB 415487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-u_bqRcamrfI0BnMTyvasF
          claim_id: c_iBM99iGGTFm4YU3KL8D2XF
          source_id: s_BvVpoPTabWXHfo1o89b44M
          stance: supports
          locator: CBDB:415487
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BvVpoPTabWXHfo1o89b44M
            source_type: api_record
            title: 中国历代人物传记资料库：王進善（CBDB 415487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415487&o=json
            external_identifier: CBDB:415487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:02.698Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HvbYJumJ97Jj3fNWWLNBxe
        subject_person_id: p_HbEjFFi4CJ5i6Egu1UjFNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TpT5vBC1Q1uWpEDK1FfRQg
          claim_id: c_HvbYJumJ97Jj3fNWWLNBxe
          source_id: s_BvVpoPTabWXHfo1o89b44M
          stance: supports
          locator: CBDB:415487
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6301-6400）｜历史性依据：CBDB 朝代 = 明
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

# 王進善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王進善，明人物。曾任同知。（中国历代人物传记资料库 CBDB 415487） | accepted |
| name.primary | 王進善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進善（CBDB 415487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415487&o=json)
