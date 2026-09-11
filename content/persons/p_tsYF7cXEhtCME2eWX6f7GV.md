---
schema: wang-person/v1
id: p_tsYF7cXEhtCME2eWX6f7GV
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e18Ti3Ht7hEQ2o3FL2Mgfy
        subject_person_id: p_tsYF7cXEhtCME2eWX6f7GV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWKrg3g6yf8UpVUgnUDX3P
          claim_id: c_e18Ti3Ht7hEQ2o3FL2Mgfy
          source_id: s_pnLNQW4M8m2iGLDbEXWdVQ
          stance: supports
          locator: CBDB:460455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460455）
          source: &a1
            id: s_pnLNQW4M8m2iGLDbEXWdVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 460455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460455&o=json
            external_identifier: CBDB:460455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xohL31Z9kyPPZrKBAGvKoo
        subject_person_id: p_tsYF7cXEhtCME2eWX6f7GV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，清人物。曾任遊擊。（中国历代人物传记资料库 CBDB 460455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DwE5S5F7fc9mQQwrQ2NREq
          claim_id: c_xohL31Z9kyPPZrKBAGvKoo
          source_id: s_pnLNQW4M8m2iGLDbEXWdVQ
          stance: supports
          locator: CBDB:460455
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，清人物。曾任遊擊。（中国历代人物传记资料库 CBDB 460455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 460455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460455&o=json)
