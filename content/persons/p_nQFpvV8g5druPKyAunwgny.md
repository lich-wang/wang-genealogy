---
schema: wang-person/v1
id: p_nQFpvV8g5druPKyAunwgny
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 214073
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29neeam2RrNOvu5hkEW8bE
        subject_person_id: p_nQFpvV8g5druPKyAunwgny
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214073）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wxFRr0TJHQ30GNP0RrKncu
          claim_id: c_29neeam2RrNOvu5hkEW8bE
          source_id: s_AX9GM_RPxOeyDU4sLLgiGk
          stance: supports
          locator: CBDB:214073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y30_Z8e6ZSblw0cL1hfArb
        subject_person_id: p_nQFpvV8g5druPKyAunwgny
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3a5mvOtiOjzlBw_pCs6hAq
          claim_id: c_y30_Z8e6ZSblw0cL1hfArb
          source_id: s_AX9GM_RPxOeyDU4sLLgiGk
          stance: supports
          locator: CBDB:214073
          quotation: null
          interpretation_note: CBDB 明确记录的王景星配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_5GaxaL368Sw3VJAGUZoHG3
        status: active
        display_name: 王景星
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊氏，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214073） | accepted |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5GaxaL368Sw3VJAGUZoHG3 | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王景星妻)（CBDB 214073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214073&o=json)
