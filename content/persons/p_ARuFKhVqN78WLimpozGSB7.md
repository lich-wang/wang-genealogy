---
schema: wang-person/v1
id: p_ARuFKhVqN78WLimpozGSB7
status: active
merged_into: null
display_name: 王英瀾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RNy5y5qZ64YP9xH3UJJeCr
        subject_person_id: p_ARuFKhVqN78WLimpozGSB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英瀾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Y3J6eFhPNWafc4UzK2Cge
          claim_id: c_RNy5y5qZ64YP9xH3UJJeCr
          source_id: s_XoYvadTUpPiCckndXrrSXB
          stance: supports
          locator: CBDB:527039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527039）
          source: &a1
            id: s_XoYvadTUpPiCckndXrrSXB
            source_type: api_record
            title: 中国历代人物传记资料库：王英瀾（CBDB 527039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527039&o=json
            external_identifier: CBDB:527039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7yrBVcKq67udBABsi6MmzV
        subject_person_id: p_ARuFKhVqN78WLimpozGSB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFRyAJRjaua3gjSK6D5oHE
          claim_id: c_7yrBVcKq67udBABsi6MmzV
          source_id: s_XoYvadTUpPiCckndXrrSXB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xkq5-VmbWWYFn1MtoJbxEO
        subject_person_id: p_ARuFKhVqN78WLimpozGSB7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TApWWNZP9pM6Nh9W49PDnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmiWudnemCuw5jY_ux48Ag
          claim_id: c_xkq5-VmbWWYFn1MtoJbxEO
          source_id: s_XoYvadTUpPiCckndXrrSXB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13193：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TApWWNZP9pM6Nh9W49PDnW
        status: active
        display_name: 王繼榖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英瀾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英瀾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TApWWNZP9pM6Nh9W49PDnW | 王繼榖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英瀾（CBDB 527039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527039&o=json)
