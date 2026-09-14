---
schema: wang-person/v1
id: p_dMddXN9MM9RH4e355Y4XBH
status: active
merged_into: null
display_name: 王俊
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sfNw5s4K6zu9PnYvK9D2tG
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vK1mAbJCK7ooaaXGkRDF8y
          claim_id: c_sfNw5s4K6zu9PnYvK9D2tG
          source_id: s_uPdDXSM8huR9LUKmSpywQC
          stance: supports
          locator: CBDB:238510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238510）
          source: &a1
            id: s_uPdDXSM8huR9LUKmSpywQC
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 238510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json
            external_identifier: CBDB:238510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fzqYbGQNQT2tBJWNaRGmMY
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wnkvw74XgQdQ6Coxkyk2DP
          claim_id: c_fzqYbGQNQT2tBJWNaRGmMY
          source_id: s_uPdDXSM8huR9LUKmSpywQC
          stance: supports
          locator: CBDB:238510
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__FVpZF2L0Ur4VVrLTRzzzp
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LpMHYjMg2BhRe212CnJZY9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NItobHpLMrtgIomtPky19Z
          claim_id: c__FVpZF2L0Ur4VVrLTRzzzp
          source_id: s_uPdDXSM8huR9LUKmSpywQC
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LpMHYjMg2BhRe212CnJZY9
        status: active
        display_name: 王凱
        merged_into_person_id: null
    - claim:
        id: c_Eaw_SAOF4jLDj7pkFyKuYo
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZJiwuzc7-3T-Y74B88b3S
          claim_id: c_Eaw_SAOF4jLDj7pkFyKuYo
          source_id: s__BBXafZC4A0YJ7KVgpqJzU
          stance: supports
          locator: CBDB：兄弟 王凱（207962）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王原 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王原 之父／母。
          source:
            id: s__BBXafZC4A0YJ7KVgpqJzU
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 238514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json
            external_identifier: CBDB:238514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        status: active
        display_name: 王原
        merged_into_person_id: null
    - claim:
        id: c_0s59Nedu-48Q7xS-eoEqTK
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XxdVLr57DMCPdubl5qcEh
          claim_id: c_0s59Nedu-48Q7xS-eoEqTK
          source_id: s_wMj4VmwCKPSQBjBi-vW6Z4
          stance: supports
          locator: CBDB：兄弟 王凱（207962）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王名 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王名 之父／母。
          source:
            id: s_wMj4VmwCKPSQBjBi-vW6Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 238513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json
            external_identifier: CBDB:238513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mCp2CE5cWVcFX6hFKr6Bi7
        status: active
        display_name: 王名
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LpMHYjMg2BhRe212CnJZY9 | 王凱 | accepted |
| children | p_ZEHF2Z9HLeYrfnNXDKL7sN | 王原 | accepted |
| children | p_mCp2CE5cWVcFX6hFKr6Bi7 | 王名 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 238510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json)
- [中国历代人物传记资料库：王名（CBDB 238513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json)
- [中国历代人物传记资料库：王原（CBDB 238514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json)
