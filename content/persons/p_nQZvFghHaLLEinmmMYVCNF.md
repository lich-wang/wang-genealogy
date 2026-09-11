---
schema: wang-person/v1
id: p_nQZvFghHaLLEinmmMYVCNF
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1eQnFCWSjBMmAi7mAJ6VM
        subject_person_id: p_nQZvFghHaLLEinmmMYVCNF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8pFeQxcsiz3wxa2vmupr9Q
          claim_id: c_D1eQnFCWSjBMmAi7mAJ6VM
          source_id: s_E5bW7XTN2S1U5bQrQGkJsB
          stance: supports
          locator: CBDB:451848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451848）
          source: &a1
            id: s_E5bW7XTN2S1U5bQrQGkJsB
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 451848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451848&o=json
            external_identifier: CBDB:451848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t321w7WWewML9R5bsidH5p
        subject_person_id: p_nQZvFghHaLLEinmmMYVCNF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。曾任百戶、縣丞。（中国历代人物传记资料库 CBDB 451848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tpJek5Wkh9mNT6vjdrhHO
          claim_id: c_t321w7WWewML9R5bsidH5p
          source_id: s_E5bW7XTN2S1U5bQrQGkJsB
          stance: supports
          locator: CBDB:451848
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。曾任百戶、縣丞。（中国历代人物传记资料库 CBDB 451848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 451848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451848&o=json)
