---
schema: wang-person/v1
id: p_smYFtnb5gV9X7UQW1P3nFi
status: active
merged_into: null
display_name: 王茂枝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gb32ZuRjTCpXDYwMG6h3Gr
        subject_person_id: p_smYFtnb5gV9X7UQW1P3nFi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂枝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KpCVaBTHqmmZ9tgmrSWKiD
          claim_id: c_Gb32ZuRjTCpXDYwMG6h3Gr
          source_id: s_cZkh3qxjNR66fSKf2ExjaG
          stance: supports
          locator: CBDB:571500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571500）
          source: &a1
            id: s_cZkh3qxjNR66fSKf2ExjaG
            source_type: api_record
            title: 中国历代人物传记资料库：王茂枝（CBDB 571500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571500&o=json
            external_identifier: CBDB:571500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6zMSLpAprtnDbCaziPirJU
        subject_person_id: p_smYFtnb5gV9X7UQW1P3nFi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂枝，清人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 571500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_51WTglF0uC3ND68CuyfbpQ
          claim_id: c_6zMSLpAprtnDbCaziPirJU
          source_id: s_cZkh3qxjNR66fSKf2ExjaG
          stance: supports
          locator: CBDB:571500
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

# 王茂枝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂枝 | accepted |
| bio.summary | 王茂枝，清人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 571500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂枝（CBDB 571500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571500&o=json)
