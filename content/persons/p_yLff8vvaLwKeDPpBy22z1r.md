---
schema: wang-person/v1
id: p_yLff8vvaLwKeDPpBy22z1r
status: active
merged_into: null
display_name: 姜延栴
cbdb_id: 123060
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssjmPmK2ek2t26aN3bnsMx
        subject_person_id: p_yLff8vvaLwKeDPpBy22z1r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜延栴，清人物。中国历代人物传记资料库（CBDB）以人物编号 123060 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pis5k2zuAJDRZ2OVhyhePA
          claim_id: c_ssjmPmK2ek2t26aN3bnsMx
          source_id: s_DHadrKH14QdK78N4UuJegB
          stance: supports
          locator: CBDB:123060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jm46USCD4UmhH7GvetCvy
        subject_person_id: p_yLff8vvaLwKeDPpBy22z1r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姜延栴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LZuo99eein9XjMN15Pw7Fe
          claim_id: c_2jm46USCD4UmhH7GvetCvy
          source_id: s_DHadrKH14QdK78N4UuJegB
          stance: supports
          locator: Q45664395
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WV8Sxf1qbiy229WJzk31gM
          claim_id: c_2jm46USCD4UmhH7GvetCvy
          source_id: s_h4oQde8BPH6F8dGkoiPKZZ
          stance: supports
          locator: Q45664395
          quotation: null
          interpretation_note: null
          source: &a2
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
        - id: cs_mgHgucJeFkEVGdTZ717xiw
          claim_id: c_An5dBw5gBp5cr8dsx95NWC
          source_id: s_h4oQde8BPH6F8dGkoiPKZZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_cHCghRfcTAUXYCqxX7r3A8
          claim_id: c_An5dBw5gBp5cr8dsx95NWC
          source_id: s_qmN8G6oPWQb6g5gdpzt9sJ
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
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
      object_person:
        id: p_8CkpkqZa6ixN8eSVefmKjB
        status: active
        display_name: 王霞起
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姜延栴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 姜延栴，清人物。中国历代人物传记资料库（CBDB）以人物编号 123060 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 姜延栴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8CkpkqZa6ixN8eSVefmKjB | 王霞起 | accepted |

## 外部来源

- [维基数据：姜延栴（Q45664395）](https://www.wikidata.org/wiki/Q45664395)
- [维基数据：王霞起（Q45664833）](https://www.wikidata.org/wiki/Q45664833)
- [CBDB 中国历代人物传记资料库：姜延栴（123060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123060&o=json)
- [CBDB 中国历代人物传记资料库：王霞起（123071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123071&o=json)
