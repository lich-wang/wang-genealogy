---
schema: wang-person/v1
id: p_fB9PB1PKA1sKYUHbVChyZN
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xWyrwvbRgfeMQA5Xucwn22
        subject_person_id: p_fB9PB1PKA1sKYUHbVChyZN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kKTVPNNwhxphiJJ5p8REzr
          claim_id: c_xWyrwvbRgfeMQA5Xucwn22
          source_id: s_pRMdgTJTNw4ovkxji4eA2m
          stance: supports
          locator: CBDB:496514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496514）
          source: &a1
            id: s_pRMdgTJTNw4ovkxji4eA2m
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 496514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496514&o=json
            external_identifier: CBDB:496514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mEehpuAPu7tTAqW7719v8f
        subject_person_id: p_fB9PB1PKA1sKYUHbVChyZN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。曾任巡檢。（中国历代人物传记资料库 CBDB 496514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q0t7f3lrqNMo2h9BKRB5Ht
          claim_id: c_mEehpuAPu7tTAqW7719v8f
          source_id: s_pRMdgTJTNw4ovkxji4eA2m
          stance: supports
          locator: CBDB:496514
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。曾任巡檢。（中国历代人物传记资料库 CBDB 496514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 496514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496514&o=json)
