---
schema: wang-person/v1
id: p_VwwzPsbTezpZTDDq8p6cuf
status: active
merged_into: null
display_name: 王流謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rm2Q76A5bGuUL2uMnQtTGu
        subject_person_id: p_VwwzPsbTezpZTDDq8p6cuf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王流謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hr14RSPPgL5FLLPNVfjz27
          claim_id: c_rm2Q76A5bGuUL2uMnQtTGu
          source_id: s_M8b47AL5z9srVHtKnV3wsh
          stance: supports
          locator: CBDB:145082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145082）
          source: &a1
            id: s_M8b47AL5z9srVHtKnV3wsh
            source_type: api_record
            title: 中国历代人物传记资料库：王流謙（CBDB 145082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145082&o=json
            external_identifier: CBDB:145082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9moim9jNkHBtErbRQANmY4
        subject_person_id: p_VwwzPsbTezpZTDDq8p6cuf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_puERHz1pLtoEpMP4gHXu8z
          claim_id: c_9moim9jNkHBtErbRQANmY4
          source_id: s_M8b47AL5z9srVHtKnV3wsh
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
        id: c_AAVtKc3cZjcxVWbjsEGU2F
        subject_person_id: p_VwwzPsbTezpZTDDq8p6cuf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWEgdEQcaoqffKpKbeNhzc
          claim_id: c_AAVtKc3cZjcxVWbjsEGU2F
          source_id: s_M8b47AL5z9srVHtKnV3wsh
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
        id: c_umBPjTgUkb4gGTduDzpM7Z
        subject_person_id: p_VwwzPsbTezpZTDDq8p6cuf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王流謙（786年—844年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 145082）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kv201l9iUfeFWTkzhm8L-n
          claim_id: c_umBPjTgUkb4gGTduDzpM7Z
          source_id: s_M8b47AL5z9srVHtKnV3wsh
          stance: supports
          locator: CBDB:145082
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
  spouses:
    - claim:
        id: c_2KNjHQJyhfUuq09mdE2RYx
        subject_person_id: p_VwwzPsbTezpZTDDq8p6cuf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qfA5DkZ6rNec1uz3zsSY4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XYfIdEIDu6ricJ7Swlu0lm
          claim_id: c_2KNjHQJyhfUuq09mdE2RYx
          source_id: s_-NEFVtNMi38UEblrS6Qe2U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-NEFVtNMi38UEblrS6Qe2U
            source_type: api_record
            title: 中国历代人物传记资料库：崔某（CBDB 185800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185800&o=json
            external_identifier: CBDB:185800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qfA5DkZ6rNec1uz3zsSY4E
        status: active
        display_name: 崔某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王流謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王流謙 | accepted |
| birth.date | 786年 | accepted |
| death.date | 844年 | accepted |
| bio.summary | 王流謙（786年—844年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 145082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qfA5DkZ6rNec1uz3zsSY4E | 崔某 | accepted |

## 外部来源

- [中国历代人物传记资料库：崔某（CBDB 185800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185800&o=json)
- [中国历代人物传记资料库：王流謙（CBDB 145082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145082&o=json)
