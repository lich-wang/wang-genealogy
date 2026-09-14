---
schema: wang-person/v1
id: p_kKJsArnnRuc3sSJt7Fr1Qc
status: active
merged_into: null
display_name: 王祖裔
cbdb_id: 211138
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5R8VnwMzyPxrTGcZN4azJw
        subject_person_id: p_kKJsArnnRuc3sSJt7Fr1Qc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖裔，明人物。隆慶五年進士，籍贯德州。（中国历代人物传记资料库 CBDB 211138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_M6ryrkM2QC_WZOcF1N7fAe
          claim_id: c_5R8VnwMzyPxrTGcZN4azJw
          source_id: s_Z3xQyzwMN4S9qJWSzTm9Ho
          stance: supports
          locator: CBDB:211138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Z3xQyzwMN4S9qJWSzTm9Ho
            source_type: api_record
            title: 中国历代人物传记资料库：王祖裔（CBDB 211138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211138&o=json
            external_identifier: CBDB:211138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4RpkQHeaxkoAqQtHDzjdTd
        subject_person_id: p_kKJsArnnRuc3sSJt7Fr1Qc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖裔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q3QN4i5YrDrCPG9Yof6gXP
          claim_id: c_4RpkQHeaxkoAqQtHDzjdTd
          source_id: s_Z3xQyzwMN4S9qJWSzTm9Ho
          stance: supports
          locator: CBDB:211138
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1G6qilxfxLtox3ZAfI-9lp
        subject_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKJsArnnRuc3sSJt7Fr1Qc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bAZtFpz4IDpG_HYXvjZuf6
          claim_id: c_1G6qilxfxLtox3ZAfI-9lp
          source_id: s_iqYdIP0BWSxpHw1Run6w6C
          stance: supports
          locator: CBDB：兄弟 王祖嫡（126631）之父／母 王詔
          quotation: null
          interpretation_note: 由兄弟关系推断：王祖裔 与 王祖嫡 为同胞（CBDB 记「兄」），王祖嫡 之父／母即 王祖裔 之父／母。
          source:
            id: s_iqYdIP0BWSxpHw1Run6w6C
            source_type: api_record
            title: 中国历代人物传记资料库：王祖裔（CBDB 211138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211138&o=json
            external_identifier: CBDB:211138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tBLAnfK4dS8P5LR1P2RqS9
        status: active
        display_name: 王詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wRLdJCaYzli1PNwV5onztN
        subject_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kKJsArnnRuc3sSJt7Fr1Qc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-NKDNf4QVkDtarp-o9ZyU
          claim_id: c_wRLdJCaYzli1PNwV5onztN
          source_id: s_iqYdIP0BWSxpHw1Run6w6C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126631 王祖嫡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iqYdIP0BWSxpHw1Run6w6C
            source_type: api_record
            title: 中国历代人物传记资料库：王祖裔（CBDB 211138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211138&o=json
            external_identifier: CBDB:211138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DoWNVNC6JZBAasWbqdoiCX
        status: active
        display_name: 王祖嫡
        merged_into_person_id: null
---

# 王祖裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖裔，明人物。隆慶五年進士，籍贯德州。（中国历代人物传记资料库 CBDB 211138） | accepted |
| name.primary | 王祖裔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tBLAnfK4dS8P5LR1P2RqS9 | 王詔 | accepted |
| other | p_DoWNVNC6JZBAasWbqdoiCX | 王祖嫡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祖裔（CBDB 211138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211138&o=json)
