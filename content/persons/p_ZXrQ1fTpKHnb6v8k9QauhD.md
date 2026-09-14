---
schema: wang-person/v1
id: p_ZXrQ1fTpKHnb6v8k9QauhD
status: active
merged_into: null
display_name: 王標
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HcG8BrrLp4M9Lne5Ljz8Zn
        subject_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YkxMc7BaRqQ2V7m97t1coX
          claim_id: c_HcG8BrrLp4M9Lne5Ljz8Zn
          source_id: s_3sgUnw1Lh6VmDE9ywBHweD
          stance: supports
          locator: CBDB:274259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274259）
          source: &a1
            id: s_3sgUnw1Lh6VmDE9ywBHweD
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 274259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json
            external_identifier: CBDB:274259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CA8GyXWh3jJ8f4dp1EzxRs
        subject_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZJNtKy1PHVH_lTvfvbeuIF
          claim_id: c_CA8GyXWh3jJ8f4dp1EzxRs
          source_id: s_3sgUnw1Lh6VmDE9ywBHweD
          stance: supports
          locator: CBDB:274259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bxH5BjEXDVd2_qPcmaPtf1
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kaybq7u0e33j4_j10V536v
          claim_id: c_bxH5BjEXDVd2_qPcmaPtf1
          source_id: s_G95iMgoDLBbhFNYZP-uKlN
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王標 与 王栻 为同胞（CBDB 记「兄」），王栻 之父／母即 王標 之父／母。
          source:
            id: s_G95iMgoDLBbhFNYZP-uKlN
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 274259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json
            external_identifier: CBDB:274259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VcYjKdyzjQFgG3FRqoyThA
        status: active
        display_name: 王完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_agP2chaSn1CDm0JsMzDU-e
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfulOidFCclCRkhDw6wV6K
          claim_id: c_agP2chaSn1CDm0JsMzDU-e
          source_id: s_G95iMgoDLBbhFNYZP-uKlN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G95iMgoDLBbhFNYZP-uKlN
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 274259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json
            external_identifier: CBDB:274259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
---

# 王標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王標 | accepted |
| bio.summary | 王標，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VcYjKdyzjQFgG3FRqoyThA | 王完 | accepted |
| other | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 274259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json)
