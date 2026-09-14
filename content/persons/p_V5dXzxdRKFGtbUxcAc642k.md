---
schema: wang-person/v1
id: p_V5dXzxdRKFGtbUxcAc642k
status: active
merged_into: null
display_name: 王貴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tXPhQQXaX2YMoV3mbj7msN
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7JoeP9Wxr89BoxXMD5K7yr
          claim_id: c_tXPhQQXaX2YMoV3mbj7msN
          source_id: s_dJnE2DwLJWWvfoPpfN7Akq
          stance: supports
          locator: CBDB:247169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247169）
          source: &a1
            id: s_dJnE2DwLJWWvfoPpfN7Akq
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 247169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247169&o=json
            external_identifier: CBDB:247169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NEp6WRxZeKRuvWM8wsAhiP
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。成化八年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 247169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QOP66gGgmSr3nRCX0IKmwa
          claim_id: c_NEp6WRxZeKRuvWM8wsAhiP
          source_id: s_dJnE2DwLJWWvfoPpfN7Akq
          stance: supports
          locator: CBDB:247169
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_r77EnmtYLfjQ4Q8JMUUGLn
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCzZR_6hR0HcqP71rW3W3m
          claim_id: c_r77EnmtYLfjQ4Q8JMUUGLn
          source_id: s_dJnE2DwLJWWvfoPpfN7Akq
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eonrrfCkN2hA5o48Aafwfz
        status: active
        display_name: 王勉
        merged_into_person_id: null
    - claim:
        id: c_eUG8QPI4gnMzL8TayGT73z
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7J2EXvoBG7ypFJeeG99Bmf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HusrbGatvLKSt-qdrzo3qZ
          claim_id: c_eUG8QPI4gnMzL8TayGT73z
          source_id: s_trTy6LRxrlnt2AqDkTwV0P
          stance: supports
          locator: CBDB：兄弟 王勉（199604）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王勉 为同胞（CBDB 记「兄」），王勉 之父／母即 王章 之父／母。
          source:
            id: s_trTy6LRxrlnt2AqDkTwV0P
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 247174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247174&o=json
            external_identifier: CBDB:247174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7J2EXvoBG7ypFJeeG99Bmf
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_J4F8yI21tEqbm4fyJDLbHH
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e392LnB7A4b6Nr7JWhMefS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vF1ZQOencVoEHPjuEwaUHv
          claim_id: c_J4F8yI21tEqbm4fyJDLbHH
          source_id: s_PHJ5xeXf6pI0oSBRQsHsx1
          stance: supports
          locator: CBDB：兄弟 王勉（199604）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王勉 为同胞（CBDB 记「兄」），王勉 之父／母即 王憲 之父／母。
          source:
            id: s_PHJ5xeXf6pI0oSBRQsHsx1
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 247173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json
            external_identifier: CBDB:247173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e392LnB7A4b6Nr7JWhMefS
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。成化八年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 247169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eonrrfCkN2hA5o48Aafwfz | 王勉 | accepted |
| children | p_7J2EXvoBG7ypFJeeG99Bmf | 王章 | accepted |
| children | p_e392LnB7A4b6Nr7JWhMefS | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 247169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247169&o=json)
- [中国历代人物传记资料库：王憲（CBDB 247173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json)
- [中国历代人物传记资料库：王章（CBDB 247174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247174&o=json)
