---
schema: wang-person/v1
id: p_B2kaNim6JACLACBEtHTAtb
status: active
merged_into: null
display_name: 王國傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBdDfcb1v4H83EuRNEtxxv
        subject_person_id: p_B2kaNim6JACLACBEtHTAtb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jFc9tG6ivUdk4od7rjegtn
          claim_id: c_kBdDfcb1v4H83EuRNEtxxv
          source_id: s_H4TAoRPApzcFHEWPXovaHA
          stance: supports
          locator: CBDB:214960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214960）
          source: &a1
            id: s_H4TAoRPApzcFHEWPXovaHA
            source_type: api_record
            title: 中国历代人物传记资料库：王國傑（CBDB 214960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json
            external_identifier: CBDB:214960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_meuh9bTmiA8YCe3x9zQAVA
        subject_person_id: p_B2kaNim6JACLACBEtHTAtb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國傑，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214960）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M5rv7JpSreIHmW0sPKgSR0
          claim_id: c_meuh9bTmiA8YCe3x9zQAVA
          source_id: s_H4TAoRPApzcFHEWPXovaHA
          stance: supports
          locator: CBDB:214960
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oIM9POs5P438Jy8uHw9BeT
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2kaNim6JACLACBEtHTAtb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btQk0pRms4Q2hCWv6Kcp_G
          claim_id: c_oIM9POs5P438Jy8uHw9BeT
          source_id: s_enG84qYbBmDOZh3ZkwCeeA
          stance: supports
          locator: CBDB：兄弟 王國祚（206219）之父／母 王勉學
          quotation: null
          interpretation_note: 由兄弟关系推断：王國傑 与 王國祚 为同胞（CBDB 记「兄」），王國祚 之父／母即 王國傑 之父／母。
          source:
            id: s_enG84qYbBmDOZh3ZkwCeeA
            source_type: api_record
            title: 中国历代人物传记资料库：王國傑（CBDB 214960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json
            external_identifier: CBDB:214960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        status: active
        display_name: 王勉學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KbGn_0nbJaOdVm6yl6oEaQ
        subject_person_id: p_B2kaNim6JACLACBEtHTAtb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gMKQPxLJ48PB0SFYAdLgOk
          claim_id: c_KbGn_0nbJaOdVm6yl6oEaQ
          source_id: s_enG84qYbBmDOZh3ZkwCeeA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206219 王國祚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_enG84qYbBmDOZh3ZkwCeeA
            source_type: api_record
            title: 中国历代人物传记资料库：王國傑（CBDB 214960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json
            external_identifier: CBDB:214960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
---

# 王國傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國傑 | accepted |
| bio.summary | 王國傑，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jJ8CBW1eQx8HAeDCP6Kxoi | 王勉學 | accepted |
| other | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國傑（CBDB 214960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214960&o=json)
