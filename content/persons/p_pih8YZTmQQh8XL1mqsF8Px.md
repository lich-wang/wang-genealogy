---
schema: wang-person/v1
id: p_pih8YZTmQQh8XL1mqsF8Px
status: active
merged_into: null
display_name: 王思獻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xuHHmYKNVA585TLVguw8R8
        subject_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9mpoCnb1nfo6Fwxx6x4VX9
          claim_id: c_xuHHmYKNVA585TLVguw8R8
          source_id: s_QyQhig4HAM8qMei6xoF8hE
          stance: supports
          locator: CBDB:193687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193687）
          source: &a1
            id: s_QyQhig4HAM8qMei6xoF8hE
            source_type: api_record
            title: 中国历代人物传记资料库：王思獻（CBDB 193687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193687&o=json
            external_identifier: CBDB:193687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QzCd98jDj1fdE5dkmxD6B4
        subject_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 737年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rrg4X1TBK621qD9uc2b7Hz
          claim_id: c_QzCd98jDj1fdE5dkmxD6B4
          source_id: s_QyQhig4HAM8qMei6xoF8hE
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
        id: c_pSvFb7dK2GWzDzjoXbszuE
        subject_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思獻（卒于737年），唐人物。籍贯萬年，曾任大將軍。（中国历代人物传记资料库 CBDB 193687）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NEoA1xSI2vJ1HI__--lIOT
          claim_id: c_pSvFb7dK2GWzDzjoXbszuE
          source_id: s_QyQhig4HAM8qMei6xoF8hE
          stance: supports
          locator: CBDB:193687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3Mi7BYuy34l3T0M45CCfMw
        subject_person_id: p_WJS1gfBQAJUGZjtuhkidtr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oIKVxv3IwyOAlHGdsSclp_
          claim_id: c_3Mi7BYuy34l3T0M45CCfMw
          source_id: s_QyQhig4HAM8qMei6xoF8hE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WJS1gfBQAJUGZjtuhkidtr
        status: active
        display_name: 王元
        merged_into_person_id: null
  children:
    - claim:
        id: c_yilw8rgLHBQpphz7RrmRUR
        subject_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YTAKJuN3oRDUHqbRR9A5WM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sv84oI9Ay3aosu0tRByA79
          claim_id: c_yilw8rgLHBQpphz7RrmRUR
          source_id: s_QyQhig4HAM8qMei6xoF8hE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YTAKJuN3oRDUHqbRR9A5WM
        status: active
        display_name: 王崇俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思獻 | accepted |
| death.date | 737年 | accepted |
| bio.summary | 王思獻（卒于737年），唐人物。籍贯萬年，曾任大將軍。（中国历代人物传记资料库 CBDB 193687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WJS1gfBQAJUGZjtuhkidtr | 王元 | accepted |
| children | p_YTAKJuN3oRDUHqbRR9A5WM | 王崇俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思獻（CBDB 193687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193687&o=json)
