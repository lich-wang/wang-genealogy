---
schema: wang-person/v1
id: p_LwZQrRPCBwfZdZNcbLrMam
status: active
merged_into: null
display_name: 王伸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akNCHCQ2KtEr9ChvKx8WYi
        subject_person_id: p_LwZQrRPCBwfZdZNcbLrMam
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e1ZAnzoh6FcjxTHA9PPND8
          claim_id: c_akNCHCQ2KtEr9ChvKx8WYi
          source_id: s_uE1CiJWu46kM1EAQK65vT9
          stance: supports
          locator: CBDB:245963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245963）
          source: &a1
            id: s_uE1CiJWu46kM1EAQK65vT9
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 245963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245963&o=json
            external_identifier: CBDB:245963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86smTWDVNGkF2yLKvrQMPA
        subject_person_id: p_LwZQrRPCBwfZdZNcbLrMam
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 245963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H5PS6mdixnwmpdjXYpLDdC
          claim_id: c_86smTWDVNGkF2yLKvrQMPA
          source_id: s_uE1CiJWu46kM1EAQK65vT9
          stance: supports
          locator: CBDB:245963
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

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸 | accepted |
| bio.summary | 王伸，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 245963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 245963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245963&o=json)
