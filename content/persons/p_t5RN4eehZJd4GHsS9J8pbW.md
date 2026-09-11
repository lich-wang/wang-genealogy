---
schema: wang-person/v1
id: p_t5RN4eehZJd4GHsS9J8pbW
status: active
merged_into: null
display_name: 王勔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5RBZQ2LbemyZXrPnx9RC9D
        subject_person_id: p_t5RN4eehZJd4GHsS9J8pbW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJD7sAGdHCVkvm1ApZzV1f
          claim_id: c_5RBZQ2LbemyZXrPnx9RC9D
          source_id: s_21EiU8xk7BCWyJ4eGJAP1S
          stance: supports
          locator: CBDB:377931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377931）
          source: &a1
            id: s_21EiU8xk7BCWyJ4eGJAP1S
            source_type: api_record
            title: 中国历代人物传记资料库：王勔（CBDB 377931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377931&o=json
            external_identifier: CBDB:377931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FiFQDckjP67dtdSHCi8i76
        subject_person_id: p_t5RN4eehZJd4GHsS9J8pbW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DO60EWKHatvB25eVIyyeTU
          claim_id: c_FiFQDckjP67dtdSHCi8i76
          source_id: s_21EiU8xk7BCWyJ4eGJAP1S
          stance: supports
          locator: CBDB:377931
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

# 王勔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勔 | accepted |
| bio.summary | 王勔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勔（CBDB 377931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377931&o=json)
