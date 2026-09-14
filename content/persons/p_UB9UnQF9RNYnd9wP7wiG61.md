---
schema: wang-person/v1
id: p_UB9UnQF9RNYnd9wP7wiG61
status: active
merged_into: null
display_name: 王崇素
cbdb_id: 266146
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9hVueZEZB3RcCdpUSVdLaR
        subject_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇素，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_v9WUKK0d2sGcSchryZIimz
          claim_id: c_9hVueZEZB3RcCdpUSVdLaR
          source_id: s_wLmWqY1KDK37aJuhGuxLey
          stance: supports
          locator: CBDB:266146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wLmWqY1KDK37aJuhGuxLey
            source_type: api_record
            title: 中国历代人物传记资料库：王崇素（CBDB 266146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json
            external_identifier: CBDB:266146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bEy4AMPfwaH1DZJPQT3A47
        subject_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Czi9J1jk93WV2aYx4VTk4
          claim_id: c_bEy4AMPfwaH1DZJPQT3A47
          source_id: s_wLmWqY1KDK37aJuhGuxLey
          stance: supports
          locator: CBDB:266146
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Txb6A0wH9cauFws91CxPTS
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdDmeRzfLW7SccEBWVldbI
          claim_id: c_Txb6A0wH9cauFws91CxPTS
          source_id: s_KSpIDI9CU2hZzUmQ7zMpCG
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇素 与 王崇文 为同胞（CBDB 记「兄」），王崇文 之父／母即 王崇素 之父／母。
          source:
            id: s_KSpIDI9CU2hZzUmQ7zMpCG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇素（CBDB 266146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json
            external_identifier: CBDB:266146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7xPYAwpK8PS9R7QKy5varP
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nMOlYaRXCcPwDnvtoFiold
        subject_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BeG_fTglT3hLfSM8BLKG_p
          claim_id: c_nMOlYaRXCcPwDnvtoFiold
          source_id: s_KSpIDI9CU2hZzUmQ7zMpCG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126686 王崇文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KSpIDI9CU2hZzUmQ7zMpCG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇素（CBDB 266146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json
            external_identifier: CBDB:266146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c_x5BLfx7JupxxnoU5Pfa39h
        subject_person_id: p_5btbNFkuNqxJDcg99ibvfp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_255ujoFf-OHaAPjIVC_4Td
          claim_id: c_x5BLfx7JupxxnoU5Pfa39h
          source_id: s_KSpIDI9CU2hZzUmQ7zMpCG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126688 王崇儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KSpIDI9CU2hZzUmQ7zMpCG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇素（CBDB 266146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json
            external_identifier: CBDB:266146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
---

# 王崇素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇素，明人物。弘治六年進士，籍贯曹縣。（中国历代人物传记资料库 CBDB 266146） | accepted |
| name.primary | 王崇素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| other | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| other | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇素（CBDB 266146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json)
