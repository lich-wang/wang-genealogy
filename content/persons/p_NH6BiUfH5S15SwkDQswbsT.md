---
schema: wang-person/v1
id: p_NH6BiUfH5S15SwkDQswbsT
status: active
merged_into: null
display_name: 王慎思
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hNFTSPDgq9DeJd541iVZBt
        subject_person_id: p_NH6BiUfH5S15SwkDQswbsT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdLxMjfgCpNpu5g6E88dZ2
          claim_id: c_hNFTSPDgq9DeJd541iVZBt
          source_id: s_U4yAdvv862vsNMg7KsvBXD
          stance: supports
          locator: CBDB:265197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265197）
          source: &a1
            id: s_U4yAdvv862vsNMg7KsvBXD
            source_type: api_record
            title: 中国历代人物传记资料库：王慎思（CBDB 265197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json
            external_identifier: CBDB:265197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7REcPdzi2DkHU5Ef4EMEi
        subject_person_id: p_NH6BiUfH5S15SwkDQswbsT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎思，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NYE7j4SIPM_pZTiKuxEX_3
          claim_id: c_J7REcPdzi2DkHU5Ef4EMEi
          source_id: s_U4yAdvv862vsNMg7KsvBXD
          stance: supports
          locator: CBDB:265197
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c7nWLOhQ4YlYD6HeZADaMQ
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NH6BiUfH5S15SwkDQswbsT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZmzAVi-U_WiS3IbSiXLo8
          claim_id: c_c7nWLOhQ4YlYD6HeZADaMQ
          source_id: s_2rlUEmFgFCI2gK8Tpl4bRM
          stance: supports
          locator: CBDB：兄弟 王選（200963）之父／母 王稷時
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎思 与 王選 为同胞（CBDB 记「兄」），王選 之父／母即 王慎思 之父／母。
          source:
            id: s_2rlUEmFgFCI2gK8Tpl4bRM
            source_type: api_record
            title: 中国历代人物传记资料库：王慎思（CBDB 265197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json
            external_identifier: CBDB:265197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HBetaJRtzBcDVZP83F84Xv
        status: active
        display_name: 王稷時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hxBruXB4ADjPbhs0PL7lLy
        subject_person_id: p_NH6BiUfH5S15SwkDQswbsT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GiAwZZ0OQGK9VdSIL9ECL2
          claim_id: c_hxBruXB4ADjPbhs0PL7lLy
          source_id: s_2rlUEmFgFCI2gK8Tpl4bRM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200963 王選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2rlUEmFgFCI2gK8Tpl4bRM
            source_type: api_record
            title: 中国历代人物传记资料库：王慎思（CBDB 265197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json
            external_identifier: CBDB:265197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
---

# 王慎思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎思 | accepted |
| bio.summary | 王慎思，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HBetaJRtzBcDVZP83F84Xv | 王稷時 | accepted |
| other | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎思（CBDB 265197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json)
