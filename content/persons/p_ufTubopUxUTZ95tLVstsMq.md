---
schema: wang-person/v1
id: p_ufTubopUxUTZ95tLVstsMq
status: active
merged_into: null
display_name: 王諶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QExJut4v43R6yDBwT51mEn
        subject_person_id: p_ufTubopUxUTZ95tLVstsMq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNMJyFVtEjdxx1m2Vkkk15
          claim_id: c_QExJut4v43R6yDBwT51mEn
          source_id: s_Ze1WFHCe7wM56mSBZntwKY
          stance: supports
          locator: CBDB:687224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687224）
          source: &a1
            id: s_Ze1WFHCe7wM56mSBZntwKY
            source_type: api_record
            title: 中国历代人物传记资料库：王諶（CBDB 687224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687224&o=json
            external_identifier: CBDB:687224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sneFzQx1tngdN93UZ52QeV
        subject_person_id: p_ufTubopUxUTZ95tLVstsMq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶，宋人物。入仕詞學兼茂科。（中国历代人物传记资料库 CBDB 687224）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GwrcqmJkIVHTN09qhYaIY4
          claim_id: c_sneFzQx1tngdN93UZ52QeV
          source_id: s_Ze1WFHCe7wM56mSBZntwKY
          stance: supports
          locator: CBDB:687224
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

# 王諶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諶 | accepted |
| bio.summary | 王諶，宋人物。入仕詞學兼茂科。（中国历代人物传记资料库 CBDB 687224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諶（CBDB 687224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687224&o=json)
