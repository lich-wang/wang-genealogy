---
schema: wang-person/v1
id: p_7KQYA5hnGXuoCHKsGtX71z
status: active
merged_into: null
display_name: 王安上
cbdb_id: 1761
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1nMPYtFNHoeWkGM2Bv4p6D
        subject_person_id: p_7KQYA5hnGXuoCHKsGtX71z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安上，宋人物。CBDB 记录其籍贯记录为臨川，曾任宣德郎、三司度支判官。中国历代人物传记资料库（CBDB）以人物编号 1761 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iBx6Zz9pKXC2N9wB4dM5XN
          claim_id: c_1nMPYtFNHoeWkGM2Bv4p6D
          source_id: s_NxvU4LY531purGCqVMaSQi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NxvU4LY531purGCqVMaSQi
            source_type: api_record
            title: 维基数据：王安上（Q45359357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359357
            external_identifier: Q45359357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.851Z
            metadata_json: null
        - id: cs_6P2lTjCQFyzO8LjMVikLiB
          claim_id: c_1nMPYtFNHoeWkGM2Bv4p6D
          source_id: s_4wizBpwXC5g6JbXBq94s31
          stance: supports
          locator: CBDB:1761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4wizBpwXC5g6JbXBq94s31
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安上（1761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1761&o=json
            external_identifier: CBDB:1761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:12.987Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vqpeh6hm3sVr9oGFM8fQS9
        subject_person_id: p_7KQYA5hnGXuoCHKsGtX71z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安上
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_26z1bRWzptRPt3evXXdjdT
          claim_id: c_Vqpeh6hm3sVr9oGFM8fQS9
          source_id: s_4wizBpwXC5g6JbXBq94s31
          stance: supports
          locator: Q45359357
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_REm3iv356jsXbuLFXt3BJK
          claim_id: c_Vqpeh6hm3sVr9oGFM8fQS9
          source_id: s_NxvU4LY531purGCqVMaSQi
          stance: supports
          locator: Q45359357
          quotation: null
          interpretation_note: null
          source:
            id: s_NxvU4LY531purGCqVMaSQi
            source_type: api_record
            title: 维基数据：王安上（Q45359357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359357
            external_identifier: Q45359357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.851Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D9oUQBj4wwcBALcZL34Tf6
        subject_person_id: p_TCJasuo9M43ytz26ea5oSn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7KQYA5hnGXuoCHKsGtX71z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A4pcS5YuBBWwneF55Xg44w
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_RcEL59cJV9N9h52CGk5rEv
          stance: supports
          locator: 亲属关系：七子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RcEL59cJV9N9h52CGk5rEv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益（7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:19.208Z
            metadata_json: null
        - id: cs_s85DhXME7P822MGPtYYg2N
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_c3iRor2ubBu2jQ1UWHJaUS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c3iRor2ubBu2jQ1UWHJaUS
            source_type: api_record
            title: 維基數據：王益（Q45365249）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45365249
            external_identifier: Q45365249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:54.906Z
            metadata_json: null
        - id: cs_4rZ5m1qb5jvFiB4dZMPJvW
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_NxvU4LY531purGCqVMaSQi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NxvU4LY531purGCqVMaSQi
            source_type: api_record
            title: 维基数据：王安上（Q45359357）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359357
            external_identifier: Q45359357
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.851Z
            metadata_json: null
        - id: cs_Uvk5sd6xC8397tCWTsWAL4
          claim_id: c_D9oUQBj4wwcBALcZL34Tf6
          source_id: s_4wizBpwXC5g6JbXBq94s31
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_4wizBpwXC5g6JbXBq94s31
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安上（1761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1761&o=json
            external_identifier: CBDB:1761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:12.987Z
            metadata_json: null
      object_person:
        id: p_TCJasuo9M43ytz26ea5oSn
        status: active
        display_name: 王益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安上

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安上，宋人物。CBDB 记录其籍贯记录为臨川，曾任宣德郎、三司度支判官。中国历代人物传记资料库（CBDB）以人物编号 1761 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王安上 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TCJasuo9M43ytz26ea5oSn | 王益 | accepted |

## 外部来源

- [维基数据：王安上（Q45359357）](https://www.wikidata.org/wiki/Q45359357)
- [維基數據：王益（Q45365249）](https://www.wikidata.org/wiki/Q45365249)
- [CBDB 中国历代人物传记资料库：王安上（1761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1761&o=json)
- [CBDB 中国历代人物传记资料库：王益（7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
