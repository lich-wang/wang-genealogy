---
schema: wang-person/v1
id: p_8Ufnk7dZGeRUNoEEdTAD4N
status: active
merged_into: null
display_name: 王允中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ZP2JJrekBEo2rB9USrV12
        subject_person_id: p_8Ufnk7dZGeRUNoEEdTAD4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_emAL2JGG1D8ABmcaacAnLC
          claim_id: c_2ZP2JJrekBEo2rB9USrV12
          source_id: s_xuoeU7rgbQtEBhK5LYgb8q
          stance: supports
          locator: CBDB:264445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264445）
          source: &a1
            id: s_xuoeU7rgbQtEBhK5LYgb8q
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 264445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264445&o=json
            external_identifier: CBDB:264445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HbMDHEz9EwaFqFUiGj1NDP
        subject_person_id: p_8Ufnk7dZGeRUNoEEdTAD4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6s2Zx7HGyMZ3a5eBWTcehL
          claim_id: c_HbMDHEz9EwaFqFUiGj1NDP
          source_id: s_xuoeU7rgbQtEBhK5LYgb8q
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
        id: c_Xmn-KRRwUEFAP8bZEvcQQi
        subject_person_id: p_8Ufnk7dZGeRUNoEEdTAD4N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uaRk4D-d27uoava2X6I1Fj
          claim_id: c_Xmn-KRRwUEFAP8bZEvcQQi
          source_id: s_xuoeU7rgbQtEBhK5LYgb8q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
  other: []
---

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 264445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264445&o=json)
