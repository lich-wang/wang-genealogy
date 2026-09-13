---
schema: wang-person/v1
id: p_KANjbApE6c6gDifQv1mhA4
status: active
merged_into: null
display_name: 王貫成
cbdb_id: 415432
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nmeoLixACK2a2VeDqvmiPu
        subject_person_id: p_KANjbApE6c6gDifQv1mhA4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫成，清人物。曾任把總。（中国历代人物传记资料库 CBDB 415432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lg-OQlCFk51DG0vcfZt5sa
          claim_id: c_nmeoLixACK2a2VeDqvmiPu
          source_id: s_iSpYeZZTq8nDxjkYm2AELF
          stance: supports
          locator: CBDB:415432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iSpYeZZTq8nDxjkYm2AELF
            source_type: api_record
            title: 中国历代人物传记资料库：王貫成（CBDB 415432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415432&o=json
            external_identifier: CBDB:415432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:02.698Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5xG8YUGEc4fMQmzAJbey4
        subject_person_id: p_KANjbApE6c6gDifQv1mhA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cjTkYm34m3QECWR77WrLJb
          claim_id: c_i5xG8YUGEc4fMQmzAJbey4
          source_id: s_iSpYeZZTq8nDxjkYm2AELF
          stance: supports
          locator: CBDB:415432
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6301-6400）｜历史性依据：CBDB 朝代 = 清
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

# 王貫成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貫成，清人物。曾任把總。（中国历代人物传记资料库 CBDB 415432） | accepted |
| name.primary | 王貫成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫成（CBDB 415432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415432&o=json)
