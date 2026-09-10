---
schema: wang-person/v1
id: p_127UF7yvGqCLXapDi883c4
status: active
merged_into: null
display_name: 王貽永
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ySET8JHW5ErHA1BwY9Ymj4
        subject_person_id: p_127UF7yvGqCLXapDi883c4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqXN2EjnR5r6MQ3LRhKAQs
          claim_id: c_ySET8JHW5ErHA1BwY9Ymj4
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: CBDB:1829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1829）
          source: &a1
            id: s_XY9srzhf4QvcQx3M7SMojE
            source_type: api_record
            title: 中国历代人物传记资料库：王貽永（CBDB 1829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json
            external_identifier: CBDB:1829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C91w4dYz6ifbEmJMxrQeh9
        subject_person_id: p_127UF7yvGqCLXapDi883c4
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
        - id: cs_Z3Mh62Veb2f5XzbUT1eApZ
          claim_id: c_C91w4dYz6ifbEmJMxrQeh9
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LA6uSvW2gM-hWAGss3--AZ
        subject_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_127UF7yvGqCLXapDi883c4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cxj_Gfpmwr3yUtb5e5BF__
          claim_id: c_LA6uSvW2gM-hWAGss3--AZ
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: PersonKinshipInfo：父（王貽正）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dTXH6ubpBbfKsj26LKdQqL
        status: active
        display_name: 王貽正
        merged_into_person_id: null
  children:
    - claim:
        id: c_Xk4HlvpWcBqTojcQ1taJgc
        subject_person_id: p_127UF7yvGqCLXapDi883c4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brXm2tPMCz7IayyxHzkRrM
          claim_id: c_Xk4HlvpWcBqTojcQ1taJgc
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1966：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vgoWcNsg5TJm8CAAjNf5Xr
        status: active
        display_name: 王道卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貽永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽永 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dTXH6ubpBbfKsj26LKdQqL | 王貽正 | accepted |
| children | p_vgoWcNsg5TJm8CAAjNf5Xr | 王道卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貽永（CBDB 1829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json)
