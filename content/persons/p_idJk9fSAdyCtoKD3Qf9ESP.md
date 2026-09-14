---
schema: wang-person/v1
id: p_idJk9fSAdyCtoKD3Qf9ESP
status: active
merged_into: null
display_name: 王崇儒
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FErUEsL2x51LxgWsBGSB7
        subject_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SgyHjMAB5rny1eQkNvgzmQ
          claim_id: c_4FErUEsL2x51LxgWsBGSB7
          source_id: s_tKYqyQeWNzq1Dm55nJqCQ8
          stance: supports
          locator: CBDB:266137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266137）
          source: &a1
            id: s_tKYqyQeWNzq1Dm55nJqCQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Edr4nMwRjbSQCk6288Tjkb
        subject_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒，明人物。弘治六年進士，籍贯曹縣，曾任知縣。（中国历代人物传记资料库 CBDB 266137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZPz5sGnBfyIqTJD5KTXMLx
          claim_id: c_Edr4nMwRjbSQCk6288Tjkb
          source_id: s_tKYqyQeWNzq1Dm55nJqCQ8
          stance: supports
          locator: CBDB:266137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kd4DyVuyxT56qGhtdFuQ_t
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qOOx7UM8thGmuCfp-0l-jS
          claim_id: c_kd4DyVuyxT56qGhtdFuQ_t
          source_id: s_h_S9t48v1A4Xj5OffU5BAR
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇儒 与 王崇文 为同胞（CBDB 记「弟」），王崇文 之父／母即 王崇儒 之父／母。
          source:
            id: s_h_S9t48v1A4Xj5OffU5BAR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
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
        id: c_DeXC9NKkqCpo3KhhdVQTPm
        subject_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
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
        - id: cs_gyVeN3CyZShN4qqj8Qw9Ha
          claim_id: c_DeXC9NKkqCpo3KhhdVQTPm
          source_id: s_h_S9t48v1A4Xj5OffU5BAR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126686 王崇文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h_S9t48v1A4Xj5OffU5BAR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c_ujyV33Mgho6z1wCNgaLtdJ
        subject_person_id: p_5btbNFkuNqxJDcg99ibvfp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kVy5SUVBPES4XijDp_TJQM
          claim_id: c_ujyV33Mgho6z1wCNgaLtdJ
          source_id: s_h_S9t48v1A4Xj5OffU5BAR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126688 王崇儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h_S9t48v1A4Xj5OffU5BAR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
    - claim:
        id: c_tw32-nNaE_Bz5f2aePIfo-
        subject_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K-1vzmjRdDjIKRWTelw-Nj
          claim_id: c_tw32-nNaE_Bz5f2aePIfo-
          source_id: s_h_S9t48v1A4Xj5OffU5BAR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126689 王崇獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h_S9t48v1A4Xj5OffU5BAR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gZEG3LV8BoSpVH5X7JPghB
        status: active
        display_name: 王崇獻
        merged_into_person_id: null
---

# 王崇儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇儒 | accepted |
| bio.summary | 王崇儒，明人物。弘治六年進士，籍贯曹縣，曾任知縣。（中国历代人物传记资料库 CBDB 266137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| other | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| other | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |
| other | p_gZEG3LV8BoSpVH5X7JPghB | 王崇獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇儒（CBDB 266137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json)
