---
schema: wang-person/v1
id: p_CTanKyckA8Emf57Dk1Jm7o
status: active
merged_into: null
display_name: 王世卿
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTHyH4yhePCfkfB3G65Nx2
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HuEJT5gXGvQCAmKcVDtiXW
          claim_id: c_qTHyH4yhePCfkfB3G65Nx2
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: CBDB:316256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316256）
          source: &a1
            id: s_htcTWEbRxiKntM1va2ty9n
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 316256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json
            external_identifier: CBDB:316256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CoxdPiarzru8tFQaeUFA6G
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世卿，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TH7iPwJtooB44fQahwNnS5
          claim_id: c_CoxdPiarzru8tFQaeUFA6G
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: CBDB:316256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__1ely_7UJqYtlcL0_--gNa
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDYZXlZhd4RNn9cMZb9Ddb
          claim_id: c__1ely_7UJqYtlcL0_--gNa
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
    - claim:
        id: c_mu5V-x2cQzkFVI18Xh9gbv
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HTzisSBd8fwB_wx9ZtAFU
          claim_id: c_mu5V-x2cQzkFVI18Xh9gbv
          source_id: s_J4UG3rrf-Sy8E8cU8yfSyp
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誥 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學誥 之父／母。
          source:
            id: s_J4UG3rrf-Sy8E8cU8yfSyp
            source_type: api_record
            title: 中国历代人物传记资料库：王學誥（CBDB 316262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json
            external_identifier: CBDB:316262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RJHMKDkRKmqcKp8MAKp3U
        status: active
        display_name: 王學誥
        merged_into_person_id: null
    - claim:
        id: c_t55uYJ-1VIh-bG-vSMrD6A
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_An7txcyErXqQRxNdWrST9P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gm-jDWdL2PqzH1dL9tuH0
          claim_id: c_t55uYJ-1VIh-bG-vSMrD6A
          source_id: s_9walWAVyBn3ACYfjDa_s3g
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誨 与 王學謨 为同胞（CBDB 记「兄」），王學謨 之父／母即 王學誨 之父／母。
          source:
            id: s_9walWAVyBn3ACYfjDa_s3g
            source_type: api_record
            title: 中国历代人物传记资料库：王學誨（CBDB 316268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json
            external_identifier: CBDB:316268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_An7txcyErXqQRxNdWrST9P
        status: active
        display_name: 王學誨
        merged_into_person_id: null
    - claim:
        id: c_oi419_HCycLLJplcKzKxb0
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvlv7JpHJrgmd-Vte6QnVa
          claim_id: c_oi419_HCycLLJplcKzKxb0
          source_id: s_HgD0Xxzrq68_JZ66XYjctx
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學讓 与 王學謨 为同胞（CBDB 记「兄」），王學謨 之父／母即 王學讓 之父／母。
          source:
            id: s_HgD0Xxzrq68_JZ66XYjctx
            source_type: api_record
            title: 中国历代人物传记资料库：王學讓（CBDB 316266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json
            external_identifier: CBDB:316266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HRM7GsrH6RKGj5BRRsKgDG
        status: active
        display_name: 王學讓
        merged_into_person_id: null
    - claim:
        id: c_x84_sPMwPmdxLZYdR13QVN
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmNztxaoRL5NcE9AQEx6nn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGL2lA55yiaR9TD-e1y6lu
          claim_id: c_x84_sPMwPmdxLZYdR13QVN
          source_id: s_1t0BHaXzrb_ihFLgw9K1Ua
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學詩 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學詩 之父／母。
          source:
            id: s_1t0BHaXzrb_ihFLgw9K1Ua
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 316259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json
            external_identifier: CBDB:316259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmNztxaoRL5NcE9AQEx6nn
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_OQefSWUO-Yz-veWbUhdrhA
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkzpp5j1RBTlnLdYAgr5NR
          claim_id: c_OQefSWUO-Yz-veWbUhdrhA
          source_id: s_oJhsoIN3aDNxIX2WLEIDFq
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學仕 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學仕 之父／母。
          source:
            id: s_oJhsoIN3aDNxIX2WLEIDFq
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WYkYmR1X2JspjyQZrTdLz8
        status: active
        display_name: 王學仕
        merged_into_person_id: null
    - claim:
        id: c_iU2fqdJkR8I9y-aUYo6Af6
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ds7Xs587VEtetVc8UbqxG2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMsb8ryViJh8_P40a7GldA
          claim_id: c_iU2fqdJkR8I9y-aUYo6Af6
          source_id: s_Ke6XlMMCQU5xScNokoFPNk
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誠 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學誠 之父／母。
          source:
            id: s_Ke6XlMMCQU5xScNokoFPNk
            source_type: api_record
            title: 中国历代人物传记资料库：王學誠（CBDB 316260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316260&o=json
            external_identifier: CBDB:316260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ds7Xs587VEtetVc8UbqxG2
        status: active
        display_name: 王學誠
        merged_into_person_id: null
    - claim:
        id: c_HfwKTKGWudfw_R1-HMTfgd
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j1YheM1SAEiE8T3Hfe1zHv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ch6MTvGgdzKGGcfJHcDUhP
          claim_id: c_HfwKTKGWudfw_R1-HMTfgd
          source_id: s_sT6az9mt5XxOmZ8Ffs6gnC
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誦 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學誦 之父／母。
          source:
            id: s_sT6az9mt5XxOmZ8Ffs6gnC
            source_type: api_record
            title: 中国历代人物传记资料库：王學誦（CBDB 316265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316265&o=json
            external_identifier: CBDB:316265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j1YheM1SAEiE8T3Hfe1zHv
        status: active
        display_name: 王學誦
        merged_into_person_id: null
    - claim:
        id: c_ukv9hNgk2-LGg8tnOHUvwy
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qYb8W8AwRpiY9fnCPE4R5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TVC0yz-fu89KPALBH0I10d
          claim_id: c_ukv9hNgk2-LGg8tnOHUvwy
          source_id: s_sQm9jJoijcRRHkONiIs_sd
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王化行 与 王學謨 为同胞（CBDB 记「兄」），王學謨 之父／母即 王化行 之父／母。
          source:
            id: s_sQm9jJoijcRRHkONiIs_sd
            source_type: api_record
            title: 中国历代人物传记资料库：王化行（CBDB 316267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316267&o=json
            external_identifier: CBDB:316267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qYb8W8AwRpiY9fnCPE4R5L
        status: active
        display_name: 王化行
        merged_into_person_id: null
    - claim:
        id: c_ZuQ1E_4MyfI0wwH6_kzaKc
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_saQsFGrBWgv33hMqqA1j8Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vp3Y4bIiCpd4WaZXEUkO9A
          claim_id: c_ZuQ1E_4MyfI0wwH6_kzaKc
          source_id: s_sn5hUxj3A-hCDIEilb87Zt
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學吉 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學吉 之父／母。
          source:
            id: s_sn5hUxj3A-hCDIEilb87Zt
            source_type: api_record
            title: 中国历代人物传记资料库：王學吉（CBDB 316261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316261&o=json
            external_identifier: CBDB:316261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_saQsFGrBWgv33hMqqA1j8Q
        status: active
        display_name: 王學吉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世卿 | accepted |
