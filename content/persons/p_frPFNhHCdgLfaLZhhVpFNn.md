---
schema: wang-person/v1
id: p_frPFNhHCdgLfaLZhhVpFNn
status: active
merged_into: null
display_name: 王儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P97mvREyttzANdZGwWapyx
        subject_person_id: p_frPFNhHCdgLfaLZhhVpFNn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Euar67tSrRGPi1gUfmAL6m
          claim_id: c_P97mvREyttzANdZGwWapyx
          source_id: s_FvB8u3ZByiLVWcA2vDginW
          stance: supports
          locator: CBDB:100932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100932）
          source: &a1
            id: s_FvB8u3ZByiLVWcA2vDginW
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 100932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100932&o=json
            external_identifier: CBDB:100932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2GNKJQkJD4hWwZLTPXfNJ
        subject_person_id: p_frPFNhHCdgLfaLZhhVpFNn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀，元人物。籍贯鄧州，曾任御史中丞。（中国历代人物传记资料库 CBDB 100932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-Kqk4yRbSwI-eYIM1EdQ6X
          claim_id: c_w2GNKJQkJD4hWwZLTPXfNJ
          source_id: s_FvB8u3ZByiLVWcA2vDginW
          stance: supports
          locator: CBDB:100932
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

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| bio.summary | 王儀，元人物。籍贯鄧州，曾任御史中丞。（中国历代人物传记资料库 CBDB 100932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 100932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100932&o=json)
