---
schema: wang-person/v1
id: p_1veF7VdqFLD1R864GCoBzD
status: active
merged_into: null
display_name: 王思道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JgSxoYubbUjwX31BZPzAWb
        subject_person_id: p_1veF7VdqFLD1R864GCoBzD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iU1apBSqHJE9WrmYg5ReWL
          claim_id: c_JgSxoYubbUjwX31BZPzAWb
          source_id: s_6DzX8WsykSJEcPMo3j5B8Z
          stance: supports
          locator: CBDB:222813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222813）
          source: &a1
            id: s_6DzX8WsykSJEcPMo3j5B8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 222813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json
            external_identifier: CBDB:222813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5vTLMU1jJ3t9yvfqkCucc
        subject_person_id: p_1veF7VdqFLD1R864GCoBzD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思道，明人物。萬曆十一年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 222813）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EzYCIW-uzxPDun7WWw7y6P
          claim_id: c_H5vTLMU1jJ3t9yvfqkCucc
          source_id: s_6DzX8WsykSJEcPMo3j5B8Z
          stance: supports
          locator: CBDB:222813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HLDKZbU-CNuejXKDvH97-_
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1veF7VdqFLD1R864GCoBzD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cq1BYL0OAeadyvRbJH-jCW
          claim_id: c_HLDKZbU-CNuejXKDvH97-_
          source_id: s__GhAWUXaKU5Ow2NdXVXQoK
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王思道 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王思道 之父／母。
          source:
            id: s__GhAWUXaKU5Ow2NdXVXQoK
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 222813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json
            external_identifier: CBDB:222813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l1RyJ0UR8w5pl0aAi1SU2J
        subject_person_id: p_1veF7VdqFLD1R864GCoBzD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__13jX0NnTdJbeHQqxw-78u
          claim_id: c_l1RyJ0UR8w5pl0aAi1SU2J
          source_id: s__GhAWUXaKU5Ow2NdXVXQoK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__GhAWUXaKU5Ow2NdXVXQoK
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 222813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json
            external_identifier: CBDB:222813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王思道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思道 | accepted |
| bio.summary | 王思道，明人物。萬曆十一年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 222813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思道（CBDB 222813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json)
