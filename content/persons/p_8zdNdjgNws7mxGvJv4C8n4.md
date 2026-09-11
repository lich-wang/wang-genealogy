---
schema: wang-person/v1
id: p_8zdNdjgNws7mxGvJv4C8n4
status: active
merged_into: null
display_name: 王輔卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Fyixds5ST7z42ZzNKELHJ
        subject_person_id: p_8zdNdjgNws7mxGvJv4C8n4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uYEFc6Qzhx2kCs6261GPLw
          claim_id: c_5Fyixds5ST7z42ZzNKELHJ
          source_id: s_nxQUsKS21nZzznVXRQZekE
          stance: supports
          locator: CBDB:495235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495235）
          source: &a1
            id: s_nxQUsKS21nZzznVXRQZekE
            source_type: api_record
            title: 中国历代人物传记资料库：王輔卿（CBDB 495235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495235&o=json
            external_identifier: CBDB:495235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SdiyXmL2v4VyH44VoCsVk5
        subject_person_id: p_8zdNdjgNws7mxGvJv4C8n4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔卿，清人物。入仕世襲(替)，曾任守備。（中国历代人物传记资料库 CBDB 495235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xH2WCrylVVR0j_xrheS_U2
          claim_id: c_SdiyXmL2v4VyH44VoCsVk5
          source_id: s_nxQUsKS21nZzznVXRQZekE
          stance: supports
          locator: CBDB:495235
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

# 王輔卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔卿 | accepted |
| bio.summary | 王輔卿，清人物。入仕世襲(替)，曾任守備。（中国历代人物传记资料库 CBDB 495235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔卿（CBDB 495235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495235&o=json)
