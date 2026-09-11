---
schema: wang-person/v1
id: p_QuDLhRTFiscsjeYScpJBuq
status: active
merged_into: null
display_name: 王遼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4k7zK2iQnQGh6PJGE9rZ3L
        subject_person_id: p_QuDLhRTFiscsjeYScpJBuq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jLDr144aTRVGN3oczj3aHR
          claim_id: c_4k7zK2iQnQGh6PJGE9rZ3L
          source_id: s_RyYAQevVHKRmC5gux6AKGC
          stance: supports
          locator: CBDB:195605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（195605）
          source: &a1
            id: s_RyYAQevVHKRmC5gux6AKGC
            source_type: api_record
            title: 中国历代人物传记资料库：王遼（CBDB 195605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195605&o=json
            external_identifier: CBDB:195605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1hJXDXcZ4NGNpQNgiCsEXt
        subject_person_id: p_QuDLhRTFiscsjeYScpJBuq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 895年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frCgM4Hg7SYPUN2Y8H41NU
          claim_id: c_1hJXDXcZ4NGNpQNgiCsEXt
          source_id: s_RyYAQevVHKRmC5gux6AKGC
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
        id: c_BKE8A8p9G3oZC29kfAnj8q
        subject_person_id: p_QuDLhRTFiscsjeYScpJBuq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遼（卒于895年），唐人物。籍贯硤石，曾任未詳。（中国历代人物传记资料库 CBDB 195605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-zMSvldPNBs9vyjeLLfbUQ
          claim_id: c_BKE8A8p9G3oZC29kfAnj8q
          source_id: s_RyYAQevVHKRmC5gux6AKGC
          stance: supports
          locator: CBDB:195605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pbhbBhC7WRE9K1yuBD13aT
        subject_person_id: p_N6pZvYhA9qiLVCaG277m17
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QuDLhRTFiscsjeYScpJBuq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkLu_puH_hBtDHmK9t6d2L
          claim_id: c_pbhbBhC7WRE9K1yuBD13aT
          source_id: s_RyYAQevVHKRmC5gux6AKGC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N6pZvYhA9qiLVCaG277m17
        status: active
        display_name: 王鋋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遼 | accepted |
| death.date | 895年 | accepted |
| bio.summary | 王遼（卒于895年），唐人物。籍贯硤石，曾任未詳。（中国历代人物传记资料库 CBDB 195605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N6pZvYhA9qiLVCaG277m17 | 王鋋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遼（CBDB 195605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195605&o=json)
