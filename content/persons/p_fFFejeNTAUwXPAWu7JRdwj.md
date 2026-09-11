---
schema: wang-person/v1
id: p_fFFejeNTAUwXPAWu7JRdwj
status: active
merged_into: null
display_name: 王龍光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGh2qQPjZP69CeEnC5gSHy
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UWQAGv4C9Xw2ZG4RGCUWNt
          claim_id: c_UGh2qQPjZP69CeEnC5gSHy
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: CBDB:69470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69470）
          source: &a1
            id: s_3G8X5aZSgEtsKYhYueEct5
            source_type: api_record
            title: 中国历代人物传记资料库：王龍光（CBDB 69470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json
            external_identifier: CBDB:69470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Kb3mNnXNpHrSAADC61R6MA
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBGMy7qz2gaXa2o3ZBajhL
          claim_id: c_Kb3mNnXNpHrSAADC61R6MA
          source_id: s_3G8X5aZSgEtsKYhYueEct5
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
        id: c_wF9ZC64331K4L8CUAFRMq6
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王龍光（卒于1676年），清人物。籍贯會稽，入仕學校: 生員(庠生)，曾任國子監助教、修職郎。（中国历代人物传记资料库 CBDB 69470）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-AdmcTj3WpN7MVjS220VR9
          claim_id: c_wF9ZC64331K4L8CUAFRMq6
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: CBDB:69470
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8lgXGx3_GfknXWDYa3fiiD
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aAPGuw6YeVEz8asUHGbkKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJEZrMonM7c5mgl8BXsepR
          claim_id: c_8lgXGx3_GfknXWDYa3fiiD
          source_id: s_qGnLtXwva2ZcxSQEvn2ykC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qGnLtXwva2ZcxSQEvn2ykC
            source_type: api_record
            title: 中国历代人物传记资料库：王垂謐（CBDB 527022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527022&o=json
            external_identifier: CBDB:527022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aAPGuw6YeVEz8asUHGbkKQ
        status: active
        display_name: 王垂謐
        merged_into_person_id: null
    - claim:
        id: c_tNZhVooS3eYjZE3V2B85Sv
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N7iY5QthxJ8PsgD8QTSipc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LEv8fF5q2HIKu4XlBl63e
          claim_id: c_tNZhVooS3eYjZE3V2B85Sv
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N7iY5QthxJ8PsgD8QTSipc
        status: active
        display_name: 王垂訓
        merged_into_person_id: null
    - claim:
        id: c_k_9wgHRVZde0gcOr4qBnH8
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mzTgE1qJMAVgGcHqyCr8XX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8rks9Ol8TmRgXU-fgH5Q1f
          claim_id: c_k_9wgHRVZde0gcOr4qBnH8
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mzTgE1qJMAVgGcHqyCr8XX
        status: active
        display_name: 王垂謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王龍光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍光 | accepted |
| death.date | 1676年 | accepted |
| bio.summary | 王龍光（卒于1676年），清人物。籍贯會稽，入仕學校: 生員(庠生)，曾任國子監助教、修職郎。（中国历代人物传记资料库 CBDB 69470） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aAPGuw6YeVEz8asUHGbkKQ | 王垂謐 | accepted |
| children | p_N7iY5QthxJ8PsgD8QTSipc | 王垂訓 | accepted |
| children | p_mzTgE1qJMAVgGcHqyCr8XX | 王垂謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垂謐（CBDB 527022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527022&o=json)
- [中国历代人物传记资料库：王龍光（CBDB 69470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json)
