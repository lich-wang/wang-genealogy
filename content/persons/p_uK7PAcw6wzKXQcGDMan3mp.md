---
schema: wang-person/v1
id: p_uK7PAcw6wzKXQcGDMan3mp
status: active
merged_into: null
display_name: 王庭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_96qnzWLJ1cCY4xE59KzWL4
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LuFpfjKKANFYTx2djZZNHE
          claim_id: c_96qnzWLJ1cCY4xE59KzWL4
          source_id: s_AmxCiLjfhhDUMEQLpTZCji
          stance: supports
          locator: CBDB:69307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69307）
          source: &a1
            id: s_AmxCiLjfhhDUMEQLpTZCji
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 69307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69307&o=json
            external_identifier: CBDB:69307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w7mDJ7QbubfPudwKyqPskm
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1607年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPmZPaXdSWbK5TDRp4jPBS
          claim_id: c_w7mDJ7QbubfPudwKyqPskm
          source_id: s_AmxCiLjfhhDUMEQLpTZCji
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
        id: c_5iNg6c8MscRF558STW1N4a
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X5yA46h47R6Bd3nX2tPSKm
          claim_id: c_5iNg6c8MscRF558STW1N4a
          source_id: s_AmxCiLjfhhDUMEQLpTZCji
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
        id: c_E7wkARSrJvL6423WjFwP68
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭（1607年—1693年），清人物。明清進士進士，籍贯嘉興，身份为書法家、畫家，入仕進士。（中国历代人物传记资料库 CBDB 69307）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0oCsrKA6STLOYC9z3BhADX
          claim_id: c_E7wkARSrJvL6423WjFwP68
          source_id: s_AmxCiLjfhhDUMEQLpTZCji
          stance: supports
          locator: CBDB:69307
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NFVKXt0fhpuBlnRn2-uJLn
        subject_person_id: p_uK7PAcw6wzKXQcGDMan3mp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YMKWDiBR9Mv6EzeX7huhe1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jm3UEtMbVAwR_jijli_cV
          claim_id: c_NFVKXt0fhpuBlnRn2-uJLn
          source_id: s_ft5KjXtH8v3i5rzF2DcCUc
          stance: supports
          locator: 杭州府志(吳慶坻):一百七十八卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ft5KjXtH8v3i5rzF2DcCUc
            source_type: api_record
            title: 中国历代人物传记资料库：王元珠（CBDB 121052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121052&o=json
            external_identifier: CBDB:121052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YMKWDiBR9Mv6EzeX7huhe1
        status: active
        display_name: 王元珠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| birth.date | 1607年 | accepted |
| death.date | 1693年 | accepted |
| bio.summary | 王庭（1607年—1693年），清人物。明清進士進士，籍贯嘉興，身份为書法家、畫家，入仕進士。（中国历代人物传记资料库 CBDB 69307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YMKWDiBR9Mv6EzeX7huhe1 | 王元珠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 69307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69307&o=json)
- [中国历代人物传记资料库：王元珠（CBDB 121052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121052&o=json)
