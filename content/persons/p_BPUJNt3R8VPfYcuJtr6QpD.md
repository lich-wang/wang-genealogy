---
schema: wang-person/v1
id: p_BPUJNt3R8VPfYcuJtr6QpD
status: active
merged_into: null
display_name: 王松林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZLWg48b1rGzUmgWKW7Wsya
        subject_person_id: p_BPUJNt3R8VPfYcuJtr6QpD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J5bxgJFJHoP8MPcXw2piH1
          claim_id: c_ZLWg48b1rGzUmgWKW7Wsya
          source_id: s_5LVTUQTwxBSjn5LNYbADGU
          stance: supports
          locator: CBDB:557674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557674）
          source: &a1
            id: s_5LVTUQTwxBSjn5LNYbADGU
            source_type: api_record
            title: 中国历代人物传记资料库：王松林（CBDB 557674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557674&o=json
            external_identifier: CBDB:557674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1bCXQMz8vzhB4cBrAjAZK
        subject_person_id: p_BPUJNt3R8VPfYcuJtr6QpD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32LhnKPPfAJkpmXz7RAwPF
          claim_id: c_N1bCXQMz8vzhB4cBrAjAZK
          source_id: s_5LVTUQTwxBSjn5LNYbADGU
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
  spouses:
    - claim:
        id: c_RvGBn-Fqk64pDI6bGDAcAG
        subject_person_id: p_BPUJNt3R8VPfYcuJtr6QpD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cUWTAmfTDhEC13KPmbfMQ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xNIYftp2KQ4YpUvZttqt-
          claim_id: c_RvGBn-Fqk64pDI6bGDAcAG
          source_id: s_iN4PIfAOyTlzVLsv4jAJYA
          stance: supports
          locator: 南陽府志，lgid=878789：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iN4PIfAOyTlzVLsv4jAJYA
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王松林妻)（CBDB 557675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557675&o=json
            external_identifier: CBDB:557675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cUWTAmfTDhEC13KPmbfMQ1
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王松林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松林 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cUWTAmfTDhEC13KPmbfMQ1 | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松林（CBDB 557674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557674&o=json)
- [中国历代人物传记资料库：張氏(王松林妻)（CBDB 557675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557675&o=json)
