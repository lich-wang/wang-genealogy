---
schema: wang-person/v1
id: p_JSVGbfBFCJQTKQHFB5zY9T
status: active
merged_into: null
display_name: 王運成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sN7EJYegA8u1xrcUTXmafA
        subject_person_id: p_JSVGbfBFCJQTKQHFB5zY9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T4ui7DpEB3vbcNFDCCmSLr
          claim_id: c_sN7EJYegA8u1xrcUTXmafA
          source_id: s_XqPTnWR8HtHCLuNNgYj1JE
          stance: supports
          locator: CBDB:640440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640440）
          source: &a1
            id: s_XqPTnWR8HtHCLuNNgYj1JE
            source_type: api_record
            title: 中国历代人物传记资料库：王運成（CBDB 640440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640440&o=json
            external_identifier: CBDB:640440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JxQwAwDD63akKZaDrGeRQg
        subject_person_id: p_JSVGbfBFCJQTKQHFB5zY9T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王運成，清人物。籍贯延平府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640440）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K6GmbyfW_aLg9sTeHMCcPK
          claim_id: c_JxQwAwDD63akKZaDrGeRQg
          source_id: s_XqPTnWR8HtHCLuNNgYj1JE
          stance: supports
          locator: CBDB:640440
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

# 王運成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運成 | accepted |
| bio.summary | 王運成，清人物。籍贯延平府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運成（CBDB 640440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640440&o=json)
