---
schema: wang-person/v1
id: p_mCp2CE5cWVcFX6hFKr6Bi7
status: active
merged_into: null
display_name: 王名
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ycjqhNcBkdw436musxkPae
        subject_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MwqP6gCeFB4eDCKZMNJDno
          claim_id: c_ycjqhNcBkdw436musxkPae
          source_id: s_Jcer5orFYmjYZKhFQyoSBB
          stance: supports
          locator: CBDB:238513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238513）
          source: &a1
            id: s_Jcer5orFYmjYZKhFQyoSBB
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 238513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json
            external_identifier: CBDB:238513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1s1kFi85b1e6yi1RahDnQZ
        subject_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GXadeVEmri_dkO3aXvExgR
          claim_id: c_1s1kFi85b1e6yi1RahDnQZ
          source_id: s_Jcer5orFYmjYZKhFQyoSBB
          stance: supports
          locator: CBDB:238513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0s59Nedu-48Q7xS-eoEqTK
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XxdVLr57DMCPdubl5qcEh
          claim_id: c_0s59Nedu-48Q7xS-eoEqTK
          source_id: s_wMj4VmwCKPSQBjBi-vW6Z4
          stance: supports
          locator: CBDB：兄弟 王凱（207962）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王名 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王名 之父／母。
          source:
            id: s_wMj4VmwCKPSQBjBi-vW6Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 238513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json
            external_identifier: CBDB:238513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dMddXN9MM9RH4e355Y4XBH
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fOXLI3NvCJy7ZDyLSO1cT7
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UUO6yXARnGKughSaYH39YC
          claim_id: c_fOXLI3NvCJy7ZDyLSO1cT7
          source_id: s_wMj4VmwCKPSQBjBi-vW6Z4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207962 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wMj4VmwCKPSQBjBi-vW6Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 238513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json
            external_identifier: CBDB:238513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LpMHYjMg2BhRe212CnJZY9
        status: active
        display_name: 王凱
        merged_into_person_id: null
---

# 王名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名 | accepted |
| bio.summary | 王名，明人物。正统七年進士，籍贯慶都。（中国历代人物传记资料库 CBDB 238513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dMddXN9MM9RH4e355Y4XBH | 王俊 | accepted |
| other | p_LpMHYjMg2BhRe212CnJZY9 | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王名（CBDB 238513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json)
