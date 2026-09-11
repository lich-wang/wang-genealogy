---
schema: wang-person/v1
id: p_i6P32VrUuyfwvjGpJJN3tw
status: active
merged_into: null
display_name: 王廷綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RGNWR553pTLFBpqipuvpBS
        subject_person_id: p_i6P32VrUuyfwvjGpJJN3tw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tXWSCeRFoJzLfLRJUFRddx
          claim_id: c_RGNWR553pTLFBpqipuvpBS
          source_id: s_hrYijd3X3NMCTsmrACzHX8
          stance: supports
          locator: CBDB:637547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637547）
          source: &a1
            id: s_hrYijd3X3NMCTsmrACzHX8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷綬（CBDB 637547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637547&o=json
            external_identifier: CBDB:637547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sC4Vo581m3SGD5GB8qAWGP
        subject_person_id: p_i6P32VrUuyfwvjGpJJN3tw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷綬，清人物。籍贯東鄉，入仕監生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 637547）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2cfCzDF-045wyCRSlvz_Bg
          claim_id: c_sC4Vo581m3SGD5GB8qAWGP
          source_id: s_hrYijd3X3NMCTsmrACzHX8
          stance: supports
          locator: CBDB:637547
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

# 王廷綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷綬 | accepted |
| bio.summary | 王廷綬，清人物。籍贯東鄉，入仕監生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 637547） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷綬（CBDB 637547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637547&o=json)
