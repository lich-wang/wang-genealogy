---
schema: wang-person/v1
id: p_tAmLPC5SKzTZ2KKL3t3w4R
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGK4M7jQqEPzd6xRv2TFWt
        subject_person_id: p_tAmLPC5SKzTZ2KKL3t3w4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c8KZ29CEh8gR79XyaPSkBw
          claim_id: c_vGK4M7jQqEPzd6xRv2TFWt
          source_id: s_eb9o5ApDV57BgPez8vArxo
          stance: supports
          locator: CBDB:452372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452372）
          source: &a1
            id: s_eb9o5ApDV57BgPez8vArxo
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 452372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452372&o=json
            external_identifier: CBDB:452372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zd7PfLL6Xg2s2mD39h4XH1
        subject_person_id: p_tAmLPC5SKzTZ2KKL3t3w4R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 452372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qV8_5Mo6tZP9OAOslZwcAJ
          claim_id: c_Zd7PfLL6Xg2s2mD39h4XH1
          source_id: s_eb9o5ApDV57BgPez8vArxo
          stance: supports
          locator: CBDB:452372
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 452372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 452372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452372&o=json)
