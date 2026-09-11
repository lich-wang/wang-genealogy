---
schema: wang-person/v1
id: p_9krCz2yefFd538EMhsFrJJ
status: active
merged_into: null
display_name: 王良翰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tp6KFT582gwg74bwWizbxu
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuBqo39rsgKuddGkGmMD8L
          claim_id: c_Tp6KFT582gwg74bwWizbxu
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
          stance: supports
          locator: CBDB:23103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23103）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FoHwSbpFjXBa6K9ak7tR1B
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
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
        - id: cs_dAttPJQoE8KvngGMNKVbER
          claim_id: c_FoHwSbpFjXBa6K9ak7tR1B
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
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
          source: *a1
      object_person:
        id: p_5ZNvcHEuXb94dPwJ5UjH8D
        status: active
        display_name: 王族
        merged_into_person_id: null
  children:
    - claim:
        id: c_pRYBdhgJa01Uw8E4CHhtdX
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jw3jaJXLqE5qhrMN7CYpap
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x-iasioy2zbcc60CLkmmch
          claim_id: c_pRYBdhgJa01Uw8E4CHhtdX
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
          stance: supports
          locator: CBDB 双向互证（子 王人鑑 ⇄ 父 王良翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Jw3jaJXLqE5qhrMN7CYpap
        status: active
        display_name: 王人鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良翰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5ZNvcHEuXb94dPwJ5UjH8D | 王族 | accepted |
| children | p_Jw3jaJXLqE5qhrMN7CYpap | 王人鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良翰（CBDB 23103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json)
