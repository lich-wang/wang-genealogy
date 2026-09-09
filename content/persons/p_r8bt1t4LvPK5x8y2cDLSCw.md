---
schema: wang-person/v1
id: p_r8bt1t4LvPK5x8y2cDLSCw
status: active
merged_into: null
display_name: 王師道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hmo6o14QRqrDFrfhcLDPYZ
        subject_person_id: p_r8bt1t4LvPK5x8y2cDLSCw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNGH34MujyREmQjSFpt9is
          claim_id: c_hmo6o14QRqrDFrfhcLDPYZ
          source_id: s_nhCUMJGE9gYRq8EWzTxyGc
          stance: supports
          locator: CBDB:38044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38044）
          source: &a1
            id: s_nhCUMJGE9gYRq8EWzTxyGc
            source_type: api_record
            title: 中国历代人物传记资料库：王師道（CBDB 38044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38044&o=json
            external_identifier: CBDB:38044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hodYu8AXzoRB68vat58cHE
        subject_person_id: p_r8bt1t4LvPK5x8y2cDLSCw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1146年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4iHgxQDf5ErMvC2VYEwF1
          claim_id: c_hodYu8AXzoRB68vat58cHE
          source_id: s_nhCUMJGE9gYRq8EWzTxyGc
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
        id: c_zPGodTRiWf298MpWwwuaSv
        subject_person_id: p_r8bt1t4LvPK5x8y2cDLSCw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfiW77H7MXzMAUBUG485N7
          claim_id: c_zPGodTRiWf298MpWwwuaSv
          source_id: s_nhCUMJGE9gYRq8EWzTxyGc
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
  descendants: []
  other: []
---

# 王師道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師道 | accepted |
| death.date | 1146年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師道（CBDB 38044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38044&o=json)
