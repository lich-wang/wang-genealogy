---
schema: wang-person/v1
id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
status: active
merged_into: null
display_name: 王愷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhHbZN7VnhK1BgN4nQZiTW
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UfTzcKNghfguZq2j1KL6VP
          claim_id: c_qhHbZN7VnhK1BgN4nQZiTW
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
          stance: supports
          locator: CBDB:67796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67796）
          source: &a1
            id: s_P3Q2nfqY98LuANECRxE3Jq
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 67796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67796&o=json
            external_identifier: CBDB:67796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2HMF1KBzUyEkTEp2VKwJsx
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1317年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7B9YdDq16QpveVFTUH96GG
          claim_id: c_2HMF1KBzUyEkTEp2VKwJsx
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7aPGvgwPn9nSwHKK59PkW2
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1362年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPBgmLH6D37r5e5s2dz2H7
          claim_id: c_7aPGvgwPn9nSwHKK59PkW2
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
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
        id: c_ScJ3ernHrYCjr3PT2ZXe8i
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷（1317年—1362年），元人物。籍贯當塗，身份为史學家、經學家，曾任分省都事、幕府掾、中書省左司郎中。（中国历代人物传记资料库 CBDB 67796）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AEgYAGy0Awq6YhOfK0R5wW
          claim_id: c_ScJ3ernHrYCjr3PT2ZXe8i
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
          stance: supports
          locator: CBDB:67796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xVAtF_JU6Pw3oAOMUxtCkw
        subject_person_id: p_A5Zrd3y3GJ1eZYtNj9d2Uq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pxV3ZUgWPQzCjese46VYwx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ngrM9lG5KlLUX69cj5CzX
          claim_id: c_xVAtF_JU6Pw3oAOMUxtCkw
          source_id: s_P3Q2nfqY98LuANECRxE3Jq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11432：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pxV3ZUgWPQzCjese46VYwx
        status: active
        display_name: 王升童
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| birth.date | 1317年 | accepted |
| death.date | 1362年 | accepted |
| bio.summary | 王愷（1317年—1362年），元人物。籍贯當塗，身份为史學家、經學家，曾任分省都事、幕府掾、中書省左司郎中。（中国历代人物传记资料库 CBDB 67796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pxV3ZUgWPQzCjese46VYwx | 王升童 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 67796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67796&o=json)
