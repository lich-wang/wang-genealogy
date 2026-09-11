---
schema: wang-person/v1
id: p_fNDQKdiX4EXsh5cDx6tGL7
status: active
merged_into: null
display_name: 王咸融
cbdb_id: 119747
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCxaZqbm6oTwSJLU18FALj
        subject_person_id: p_fNDQKdiX4EXsh5cDx6tGL7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸融，宋人物。CBDB 记录其籍贯记录为平棘。中国历代人物传记资料库（CBDB）以人物编号 119747 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jVvWL254ymgaK73nzeYNuQ
          claim_id: c_dCxaZqbm6oTwSJLU18FALj
          source_id: s_iGEYpW663wMzxHLYoUgByd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iGEYpW663wMzxHLYoUgByd
            source_type: api_record
            title: 维基数据：王咸融（Q45493802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493802
            external_identifier: Q45493802
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_u1tv60sK7wF2QRyQ4dl8Vy
          claim_id: c_dCxaZqbm6oTwSJLU18FALj
          source_id: s_4jEKYr1b3sefvVFW4AJoyn
          stance: supports
          locator: CBDB:119747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4jEKYr1b3sefvVFW4AJoyn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王咸融（119747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119747&o=json
            external_identifier: CBDB:119747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:05.032Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNma9u3P5hiyoLfkF6fPjk
        subject_person_id: p_fNDQKdiX4EXsh5cDx6tGL7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咸融
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_27eMsAnA6iTqdXewmwjnD3
          claim_id: c_LNma9u3P5hiyoLfkF6fPjk
          source_id: s_4jEKYr1b3sefvVFW4AJoyn
          stance: supports
          locator: Q45493802
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WWXDnNH4JVPRsM1Lgm3MVS
          claim_id: c_LNma9u3P5hiyoLfkF6fPjk
          source_id: s_iGEYpW663wMzxHLYoUgByd
          stance: supports
          locator: Q45493802
          quotation: null
          interpretation_note: null
          source:
            id: s_iGEYpW663wMzxHLYoUgByd
            source_type: api_record
            title: 维基数据：王咸融（Q45493802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493802
            external_identifier: Q45493802
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1AC3gpcwuLXRCXCPDAxHz4
        subject_person_id: p_mDQwQDowHukUUJhyJA2Q4Z
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_fNDQKdiX4EXsh5cDx6tGL7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ghb96Q6kVFYQwEsk3TrbPX
          claim_id: c_1AC3gpcwuLXRCXCPDAxHz4
          source_id: s_iGEYpW663wMzxHLYoUgByd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iGEYpW663wMzxHLYoUgByd
            source_type: api_record
            title: 维基数据：王咸融（Q45493802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493802
            external_identifier: Q45493802
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_QfMyQ2dbFYuN8ZLCbtt2DA
          claim_id: c_1AC3gpcwuLXRCXCPDAxHz4
          source_id: s_ERXdoZiQwdbzcfqtnQe5F8
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋史
          source:
            id: s_ERXdoZiQwdbzcfqtnQe5F8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王德用（1893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json
            external_identifier: CBDB:1893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:33.922Z
            metadata_json: null
        - id: cs_jT3MwEsYEELQp6ndGxrJ3b
          claim_id: c_1AC3gpcwuLXRCXCPDAxHz4
          source_id: s_81a22jZyFPFGnFLoTT9eP3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_81a22jZyFPFGnFLoTT9eP3
            source_type: api_record
            title: 维基数据：王德用（Q10414172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414172
            external_identifier: Q10414172
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.212Z
            metadata_json: null
      object_person:
        id: p_mDQwQDowHukUUJhyJA2Q4Z
        status: active
        display_name: 王德用
        merged_into_person_id: null
    - claim:
        id: c_njD54nyMHRjdOlU9wj_M3k
        subject_person_id: p_5H9kac1NHpV2vu5J2pvsAi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNDQKdiX4EXsh5cDx6tGL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-RwBrUlXqiSR8tNeP4pEF
          claim_id: c_njD54nyMHRjdOlU9wj_M3k
          source_id: s_4jEKYr1b3sefvVFW4AJoyn
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5H9kac1NHpV2vu5J2pvsAi
        status: active
        display_name: 王德用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王咸融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王咸融，宋人物。CBDB 记录其籍贯记录为平棘。中国历代人物传记资料库（CBDB）以人物编号 119747 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王咸融 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mDQwQDowHukUUJhyJA2Q4Z | 王德用 | accepted |
| parents | p_5H9kac1NHpV2vu5J2pvsAi | 王德用 | accepted |

## 外部来源

- [维基数据：王德用（Q10414172）](https://www.wikidata.org/wiki/Q10414172)
- [维基数据：王咸融（Q45493802）](https://www.wikidata.org/wiki/Q45493802)
- [CBDB 中国历代人物传记资料库：王德用（1893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1893&o=json)
- [CBDB 中国历代人物传记资料库：王咸融（119747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119747&o=json)
