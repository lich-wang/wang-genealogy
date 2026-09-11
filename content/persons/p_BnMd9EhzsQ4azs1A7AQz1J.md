---
schema: wang-person/v1
id: p_BnMd9EhzsQ4azs1A7AQz1J
status: active
merged_into: null
display_name: 王錕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dG2cgKbrZ4Y6wFR6vnQR3Y
        subject_person_id: p_BnMd9EhzsQ4azs1A7AQz1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zV44M1jLnD2FfXBvTLpyJD
          claim_id: c_dG2cgKbrZ4Y6wFR6vnQR3Y
          source_id: s_ruvpMPbLgZ88fJvF9bomBw
          stance: supports
          locator: CBDB:343795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343795）
          source: &a1
            id: s_ruvpMPbLgZ88fJvF9bomBw
            source_type: api_record
            title: 中国历代人物传记资料库：王錕（CBDB 343795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343795&o=json
            external_identifier: CBDB:343795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iq3jg7cqph5vRu3bgPttAb
        subject_person_id: p_BnMd9EhzsQ4azs1A7AQz1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錕，清人物。明清進士進士，籍贯吳江，入仕進士，曾任兵部車駕司主事、兵部郎中、兵部武選司郎中。（中国历代人物传记资料库 CBDB 343795）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k8XLuVXE7onTht351Rlmpc
          claim_id: c_iq3jg7cqph5vRu3bgPttAb
          source_id: s_ruvpMPbLgZ88fJvF9bomBw
          stance: supports
          locator: CBDB:343795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王錕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錕 | accepted |
| bio.summary | 王錕，清人物。明清進士進士，籍贯吳江，入仕進士，曾任兵部車駕司主事、兵部郎中、兵部武選司郎中。（中国历代人物传记资料库 CBDB 343795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錕（CBDB 343795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343795&o=json)
