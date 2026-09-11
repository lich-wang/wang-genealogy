---
schema: wang-person/v1
id: p_pCHzaxXTgfJX3Gi22NNtgi
status: active
merged_into: null
display_name: 王賁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GuGtXFQFwFyRp3FHPi5yVC
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EffETNwg2oor2FyFPJRKUT
          claim_id: c_GuGtXFQFwFyRp3FHPi5yVC
          source_id: s_X1JCdawcnKwo6B3mrPPWea
          stance: supports
          locator: CBDB:169516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169516）
          source: &a1
            id: s_X1JCdawcnKwo6B3mrPPWea
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 169516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169516&o=json
            external_identifier: CBDB:169516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vGFgZCE6eLwrUCCPJkso4G
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qX4x3TLzNZoVBTuPo3ibz6
          claim_id: c_vGFgZCE6eLwrUCCPJkso4G
          source_id: s_X1JCdawcnKwo6B3mrPPWea
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
        id: c_xqitQSrsyQfU6wy6hGXRzf
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁（卒于803年），唐人物。籍贯琅琊，曾任王府參軍。（中国历代人物传记资料库 CBDB 169516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lNWJNM_1BF-C44LEvNQEus
          claim_id: c_xqitQSrsyQfU6wy6hGXRzf
          source_id: s_X1JCdawcnKwo6B3mrPPWea
          stance: supports
          locator: CBDB:169516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HtOoKJZ40wr-IVxODwmiq6
        subject_person_id: p_GWLunP38ZcEAAW4iF5V65i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRPUPkgHFrj5-b7-lr3SRD
          claim_id: c_HtOoKJZ40wr-IVxODwmiq6
          source_id: s_ezDAMAFvGrXo7Y5BjU7fPL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ezDAMAFvGrXo7Y5BjU7fPL
            source_type: api_record
            title: 中国历代人物传记资料库：王仙客（CBDB 169938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169938&o=json
            external_identifier: CBDB:169938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GWLunP38ZcEAAW4iF5V65i
        status: active
        display_name: 王仙客
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賁 | accepted |
| death.date | 803年 | accepted |
| bio.summary | 王賁（卒于803年），唐人物。籍贯琅琊，曾任王府參軍。（中国历代人物传记资料库 CBDB 169516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GWLunP38ZcEAAW4iF5V65i | 王仙客 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 169516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169516&o=json)
- [中国历代人物传记资料库：王仙客（CBDB 169938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169938&o=json)
