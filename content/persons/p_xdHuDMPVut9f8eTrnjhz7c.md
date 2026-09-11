---
schema: wang-person/v1
id: p_xdHuDMPVut9f8eTrnjhz7c
status: active
merged_into: null
display_name: 王繪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8BAJWMKnqZxHGpCCCAEzH
        subject_person_id: p_xdHuDMPVut9f8eTrnjhz7c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zXKLJYk6DwRfQnckCCuUmQ
          claim_id: c_M8BAJWMKnqZxHGpCCCAEzH
          source_id: s_BrLmN1FBM3BMv3zTSEbM9C
          stance: supports
          locator: CBDB:12181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12181）
          source: &a1
            id: s_BrLmN1FBM3BMv3zTSEbM9C
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 12181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12181&o=json
            external_identifier: CBDB:12181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LW5Ze7MHjmLr48XhMUvNYK
        subject_person_id: p_xdHuDMPVut9f8eTrnjhz7c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪，南唐人物。籍贯安福。（中国历代人物传记资料库 CBDB 12181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NN8R5hzhG3y6KqThsT9Lc7
          claim_id: c_LW5Ze7MHjmLr48XhMUvNYK
          source_id: s_BrLmN1FBM3BMv3zTSEbM9C
          stance: supports
          locator: CBDB:12181
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_naVOhEWiVimHYWk8joZaLc
        subject_person_id: p_xdHuDMPVut9f8eTrnjhz7c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fttA6Kw3R9VnQLWS1YwuPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UnCcAMwzuAe33p31B7vFMh
          claim_id: c_naVOhEWiVimHYWk8joZaLc
          source_id: s_ZaQX9PRCEkK6PFhFP3GWUj
          stance: supports
          locator: CBDB 双向互证（父 王繪 ⇄ 子 王謨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZaQX9PRCEkK6PFhFP3GWUj
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 12183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12183&o=json
            external_identifier: CBDB:12183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fttA6Kw3R9VnQLWS1YwuPJ
        status: active
        display_name: 王謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繪 | accepted |
| bio.summary | 王繪，南唐人物。籍贯安福。（中国历代人物传记资料库 CBDB 12181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fttA6Kw3R9VnQLWS1YwuPJ | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 12181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12181&o=json)
- [中国历代人物传记资料库：王謨（CBDB 12183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12183&o=json)
