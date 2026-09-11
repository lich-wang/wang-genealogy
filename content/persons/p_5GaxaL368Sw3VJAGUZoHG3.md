---
schema: wang-person/v1
id: p_5GaxaL368Sw3VJAGUZoHG3
status: active
merged_into: null
display_name: 王景星
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jg1ENFiS6kD793V6VRDuEQ
        subject_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景星
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cckzdfnkCKUxuRnhFmFPNA
          claim_id: c_Jg1ENFiS6kD793V6VRDuEQ
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: CBDB:206153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206153）
          source: &a1
            id: s_7u9pDH7qaGQstC7Dpwtt7B
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 206153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json
            external_identifier: CBDB:206153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5bXGuA7P9qm5UadNBQTsD1
        subject_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1549年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3a112pKXvJ62aNxb7WCzV
          claim_id: c_5bXGuA7P9qm5UadNBQTsD1
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N6PvsEQFoTmX9CwDAfZFid
        subject_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bWxK2fJVs5fYd4HTDoLKq
          claim_id: c_N6PvsEQFoTmX9CwDAfZFid
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uM_2HgI3HjR9BwECy_QqOv
        subject_person_id: p_kP6VABQWbKR9ndmes7Y926
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GgicICsHzrljsRjnlpZTT
          claim_id: c_uM_2HgI3HjR9BwECy_QqOv
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kP6VABQWbKR9ndmes7Y926
        status: active
        display_name: 王武烈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YUQxEsjVBGRxdrF75yeGH-
        subject_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nQFpvV8g5druPKyAunwgny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivLleDxKsGcG2tQr2EaSF0
          claim_id: c_YUQxEsjVBGRxdrF75yeGH-
          source_id: s_AX9GM_RPxOeyDU4sLLgiGk
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AX9GM_RPxOeyDU4sLLgiGk
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王景星妻)（CBDB 214073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214073&o=json
            external_identifier: CBDB:214073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nQFpvV8g5druPKyAunwgny
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_xrDMnq02qbGYuiLtV9Wfnt
        subject_person_id: p_W5J8J6VDH3wTeUd6fDe8Nr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQl0N8eqrrpTXB8YE8V_cU
          claim_id: c_xrDMnq02qbGYuiLtV9Wfnt
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W5J8J6VDH3wTeUd6fDe8Nr
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_vwVwHI0Pdhr1wnu0pRErx3
        subject_person_id: p_Y57U5N2ZTRjpV3jdQ7YbAE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpLzyKKmxHHdu4U7A6H_mN
          claim_id: c_vwVwHI0Pdhr1wnu0pRErx3
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y57U5N2ZTRjpV3jdQ7YbAE
        status: active
        display_name: 王鰲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王景星

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景星 | accepted |
| birth.date | 1549年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kP6VABQWbKR9ndmes7Y926 | 王武烈 | accepted |
| spouses | p_nQFpvV8g5druPKyAunwgny | 楊氏 | accepted |
| ancestors | p_W5J8J6VDH3wTeUd6fDe8Nr | 王琦 | accepted |
| ancestors | p_Y57U5N2ZTRjpV3jdQ7YbAE | 王鰲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景星（CBDB 206153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json)
- [中国历代人物传记资料库：楊氏(王景星妻)（CBDB 214073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214073&o=json)
