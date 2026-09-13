---
schema: wang-person/v1
id: p_bqtofWaqSAEqVZFFEQFzEG
status: active
merged_into: null
display_name: 王孟堅
cbdb_id: 175894
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Loas8Kjh5cq7cHy8qSkCE9
        subject_person_id: p_bqtofWaqSAEqVZFFEQFzEG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟堅（卒于872年），唐人物。籍贯太原，曾任集賢院學士。（中国历代人物传记资料库 CBDB 175894）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_I6A6ZQDwGzCiva1vCFjHhh
          claim_id: c_Loas8Kjh5cq7cHy8qSkCE9
          source_id: s_3Js7hJxWAAUqVApDQxyCXm
          stance: supports
          locator: CBDB:175894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3Js7hJxWAAUqVApDQxyCXm
            source_type: api_record
            title: 中国历代人物传记资料库：王孟堅（CBDB 175894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175894&o=json
            external_identifier: CBDB:175894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bwWjGCXTHgo7L28A8uzwwi
        subject_person_id: p_bqtofWaqSAEqVZFFEQFzEG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 872年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0872-01-01
            latest: 0872-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bAqXCbaKbh25iQaKh1d87L
          claim_id: c_bwWjGCXTHgo7L28A8uzwwi
          source_id: s_3Js7hJxWAAUqVApDQxyCXm
          stance: supports
          locator: CBDB:175894
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 872
          source:
            id: s_3Js7hJxWAAUqVApDQxyCXm
            source_type: api_record
            title: 中国历代人物传记资料库：王孟堅（CBDB 175894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175894&o=json
            external_identifier: CBDB:175894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GwxqvaAjLPckyHxakYrMPj
        subject_person_id: p_bqtofWaqSAEqVZFFEQFzEG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AcxmCUDqckXMUiWXZDzbqx
          claim_id: c_GwxqvaAjLPckyHxakYrMPj
          source_id: s_3Js7hJxWAAUqVApDQxyCXm
          stance: supports
          locator: CBDB:175894
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 872
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zHQC-iXDY1zA1qOG3YnEBA
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqtofWaqSAEqVZFFEQFzEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb3RRIy663EcTt4p58tUUh
          claim_id: c_zHQC-iXDY1zA1qOG3YnEBA
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L31EN7QNzNJZ5r69x7mKXJ
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 92079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json
            external_identifier: CBDB:92079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vbEaTwSyS6JEzGzTU5DQPA
        status: active
        display_name: 王涯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孟堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟堅（卒于872年），唐人物。籍贯太原，曾任集賢院學士。（中国历代人物传记资料库 CBDB 175894） | accepted |
| death.date | 872年 | accepted |
| name.primary | 王孟堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vbEaTwSyS6JEzGzTU5DQPA | 王涯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟堅（CBDB 175894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175894&o=json)
- [中国历代人物传记资料库：王涯（CBDB 92079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json)
