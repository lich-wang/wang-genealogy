---
schema: wang-person/v1
id: p_LzKzBUerAfGDhBNRUiQn4j
status: active
merged_into: null
display_name: 王愷中
cbdb_id: 304158
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5TyL7dkHrqAGEUFMr3Ca9
        subject_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RioJn4hrr5vRGyoxuq3kfs
          claim_id: c_T5TyL7dkHrqAGEUFMr3Ca9
          source_id: s_cZbQ6Ra2HQaWkBA9Ux28Ty
          stance: supports
          locator: CBDB:304158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cZbQ6Ra2HQaWkBA9Ux28Ty
            source_type: api_record
            title: 中国历代人物传记资料库：王愷中（CBDB 304158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json
            external_identifier: CBDB:304158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hhUoSn8k2K78i1DSSHnCaK
        subject_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NFQVYJgoWRB7a7xf38is29
          claim_id: c_hhUoSn8k2K78i1DSSHnCaK
          source_id: s_cZbQ6Ra2HQaWkBA9Ux28Ty
          stance: supports
          locator: CBDB:304158
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2M7cZfd0GMh8LhxG-BO88d
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2lPoffNrWwv3rH2EpR-CY
          claim_id: c_2M7cZfd0GMh8LhxG-BO88d
          source_id: s_KLhwm8XfdDwkQlAwnuzyCd
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王愷中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王愷中 之父／母。
          source:
            id: s_KLhwm8XfdDwkQlAwnuzyCd
            source_type: api_record
            title: 中国历代人物传记资料库：王愷中（CBDB 304158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json
            external_identifier: CBDB:304158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SRL6mLM7b-5H-V4FjsvTr-
        subject_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g48j2TFddgkvaBO7djO2XS
          claim_id: c_SRL6mLM7b-5H-V4FjsvTr-
          source_id: s_KLhwm8XfdDwkQlAwnuzyCd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KLhwm8XfdDwkQlAwnuzyCd
            source_type: api_record
            title: 中国历代人物传记资料库：王愷中（CBDB 304158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json
            external_identifier: CBDB:304158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王愷中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愷中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304158） | accepted |
| name.primary | 王愷中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷中（CBDB 304158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json)
