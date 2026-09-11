---
schema: wang-person/v1
id: p_5fCfWXCbpeJ4sB1ZKzLvHs
status: active
merged_into: null
display_name: 王孝義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zmtyfr4miUH6r6c1ocef56
        subject_person_id: p_5fCfWXCbpeJ4sB1ZKzLvHs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UH9vFhM8X9CTTQszyk9kGH
          claim_id: c_Zmtyfr4miUH6r6c1ocef56
          source_id: s_JjzDHsQ5rtrjSNA4tXJ5i6
          stance: supports
          locator: CBDB:255256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255256）
          source: &a1
            id: s_JjzDHsQ5rtrjSNA4tXJ5i6
            source_type: api_record
            title: 中国历代人物传记资料库：王孝義（CBDB 255256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255256&o=json
            external_identifier: CBDB:255256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TM94M2jTFNjLzsAtAT54np
        subject_person_id: p_5fCfWXCbpeJ4sB1ZKzLvHs
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
        - id: cs_TZ5EJc3Fgb4XA8kpR37C8v
          claim_id: c_TM94M2jTFNjLzsAtAT54np
          source_id: s_JjzDHsQ5rtrjSNA4tXJ5i6
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
        id: c_29iGuSIWRcYJ3ySk5mD1YA
        subject_person_id: p_5fCfWXCbpeJ4sB1ZKzLvHs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vs2bQpvZMdxn2V6wjvzkce
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_25RRRlcB8TD36GseN7z943
          claim_id: c_29iGuSIWRcYJ3ySk5mD1YA
          source_id: s_JjzDHsQ5rtrjSNA4tXJ5i6
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第五十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vs2bQpvZMdxn2V6wjvzkce
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  other: []
---

# 王孝義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vs2bQpvZMdxn2V6wjvzkce | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝義（CBDB 255256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255256&o=json)
