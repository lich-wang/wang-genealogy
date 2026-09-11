---
schema: wang-person/v1
id: p_F7dQbLK9gkNwBw69VDsDNX
status: active
merged_into: null
display_name: 王著
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7inCKq5vjPt6419zuXWoZi
        subject_person_id: p_F7dQbLK9gkNwBw69VDsDNX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k83tDZMk2GLszcrfNwdi8T
          claim_id: c_7inCKq5vjPt6419zuXWoZi
          source_id: s_MRXEES1wuSt8n3SXU9KxpG
          stance: supports
          locator: CBDB:231818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231818）
          source: &a1
            id: s_MRXEES1wuSt8n3SXU9KxpG
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 231818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231818&o=json
            external_identifier: CBDB:231818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x2SVu4qNZ5q6MCVxTk2yHj
        subject_person_id: p_F7dQbLK9gkNwBw69VDsDNX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王著，史料所见人物。本项目依据《中国历代人物传记资料库：王著（CBDB 231818）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yOYqbOh-_5zxcFsBsXpW-1
          claim_id: c_x2SVu4qNZ5q6MCVxTk2yHj
          source_id: s_MRXEES1wuSt8n3SXU9KxpG
          stance: supports
          locator: CBDB:231818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_cBBKgF5gPj0LNz3gMN08sY
        subject_person_id: p_F7dQbLK9gkNwBw69VDsDNX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMKtdpylXWbEFyMhBYv6Mu
          claim_id: c_cBBKgF5gPj0LNz3gMN08sY
          source_id: s_MRXEES1wuSt8n3SXU9KxpG
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ojf36Ko9wQJ75BMAk9xQXN
        status: active
        display_name: 王應元
        merged_into_person_id: null
  other: []
---

# 王著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王著 | accepted |
| bio.summary | 王著，史料所见人物。本项目依据《中国历代人物传记资料库：王著（CBDB 231818）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ojf36Ko9wQJ75BMAk9xQXN | 王應元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王著（CBDB 231818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231818&o=json)
