---
schema: wang-person/v1
id: p_ePUgH55QWsG6Hauqd4raHD
status: active
merged_into: null
display_name: 王文彪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nBn1R3cecGpYViPMSewfBV
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAtW9guXQJ4Lrs51T3FgaH
          claim_id: c_nBn1R3cecGpYViPMSewfBV
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB:101100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101100）
          source: &a1
            id: s_g4VKr2D6htM499vC6zENon
            source_type: api_record
            title: 中国历代人物传记资料库：王文彪（CBDB 101100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json
            external_identifier: CBDB:101100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zpNCEBnDzV63pLYwh7sArV
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lv1ZQeD8hhfVGB9bdcdQYk
          claim_id: c_zpNCEBnDzV63pLYwh7sArV
          source_id: s_g4VKr2D6htM499vC6zENon
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
        id: c_DgdyZNMioxP6aKExH1mJbH
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1353年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zxgt6CgvputSB7NFBAkY95
          claim_id: c_DgdyZNMioxP6aKExH1mJbH
          source_id: s_g4VKr2D6htM499vC6zENon
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
        id: c_81F1TQektLHpMkDJP7mbs3
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttdw8iZdS2MgZ5dTS7BBH6
          claim_id: c_81F1TQektLHpMkDJP7mbs3
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_oG-Xq0ah3ix4CcqaDz_geo
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1JRUmvaU3Up47BAzPVpNrj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aed0SU-bdycDvezSMUDouW
          claim_id: c_oG-Xq0ah3ix4CcqaDz_geo
          source_id: s_HMs7UiLcgX3uTkQZAW6YhE
          stance: supports
          locator: 全元文，588：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HMs7UiLcgX3uTkQZAW6YhE
            source_type: api_record
            title: 中国历代人物传记资料库：王廩（CBDB 437554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json
            external_identifier: CBDB:437554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1JRUmvaU3Up47BAzPVpNrj
        status: active
        display_name: 王廩
        merged_into_person_id: null
  other: []
---

# 王文彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文彪 | accepted |
| birth.date | 1278年 | accepted |
| death.date | 1353年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1JRUmvaU3Up47BAzPVpNrj | 王廩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廩（CBDB 437554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437554&o=json)
- [中国历代人物传记资料库：王文彪（CBDB 101100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json)
