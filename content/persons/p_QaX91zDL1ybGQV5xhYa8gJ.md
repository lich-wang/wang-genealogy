---
schema: wang-person/v1
id: p_QaX91zDL1ybGQV5xhYa8gJ
status: active
merged_into: null
display_name: 王啟緒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbZMEtMqY4K493Vtbp8GSo
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGktWjcb2VdCumsbVXdnXs
          claim_id: c_cbZMEtMqY4K493Vtbp8GSo
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: CBDB:69340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69340）
          source: &a1
            id: s_a3SeBAa1ZuS2LQEwQYm8m9
            source_type: api_record
            title: 中国历代人物传记资料库：王啟緒（CBDB 69340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json
            external_identifier: CBDB:69340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cM5SrXeG2oXktwB6x1c8eq
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1732年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2PE8RxLzD7VfQecCwgEnc
          claim_id: c_cM5SrXeG2oXktwB6x1c8eq
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
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
        id: c_TnvHVztJpfQj5WrpdBCbLt
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8Y5RvjaHMzypn1Bni68RU
          claim_id: c_TnvHVztJpfQj5WrpdBCbLt
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
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
        id: c_ZvwcuV4etM9izAvJDGGbgy
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟緒（1732年—1781年），清人物。明清進士進士，籍贯福山，入仕進士，曾任編修、道監察御史、戶部浙江司郎中。（中国历代人物传记资料库 CBDB 69340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9V0IPsOFLBg613HM9Niyn3
          claim_id: c_ZvwcuV4etM9izAvJDGGbgy
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: CBDB:69340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GxvVN195O6XMb4xAWWXCkR
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dSfCmDHBzje8uKE414BuMC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h1BEUE6aBgzQJXf-z9WZsJ
          claim_id: c_GxvVN195O6XMb4xAWWXCkR
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13044：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dSfCmDHBzje8uKE414BuMC
        status: active
        display_name: 王羲長
        merged_into_person_id: null
    - claim:
        id: c_YMHmRFdQuDgSEVBpiggFqt
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNi2gaNrUKe9ojc5ByLPyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__fwA58OmdKEYe6BkZ-TVKR
          claim_id: c_YMHmRFdQuDgSEVBpiggFqt
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13044：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nNi2gaNrUKe9ojc5ByLPyP
        status: active
        display_name: 王齡長
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L1oomx-I6gKPJ7x7UpdP3y
        subject_person_id: p_NGEjkN6rXMxTTPFZFq8Knw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JyE1KXgeRIbUrYLrbMfwKu
          claim_id: c_L1oomx-I6gKPJ7x7UpdP3y
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13044：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NGEjkN6rXMxTTPFZFq8Knw
        status: active
        display_name: 王𨹘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王啟緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟緒 | accepted |
| birth.date | 1732年 | accepted |
| death.date | 1781年 | accepted |
| bio.summary | 王啟緒（1732年—1781年），清人物。明清進士進士，籍贯福山，入仕進士，曾任編修、道監察御史、戶部浙江司郎中。（中国历代人物传记资料库 CBDB 69340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dSfCmDHBzje8uKE414BuMC | 王羲長 | accepted |
| children | p_nNi2gaNrUKe9ojc5ByLPyP | 王齡長 | accepted |
| ancestors | p_NGEjkN6rXMxTTPFZFq8Knw | 王𨹘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟緒（CBDB 69340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json)
