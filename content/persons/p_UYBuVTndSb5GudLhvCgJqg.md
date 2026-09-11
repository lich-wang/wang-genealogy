---
schema: wang-person/v1
id: p_UYBuVTndSb5GudLhvCgJqg
status: active
merged_into: null
display_name: 王範
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4eQnA2uKrxJFfYV6fCDCBP
        subject_person_id: p_UYBuVTndSb5GudLhvCgJqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iwp7Z5mdoZs7BrjgoK5dwU
          claim_id: c_4eQnA2uKrxJFfYV6fCDCBP
          source_id: s_W3dbwAB2M5PQuF1b4apicu
          stance: supports
          locator: CBDB:56707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56707）
          source: &a1
            id: s_W3dbwAB2M5PQuF1b4apicu
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 56707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56707&o=json
            external_identifier: CBDB:56707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kua9U68RdhYEmcerBsJQsa
        subject_person_id: p_UYBuVTndSb5GudLhvCgJqg
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
        - id: cs_x7669etcYSyGfuNE7W6egm
          claim_id: c_Kua9U68RdhYEmcerBsJQsa
          source_id: s_W3dbwAB2M5PQuF1b4apicu
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
        id: c_VDGVmfcUD7qloIjA0oBTgW
        subject_person_id: p_UYBuVTndSb5GudLhvCgJqg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MhcKy1v6FQcNxpsRK6Jyz1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGFfiBpPd8kksOv9InY_hs
          claim_id: c_VDGVmfcUD7qloIjA0oBTgW
          source_id: s_F2BOjHVGOk7hBLeK6Uq6zY
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1130, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F2BOjHVGOk7hBLeK6Uq6zY
            source_type: api_record
            title: 中国历代人物传记资料库：李臨皐（CBDB 56708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56708&o=json
            external_identifier: CBDB:56708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MhcKy1v6FQcNxpsRK6Jyz1
        status: active
        display_name: 李臨皐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王範 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MhcKy1v6FQcNxpsRK6Jyz1 | 李臨皐 | accepted |

## 外部来源

- [中国历代人物传记资料库：李臨皐（CBDB 56708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56708&o=json)
- [中国历代人物传记资料库：王範（CBDB 56707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56707&o=json)
