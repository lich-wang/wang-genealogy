---
schema: wang-person/v1
id: p_9GLd9Perr5iNSkDQLQhB21
status: active
merged_into: null
display_name: 王察
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4nsdxxiNvjMsJ7NuaS18sv
        subject_person_id: p_9GLd9Perr5iNSkDQLQhB21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ayeWMreaFeKN93jwSDEEV4
          claim_id: c_4nsdxxiNvjMsJ7NuaS18sv
          source_id: s_AfinoeDHqwKerF7A5FERYE
          stance: supports
          locator: CBDB:175952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175952）
          source: &a1
            id: s_AfinoeDHqwKerF7A5FERYE
            source_type: api_record
            title: 中国历代人物传记资料库：王察（CBDB 175952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json
            external_identifier: CBDB:175952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rzyPWv6uHLM3fC6JUjt8BZ
        subject_person_id: p_9GLd9Perr5iNSkDQLQhB21
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 816年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AX62wHFWs41fxJToxjYY9E
          claim_id: c_rzyPWv6uHLM3fC6JUjt8BZ
          source_id: s_AfinoeDHqwKerF7A5FERYE
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
        id: c_key26VS61pMdFLnQPQ5H8V
        subject_person_id: p_9GLd9Perr5iNSkDQLQhB21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTzMBbL9Hj21CxvPiVBuf1
          claim_id: c_key26VS61pMdFLnQPQ5H8V
          source_id: s_AfinoeDHqwKerF7A5FERYE
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
        id: c_ZtSU0yYt-yxHPqwFxestYf
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9GLd9Perr5iNSkDQLQhB21
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2JYjLRdE-TlCUFC164fJP
          claim_id: c_ZtSU0yYt-yxHPqwFxestYf
          source_id: s_AfinoeDHqwKerF7A5FERYE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yyG5m7BqW1DAadHkjg2Ep9
        status: active
        display_name: 王擇從
        merged_into_person_id: null
  children:
    - claim:
        id: c_itxVYVp8ZLRYVkGVgKkMUM
        subject_person_id: p_9GLd9Perr5iNSkDQLQhB21
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bn6SMvjoCFSZissbBmVzi
          claim_id: c_itxVYVp8ZLRYVkGVgKkMUM
          source_id: s_AfinoeDHqwKerF7A5FERYE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AgJDhHZcAwqHqWHrXqpG4R
        status: active
        display_name: 王自立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王察

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王察 | accepted |
| death.date | 816年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yyG5m7BqW1DAadHkjg2Ep9 | 王擇從 | accepted |
| children | p_AgJDhHZcAwqHqWHrXqpG4R | 王自立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王察（CBDB 175952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json)
