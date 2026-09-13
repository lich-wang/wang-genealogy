---
schema: wang-person/v1
id: p_YqLxjjvk6PGXGHv5LtVKo4
status: active
merged_into: null
display_name: 王承旨
cbdb_id: 445472
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ohxoZ4g5iBNgy7qLG9cR6P
        subject_person_id: p_YqLxjjvk6PGXGHv5LtVKo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承旨，史料所见人物。本项目依据《中国历代人物传记资料库：王承旨（CBDB 445472）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_mfN3Lgi4pf4QwumW3ZQRuh
          claim_id: c_ohxoZ4g5iBNgy7qLG9cR6P
          source_id: s_GQbNrt48dXy7onMkc5HNFJ
          stance: supports
          locator: CBDB:445472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GQbNrt48dXy7onMkc5HNFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王承旨（CBDB 445472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445472&o=json
            external_identifier: CBDB:445472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ocAFLUsApFwi89cHJwPKcX
        subject_person_id: p_YqLxjjvk6PGXGHv5LtVKo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承旨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EKAvawwedhnZ2ydEUaTCw9
          claim_id: c_ocAFLUsApFwi89cHJwPKcX
          source_id: s_GQbNrt48dXy7onMkc5HNFJ
          stance: supports
          locator: CBDB:445472
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 唐
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
  descendants: []
  other: []
---

# 王承旨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承旨，史料所见人物。本项目依据《中国历代人物传记资料库：王承旨（CBDB 445472）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王承旨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承旨（CBDB 445472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445472&o=json)
