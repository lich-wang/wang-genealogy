---
schema: wang-person/v1
id: p_3ZRkLDEZG2dQQN3S5tXUNJ
status: active
merged_into: null
display_name: 王诠
cbdb_id: 175868
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yM3H6RGCB8ei1m2J6xuuCp
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诠（卒于687年），唐人物。CBDB 记录其籍贯记录为長安，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175868 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sNpWhFmEu3x3DnrtPXyREe
          claim_id: c_yM3H6RGCB8ei1m2J6xuuCp
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_0tCDIIw2-qWFAW83wjqOwe
          claim_id: c_yM3H6RGCB8ei1m2J6xuuCp
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: CBDB:175868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dHjpWqVRno2YbhEfxoFFpd
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 687年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0687-01-01
            latest: 0687-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_APXhYVskBvEtC5Ey95mmYa
          claim_id: c_dHjpWqVRno2YbhEfxoFFpd
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EV8QHy8T6XtfusGrQHzNx5
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_23Wn3jnXYmJwTW4JJBzfRP
          claim_id: c_EV8QHy8T6XtfusGrQHzNx5
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: Q45678043
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rA8joG1vMsG1Ub5PPrF4TE
          claim_id: c_EV8QHy8T6XtfusGrQHzNx5
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: Q45678043
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K97pTqgkv8cCsNKKoVdw5V
        subject_person_id: p_6PF94LpiFwv7ZBPi4LiuxW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jvNuBEuKcQt4SmGbjVpmmU
          claim_id: c_K97pTqgkv8cCsNKKoVdw5V
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_VrBYYnKVBMaAJsUw8a5qRF
          claim_id: c_K97pTqgkv8cCsNKKoVdw5V
          source_id: s_SRDMnFcLCcNi5jydCLZA49
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SRDMnFcLCcNi5jydCLZA49
            source_type: api_record
            title: 维基数据：王景孝（Q45678009）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678009
            external_identifier: Q45678009
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_6PF94LpiFwv7ZBPi4LiuxW
        status: active
        display_name: 王景孝
        merged_into_person_id: null
  children:
    - claim:
        id: c_f78nVkANSGvLS6ocbiwrSr
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nv7JbHovPKAVDPNRsdPEsD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AaNNajHm4TyGiVDXYhEBCo
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_K3aK5Qswb1kikjpaZELbEh
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_RAKgYa4mJu9H7euFu96z2Q
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_nv7JbHovPKAVDPNRsdPEsD
        status: active
        display_name: 王文洎
        merged_into_person_id: null
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
          source: *a2
        - id: cs_FMox9cC5pwLJJrDMdvrBY7
          claim_id: c_1wgwQUpCGHpbEqT3zFRCYs
          source_id: s_34u75gvVVSjmfcPKexNLSW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
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
        - id: cs_HmMaiFrz41GtaBeFjqQS8N
          claim_id: c_1wgwQUpCGHpbEqT3zFRCYs
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_QkhCaGoZhcyF2De4tN5s15
        status: active
        display_name: 王文济
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王诠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诠（卒于687年），唐人物。CBDB 记录其籍贯记录为長安，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175868 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 687年 | accepted |
| name.primary | 王诠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6PF94LpiFwv7ZBPi4LiuxW | 王景孝 | accepted |
| children | p_nv7JbHovPKAVDPNRsdPEsD | 王文洎 | accepted |
| children | p_QkhCaGoZhcyF2De4tN5s15 | 王文济 | accepted |

## 外部来源

- [维基数据：王景孝（Q45678009）](https://www.wikidata.org/wiki/Q45678009)
- [维基数据：王诠（Q45678043）](https://www.wikidata.org/wiki/Q45678043)
- [维基数据：王文洎（Q45678375）](https://www.wikidata.org/wiki/Q45678375)
- [维基数据：王文济（Q45678076）](https://www.wikidata.org/wiki/Q45678076)
- [CBDB 中国历代人物传记资料库：王詮（175868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175868&o=json)
