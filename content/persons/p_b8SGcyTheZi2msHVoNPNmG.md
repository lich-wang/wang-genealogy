---
schema: wang-person/v1
id: p_b8SGcyTheZi2msHVoNPNmG
status: active
merged_into: null
display_name: 王庭筠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jdfxqVxNKfoayZqDYtjysD
        subject_person_id: p_b8SGcyTheZi2msHVoNPNmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GzvrXP1NLLvNnuA8281Vvr
          claim_id: c_jdfxqVxNKfoayZqDYtjysD
          source_id: s_FW8iknnsGj7pJBC877PsR3
          stance: supports
          locator: CBDB:24483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24483）
          source: &a1
            id: s_FW8iknnsGj7pJBC877PsR3
            source_type: api_record
            title: 中国历代人物传记资料库：王庭筠（CBDB 24483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24483&o=json
            external_identifier: CBDB:24483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o6v1KpjvbpNrB6HNvPoPbY
        subject_person_id: p_b8SGcyTheZi2msHVoNPNmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭筠，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 24483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GRfSz0r23qeWrVtWKD1r6i
          claim_id: c_o6v1KpjvbpNrB6HNvPoPbY
          source_id: s_FW8iknnsGj7pJBC877PsR3
          stance: supports
          locator: CBDB:24483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TsBZRWbRE4am5k-cZspMA8
        subject_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8SGcyTheZi2msHVoNPNmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7oJBS0mYRzZJ96Y4nO0DYl
          claim_id: c_TsBZRWbRE4am5k-cZspMA8
          source_id: s_bxA7916hFcqDWCXV29JLHg
          stance: supports
          locator: CBDB 双向互证（子 王庭筠 ⇄ 父 王居中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bxA7916hFcqDWCXV29JLHg
            source_type: api_record
            title: 中国历代人物传记资料库：王居中（CBDB 24482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24482&o=json
            external_identifier: CBDB:24482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6cU9fnGBqi4srFwLZdWmQC
        status: active
        display_name: 王居中
        merged_into_person_id: null
  children:
    - claim:
        id: c_K0o1R3CW39P2iJhMFCOmfP
        subject_person_id: p_b8SGcyTheZi2msHVoNPNmG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JR5BeKFHjyY5p6yqfVc1XZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vLIVtJ41w3O3qroqjVgo5H
          claim_id: c_K0o1R3CW39P2iJhMFCOmfP
          source_id: s_FW8iknnsGj7pJBC877PsR3
          stance: supports
          locator: CBDB 双向互证（子 王衜 ⇄ 父 王庭筠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_JR5BeKFHjyY5p6yqfVc1XZ
        status: active
        display_name: 王衜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭筠 | accepted |
| bio.summary | 王庭筠，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 24483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6cU9fnGBqi4srFwLZdWmQC | 王居中 | accepted |
| children | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王居中（CBDB 24482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24482&o=json)
- [中国历代人物传记资料库：王庭筠（CBDB 24483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24483&o=json)
