---
schema: wang-person/v1
id: p_xNxqWv9Hmn4hXrvNdwjCoG
status: active
merged_into: null
display_name: 王有齡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FB4Gwuh7s86H3Uz5qWgiAZ
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cCAWCu1MdTjamEE9ES2wNQ
          claim_id: c_FB4Gwuh7s86H3Uz5qWgiAZ
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
          stance: supports
          locator: CBDB:65298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65298）
          source: &a1
            id: s_FvitfWSLd4NM6p1mWGEoTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王有齡（CBDB 65298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65298&o=json
            external_identifier: CBDB:65298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7ajCesBKG6kH59mwrujrhY
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbdth2qHUCVGx2QwDqJF9r
          claim_id: c_7ajCesBKG6kH59mwrujrhY
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
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
        id: c_BkcobAYYGeZ8MSgyHgjfTR
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hY1gk8rVAezXpe4UhbY3qT
          claim_id: c_BkcobAYYGeZ8MSgyHgjfTR
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
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
        id: c_YdhNZ4pnXpCQK7K3QExfNQ
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有齡（1810年—1861年），清人物。籍贯侯官，入仕監生，曾任場大使、糧儲道、廳同知。（中国历代人物传记资料库 CBDB 65298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_96aTtqPQfUkSyp-WY0_ide
          claim_id: c_YdhNZ4pnXpCQK7K3QExfNQ
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
          stance: supports
          locator: CBDB:65298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AeVFQ67u6A6HCJeCFBFQi3
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Y6PHUUzRvgSDB6HwQxJqo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3o4tnI46Hl9mBfnsOejyqY
          claim_id: c_AeVFQ67u6A6HCJeCFBFQi3
          source_id: s_Wi7BF63nc7cfeRqKyscFPs
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8721：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wi7BF63nc7cfeRqKyscFPs
            source_type: api_record
            title: 中国历代人物传记资料库：王卿雲（CBDB 521770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521770&o=json
            external_identifier: CBDB:521770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4Y6PHUUzRvgSDB6HwQxJqo
        status: active
        display_name: 王卿雲
        merged_into_person_id: null
    - claim:
        id: c_DVxwapXnBaD3Vl3UvzhelX
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLj9x5Hx3ewwMHtmL6YHsw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XC81G-tig-RIEKNttfBZ-7
          claim_id: c_DVxwapXnBaD3Vl3UvzhelX
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8721：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jLj9x5Hx3ewwMHtmL6YHsw
        status: active
        display_name: 王見三
        merged_into_person_id: null
    - claim:
        id: c_pRC16AAeXbMoss6rbQAoAv
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GsbVM3sDzY5NMmwXdfBsgF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPIxX_Ldw2Jkm0YhCoMZWn
          claim_id: c_pRC16AAeXbMoss6rbQAoAv
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8721：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GsbVM3sDzY5NMmwXdfBsgF
        status: active
        display_name: 王矞雲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有齡 | accepted |
| birth.date | 1810年 | accepted |
| death.date | 1861年 | accepted |
| bio.summary | 王有齡（1810年—1861年），清人物。籍贯侯官，入仕監生，曾任場大使、糧儲道、廳同知。（中国历代人物传记资料库 CBDB 65298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4Y6PHUUzRvgSDB6HwQxJqo | 王卿雲 | accepted |
| children | p_jLj9x5Hx3ewwMHtmL6YHsw | 王見三 | accepted |
| children | p_GsbVM3sDzY5NMmwXdfBsgF | 王矞雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿雲（CBDB 521770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521770&o=json)
- [中国历代人物传记资料库：王有齡（CBDB 65298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65298&o=json)
