---
schema: wang-person/v1
id: p_x5BR6WSCVCCsM3tV87XDhi
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BqTCKt6HrxdN4MUvjJe9T
        subject_person_id: p_x5BR6WSCVCCsM3tV87XDhi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uWLsNX9SPw2dHPX4pJfBsA
          claim_id: c_1BqTCKt6HrxdN4MUvjJe9T
          source_id: s_5tE13XacSCts48VfahgXzm
          stance: supports
          locator: CBDB:56854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56854）
          source: &a1
            id: s_5tE13XacSCts48VfahgXzm
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 56854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56854&o=json
            external_identifier: CBDB:56854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4C2ozcq4uGoXX4N5Xxw9WM
        subject_person_id: p_x5BR6WSCVCCsM3tV87XDhi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1682年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1oy7JvpU6R9BfPkmeHCf4
          claim_id: c_4C2ozcq4uGoXX4N5Xxw9WM
          source_id: s_5tE13XacSCts48VfahgXzm
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
        id: c_5K8N55js7LFxhuVBTmfFNi
        subject_person_id: p_x5BR6WSCVCCsM3tV87XDhi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g4GXgCJ25ZeX3fUx5P6BFA
          claim_id: c_5K8N55js7LFxhuVBTmfFNi
          source_id: s_5tE13XacSCts48VfahgXzm
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
        id: c_dVMFrd2dETicPAUduRxZm8
        subject_person_id: p_x5BR6WSCVCCsM3tV87XDhi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕（1682年—1742年），清人物。明清進士進士，籍贯安居，入仕進士，曾任吏部郎中、吏部員外郎、同考官。（中国历代人物传记资料库 CBDB 56854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OfK8YFH919WiAXHbjWny54
          claim_id: c_dVMFrd2dETicPAUduRxZm8
          source_id: s_5tE13XacSCts48VfahgXzm
          stance: supports
          locator: CBDB:56854
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
  descendants:
    - claim:
        id: c_pS5lmdH6oKEnd5e5xKK3BS
        subject_person_id: p_x5BR6WSCVCCsM3tV87XDhi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_X6qoMRsfWz3v9cc3fES7Um
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wek3mBhbuqThpgF4UC86Cu
          claim_id: c_pS5lmdH6oKEnd5e5xKK3BS
          source_id: s_5tE13XacSCts48VfahgXzm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），48：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X6qoMRsfWz3v9cc3fES7Um
        status: active
        display_name: 王福勳
        merged_into_person_id: null
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| birth.date | 1682年 | accepted |
| death.date | 1742年 | accepted |
| bio.summary | 王恕（1682年—1742年），清人物。明清進士進士，籍贯安居，入仕進士，曾任吏部郎中、吏部員外郎、同考官。（中国历代人物传记资料库 CBDB 56854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_X6qoMRsfWz3v9cc3fES7Um | 王福勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 56854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56854&o=json)
