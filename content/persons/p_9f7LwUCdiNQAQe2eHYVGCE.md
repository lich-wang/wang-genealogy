---
schema: wang-person/v1
id: p_9f7LwUCdiNQAQe2eHYVGCE
status: active
merged_into: null
display_name: 王脩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFEz33wmPe2CjwLR16YJEH
        subject_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_neY8zjgH8zJStCjQeT79Jf
          claim_id: c_CFEz33wmPe2CjwLR16YJEH
          source_id: s_N7gpEwrbmKmEiMF2YaLLD7
          stance: supports
          locator: CBDB:336837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336837）
          source: &a1
            id: s_N7gpEwrbmKmEiMF2YaLLD7
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 336837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json
            external_identifier: CBDB:336837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h27jCMBwghTXjDFmMkiF8L
        subject_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vjGGoskedR5gBK0ymi9o3D
          claim_id: c_h27jCMBwghTXjDFmMkiF8L
          source_id: s_N7gpEwrbmKmEiMF2YaLLD7
          stance: supports
          locator: CBDB:336837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DAaGEpqTgUAJCZW09aC4lY
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3OD-dD3YX2wgkVUM42_hcq
          claim_id: c_DAaGEpqTgUAJCZW09aC4lY
          source_id: s_T-fyAVt6zYKdjAfw_5r7bA
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王脩 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王脩 之父／母。
          source:
            id: s_T-fyAVt6zYKdjAfw_5r7bA
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 336837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json
            external_identifier: CBDB:336837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xaFW5n3rj8bBX5K7DicMLs
        status: active
        display_name: 王三成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Sn-H1hoWZbaYtOA7iHIhgx
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9f7LwUCdiNQAQe2eHYVGCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7Fw6RaSvNU1mzgUdwBkBh
          claim_id: c_Sn-H1hoWZbaYtOA7iHIhgx
          source_id: s_T-fyAVt6zYKdjAfw_5r7bA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T-fyAVt6zYKdjAfw_5r7bA
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 336837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json
            external_identifier: CBDB:336837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王脩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王脩 | accepted |
| bio.summary | 王脩，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xaFW5n3rj8bBX5K7DicMLs | 王三成 | accepted |
| other | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王脩（CBDB 336837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336837&o=json)
