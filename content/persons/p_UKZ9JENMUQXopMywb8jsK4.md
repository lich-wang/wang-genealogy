---
schema: wang-person/v1
id: p_UKZ9JENMUQXopMywb8jsK4
status: active
merged_into: null
display_name: 王撝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oN35XX772pWqm3RZ8QQ3ua
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJYCNJE7rCnDE2yu98MM5X
          claim_id: c_oN35XX772pWqm3RZ8QQ3ua
          source_id: s_63pKKv3HG9tRh4545qEzmA
          stance: supports
          locator: CBDB:19879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19879）
          source: &a1
            id: s_63pKKv3HG9tRh4545qEzmA
            source_type: api_record
            title: 中国历代人物传记资料库：王撝（CBDB 19879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19879&o=json
            external_identifier: CBDB:19879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8z1BkfWdT4kExPfFcrvMk8
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝，宋人物。籍贯祥符，身份为史學家，入仕進士，曾任將作監主簿、通判、縣丞。（中国历代人物传记资料库 CBDB 19879）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YN2qUT46aoj34xKYEhhRjv
          claim_id: c_8z1BkfWdT4kExPfFcrvMk8
          source_id: s_63pKKv3HG9tRh4545qEzmA
          stance: supports
          locator: CBDB:19879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_S8n81wLCAc80e6p7un2vf9
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_90b68fSDbwvk2NEiAKJcEt
          claim_id: c_S8n81wLCAc80e6p7un2vf9
          source_id: s_tgQaYyBVLUeaz2cLVjcGjv
          stance: supports
          locator: CBDB 双向互证（父 王撝 ⇄ 子 王應鳳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tgQaYyBVLUeaz2cLVjcGjv
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 19881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json
            external_identifier: CBDB:19881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dLxnrx2EJoX5qeZ6Qa78ZU
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
    - claim:
        id: c_mx_L2N6MfJp1sbR4blS8D5
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_57pTXqfVIc1z29EJwS7YQC
          claim_id: c_mx_L2N6MfJp1sbR4blS8D5
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: CBDB 双向互证（父 王撝 ⇄ 子 王應麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_uY4yrHNDmKu8LRV9wWFXqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 19880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19880&o=json
            external_identifier: CBDB:19880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pyiMMQeppjms8sZr1Bh4Pc
        status: active
        display_name: 王應麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FojAqngVwHp07_2tCaSTNL
        subject_person_id: p_uj85L9awApVoYrRPajReL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UKZ9JENMUQXopMywb8jsK4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8cZmWVtHeRkjaPfbuxPU9
          claim_id: c_FojAqngVwHp07_2tCaSTNL
          source_id: s_A33HFE2WqEdA9EPgjLpQjh
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A33HFE2WqEdA9EPgjLpQjh
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 27628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27628&o=json
            external_identifier: CBDB:27628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uj85L9awApVoYrRPajReL6
        status: active
        display_name: 王安道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王撝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撝 | accepted |
| bio.summary | 王撝，宋人物。籍贯祥符，身份为史學家，入仕進士，曾任將作監主簿、通判、縣丞。（中国历代人物传记资料库 CBDB 19879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dLxnrx2EJoX5qeZ6Qa78ZU | 王應鳳 | accepted |
| children | p_pyiMMQeppjms8sZr1Bh4Pc | 王應麟 | accepted |
| ancestors | p_uj85L9awApVoYrRPajReL6 | 王安道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 27628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27628&o=json)
- [中国历代人物传记资料库：王撝（CBDB 19879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19879&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 19881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19881&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 19880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19880&o=json)
