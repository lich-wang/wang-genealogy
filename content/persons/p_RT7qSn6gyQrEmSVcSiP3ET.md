---
schema: wang-person/v1
id: p_RT7qSn6gyQrEmSVcSiP3ET
status: active
merged_into: null
display_name: 王振邦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NNFoDDcHDCmNdf548kKRT3
        subject_person_id: p_RT7qSn6gyQrEmSVcSiP3ET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qmg5W9VmUmSPgA4RyWHkd4
          claim_id: c_NNFoDDcHDCmNdf548kKRT3
          source_id: s_eicKdhrkJuP44TFSuy2Q5v
          stance: supports
          locator: CBDB:638133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638133）
          source: &a1
            id: s_eicKdhrkJuP44TFSuy2Q5v
            source_type: api_record
            title: 中国历代人物传记资料库：王振邦（CBDB 638133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638133&o=json
            external_identifier: CBDB:638133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a48LDSLAY95VFv9Go4qimx
        subject_person_id: p_RT7qSn6gyQrEmSVcSiP3ET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振邦，清人物。籍贯江西省，入仕監生，曾任都司、中軍守備、左營遊擊。（中国历代人物传记资料库 CBDB 638133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5_ta6t93tOBkmjY5Mfjst
          claim_id: c_a48LDSLAY95VFv9Go4qimx
          source_id: s_eicKdhrkJuP44TFSuy2Q5v
          stance: supports
          locator: CBDB:638133
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

# 王振邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振邦 | accepted |
| bio.summary | 王振邦，清人物。籍贯江西省，入仕監生，曾任都司、中軍守備、左營遊擊。（中国历代人物传记资料库 CBDB 638133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振邦（CBDB 638133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638133&o=json)
