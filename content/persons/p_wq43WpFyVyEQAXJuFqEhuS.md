---
schema: wang-person/v1
id: p_wq43WpFyVyEQAXJuFqEhuS
status: active
merged_into: null
display_name: 王寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x2KFftVdLMC7j5XVqyDWFL
        subject_person_id: p_wq43WpFyVyEQAXJuFqEhuS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eae4igdUCBHFFBCqwzsiLp
          claim_id: c_x2KFftVdLMC7j5XVqyDWFL
          source_id: s_T748XDK6j4XMaGSw7pHAuy
          stance: supports
          locator: CBDB:238669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238669）
          source: &a1
            id: s_T748XDK6j4XMaGSw7pHAuy
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 238669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json
            external_identifier: CBDB:238669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aX1BVNTB9LViuAcUtvwSQf
        subject_person_id: p_wq43WpFyVyEQAXJuFqEhuS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DJAf-cW_bJPSV4YMSHMSjy
          claim_id: c_aX1BVNTB9LViuAcUtvwSQf
          source_id: s_T748XDK6j4XMaGSw7pHAuy
          stance: supports
          locator: CBDB:238669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DhaGHSbDlDlwU4Blw5BKHZ
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wq43WpFyVyEQAXJuFqEhuS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CompI-dVZ1izmnPVIS2sNW
          claim_id: c_DhaGHSbDlDlwU4Blw5BKHZ
          source_id: s_quWzXe42IqWXWn_6TzQ10p
          stance: supports
          locator: CBDB：兄弟 王宣（126596）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王寧 之父／母。
          source:
            id: s_quWzXe42IqWXWn_6TzQ10p
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 238669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json
            external_identifier: CBDB:238669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FDiJqJn77s6sHnYjqwgysR
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_stUUiM4yq1vsVBrf98lsT3
        subject_person_id: p_Kr82p89DPcaLRwmJJapqo8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wq43WpFyVyEQAXJuFqEhuS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_d3_1ezw9vvsG5O4FfwQb
          claim_id: c_stUUiM4yq1vsVBrf98lsT3
          source_id: s_quWzXe42IqWXWn_6TzQ10p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126596 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_quWzXe42IqWXWn_6TzQ10p
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 238669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json
            external_identifier: CBDB:238669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kr82p89DPcaLRwmJJapqo8
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FDiJqJn77s6sHnYjqwgysR | 王忠 | accepted |
| other | p_Kr82p89DPcaLRwmJJapqo8 | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 238669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json)
