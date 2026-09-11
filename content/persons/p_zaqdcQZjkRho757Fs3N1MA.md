---
schema: wang-person/v1
id: p_zaqdcQZjkRho757Fs3N1MA
status: active
merged_into: null
display_name: 王直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mvaEbkMeHo5pNcc2t3w4bM
        subject_person_id: p_zaqdcQZjkRho757Fs3N1MA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hVXki58tSruEJ6dMhufLGR
          claim_id: c_mvaEbkMeHo5pNcc2t3w4bM
          source_id: s_A236XBCZ9FwD9WCJaLuTNy
          stance: supports
          locator: CBDB:71097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71097）
          source: &a1
            id: s_A236XBCZ9FwD9WCJaLuTNy
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 71097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71097&o=json
            external_identifier: CBDB:71097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PzaGX6fCG2DPeE5F7EcW2J
        subject_person_id: p_zaqdcQZjkRho757Fs3N1MA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ud29txQM3oKxSWVXpQriGy
          claim_id: c_PzaGX6fCG2DPeE5F7EcW2J
          source_id: s_A236XBCZ9FwD9WCJaLuTNy
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
        id: c_D54wpU6smzUjWvaiJp8TUg
        subject_person_id: p_zaqdcQZjkRho757Fs3N1MA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1718年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SmLmHQiUa6SMLW2MtoP2H8
          claim_id: c_D54wpU6smzUjWvaiJp8TUg
          source_id: s_A236XBCZ9FwD9WCJaLuTNy
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
        id: c_QPartFWJyrAFBEDU7CWSjk
        subject_person_id: p_zaqdcQZjkRho757Fs3N1MA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直（1679年—1718年），清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 71097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TL4fyDH2eliYgb9DbgLMp0
          claim_id: c_QPartFWJyrAFBEDU7CWSjk
          source_id: s_A236XBCZ9FwD9WCJaLuTNy
          stance: supports
          locator: CBDB:71097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| birth.date | 1679年 | accepted |
| death.date | 1718年 | accepted |
| bio.summary | 王直（1679年—1718年），清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 71097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 71097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71097&o=json)
