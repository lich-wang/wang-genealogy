---
schema: wang-person/v1
id: p_hKdPByG821ALMEdoQo4ac5
status: active
merged_into: null
display_name: 王道得
cbdb_id: 219574
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJviEtJMnREMQB74sNHcVL
        subject_person_id: p_hKdPByG821ALMEdoQo4ac5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道得，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219574）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tosxMUf4ZvkEoYduYYO-rM
          claim_id: c_uJviEtJMnREMQB74sNHcVL
          source_id: s_LTS5bryV13pnUyrxY3FRXK
          stance: supports
          locator: CBDB:219574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LTS5bryV13pnUyrxY3FRXK
            source_type: api_record
            title: 中国历代人物传记资料库：王道得（CBDB 219574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json
            external_identifier: CBDB:219574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8s8z4UshC5QVksiGFdK2d
        subject_person_id: p_hKdPByG821ALMEdoQo4ac5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3boA5pzEkykGK9TRLhiMKw
          claim_id: c_Q8s8z4UshC5QVksiGFdK2d
          source_id: s_LTS5bryV13pnUyrxY3FRXK
          stance: supports
          locator: CBDB:219574
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZxOsj_Rb7sqrsQ91DECHU4
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hKdPByG821ALMEdoQo4ac5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S1QSxFvM2304JLSzBhNNIQ
          claim_id: c_ZxOsj_Rb7sqrsQ91DECHU4
          source_id: s_YRe1RZeLbx_5XbDjjPUK48
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道得 与 王道增 为同胞（CBDB 记「弟」），王道增 之父／母即 王道得 之父／母。
          source:
            id: s_YRe1RZeLbx_5XbDjjPUK48
            source_type: api_record
            title: 中国历代人物传记资料库：王道得（CBDB 219574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json
            external_identifier: CBDB:219574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RYeG6QXC3LvzmPc5LSo3Tt
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KgdkrT2tM5a1kc6ME-FPXV
        subject_person_id: p_hKdPByG821ALMEdoQo4ac5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0aaLAqAvaTSzMSzINEMh0G
          claim_id: c_KgdkrT2tM5a1kc6ME-FPXV
          source_id: s_YRe1RZeLbx_5XbDjjPUK48
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206547 王道增）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YRe1RZeLbx_5XbDjjPUK48
            source_type: api_record
            title: 中国历代人物传记资料库：王道得（CBDB 219574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json
            external_identifier: CBDB:219574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zZbuHXnqm4wRFTtwvCX7hA
        status: active
        display_name: 王道增
        merged_into_person_id: null
---

# 王道得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道得，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219574） | accepted |
| name.primary | 王道得 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYeG6QXC3LvzmPc5LSo3Tt | 王澍 | accepted |
| other | p_zZbuHXnqm4wRFTtwvCX7hA | 王道增 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道得（CBDB 219574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219574&o=json)
