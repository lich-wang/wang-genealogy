---
schema: wang-person/v1
id: p_bfof2uoeQ2WCxDF3w2J8nh
status: active
merged_into: null
display_name: 某氏
revision: 1
cbdb_id: 153507
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ukfiTNhvfkD03qnz0yyBeL
        subject_person_id: p_bfof2uoeQ2WCxDF3w2J8nh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏，史料所见人物。本项目依据《中国历代人物传记资料库：某氏(王文成妻)（CBDB 153507）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rPhX1xykSevRX-Fi6xrg3
          claim_id: c_ukfiTNhvfkD03qnz0yyBeL
          source_id: s_rJAAAlSnMn1PPbcY7N4Jvs
          stance: supports
          locator: CBDB:153507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rJAAAlSnMn1PPbcY7N4Jvs
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王文成妻)（CBDB 153507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153507&o=json
            external_identifier: CBDB:153507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_82SjvmD1JILoTJebgulKkV
        subject_person_id: p_bfof2uoeQ2WCxDF3w2J8nh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8XcFjt6BYOGYXPaH7eXuK
          claim_id: c_82SjvmD1JILoTJebgulKkV
          source_id: s_rJAAAlSnMn1PPbcY7N4Jvs
          stance: supports
          locator: CBDB:153507
          quotation: null
          interpretation_note: CBDB 明确记录的王文成配偶
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
        id: c_fLDKySXo-h7xF-ne4oXI9x
        subject_person_id: p_Hq7t7UJxnTD9nPvcr1xmXy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bfof2uoeQ2WCxDF3w2J8nh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eb3T12PPwmepc_X2KbdWL7
          claim_id: c_fLDKySXo-h7xF-ne4oXI9x
          source_id: s_rJAAAlSnMn1PPbcY7N4Jvs
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 61：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hq7t7UJxnTD9nPvcr1xmXy
        status: active
        display_name: 王文成
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 某氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 某氏，史料所见人物。本项目依据《中国历代人物传记资料库：某氏(王文成妻)（CBDB 153507）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 某氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Hq7t7UJxnTD9nPvcr1xmXy | 王文成 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王文成妻)（CBDB 153507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153507&o=json)
