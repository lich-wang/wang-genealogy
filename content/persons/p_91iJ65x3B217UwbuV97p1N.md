---
schema: wang-person/v1
id: p_91iJ65x3B217UwbuV97p1N
status: active
merged_into: null
display_name: 闞文興
revision: 1
cbdb_id: 113446
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJsiHpqAbpQSWgafBAGo00
        subject_person_id: p_91iJ65x3B217UwbuV97p1N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 闞文興
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4czQ5aruPc9q97AdzzOEN
          claim_id: c_EJsiHpqAbpQSWgafBAGo00
          source_id: s_KsFOGoc0vrriN76E3FIPvW
          stance: supports
          locator: CBDB:113446
          quotation: null
          interpretation_note: CBDB 明确记录的王醜醜配偶
          source: &a1
            id: s_KsFOGoc0vrriN76E3FIPvW
            source_type: api_record
            title: 中国历代人物传记资料库：闞文興（CBDB 113446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=113446&o=json
            external_identifier: CBDB:113446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gXu_Gz1lhBqvlT4pYjhbpk
        subject_person_id: p_tNLXg4jnaoCNhc1jqAtaPL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_91iJ65x3B217UwbuV97p1N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2CVklf5spsbF4WsXJ0yqdi
          claim_id: c_gXu_Gz1lhBqvlT4pYjhbpk
          source_id: s_KsFOGoc0vrriN76E3FIPvW
          stance: supports
          locator: 元人傳記資料索引，1316：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tNLXg4jnaoCNhc1jqAtaPL
        status: active
        display_name: 王醜醜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 闞文興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 闞文興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tNLXg4jnaoCNhc1jqAtaPL | 王醜醜 | accepted |

## 外部来源

- [中国历代人物传记资料库：闞文興（CBDB 113446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=113446&o=json)
