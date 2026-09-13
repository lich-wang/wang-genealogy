---
schema: wang-person/v1
id: p_GZbsE9QaKe1eQKtqPL2T7F
status: active
merged_into: null
display_name: 孔氏
cbdb_id: 37779
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MaQxZFt14l_8uZRAJksRFh
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孔氏，王彥博妻。维基数据以独立条目 Q45431324 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_alRCAn-nR36GGHvNX9YfNB
          claim_id: c_MaQxZFt14l_8uZRAJksRFh
          source_id: s_43NZumLKmwyAMNQ7BPvD7D
          stance: supports
          locator: Q45431324
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_43NZumLKmwyAMNQ7BPvD7D
            source_type: api_record
            title: 维基数据：孔氏（Q45431324）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431324
            external_identifier: Q45431324
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujXdZCS6BE36MrFeMs1PjF
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孔氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_789qCYd5NokdCfpbcW4w4x
          claim_id: c_ujXdZCS6BE36MrFeMs1PjF
          source_id: s_43NZumLKmwyAMNQ7BPvD7D
          stance: supports
          locator: Q45431324
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WQaFVtwhPqJRoRbwXVLQCN
          claim_id: c_ujXdZCS6BE36MrFeMs1PjF
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: Q45431324
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fGW6nhH5W9uBA7hHf2yaa8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孔氏（37779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json
            external_identifier: CBDB:37779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.529Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oREgvmBhdSQ8Ic8XHuYczG
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A4y88KqDgYC7CBnr5hYZf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a7iNdJW7VWzR9JGK53knXI
          claim_id: c_oREgvmBhdSQ8Ic8XHuYczG
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_A4y88KqDgYC7CBnr5hYZf3
        status: active
        display_name: 王龜齡
        merged_into_person_id: null
    - claim:
        id: c_Vnq6t0xHmqfUYQcyf-i3zR
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxf4gH2xyWjLA2FCR3BhN7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V787GoF_1stdjK0_pjBkJj
          claim_id: c_Vnq6t0xHmqfUYQcyf-i3zR
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_Bxf4gH2xyWjLA2FCR3BhN7
        status: active
        display_name: 王松龄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8mucszUtvh33EWZtQW5P88
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zAMNQJueCwPPKR5vjoLaAD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JttkBd2dx3CgQJTLEF4xd
          claim_id: c_8mucszUtvh33EWZtQW5P88
          source_id: s_XGTV8UkV21vTCML8WGhwr8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_XGTV8UkV21vTCML8WGhwr8
            source_type: api_record
            title: 维基数据：王彦博（Q45409553）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409553
            external_identifier: Q45409553
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_3dVo8PAuq5uT7iHSQHYHFf
          claim_id: c_8mucszUtvh33EWZtQW5P88
          source_id: s_43NZumLKmwyAMNQ7BPvD7D
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qDAf7YG7DTw4W63FJJtNVk
          claim_id: c_8mucszUtvh33EWZtQW5P88
          source_id: s_46EMQd7ZTyE8aAbsz323u9
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_46EMQd7ZTyE8aAbsz323u9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥博（26229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26229&o=json
            external_identifier: CBDB:26229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:00.875Z
            metadata_json: null
      object_person:
        id: p_zAMNQJueCwPPKR5vjoLaAD
        status: active
        display_name: 王彦博
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_f3WhoIAQP5xPIAGSQRuoVA
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ib1JCPDpb1b5Zbw7uh5HuV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r1Hg04A1rI53D7pbqW5y8e
          claim_id: c_f3WhoIAQP5xPIAGSQRuoVA
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_ib1JCPDpb1b5Zbw7uh5HuV
        status: active
        display_name: 王彤
        merged_into_person_id: null
    - claim:
        id: c_JXZ1moJiYm_EsGNLxqWThW
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3Jpz1MJr19NoGHADTpC82d
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2vxJV2mySnHEx89eHton-u
          claim_id: c_JXZ1moJiYm_EsGNLxqWThW
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_3Jpz1MJr19NoGHADTpC82d
        status: active
        display_name: 王串
        merged_into_person_id: null
    - claim:
        id: c_Ud87itdy0UpXNtt1bADx01
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TXR4BZHWFYBdp9oHRn9hCf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLMekI_VP7QkxYW3dpX0qM
          claim_id: c_Ud87itdy0UpXNtt1bADx01
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_TXR4BZHWFYBdp9oHRn9hCf
        status: active
        display_name: 王聿
        merged_into_person_id: null
    - claim:
        id: c_q_GMT-QO7oWhEEM9_1FQvB
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kdXLrKQ2gAzwQuRiYauex1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zU5Rmcc4PX2lWMfOZV9yqb
          claim_id: c_q_GMT-QO7oWhEEM9_1FQvB
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_kdXLrKQ2gAzwQuRiYauex1
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_MIGU-2WKK9Rmwj0ULF-hyU
        subject_person_id: p_GZbsE9QaKe1eQKtqPL2T7F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q29adPUD8QELC98tWHj9Az
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u7CYJV94FkHvd5X-BhbEuf
          claim_id: c_MIGU-2WKK9Rmwj0ULF-hyU
          source_id: s_fGW6nhH5W9uBA7hHf2yaa8
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_Q29adPUD8QELC98tWHj9Az
        status: active
        display_name: 王懋
        merged_into_person_id: null
  other: []
---

# 孔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孔氏，王彥博妻。维基数据以独立条目 Q45431324 收录该人物。 | accepted |
| name.primary | 孔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_A4y88KqDgYC7CBnr5hYZf3 | 王龜齡 | accepted |
| children | p_Bxf4gH2xyWjLA2FCR3BhN7 | 王松龄 | accepted |
| spouses | p_zAMNQJueCwPPKR5vjoLaAD | 王彦博 | accepted |
| descendants | p_ib1JCPDpb1b5Zbw7uh5HuV | 王彤 | accepted |
| descendants | p_3Jpz1MJr19NoGHADTpC82d | 王串 | accepted |
| descendants | p_TXR4BZHWFYBdp9oHRn9hCf | 王聿 | accepted |
| descendants | p_kdXLrKQ2gAzwQuRiYauex1 | 王中 | accepted |
| descendants | p_Q29adPUD8QELC98tWHj9Az | 王懋 | accepted |

## 外部来源

- [维基数据：孔氏（Q45431324）](https://www.wikidata.org/wiki/Q45431324)
- [维基数据：王彦博（Q45409553）](https://www.wikidata.org/wiki/Q45409553)
- [CBDB 中国历代人物传记资料库：孔氏（37779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37779&o=json)
- [CBDB 中国历代人物传记资料库：王彥博（26229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26229&o=json)
