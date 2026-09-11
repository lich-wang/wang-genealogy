---
schema: wang-person/v1
id: p_QkhCaGoZhcyF2De4tN5s15
status: active
merged_into: null
display_name: 王文济
cbdb_id: 175869
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sGaLd8XURCdqdPTyx9U5my
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文济
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7MU1qrEVM3JDBfDZX2aNjN
          claim_id: c_sGaLd8XURCdqdPTyx9U5my
          source_id: s_34u75gvVVSjmfcPKexNLSW
          stance: supports
          locator: Q45678076
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_34u75gvVVSjmfcPKexNLSW
            source_type: api_record
            title: 维基数据：王文济（Q45678076）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678076
            external_identifier: Q45678076
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_B2wWfKDh68Akn1HpTbsBxN
          claim_id: c_sGaLd8XURCdqdPTyx9U5my
          source_id: s_XWWJ8icSstrGKhd5mUjJqm
          stance: supports
          locator: CBDB:175869
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_XWWJ8icSstrGKhd5mUjJqm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文濟（175869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json
            external_identifier: CBDB:175869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3SxHiZJxttgZS2xhtPZ9V
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 175869
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fn3DD5S8kccsFC16XJiCbk
          claim_id: c_G3SxHiZJxttgZS2xhtPZ9V
          source_id: s_34u75gvVVSjmfcPKexNLSW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NnFMHHi9mdGmV1bk3CMA9S
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXESB9oMEuvcUD2xan9mNU
          claim_id: c_NnFMHHi9mdGmV1bk3CMA9S
          source_id: s_34u75gvVVSjmfcPKexNLSW
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1wgwQUpCGHpbEqT3zFRCYs
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkhCaGoZhcyF2De4tN5s15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DATQFgM7zaqierV8WyP2jT
          claim_id: c_1wgwQUpCGHpbEqT3zFRCYs
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7nxCcXcQbcV52na55JgCb6
            source_type: api_record
            title: 维基数据：王诠（Q45678043）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678043
            external_identifier: Q45678043
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_FMox9cC5pwLJJrDMdvrBY7
          claim_id: c_1wgwQUpCGHpbEqT3zFRCYs
          source_id: s_34u75gvVVSjmfcPKexNLSW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_HmMaiFrz41GtaBeFjqQS8N
          claim_id: c_1wgwQUpCGHpbEqT3zFRCYs
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JsU8nFXR4zJ4sDBJuQb5qn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王詮（175868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175868&o=json
            external_identifier: CBDB:175868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.333Z
            metadata_json: null
      object_person:
        id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        status: active
        display_name: 王诠
        merged_into_person_id: null
  children:
    - claim:
        id: c_iJgAVG3z2SBbGaXmhVL54S
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EoFqrFneyxXNJVFsSfLURF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdec87rNEvftTk1KoxpvAM
          claim_id: c_iJgAVG3z2SBbGaXmhVL54S
          source_id: s_XWWJ8icSstrGKhd5mUjJqm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a2
      object_person:
        id: p_EoFqrFneyxXNJVFsSfLURF
        status: active
        display_name: 王仁忠
        merged_into_person_id: null
    - claim:
        id: c_xwT1cdhBh3NcXwE4g65TdM
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9bZbYkH5RjL9GBaT5uVJBX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hj3PRtwkG21E1d2bsB9bEm
          claim_id: c_xwT1cdhBh3NcXwE4g65TdM
          source_id: s_XWWJ8icSstrGKhd5mUjJqm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a2
      object_person:
        id: p_9bZbYkH5RjL9GBaT5uVJBX
        status: active
        display_name: 王屴
        merged_into_person_id: null
    - claim:
        id: c_ZZpe67JK_JtubTZDM2yX8X
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BebbGAkpNrhM7t1MBqkTy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyUi1u66sZ7P9tEnHBftBY
          claim_id: c_ZZpe67JK_JtubTZDM2yX8X
          source_id: s_cpHKe2VFE454CeAqDJm1vK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cpHKe2VFE454CeAqDJm1vK
            source_type: api_record
            title: 中国历代人物传记资料库：王崟（CBDB 157952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157952&o=json
            external_identifier: CBDB:157952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BebbGAkpNrhM7t1MBqkTy2
        status: active
        display_name: 王崟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文济

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文济 | accepted |
| bio.summary | Tang dynasty person CBDB = 175869 | accepted |
| death.date | 724年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3ZRkLDEZG2dQQN3S5tXUNJ | 王诠 | accepted |
| children | p_EoFqrFneyxXNJVFsSfLURF | 王仁忠 | accepted |
| children | p_9bZbYkH5RjL9GBaT5uVJBX | 王屴 | accepted |
| children | p_BebbGAkpNrhM7t1MBqkTy2 | 王崟 | accepted |

## 外部来源

- [维基数据：王诠（Q45678043）](https://www.wikidata.org/wiki/Q45678043)
- [维基数据：王文济（Q45678076）](https://www.wikidata.org/wiki/Q45678076)
- [中国历代人物传记资料库：王崟（CBDB 157952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157952&o=json)
- [CBDB 中国历代人物传记资料库：王詮（175868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175868&o=json)
- [CBDB 中国历代人物传记资料库：王文濟（175869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json)