| bio.summary | 王世卿，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |
| children | p_4RJHMKDkRKmqcKp8MAKp3U | 王學誥 | accepted |
| children | p_An7txcyErXqQRxNdWrST9P | 王學誨 | accepted |
| children | p_HRM7GsrH6RKGj5BRRsKgDG | 王學讓 | accepted |
| children | p_VmNztxaoRL5NcE9AQEx6nn | 王學詩 | accepted |
| children | p_WYkYmR1X2JspjyQZrTdLz8 | 王學仕 | accepted |
| children | p_ds7Xs587VEtetVc8UbqxG2 | 王學誠 | accepted |
| children | p_j1YheM1SAEiE8T3Hfe1zHv | 王學誦 | accepted |
| children | p_qYb8W8AwRpiY9fnCPE4R5L | 王化行 | accepted |
| children | p_saQsFGrBWgv33hMqqA1j8Q | 王學吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化行（CBDB 316267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316267&o=json)
- [中国历代人物传记资料库：王世卿（CBDB 316256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json)
- [中国历代人物传记资料库：王學誠（CBDB 316260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316260&o=json)
- [中国历代人物传记资料库：王學誥（CBDB 316262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json)
- [中国历代人物传记资料库：王學誨（CBDB 316268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json)
- [中国历代人物传记资料库：王學吉（CBDB 316261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316261&o=json)
- [中国历代人物传记资料库：王學讓（CBDB 316266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 316259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json)
- [中国历代人物传记资料库：王學仕（CBDB 316264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json)
- [中国历代人物传记资料库：王學誦（CBDB 316265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316265&o=json)
