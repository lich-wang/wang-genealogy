---
schema: wang-person/v1
id: p_AZrcW6nYHmMDptVA6h8U6L
status: active
merged_into: null
display_name: 王璿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fyDbzeW9zKC6T95se4QUUw
        subject_person_id: p_AZrcW6nYHmMDptVA6h8U6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V579FQyXDu121CoCjwEVUB
          claim_id: c_fyDbzeW9zKC6T95se4QUUw
          source_id: s_DTNgsVMGggPctxMDdbDHfo
          stance: supports
          locator: CBDB:376365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（376365）
          source: &a1
            id: s_DTNgsVMGggPctxMDdbDHfo
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 376365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376365&o=json
            external_identifier: CBDB:376365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCFYjBtvRxqBB4rDa5r7ym
        subject_person_id: p_AZrcW6nYHmMDptVA6h8U6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，唐人物。曾任大理卿。（中国历代人物传记资料库 CBDB 376365）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WwxNzV42PAVAHnH5gzlPSf
          claim_id: c_sCFYjBtvRxqBB4rDa5r7ym
          source_id: s_DTNgsVMGggPctxMDdbDHfo
          stance: supports
          locator: CBDB:376365
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

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，唐人物。曾任大理卿。（中国历代人物传记资料库 CBDB 376365） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 376365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376365&o=json)
