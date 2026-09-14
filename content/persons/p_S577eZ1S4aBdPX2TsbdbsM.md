---
schema: wang-person/v1
id: p_S577eZ1S4aBdPX2TsbdbsM
status: active
merged_into: null
display_name: 王畹生
cbdb_id: 135172
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SLkPiwEG94UMmbrztoEmhU
        subject_person_id: p_S577eZ1S4aBdPX2TsbdbsM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畹生，史料所见人物。本项目依据《中国历代人物传记资料库：王畹生（CBDB 135172）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ms7WJkfnMdEn_-OwLbhv0j
          claim_id: c_SLkPiwEG94UMmbrztoEmhU
          source_id: s_ZbKbMhbMCAAtxB81BGAdAJ
          stance: supports
          locator: CBDB:135172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZbKbMhbMCAAtxB81BGAdAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王畹生（CBDB 135172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135172&o=json
            external_identifier: CBDB:135172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ZwyuA19EWXm2AAPbder3a
        subject_person_id: p_S577eZ1S4aBdPX2TsbdbsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畹生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BF1vT5aNup51ciKRe5Bdq4
          claim_id: c_4ZwyuA19EWXm2AAPbder3a
          source_id: s_ZbKbMhbMCAAtxB81BGAdAJ
          stance: supports
          locator: CBDB:135172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 清
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
  other:
    - claim:
        id: c_HsW3Z8e6MkfDfJ-31PrKq7
        subject_person_id: p_S577eZ1S4aBdPX2TsbdbsM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zbv32HbZTJZ2KXkpbGdL19
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F_3CcFQHZx7b4RDvHX-KxD
          claim_id: c_HsW3Z8e6MkfDfJ-31PrKq7
          source_id: s_fgqRj4RoZFUcNCkgm8i7wn
          stance: supports
          locator: CBDB 亲属：姊（KinPerson 135176 王玉煙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fgqRj4RoZFUcNCkgm8i7wn
            source_type: api_record
            title: 中国历代人物传记资料库：王畹生（CBDB 135172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135172&o=json
            external_identifier: CBDB:135172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zbv32HbZTJZ2KXkpbGdL19
        status: active
        display_name: 王玉煙
        merged_into_person_id: null
---

# 王畹生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王畹生，史料所见人物。本项目依据《中国历代人物传记资料库：王畹生（CBDB 135172）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王畹生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_Zbv32HbZTJZ2KXkpbGdL19 | 王玉煙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王畹生（CBDB 135172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135172&o=json)
