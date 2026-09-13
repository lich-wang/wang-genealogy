---
schema: wang-person/v1
id: p_82qs9CEtP8mHtyQcRtAHiE
status: active
merged_into: null
display_name: 王遂休
cbdb_id: 156673
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FAMGJ8n27eNLN72XJaZ4HF
        subject_person_id: p_82qs9CEtP8mHtyQcRtAHiE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂休，唐人物。曾任縣令。（中国历代人物传记资料库 CBDB 156673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2LFZ7sieoHrSJ1bT73WqOA
          claim_id: c_FAMGJ8n27eNLN72XJaZ4HF
          source_id: s_7GpGNRn6yn9xLqZHbVKqdk
          stance: supports
          locator: CBDB:156673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7GpGNRn6yn9xLqZHbVKqdk
            source_type: api_record
            title: 中国历代人物传记资料库：王遂休（CBDB 156673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156673&o=json
            external_identifier: CBDB:156673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ibGineBQLtm3LY8APxUdEa
        subject_person_id: p_82qs9CEtP8mHtyQcRtAHiE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wMxp6HQgXe5NQA8U5WinFz
          claim_id: c_ibGineBQLtm3LY8APxUdEa
          source_id: s_7GpGNRn6yn9xLqZHbVKqdk
          stance: supports
          locator: CBDB:156673
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fzfJMrNEvW7V8zZWd6BNaK
        subject_person_id: p_J8SvjKqGqBqfjJsNdhSrna
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_82qs9CEtP8mHtyQcRtAHiE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKQNHVI6XgOXv9kyClBoBb
          claim_id: c_fzfJMrNEvW7V8zZWd6BNaK
          source_id: s_LDK6PshUTDiJaHe6w3DV4v
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LDK6PshUTDiJaHe6w3DV4v
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 156677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156677&o=json
            external_identifier: CBDB:156677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J8SvjKqGqBqfjJsNdhSrna
        status: active
        display_name: 王祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遂休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遂休，唐人物。曾任縣令。（中国历代人物传记资料库 CBDB 156673） | accepted |
| name.primary | 王遂休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J8SvjKqGqBqfjJsNdhSrna | 王祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遂休（CBDB 156673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156673&o=json)
- [中国历代人物传记资料库：王祥（CBDB 156677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156677&o=json)
