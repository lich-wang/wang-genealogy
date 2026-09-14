---
schema: wang-person/v1
id: p_RvwBFNFYPjXE486YSxqqGH
status: active
merged_into: null
display_name: 王光考
cbdb_id: 306651
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5w9N4VNMyDXwvY714MENx
        subject_person_id: p_RvwBFNFYPjXE486YSxqqGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光考，明人物。嘉靖二十三年進士，籍贯黎城。（中国历代人物传记资料库 CBDB 306651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qCISEaJAkHNkeXWpFgItCD
          claim_id: c_J5w9N4VNMyDXwvY714MENx
          source_id: s_1BLWZ1Y6Adst64Ne6Vb6Db
          stance: supports
          locator: CBDB:306651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1BLWZ1Y6Adst64Ne6Vb6Db
            source_type: api_record
            title: 中国历代人物传记资料库：王光考（CBDB 306651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json
            external_identifier: CBDB:306651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CLfPKz1A9voaCCNkCJfCvS
        subject_person_id: p_RvwBFNFYPjXE486YSxqqGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光考
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mi5A6oVAq2kpQZdcvw8YgP
          claim_id: c_CLfPKz1A9voaCCNkCJfCvS
          source_id: s_1BLWZ1Y6Adst64Ne6Vb6Db
          stance: supports
          locator: CBDB:306651
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bpFGAi8FQlaljH3_bEyNQd
        subject_person_id: p_aJ5J2cPFB2J5wBLDS27uNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvwBFNFYPjXE486YSxqqGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SRLDjGNmZCWDrcbkl_5O7
          claim_id: c_bpFGAi8FQlaljH3_bEyNQd
          source_id: s_CUSWIjssuTrxhifx4b_CR2
          stance: supports
          locator: CBDB：兄弟 王光祖（126518）之父／母 王煩
          quotation: null
          interpretation_note: 由兄弟关系推断：王光考 与 王光祖 为同胞（CBDB 记「兄」），王光祖 之父／母即 王光考 之父／母。
          source:
            id: s_CUSWIjssuTrxhifx4b_CR2
            source_type: api_record
            title: 中国历代人物传记资料库：王光考（CBDB 306651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json
            external_identifier: CBDB:306651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJ5J2cPFB2J5wBLDS27uNZ
        status: active
        display_name: 王煩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3BHoDVWuXu1a1QvjVdvAon
        subject_person_id: p_RvwBFNFYPjXE486YSxqqGH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yM4j0sKGFwysy_dA1Z2DBm
          claim_id: c_3BHoDVWuXu1a1QvjVdvAon
          source_id: s_CUSWIjssuTrxhifx4b_CR2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126518 王光祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CUSWIjssuTrxhifx4b_CR2
            source_type: api_record
            title: 中国历代人物传记资料库：王光考（CBDB 306651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json
            external_identifier: CBDB:306651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nMTfTHCiK68GBCA9Zmyxva
        status: active
        display_name: 王光祖
        merged_into_person_id: null
---

# 王光考

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光考，明人物。嘉靖二十三年進士，籍贯黎城。（中国历代人物传记资料库 CBDB 306651） | accepted |
| name.primary | 王光考 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJ5J2cPFB2J5wBLDS27uNZ | 王煩 | accepted |
| other | p_nMTfTHCiK68GBCA9Zmyxva | 王光祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光考（CBDB 306651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json)
