---
schema: wang-person/v1
id: p_cfVxEfvD7Gpk4ZbUzPBQAb
status: active
merged_into: null
display_name: 王詩載
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_psAykjNSBwpw2eEEBaBL4U
        subject_person_id: p_cfVxEfvD7Gpk4ZbUzPBQAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQYL5ELAvrb3FgQa2FtLc7
          claim_id: c_psAykjNSBwpw2eEEBaBL4U
          source_id: s_Pv7EX6JstAzBeuSRn969zc
          stance: supports
          locator: CBDB:640274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640274）
          source: &a1
            id: s_Pv7EX6JstAzBeuSRn969zc
            source_type: api_record
            title: 中国历代人物传记资料库：王詩載（CBDB 640274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640274&o=json
            external_identifier: CBDB:640274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Aod2VbamcUPjWFCuSrv35g
        subject_person_id: p_cfVxEfvD7Gpk4ZbUzPBQAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHkfEfNUj1bNv6suL2PKFQ
          claim_id: c_Aod2VbamcUPjWFCuSrv35g
          source_id: s_Pv7EX6JstAzBeuSRn969zc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王詩載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詩載 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詩載（CBDB 640274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640274&o=json)
