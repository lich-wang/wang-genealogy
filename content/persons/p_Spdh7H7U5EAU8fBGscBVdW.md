---
schema: wang-person/v1
id: p_Spdh7H7U5EAU8fBGscBVdW
status: active
merged_into: null
display_name: 王予符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3oTKqHeZWmq4EAdzA25TNp
        subject_person_id: p_Spdh7H7U5EAU8fBGscBVdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FCW4sW8sTfZx7RZQKN24Ka
          claim_id: c_3oTKqHeZWmq4EAdzA25TNp
          source_id: s_y3tuzD7eoVXmoBbZAFrqbK
          stance: supports
          locator: CBDB:71446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71446）
          source: &a1
            id: s_y3tuzD7eoVXmoBbZAFrqbK
            source_type: api_record
            title: 中国历代人物传记资料库：王予符（CBDB 71446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71446&o=json
            external_identifier: CBDB:71446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QVMuABzLtj8WCeudvKdF5y
        subject_person_id: p_Spdh7H7U5EAU8fBGscBVdW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35gAnBfhtD2pDG1V1pJBBK
          claim_id: c_QVMuABzLtj8WCeudvKdF5y
          source_id: s_y3tuzD7eoVXmoBbZAFrqbK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cPkSG9m5uPfL9b2469YcBV
        subject_person_id: p_Spdh7H7U5EAU8fBGscBVdW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予符（生于1835年），清人物。籍贯益都。（中国历代人物传记资料库 CBDB 71446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-wvjqgGywP_e0ZGkPVFEJH
          claim_id: c_cPkSG9m5uPfL9b2469YcBV
          source_id: s_y3tuzD7eoVXmoBbZAFrqbK
          stance: supports
          locator: CBDB:71446
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

# 王予符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王予符 | accepted |
| birth.date | 1835年 | accepted |
| bio.summary | 王予符（生于1835年），清人物。籍贯益都。（中国历代人物传记资料库 CBDB 71446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王予符（CBDB 71446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71446&o=json)
