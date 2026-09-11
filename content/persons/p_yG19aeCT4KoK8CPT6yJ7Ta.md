---
schema: wang-person/v1
id: p_yG19aeCT4KoK8CPT6yJ7Ta
status: active
merged_into: null
display_name: 王孝廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fgAo5QBacFS92avxQwAES6
        subject_person_id: p_yG19aeCT4KoK8CPT6yJ7Ta
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2gC6wzVZX1JZ5pVNNtEdKP
          claim_id: c_fgAo5QBacFS92avxQwAES6
          source_id: s_vBJLaJrXW5pPxAaKT31Qjd
          stance: supports
          locator: CBDB:92003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92003）
          source: &a1
            id: s_vBJLaJrXW5pPxAaKT31Qjd
            source_type: api_record
            title: 中国历代人物传记资料库：王孝廉（CBDB 92003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92003&o=json
            external_identifier: CBDB:92003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_X7TvzCDzaKbAHTnb7A2xcc
        subject_person_id: p_yG19aeCT4KoK8CPT6yJ7Ta
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9gRTqXeYndXmWz1bFcuNf
          claim_id: c_X7TvzCDzaKbAHTnb7A2xcc
          source_id: s_vBJLaJrXW5pPxAaKT31Qjd
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
        id: c_59tjqRzN7gNba6EeXkqT96
        subject_person_id: p_yG19aeCT4KoK8CPT6yJ7Ta
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉（卒于815年），唐人物。籍贯渤海都護府，身份为詩人，曾任渤海國使。（中国历代人物传记资料库 CBDB 92003）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yACX5mc7cgUKq-t0SHGeJ8
          claim_id: c_59tjqRzN7gNba6EeXkqT96
          source_id: s_vBJLaJrXW5pPxAaKT31Qjd
          stance: supports
          locator: CBDB:92003
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

# 王孝廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝廉 | accepted |
| death.date | 815年 | accepted |
| bio.summary | 王孝廉（卒于815年），唐人物。籍贯渤海都護府，身份为詩人，曾任渤海國使。（中国历代人物传记资料库 CBDB 92003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝廉（CBDB 92003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92003&o=json)
