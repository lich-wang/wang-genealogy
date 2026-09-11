---
schema: wang-person/v1
id: p_SiooUTthVwcUw7kpFHWNPw
status: active
merged_into: null
display_name: 王大緯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEWBUpEDrPVTzLCnxQhjbD
        subject_person_id: p_SiooUTthVwcUw7kpFHWNPw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_46Lp7WU8CPXBs9ZvQNqEBc
          claim_id: c_XEWBUpEDrPVTzLCnxQhjbD
          source_id: s_q1m1gc8g7Jb3BW9ZgskuED
          stance: supports
          locator: CBDB:695191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695191）
          source: &a1
            id: s_q1m1gc8g7Jb3BW9ZgskuED
            source_type: api_record
            title: 中国历代人物传记资料库：王大緯（CBDB 695191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695191&o=json
            external_identifier: CBDB:695191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZU2gEMNutdKLzb8SH3u4VL
        subject_person_id: p_SiooUTthVwcUw7kpFHWNPw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大緯，清人物。籍贯鄞縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 695191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JnNB8zSuGEGnwpNIKfAjf4
          claim_id: c_ZU2gEMNutdKLzb8SH3u4VL
          source_id: s_q1m1gc8g7Jb3BW9ZgskuED
          stance: supports
          locator: CBDB:695191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GtX2lYXE2YCiv8OYgDhxMf
        subject_person_id: p_rH4e7gKHLt6j7uEex6ct5d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SiooUTthVwcUw7kpFHWNPw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QpQf__4mhUChe6K1NY6hk3
          claim_id: c_GtX2lYXE2YCiv8OYgDhxMf
          source_id: s_q1m1gc8g7Jb3BW9ZgskuED
          stance: supports
          locator: 鄞縣志，lgid=243568：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rH4e7gKHLt6j7uEex6ct5d
        status: active
        display_name: 王宏詩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大緯 | accepted |
| bio.summary | 王大緯，清人物。籍贯鄞縣，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 695191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rH4e7gKHLt6j7uEex6ct5d | 王宏詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大緯（CBDB 695191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695191&o=json)
