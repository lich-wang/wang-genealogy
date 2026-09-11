---
schema: wang-person/v1
id: p_iSUfErCn12jeYUoQ7FXh2z
status: active
merged_into: null
display_name: 王甲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LTpXC1iUSEdVsJLtMr8dzw
        subject_person_id: p_iSUfErCn12jeYUoQ7FXh2z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GiUt422uEnZQWY9Wu41zH
          claim_id: c_LTpXC1iUSEdVsJLtMr8dzw
          source_id: s_ide1eRio9EVuxXe2kvMzLC
          stance: supports
          locator: CBDB:18283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18283）
          source: &a1
            id: s_ide1eRio9EVuxXe2kvMzLC
            source_type: api_record
            title: 中国历代人物传记资料库：王甲（CBDB 18283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18283&o=json
            external_identifier: CBDB:18283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pUftT2S3Uv8kPtMGKfFSZk
        subject_person_id: p_iSUfErCn12jeYUoQ7FXh2z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PURm7UiNAEJaV8K6iHe6Gp
          claim_id: c_pUftT2S3Uv8kPtMGKfFSZk
          source_id: s_ide1eRio9EVuxXe2kvMzLC
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
        id: c_ap63_aP7y-A4FXu5s5asoQ
        subject_person_id: p_iSUfErCn12jeYUoQ7FXh2z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgpHOG0dr0US4zaD25ybpa
          claim_id: c_ap63_aP7y-A4FXu5s5asoQ
          source_id: s_ide1eRio9EVuxXe2kvMzLC
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ncJMsYgNL3hQVCtFzxU5EN
        status: active
        display_name: 王子輿
        merged_into_person_id: null
  other: []
---

# 王甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甲 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ncJMsYgNL3hQVCtFzxU5EN | 王子輿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甲（CBDB 18283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18283&o=json)
