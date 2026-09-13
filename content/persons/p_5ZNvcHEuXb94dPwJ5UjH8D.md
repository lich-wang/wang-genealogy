---
schema: wang-person/v1
id: p_5ZNvcHEuXb94dPwJ5UjH8D
status: active
merged_into: null
display_name: 王族
cbdb_id: 23102
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T2FC9GSLN3NrQ6MCW5bxXN
        subject_person_id: p_5ZNvcHEuXb94dPwJ5UjH8D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王族，史料所见人物。本项目依据《中国历代人物传记资料库：王族（CBDB 23102）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_vESLPB_3FodLUK5cg79irZ
          claim_id: c_T2FC9GSLN3NrQ6MCW5bxXN
          source_id: s_DP69k2hxg8RpAB216CnZu5
          stance: supports
          locator: CBDB:23102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DP69k2hxg8RpAB216CnZu5
            source_type: api_record
            title: 中国历代人物传记资料库：王族（CBDB 23102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23102&o=json
            external_identifier: CBDB:23102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8sYk3CVjF46PQn69sv7cAS
        subject_person_id: p_5ZNvcHEuXb94dPwJ5UjH8D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王族
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DeiT8qBBowcbSy1FhrML2e
          claim_id: c_8sYk3CVjF46PQn69sv7cAS
          source_id: s_DP69k2hxg8RpAB216CnZu5
          stance: supports
          locator: CBDB:23102
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A-BYAR8nOGflDXJdXXs9-l
        subject_person_id: p_27oLmRHCG1cWWH3qpZQNSj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5ZNvcHEuXb94dPwJ5UjH8D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdERehrF_XTYf3SaZq_HZO
          claim_id: c_A-BYAR8nOGflDXJdXXs9-l
          source_id: s_garieJ4pNJjJFH1FZvjDre
          stance: supports
          locator: CBDB 双向互证（子 王族 ⇄ 父 王鎮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_garieJ4pNJjJFH1FZvjDre
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 23101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23101&o=json
            external_identifier: CBDB:23101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_27oLmRHCG1cWWH3qpZQNSj
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children:
    - claim:
        id: c_7kVSEc5n9DB9b63s0R5uGG
        subject_person_id: p_5ZNvcHEuXb94dPwJ5UjH8D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9krCz2yefFd538EMhsFrJJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hujc--RYFGhaen9dEXBkzl
          claim_id: c_7kVSEc5n9DB9b63s0R5uGG
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
          stance: supports
          locator: CBDB 双向互证（父 王族 ⇄ 子 王良翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9zoDq1SDQYFoQgU6tF3TMy
            source_type: api_record
            title: 中国历代人物传记资料库：王良翰（CBDB 23103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json
            external_identifier: CBDB:23103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9krCz2yefFd538EMhsFrJJ
        status: active
        display_name: 王良翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王族

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王族，史料所见人物。本项目依据《中国历代人物传记资料库：王族（CBDB 23102）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王族 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_27oLmRHCG1cWWH3qpZQNSj | 王鎮 | accepted |
| children | p_9krCz2yefFd538EMhsFrJJ | 王良翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良翰（CBDB 23103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 23101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23101&o=json)
- [中国历代人物传记资料库：王族（CBDB 23102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23102&o=json)
