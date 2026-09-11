---
schema: wang-person/v1
id: p_BdBxCFB84EB9Jvu3mU15No
status: active
merged_into: null
display_name: 王季武
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yR5EzrP5eDy9PGczM68qsc
        subject_person_id: p_BdBxCFB84EB9Jvu3mU15No
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K7QVXffNfCrh56sDu5DJvd
          claim_id: c_yR5EzrP5eDy9PGczM68qsc
          source_id: s_u2biM6FCWGexE7sr2GboWN
          stance: supports
          locator: CBDB:193084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193084）
          source: &a1
            id: s_u2biM6FCWGexE7sr2GboWN
            source_type: api_record
            title: 中国历代人物传记资料库：王季武（CBDB 193084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193084&o=json
            external_identifier: CBDB:193084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wWUKz4rZ68H3H1r9rD3kjG
        subject_person_id: p_BdBxCFB84EB9Jvu3mU15No
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVWDfWc96MewocMmxezGtS
          claim_id: c_wWUKz4rZ68H3H1r9rD3kjG
          source_id: s_u2biM6FCWGexE7sr2GboWN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L1775BQK9DiwaDj6Xvj2go
        subject_person_id: p_BdBxCFB84EB9Jvu3mU15No
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季武（卒于842年），唐人物。籍贯夏州。（中国历代人物传记资料库 CBDB 193084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wR5D93MgzqjYaLrsaqfdVn
          claim_id: c_L1775BQK9DiwaDj6Xvj2go
          source_id: s_u2biM6FCWGexE7sr2GboWN
          stance: supports
          locator: CBDB:193084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iddspMuVy9dZf4vvhUDn2p
        subject_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BdBxCFB84EB9Jvu3mU15No
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_VGT0KBq920QKpFcGKnZp
          claim_id: c_iddspMuVy9dZf4vvhUDn2p
          source_id: s_u2biM6FCWGexE7sr2GboWN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gk5TtsLrBkBuAxrGyWvWEZ
        status: active
        display_name: 王忠親
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季武 | accepted |
| death.date | 842年 | accepted |
| bio.summary | 王季武（卒于842年），唐人物。籍贯夏州。（中国历代人物传记资料库 CBDB 193084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gk5TtsLrBkBuAxrGyWvWEZ | 王忠親 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季武（CBDB 193084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193084&o=json)
