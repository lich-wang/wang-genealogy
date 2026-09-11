---
schema: wang-person/v1
id: p_LnLsmN1sFLkkVxSkrJHe5Y
status: active
merged_into: null
display_name: 王維清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nnHu2RY7PkZpq4UY14AwPP
        subject_person_id: p_LnLsmN1sFLkkVxSkrJHe5Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_syed6Y8k884TQ552CSHwMa
          claim_id: c_nnHu2RY7PkZpq4UY14AwPP
          source_id: s_CiA32vdP9UHJvqfNX9vRwh
          stance: supports
          locator: CBDB:639828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639828）
          source: &a1
            id: s_CiA32vdP9UHJvqfNX9vRwh
            source_type: api_record
            title: 中国历代人物传记资料库：王維清（CBDB 639828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639828&o=json
            external_identifier: CBDB:639828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DWWt9hUN6ZaXRxteWTvw2Q
        subject_person_id: p_LnLsmN1sFLkkVxSkrJHe5Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維清，清人物。籍贯寧夏，曾任典史。（中国历代人物传记资料库 CBDB 639828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__HIApnEo9ThQbivDVXRTbW
          claim_id: c_DWWt9hUN6ZaXRxteWTvw2Q
          source_id: s_CiA32vdP9UHJvqfNX9vRwh
          stance: supports
          locator: CBDB:639828
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

# 王維清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維清 | accepted |
| bio.summary | 王維清，清人物。籍贯寧夏，曾任典史。（中国历代人物传记资料库 CBDB 639828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維清（CBDB 639828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639828&o=json)
