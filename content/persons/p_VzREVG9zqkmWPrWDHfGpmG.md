---
schema: wang-person/v1
id: p_VzREVG9zqkmWPrWDHfGpmG
status: active
merged_into: null
display_name: 王楊
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CcjBS32W2pgVqXrCGncFEz
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47V612hNWzRtQHpXi2jGzn
          claim_id: c_CcjBS32W2pgVqXrCGncFEz
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
          stance: supports
          locator: CBDB:202111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202111）
          source: &a1
            id: s_zwDHxsU2zXkinfauZuk8Ha
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 202111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202111&o=json
            external_identifier: CBDB:202111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TpsMmXy4zPMe7ugtSHGEw
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1HSLzAm6E2XK9CBGkRqUP
          claim_id: c_7TpsMmXy4zPMe7ugtSHGEw
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vV6axvWZ62snYNQEphskDu
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊（生于1493年），明人物。明清進士進士，籍贯會稽，入仕進士，曾任兵部員外郎。（中国历代人物传记资料库 CBDB 202111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JfzpiqdVlTwSNGk4aZJHNs
          claim_id: c_vV6axvWZ62snYNQEphskDu
          source_id: s_zwDHxsU2zXkinfauZuk8Ha
          stance: supports
          locator: CBDB:202111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-spPFdJX8F8qXJ2oyOFgtX
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q76CzQbilqRHviKOmTCejN
          claim_id: c_-spPFdJX8F8qXJ2oyOFgtX
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CYD2TTsF_5cI6qpfLk4_zB
        subject_person_id: p_jPTs2aJkrLkZiHjYSYA58S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7n1IPLL3rTvzBmxFYr4Dy_
          claim_id: c_CYD2TTsF_5cI6qpfLk4_zB
          source_id: s_3nx7D8qK1jFr1GVzDUxr2A
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nx7D8qK1jFr1GVzDUxr2A
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 283694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json
            external_identifier: CBDB:283694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jPTs2aJkrLkZiHjYSYA58S
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_22R0TLdVVgjM2RPTMUu0Pw
        subject_person_id: p_QGqDLq88YKPedgWNSWnb4x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IrDPJZUyOE-G3xjSpaALlR
          claim_id: c_22R0TLdVVgjM2RPTMUu0Pw
          source_id: s_WxEAYHEcui5ogeURTMBwGy
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WxEAYHEcui5ogeURTMBwGy
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 283693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283693&o=json
            external_identifier: CBDB:283693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QGqDLq88YKPedgWNSWnb4x
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GgBh2auK8RVvqWbllYAO-w
        subject_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hpzItsMJGjrT44SJYKHX6h
          claim_id: c_GgBh2auK8RVvqWbllYAO-w
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5z7BLDBnQLUq2Bc4drf2K2
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_GoKxYkmHGE2mZ7idWB58Da
        subject_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dnQAALnw8aQuyfa9ez5gs6
          claim_id: c_GoKxYkmHGE2mZ7idWB58Da
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KyBTH9FR7ui82xq3PNJs3r
        status: active
        display_name: 王椆
        merged_into_person_id: null
    - claim:
        id: c_vemJ93CZAcGO3A69dEFaui
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aREPdXQ8PmYLsBwtyUdHja
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_5wEL4g-Tez19AXctUmB4
          claim_id: c_vemJ93CZAcGO3A69dEFaui
          source_id: s_sGKtCwS0WOZMTMcmIiu2al
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sGKtCwS0WOZMTMcmIiu2al
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 283704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json
            external_identifier: CBDB:283704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aREPdXQ8PmYLsBwtyUdHja
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_Bb5UbZbamW2h51Gc9qT91F
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bekqpXD2bbq8cdPpgMgCDC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9owdXAqlFHJy67GJ1HNj1j
          claim_id: c_Bb5UbZbamW2h51Gc9qT91F
          source_id: s_knAdtfDuXJ_DJuZVQr2jfm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_knAdtfDuXJ_DJuZVQr2jfm
            source_type: api_record
            title: 中国历代人物传记资料库：王栩（CBDB 283703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json
            external_identifier: CBDB:283703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bekqpXD2bbq8cdPpgMgCDC
        status: active
        display_name: 王栩
        merged_into_person_id: null
    - claim:
        id: c_WGTXhvZwykJYxI0R6uUIW-
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uyf2XH4InGokPKf7jDhxlk
          claim_id: c_WGTXhvZwykJYxI0R6uUIW-
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i1EJ1VcpHtzDWYAhxWgCGc
        status: active
        display_name: 王棟
        merged_into_person_id: null
---

# 王楊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楊 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | 王楊（生于1493年），明人物。明清進士進士，籍贯會稽，入仕進士，曾任兵部員外郎。（中国历代人物传记资料库 CBDB 202111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| ancestors | p_jPTs2aJkrLkZiHjYSYA58S | 王鑑 | accepted |
| ancestors | p_QGqDLq88YKPedgWNSWnb4x | 王忠 | accepted |
| other | p_5z7BLDBnQLUq2Bc4drf2K2 | 王桐 | accepted |
| other | p_KyBTH9FR7ui82xq3PNJs3r | 王椆 | accepted |
| other | p_aREPdXQ8PmYLsBwtyUdHja | 王槐 | accepted |
| other | p_bekqpXD2bbq8cdPpgMgCDC | 王栩 | accepted |
| other | p_i1EJ1VcpHtzDWYAhxWgCGc | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椆（CBDB 283702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json)
- [中国历代人物传记资料库：王棟（CBDB 283701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json)
- [中国历代人物传记资料库：王槐（CBDB 283704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 283694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283694&o=json)
- [中国历代人物传记资料库：王桐（CBDB 283698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json)
- [中国历代人物传记资料库：王栩（CBDB 283703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json)
- [中国历代人物传记资料库：王楊（CBDB 202111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202111&o=json)
- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
- [中国历代人物传记资料库：王忠（CBDB 283693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283693&o=json)
