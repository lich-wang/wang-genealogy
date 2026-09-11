---
schema: wang-person/v1
id: p_FYQb99EiX4ELJ1Y5NrCF89
status: active
merged_into: null
display_name: 王德新
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrHP8rMAJ9RT91gQPsUd4n
        subject_person_id: p_FYQb99EiX4ELJ1Y5NrCF89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iwZa8sgUB1XYVyVHMjWqT9
          claim_id: c_GrHP8rMAJ9RT91gQPsUd4n
          source_id: s_sBUCQ6qPhN71RWmuWhiLt4
          stance: supports
          locator: CBDB:703816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703816）
          source: &a1
            id: s_sBUCQ6qPhN71RWmuWhiLt4
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 703816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703816&o=json
            external_identifier: CBDB:703816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_khLPykUAfASc2hCteW2KcK
        subject_person_id: p_FYQb99EiX4ELJ1Y5NrCF89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新，清人物。入仕文生員。（中国历代人物传记资料库 CBDB 703816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KuvG8KuQnP3MkfTOnL9LKJ
          claim_id: c_khLPykUAfASc2hCteW2KcK
          source_id: s_sBUCQ6qPhN71RWmuWhiLt4
          stance: supports
          locator: CBDB:703816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MN5ZPNg3Kku4nhZZcb8OFO
        subject_person_id: p_722C8yooBJQZAw9cP1ZnKd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYQb99EiX4ELJ1Y5NrCF89
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZitajB9kFsvTgsecMY15-
          claim_id: c_MN5ZPNg3Kku4nhZZcb8OFO
          source_id: s_a9hEXQ2vi6RpiEMLeLUFyK
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9hEXQ2vi6RpiEMLeLUFyK
            source_type: api_record
            title: 中国历代人物传记资料库：王之春（CBDB 703802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703802&o=json
            external_identifier: CBDB:703802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_722C8yooBJQZAw9cP1ZnKd
        status: active
        display_name: 王之春
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_opkvIW2CWi767yvG9A79gf
        subject_person_id: p_iC9eyW5EGTjEu2z7hi9uMs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FYQb99EiX4ELJ1Y5NrCF89
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E9KZb78RKIYLmuOVQQc23X
          claim_id: c_opkvIW2CWi767yvG9A79gf
          source_id: s_uKXPADSL5E4iYQmAyG8Ru3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uKXPADSL5E4iYQmAyG8Ru3
            source_type: api_record
            title: 中国历代人物传记资料库：王士階（CBDB 703795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703795&o=json
            external_identifier: CBDB:703795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iC9eyW5EGTjEu2z7hi9uMs
        status: active
        display_name: 王士階
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | 王德新，清人物。入仕文生員。（中国历代人物传记资料库 CBDB 703816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_722C8yooBJQZAw9cP1ZnKd | 王之春 | accepted |
| ancestors | p_iC9eyW5EGTjEu2z7hi9uMs | 王士階 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 703816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703816&o=json)
- [中国历代人物传记资料库：王士階（CBDB 703795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703795&o=json)
- [中国历代人物传记资料库：王之春（CBDB 703802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703802&o=json)
