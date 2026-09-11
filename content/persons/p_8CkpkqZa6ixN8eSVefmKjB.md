---
schema: wang-person/v1
id: p_8CkpkqZa6ixN8eSVefmKjB
status: active
merged_into: null
display_name: 王霞起
cbdb_id: 123071
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eUkC3nVDWBQ2zRDHoxtXYe
        subject_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 123071 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2qvNwLdhzd9MAQPrZwj1Dg
          claim_id: c_eUkC3nVDWBQ2zRDHoxtXYe
          source_id: s_K9vQVFxaYRsNM6Vtf7As7C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_K9vQVFxaYRsNM6Vtf7As7C
            source_type: api_record
            title: 维基数据：王霞起（Q45664833）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664833
            external_identifier: Q45664833
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
        - id: cs_hAfzjVdBqYOnnTgxpCtfwt
          claim_id: c_eUkC3nVDWBQ2zRDHoxtXYe
          source_id: s_qmN8G6oPWQb6g5gdpzt9sJ
          stance: supports
          locator: CBDB:123071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qmN8G6oPWQb6g5gdpzt9sJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王霞起（123071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123071&o=json
            external_identifier: CBDB:123071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.671Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eKcHe4XHswvoJBL76Ms4hC
        subject_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞起
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JDwi2C6bWoT1rwuWsSbN6y
          claim_id: c_eKcHe4XHswvoJBL76Ms4hC
          source_id: s_qmN8G6oPWQb6g5gdpzt9sJ
          stance: supports
          locator: Q45664833
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_sPExPaHWuqyYtp3FHM4YPQ
          claim_id: c_eKcHe4XHswvoJBL76Ms4hC
          source_id: s_K9vQVFxaYRsNM6Vtf7As7C
          stance: supports
          locator: Q45664833
          quotation: null
          interpretation_note: null
          source:
            id: s_K9vQVFxaYRsNM6Vtf7As7C
            source_type: api_record
            title: 维基数据：王霞起（Q45664833）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664833
            external_identifier: Q45664833
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8AySDnt11kmR9GCadnnBj9
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E1QRyB4VADfiEtcjuBT6ph
          claim_id: c_8AySDnt11kmR9GCadnnBj9
          source_id: s_K9vQVFxaYRsNM6Vtf7As7C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_K9vQVFxaYRsNM6Vtf7As7C
            source_type: api_record
            title: 维基数据：王霞起（Q45664833）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664833
            external_identifier: Q45664833
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
        - id: cs_HsVa32NXYg6kbUnNwQN826
          claim_id: c_8AySDnt11kmR9GCadnnBj9
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_pH5txPRt9mJJPNLmBNrT8J
          claim_id: c_8AySDnt11kmR9GCadnnBj9
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
    - claim:
        id: c_0yS4xSahu6II9_UCxjizxA
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cz0JwM8eK8stxcA-0bLwwb
          claim_id: c_0yS4xSahu6II9_UCxjizxA
          source_id: s_wzB8H1VeEUUxxH32LdLqx3
          stance: supports
          locator: CBDB 双向互证（子 王霞起 ⇄ 父 王思任）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_wzB8H1VeEUUxxH32LdLqx3
            source_type: api_record
            title: 中国历代人物传记资料库：王思任（CBDB 71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ftZ1PRscrPmBh4Qh3AiyfY
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_An5dBw5gBp5cr8dsx95NWC
        subject_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yLff8vvaLwKeDPpBy22z1r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QuH92LymWdDEBV8nxwtrGv
          claim_id: c_An5dBw5gBp5cr8dsx95NWC
          source_id: s_K9vQVFxaYRsNM6Vtf7As7C
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_mgHgucJeFkEVGdTZ717xiw
          claim_id: c_An5dBw5gBp5cr8dsx95NWC
          source_id: s_h4oQde8BPH6F8dGkoiPKZZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_h4oQde8BPH6F8dGkoiPKZZ
            source_type: api_record
            title: 维基数据：姜延栴（Q45664395）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664395
            external_identifier: Q45664395
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
        - id: cs_cHCghRfcTAUXYCqxX7r3A8
          claim_id: c_An5dBw5gBp5cr8dsx95NWC
          source_id: s_qmN8G6oPWQb6g5gdpzt9sJ
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source: *a1
      object_person:
        id: p_yLff8vvaLwKeDPpBy22z1r
        status: active
        display_name: 姜延栴
        merged_into_person_id: null
    - claim:
        id: c_28wg5epkuQTGdPuZUWeJJR
        subject_person_id: p_yLff8vvaLwKeDPpBy22z1r
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8CkpkqZa6ixN8eSVefmKjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFSHbe1qf08ALZyHNNDSWO
          claim_id: c_28wg5epkuQTGdPuZUWeJJR
          source_id: s_DHadrKH14QdK78N4UuJegB
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5241：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DHadrKH14QdK78N4UuJegB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：姜延栴（123060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123060&o=json
            external_identifier: CBDB:123060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:20.662Z
            metadata_json: null
      object_person:
        id: p_yLff8vvaLwKeDPpBy22z1r
        status: active
        display_name: 姜延栴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王霞起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王霞起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 123071 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王霞起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |
| parents | p_ftZ1PRscrPmBh4Qh3AiyfY | 王思任 | accepted |
| spouses | p_yLff8vvaLwKeDPpBy22z1r | 姜延栴 | accepted |
| spouses | p_yLff8vvaLwKeDPpBy22z1r | 姜延栴 | accepted |

## 外部来源

- [维基数据：姜延栴（Q45664395）](https://www.wikidata.org/wiki/Q45664395)
- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [维基数据：王霞起（Q45664833）](https://www.wikidata.org/wiki/Q45664833)
- [中国历代人物传记资料库：王思任（CBDB 71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
- [CBDB 中国历代人物传记资料库：姜延栴（123060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123060&o=json)
- [CBDB 中国历代人物传记资料库：王霞起（123071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123071&o=json)
