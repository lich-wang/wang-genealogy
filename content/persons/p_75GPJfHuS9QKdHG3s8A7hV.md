---
schema: wang-person/v1
id: p_75GPJfHuS9QKdHG3s8A7hV
status: active
merged_into: null
display_name: 王承業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQkU7nuc42oE7B7RgW4dEH
        subject_person_id: p_75GPJfHuS9QKdHG3s8A7hV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JpHUKS6jLAFQ9DiD8Q31D9
          claim_id: c_FQkU7nuc42oE7B7RgW4dEH
          source_id: s_n4CeorXTZp6FPbf4jyZPhP
          stance: supports
          locator: CBDB:152469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152469）
          source: &a1
            id: s_n4CeorXTZp6FPbf4jyZPhP
            source_type: api_record
            title: 中国历代人物传记资料库：王承業（CBDB 152469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152469&o=json
            external_identifier: CBDB:152469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jnZAa4WHgrGPtZU9v9JkCt
        subject_person_id: p_75GPJfHuS9QKdHG3s8A7hV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承業，唐人物。籍贯滄州。（中国历代人物传记资料库 CBDB 152469）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ecRoIgMKFx9JJeZ-cN2Ex
          claim_id: c_jnZAa4WHgrGPtZU9v9JkCt
          source_id: s_n4CeorXTZp6FPbf4jyZPhP
          stance: supports
          locator: CBDB:152469
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

# 王承業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承業 | accepted |
| bio.summary | 王承業，唐人物。籍贯滄州。（中国历代人物传记资料库 CBDB 152469） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承業（CBDB 152469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152469&o=json)
