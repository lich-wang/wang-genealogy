---
schema: wang-person/v1
id: p_N8A5uBxQ6WYAScVBd1MwWK
status: active
merged_into: null
display_name: 王納言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEDaH8t9i9qEi7NS6Hpo2a
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dHBFHGVgVtFCVw11nYHVE
          claim_id: c_dEDaH8t9i9qEi7NS6Hpo2a
          source_id: s_f2QX2kSwji72yx94EjEhZZ
          stance: supports
          locator: CBDB:205080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205080）
          source: &a1
            id: s_f2QX2kSwji72yx94EjEhZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 205080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205080&o=json
            external_identifier: CBDB:205080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bebANWhkKJCRcT1J8J8cfG
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJ5VwPvHndpRh96kg23w2P
          claim_id: c_bebANWhkKJCRcT1J8J8cfG
          source_id: s_f2QX2kSwji72yx94EjEhZZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jh6JhzE4qABaBjKGEibPfa
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yK4oQ6euMKKW21Ms8oqt57
          claim_id: c_Jh6JhzE4qABaBjKGEibPfa
          source_id: s_f2QX2kSwji72yx94EjEhZZ
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
        id: c_OCAy-nrNZGgRulKoYZCPhC
        subject_person_id: p_EtunJTDuKzmTUvcCoNYvEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTWR7NTawrTKJeptL4AGkT
          claim_id: c_OCAy-nrNZGgRulKoYZCPhC
          source_id: s_FyPwC1CGbriX4Jrb8FKBXx
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FyPwC1CGbriX4Jrb8FKBXx
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 328021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328021&o=json
            external_identifier: CBDB:328021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EtunJTDuKzmTUvcCoNYvEE
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MDquL3GF6hbpKiS2q4NXWV
        subject_person_id: p_5qEzsE79D6PfvuW1bJkxqf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lhhVwF99nrVy_uqm1w3myN
          claim_id: c_MDquL3GF6hbpKiS2q4NXWV
          source_id: s_isK9fzZK118auRjgiuAJHS
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_isK9fzZK118auRjgiuAJHS
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 328020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328020&o=json
            external_identifier: CBDB:328020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5qEzsE79D6PfvuW1bJkxqf
        status: active
        display_name: 王澍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EtunJTDuKzmTUvcCoNYvEE | 王棟 | accepted |
| ancestors | p_5qEzsE79D6PfvuW1bJkxqf | 王澍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 328021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328021&o=json)
- [中国历代人物传记资料库：王納言（CBDB 205080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205080&o=json)
- [中国历代人物传记资料库：王澍（CBDB 328020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328020&o=json)
