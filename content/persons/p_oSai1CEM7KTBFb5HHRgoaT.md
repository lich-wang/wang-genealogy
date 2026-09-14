---
schema: wang-person/v1
id: p_oSai1CEM7KTBFb5HHRgoaT
status: active
merged_into: null
display_name: 王詠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jKgmFtLnBmCbnPdJYMcTaX
        subject_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2W6PCQPsHxUNhWwPzpLMX
          claim_id: c_jKgmFtLnBmCbnPdJYMcTaX
          source_id: s_kVAkHBiS7rED83NcGoVPWM
          stance: supports
          locator: CBDB:332113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332113）
          source: &a1
            id: s_kVAkHBiS7rED83NcGoVPWM
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 332113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json
            external_identifier: CBDB:332113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W98jDeE4NprhPQuE33iQhz
        subject_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332113）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FqtEaasiVqCsYPq6Cz8eXQ
          claim_id: c_W98jDeE4NprhPQuE33iQhz
          source_id: s_kVAkHBiS7rED83NcGoVPWM
          stance: supports
          locator: CBDB:332113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZKEa57v0BGxU9Wgmk-RqJg
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_48T6p4tHAiFXdC-JiYHPUK
          claim_id: c_ZKEa57v0BGxU9Wgmk-RqJg
          source_id: s_wbz9KIo9HwNwMIvKhnYE2X
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王詠 与 王謠 为同胞（CBDB 记「弟」），王謠 之父／母即 王詠 之父／母。
          source:
            id: s_wbz9KIo9HwNwMIvKhnYE2X
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 332113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json
            external_identifier: CBDB:332113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qqsY6t9Q8faV4F4CdLeZ5T
        status: active
        display_name: 王本堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TfFuUFrJkD1k7O_w94IaaU
        subject_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CPLB6axLdEnfxPl1FgSIJH
          claim_id: c_TfFuUFrJkD1k7O_w94IaaU
          source_id: s_wbz9KIo9HwNwMIvKhnYE2X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wbz9KIo9HwNwMIvKhnYE2X
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 332113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json
            external_identifier: CBDB:332113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
---

# 王詠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠 | accepted |
| bio.summary | 王詠，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332113） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| other | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詠（CBDB 332113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json)
