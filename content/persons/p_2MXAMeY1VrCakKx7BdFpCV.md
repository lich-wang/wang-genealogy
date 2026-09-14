---
schema: wang-person/v1
id: p_2MXAMeY1VrCakKx7BdFpCV
status: active
merged_into: null
display_name: 王玉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rD2qmSiKtobKszW944o7b7
        subject_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zqbs6LLKGC673C63u31oeN
          claim_id: c_rD2qmSiKtobKszW944o7b7
          source_id: s_qgjegr53RuKLRveQ8Aibek
          stance: supports
          locator: CBDB:241888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241888）
          source: &a1
            id: s_qgjegr53RuKLRveQ8Aibek
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 241888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json
            external_identifier: CBDB:241888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3AHADa9vmSy7GNXcTi212b
        subject_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MDE-iA0a4ScOKE2ZiR5oqW
          claim_id: c_3AHADa9vmSy7GNXcTi212b
          source_id: s_qgjegr53RuKLRveQ8Aibek
          stance: supports
          locator: CBDB:241888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2zxZLkSWSoM1FVKjB-Dm8U
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jEayorZ8JFO7Xm8EkLgkr
          claim_id: c_2zxZLkSWSoM1FVKjB-Dm8U
          source_id: s_ghvrXuzN66ejNvuk9P6CyY
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王玉 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王玉 之父／母。
          source:
            id: s_ghvrXuzN66ejNvuk9P6CyY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 241888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json
            external_identifier: CBDB:241888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8D8JJjvAk9tGe283upkqdk
        status: active
        display_name: 王守文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iYJhtvxV7rcayavBcB-dHj
        subject_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YGpoyQt8ApUTLVBwwEo1P
          claim_id: c_iYJhtvxV7rcayavBcB-dHj
          source_id: s_ghvrXuzN66ejNvuk9P6CyY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ghvrXuzN66ejNvuk9P6CyY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 241888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json
            external_identifier: CBDB:241888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TxHEXLnqR7Hmrn4YZb9SRE
        status: active
        display_name: 王璿
        merged_into_person_id: null
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8D8JJjvAk9tGe283upkqdk | 王守文 | accepted |
| other | p_TxHEXLnqR7Hmrn4YZb9SRE | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 241888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json)
