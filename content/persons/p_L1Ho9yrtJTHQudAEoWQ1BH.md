---
schema: wang-person/v1
id: p_L1Ho9yrtJTHQudAEoWQ1BH
status: active
merged_into: null
display_name: 王友道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rApmoCuCsF5uhgUivC8b5f
        subject_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ur1EQsZ8hqCMqrAXCPyusV
          claim_id: c_rApmoCuCsF5uhgUivC8b5f
          source_id: s_F3HYC1SWEc5dcEQ2FQuqxh
          stance: supports
          locator: CBDB:270433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270433）
          source: &a1
            id: s_F3HYC1SWEc5dcEQ2FQuqxh
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 270433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json
            external_identifier: CBDB:270433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_te69A8hTFWQbJcmh7dkBbH
        subject_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友道，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YQjGXHcKk_deS_xWUG78jt
          claim_id: c_te69A8hTFWQbJcmh7dkBbH
          source_id: s_F3HYC1SWEc5dcEQ2FQuqxh
          stance: supports
          locator: CBDB:270433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DFLogIJjIPTLEPGK1R6bKJ
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xhRuhsSPSLXYw7HH1wcD7K
          claim_id: c_DFLogIJjIPTLEPGK1R6bKJ
          source_id: s_buP98Ush87pfUgYtWdkNoD
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王友道 与 王顯道 为同胞（CBDB 记「弟」），王顯道 之父／母即 王友道 之父／母。
          source:
            id: s_buP98Ush87pfUgYtWdkNoD
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 270433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json
            external_identifier: CBDB:270433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_USmM7iSRa4vK3jsnZL7c34
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1VJQ5YHAW2nfe7koyklQNE
        subject_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GU1cGp61G32Jn0yFzWRwYN
          claim_id: c_1VJQ5YHAW2nfe7koyklQNE
          source_id: s_buP98Ush87pfUgYtWdkNoD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_buP98Ush87pfUgYtWdkNoD
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 270433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json
            external_identifier: CBDB:270433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6LM7kMHNYz7GAHB99D8XL
        status: active
        display_name: 王顯道
        merged_into_person_id: null
---

# 王友道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友道 | accepted |
| bio.summary | 王友道，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_USmM7iSRa4vK3jsnZL7c34 | 王文 | accepted |
| other | p_p6LM7kMHNYz7GAHB99D8XL | 王顯道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友道（CBDB 270433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json)
