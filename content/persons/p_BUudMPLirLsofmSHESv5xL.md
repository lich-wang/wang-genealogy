---
schema: wang-person/v1
id: p_BUudMPLirLsofmSHESv5xL
status: active
merged_into: null
display_name: 王祥兆
cbdb_id: 225805
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_juafzecZLzxFoX6LovyakH
        subject_person_id: p_BUudMPLirLsofmSHESv5xL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥兆，明人物。萬曆丙戌科進士進士，籍贯即墨。（中国历代人物传记资料库 CBDB 225805）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__X7JYLbWDlRPnysDKcy2Dx
          claim_id: c_juafzecZLzxFoX6LovyakH
          source_id: s_qguh313SdPJ9cvFCHak4Aq
          stance: supports
          locator: CBDB:225805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qguh313SdPJ9cvFCHak4Aq
            source_type: api_record
            title: 中国历代人物传记资料库：王祥兆（CBDB 225805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json
            external_identifier: CBDB:225805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJZS68S1748H2qRk2CyKhk
        subject_person_id: p_BUudMPLirLsofmSHESv5xL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AZzycNPwiTuga41mYJTaZX
          claim_id: c_AJZS68S1748H2qRk2CyKhk
          source_id: s_qguh313SdPJ9cvFCHak4Aq
          stance: supports
          locator: CBDB:225805
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OOT3H_n6XwSzrAsK4jgfgz
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BUudMPLirLsofmSHESv5xL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wje8Q3ek9iKaO9IWmkLhEz
          claim_id: c_OOT3H_n6XwSzrAsK4jgfgz
          source_id: s_24EH85N2yuKgQTPHRBLY6M
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王祥兆 与 王祿兆 为同胞（CBDB 记「兄」），王祿兆 之父／母即 王祥兆 之父／母。
          source:
            id: s_24EH85N2yuKgQTPHRBLY6M
            source_type: api_record
            title: 中国历代人物传记资料库：王祥兆（CBDB 225805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json
            external_identifier: CBDB:225805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aZXBatcc6mdp3QRC5AaJD4
        status: active
        display_name: 王光遠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YWkSJA4k1psdTgYTEFG_pT
        subject_person_id: p_BUudMPLirLsofmSHESv5xL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5dObD8_X5SKJh-8q8pGA-
          claim_id: c_YWkSJA4k1psdTgYTEFG_pT
          source_id: s_24EH85N2yuKgQTPHRBLY6M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206985 王祿兆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_24EH85N2yuKgQTPHRBLY6M
            source_type: api_record
            title: 中国历代人物传记资料库：王祥兆（CBDB 225805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json
            external_identifier: CBDB:225805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
---

# 王祥兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祥兆，明人物。萬曆丙戌科進士進士，籍贯即墨。（中国历代人物传记资料库 CBDB 225805） | accepted |
| name.primary | 王祥兆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aZXBatcc6mdp3QRC5AaJD4 | 王光遠 | accepted |
| other | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祥兆（CBDB 225805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json)
