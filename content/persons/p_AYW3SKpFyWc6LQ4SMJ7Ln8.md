---
schema: wang-person/v1
id: p_AYW3SKpFyWc6LQ4SMJ7Ln8
status: active
merged_into: null
display_name: 王祥
cbdb_id: 25785
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fYfDA2FeciLSb9o5MAJoKv
        subject_person_id: p_AYW3SKpFyWc6LQ4SMJ7Ln8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥，西晉人物。CBDB 记录其籍贯记录为沂水。中国历代人物传记资料库（CBDB）以人物编号 25785 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QvBxWMfB4Fpi19KFdXQhp2
          claim_id: c_fYfDA2FeciLSb9o5MAJoKv
          source_id: s_S8JbQJEnNKo2LHwZj9XxHh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S8JbQJEnNKo2LHwZj9XxHh
            source_type: api_record
            title: 维基数据：王祥（Q45408733）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408733
            external_identifier: Q45408733
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_VECSLBLlFpBQgMO3Rg_eZv
          claim_id: c_fYfDA2FeciLSb9o5MAJoKv
          source_id: s_DdwRffm45Q3MsqSCfS7SF8
          stance: supports
          locator: CBDB:25785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DdwRffm45Q3MsqSCfS7SF8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王祥（25785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25785&o=json
            external_identifier: CBDB:25785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:01.400Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zth5c9BH4XXkRbM4v6zUew
        subject_person_id: p_AYW3SKpFyWc6LQ4SMJ7Ln8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f53uRnaL5tAPSBPpGUghEm
          claim_id: c_Zth5c9BH4XXkRbM4v6zUew
          source_id: s_DdwRffm45Q3MsqSCfS7SF8
          stance: supports
          locator: Q45408733
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vTYZYfcF9ME18ytV4kej2V
          claim_id: c_Zth5c9BH4XXkRbM4v6zUew
          source_id: s_S8JbQJEnNKo2LHwZj9XxHh
          stance: supports
          locator: Q45408733
          quotation: null
          interpretation_note: null
          source:
            id: s_S8JbQJEnNKo2LHwZj9XxHh
            source_type: api_record
            title: 维基数据：王祥（Q45408733）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408733
            external_identifier: Q45408733
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C29ZpwpAkcE4aS3my4YgxL
        subject_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_AYW3SKpFyWc6LQ4SMJ7Ln8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2jZbDpkCbbinjfhLxa1YZk
          claim_id: c_C29ZpwpAkcE4aS3my4YgxL
          source_id: s_S8JbQJEnNKo2LHwZj9XxHh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_S8JbQJEnNKo2LHwZj9XxHh
            source_type: api_record
            title: 维基数据：王祥（Q45408733）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408733
            external_identifier: Q45408733
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_DKP4vBo27jCu63Hr8yU5JY
          claim_id: c_C29ZpwpAkcE4aS3my4YgxL
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
        - id: cs_kSMe73tSdXRvAbpfBQoE4K
          claim_id: c_C29ZpwpAkcE4aS3my4YgxL
          source_id: s_usi9A3QdLgsHXzkSBTdf9P
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_usi9A3QdLgsHXzkSBTdf9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:33.735Z
            metadata_json: null
      object_person:
        id: p_G6A9Mv1GnTEMMvApxP4pWa
        status: active
        display_name: 王融
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祥，西晉人物。CBDB 记录其籍贯记录为沂水。中国历代人物传记资料库（CBDB）以人物编号 25785 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G6A9Mv1GnTEMMvApxP4pWa | 王融 | accepted |

## 外部来源

- [维基数据：王祥（Q45408733）](https://www.wikidata.org/wiki/Q45408733)
- [維基數據：王融（Q22814786）](https://www.wikidata.org/wiki/Q22814786)
- [CBDB 中国历代人物传记资料库：王融（25784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json)
- [CBDB 中国历代人物传记资料库：王祥（25785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25785&o=json)
