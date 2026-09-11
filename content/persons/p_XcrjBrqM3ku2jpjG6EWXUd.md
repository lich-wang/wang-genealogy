---
schema: wang-person/v1
id: p_XcrjBrqM3ku2jpjG6EWXUd
status: active
merged_into: null
display_name: 王盈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4TjGW8WopPqHt81WRaHWz
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHCZ1Nfd22bBtcVVy683hA
          claim_id: c_a4TjGW8WopPqHt81WRaHWz
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: CBDB:160793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160793）
          source: &a1
            id: s_s1LBXji5R8yCybzRkFX9pZ
            source_type: api_record
            title: 中国历代人物传记资料库：王盈（CBDB 160793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json
            external_identifier: CBDB:160793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKHAKC9Ff9tD3rjVQvePYV
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盈，唐人物。籍贯薊縣。（中国历代人物传记资料库 CBDB 160793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_12uIx0g7rWkjWgg0AhnAdD
          claim_id: c_EKHAKC9Ff9tD3rjVQvePYV
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: CBDB:160793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N-jTFCyyTzY0FfQj4hCFAk
        subject_person_id: p_zZ8jgBpg56kK6qEAbWsgyj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KhEDw7E7qxht5V8nxbLtK
          claim_id: c_N-jTFCyyTzY0FfQj4hCFAk
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZ8jgBpg56kK6qEAbWsgyj
        status: active
        display_name: 王選
        merged_into_person_id: null
  children:
    - claim:
        id: c_TndneamgrlLEy_T0fdEGK5
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8pDIi3k911z6VjGz5UksW7
          claim_id: c_TndneamgrlLEy_T0fdEGK5
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X3KgUwftEJuFzG5Sp9xV61
        status: active
        display_name: 王公晟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王盈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盈 | accepted |
| bio.summary | 王盈，唐人物。籍贯薊縣。（中国历代人物传记资料库 CBDB 160793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zZ8jgBpg56kK6qEAbWsgyj | 王選 | accepted |
| children | p_X3KgUwftEJuFzG5Sp9xV61 | 王公晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盈（CBDB 160793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json)
