---
schema: wang-person/v1
id: p_y7eWQwh7UFq3mJX911UE5D
status: active
merged_into: null
display_name: 王大政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JdLNLLFqUhFexCsJZW8ds1
        subject_person_id: p_y7eWQwh7UFq3mJX911UE5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qRh9vHJxxgXhgPsqkhGi8u
          claim_id: c_JdLNLLFqUhFexCsJZW8ds1
          source_id: s_6q3fme4Yy7AojC6QLj2hSp
          stance: supports
          locator: CBDB:311224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311224）
          source: &a1
            id: s_6q3fme4Yy7AojC6QLj2hSp
            source_type: api_record
            title: 中国历代人物传记资料库：王大政（CBDB 311224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json
            external_identifier: CBDB:311224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SBFbEGYqGRLM9UQVCrv7VC
        subject_person_id: p_y7eWQwh7UFq3mJX911UE5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大政，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_56T1ToYmbwCbiWSq1lLXyY
          claim_id: c_SBFbEGYqGRLM9UQVCrv7VC
          source_id: s_6q3fme4Yy7AojC6QLj2hSp
          stance: supports
          locator: CBDB:311224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FagXubjf-kzPfPR7jfekqP
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y7eWQwh7UFq3mJX911UE5D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vUlPKeQjOokbutFVuoTxJ
          claim_id: c_FagXubjf-kzPfPR7jfekqP
          source_id: s_7k2SBg2diI1WINV_gDugGH
          stance: supports
          locator: CBDB：兄弟 王大猷（203868）之父／母 王勇
          quotation: null
          interpretation_note: 由兄弟关系推断：王大政 与 王大猷 为同胞（CBDB 记「弟」），王大猷 之父／母即 王大政 之父／母。
          source:
            id: s_7k2SBg2diI1WINV_gDugGH
            source_type: api_record
            title: 中国历代人物传记资料库：王大政（CBDB 311224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json
            external_identifier: CBDB:311224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ddWY4cKu36BYCB9sUmQGQH
        status: active
        display_name: 王勇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yAtLJmiX3cfgntvuDaHL32
        subject_person_id: p_dBDSp35EhkaWHCV6D81q6n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y7eWQwh7UFq3mJX911UE5D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5njI9wDksMlQP5Qf1IGq3
          claim_id: c_yAtLJmiX3cfgntvuDaHL32
          source_id: s_7k2SBg2diI1WINV_gDugGH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7k2SBg2diI1WINV_gDugGH
            source_type: api_record
            title: 中国历代人物传记资料库：王大政（CBDB 311224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json
            external_identifier: CBDB:311224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
---

# 王大政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大政 | accepted |
| bio.summary | 王大政，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ddWY4cKu36BYCB9sUmQGQH | 王勇 | accepted |
| other | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大政（CBDB 311224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311224&o=json)
