---
schema: wang-person/v1
id: p_CizWXhM8V9jWVXN61mXFR5
status: active
merged_into: null
display_name: 王賡陛
cbdb_id: 526845
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qvyX75JXSovuEeX6twX67D
        subject_person_id: p_CizWXhM8V9jWVXN61mXFR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡陛，清人物。中国历代人物传记资料库（CBDB）以人物编号 526845 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AiFz2hcAFfNIVIB3SFukpM
          claim_id: c_qvyX75JXSovuEeX6twX67D
          source_id: s_ZeiHZNoBF9XeRw3nqb9rVG
          stance: supports
          locator: CBDB:526845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZeiHZNoBF9XeRw3nqb9rVG
            source_type: api_record
            title: 中国历代人物传记资料库：王賡陛（CBDB 526845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526845&o=json
            external_identifier: CBDB:526845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TtdFr8VnKYBe2iVNPQwyJh
        subject_person_id: p_CizWXhM8V9jWVXN61mXFR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡陛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b2btS7oqZatDY3bDmhSJvB
          claim_id: c_TtdFr8VnKYBe2iVNPQwyJh
          source_id: s_ZeiHZNoBF9XeRw3nqb9rVG
          stance: supports
          locator: CBDB:526845
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_ZeiHZNoBF9XeRw3nqb9rVG
            source_type: api_record
            title: 中国历代人物传记资料库：王賡陛（CBDB 526845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526845&o=json
            external_identifier: CBDB:526845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FE_SrJFpU9St1KG40OW9O_
        subject_person_id: p_2y1eP1nsjw8ciu9GjNsB8J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CizWXhM8V9jWVXN61mXFR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kssOcOJJax6Itn31HToMhk
          claim_id: c_FE_SrJFpU9St1KG40OW9O_
          source_id: s_ZeiHZNoBF9XeRw3nqb9rVG
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13031：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2y1eP1nsjw8ciu9GjNsB8J
        status: active
        display_name: 王恩綬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賡陛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賡陛，清人物。中国历代人物传记资料库（CBDB）以人物编号 526845 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王賡陛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2y1eP1nsjw8ciu9GjNsB8J | 王恩綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賡陛（CBDB 526845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526845&o=json)
