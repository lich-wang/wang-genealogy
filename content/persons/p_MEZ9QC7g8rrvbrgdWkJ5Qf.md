---
schema: wang-person/v1
id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
status: active
merged_into: null
display_name: 王斅
cbdb_id: 274343
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RP9B13sNRx3aWxdaCuVChR
        subject_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斅，明人物。弘治十八年進士，籍贯順慶府。（中国历代人物传记资料库 CBDB 274343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qi5-U-Ejnx1dFBpAECZ_sl
          claim_id: c_RP9B13sNRx3aWxdaCuVChR
          source_id: s_gB9WcRR2pccpzNLc5ihh9i
          stance: supports
          locator: CBDB:274343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gB9WcRR2pccpzNLc5ihh9i
            source_type: api_record
            title: 中国历代人物传记资料库：王斅（CBDB 274343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json
            external_identifier: CBDB:274343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H1GNBDELp1F2eMi58n9gV8
        subject_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mDJ95eXncR2WDTPqSpZ7k8
          claim_id: c_H1GNBDELp1F2eMi58n9gV8
          source_id: s_gB9WcRR2pccpzNLc5ihh9i
          stance: supports
          locator: CBDB:274343
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9GxKMgo5pzk0d8EL1ACt2e
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oUaMUZrPpVuVsszSeDeIb6
          claim_id: c_9GxKMgo5pzk0d8EL1ACt2e
          source_id: s_cEHNWs8zOKo_tRXjBvJ0Uf
          stance: supports
          locator: CBDB：兄弟 王昂（126608）之父／母 王紀綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王斅 与 王昂 为同胞（CBDB 记「弟」），王昂 之父／母即 王斅 之父／母。
          source:
            id: s_cEHNWs8zOKo_tRXjBvJ0Uf
            source_type: api_record
            title: 中国历代人物传记资料库：王斅（CBDB 274343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json
            external_identifier: CBDB:274343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_soPWG2JxysqfJjV8tB16nV
        status: active
        display_name: 王紀綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Qm1XOZMRScTrvRwHh8dRpK
        subject_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytUjkaihSiMqNoXCA74lcx
          claim_id: c_Qm1XOZMRScTrvRwHh8dRpK
          source_id: s_cEHNWs8zOKo_tRXjBvJ0Uf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126608 王昂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cEHNWs8zOKo_tRXjBvJ0Uf
            source_type: api_record
            title: 中国历代人物传记资料库：王斅（CBDB 274343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json
            external_identifier: CBDB:274343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kegtQkxMvsxG83EpfKScwb
        status: active
        display_name: 王昂
        merged_into_person_id: null
---

# 王斅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王斅，明人物。弘治十八年進士，籍贯順慶府。（中国历代人物传记资料库 CBDB 274343） | accepted |
| name.primary | 王斅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_soPWG2JxysqfJjV8tB16nV | 王紀綱 | accepted |
| other | p_kegtQkxMvsxG83EpfKScwb | 王昂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斅（CBDB 274343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json)
