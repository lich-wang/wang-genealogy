---
schema: wang-person/v1
id: p_7G76GCQV5KHCuJQ8PFFbQR
status: active
merged_into: null
display_name: 王導
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ErqRbXnA9LCzg72gBttU6R
        subject_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王導
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j67cHZgPJoeFybBz8q32s5
          claim_id: c_ErqRbXnA9LCzg72gBttU6R
          source_id: s_5RW7dwGk2eVu4DmNFkxjPn
          stance: supports
          locator: CBDB:25788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25788）
          source: &a1
            id: s_5RW7dwGk2eVu4DmNFkxjPn
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 25788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json
            external_identifier: CBDB:25788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UH76MNGFzZ2BM3pApvEuTb
        subject_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 330年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q1JEfcfcp1FxR8H8mm5xXH
          claim_id: c_UH76MNGFzZ2BM3pApvEuTb
          source_id: s_5RW7dwGk2eVu4DmNFkxjPn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JNEUj7g7BdiLdw7ugDNN11
        subject_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王導（卒于330年），東晉人物。籍贯江寧，入仕封土建藩(始封)。（中国历代人物传记资料库 CBDB 25788）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_kXxpQmS1rvIAUUKABT24
          claim_id: c_JNEUj7g7BdiLdw7ugDNN11
          source_id: s_5RW7dwGk2eVu4DmNFkxjPn
          stance: supports
          locator: CBDB:25788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBUnHQlbZ_Z5Is9pjC2C4S
        subject_person_id: p_awcmjvARumCUVcUWMzCoPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J9C8b3dfrcH241MuQ3J-Co
          claim_id: c_mBUnHQlbZ_Z5Is9pjC2C4S
          source_id: s_8pbW20D53cGwyUFx5Wsk2y
          stance: supports
          locator: CBDB 亲属：父（KinPerson 25787）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8pbW20D53cGwyUFx5Wsk2y
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 25788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json
            external_identifier: CBDB:25788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_awcmjvARumCUVcUWMzCoPg
        status: active
        display_name: 王裁
        merged_into_person_id: null
  children:
    - claim:
        id: c_UUgxos4vnS_7BBhKBOz-Nj
        subject_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aKGUcE5iedSRjLkkMyMXsb
          claim_id: c_UUgxos4vnS_7BBhKBOz-Nj
          source_id: s_UFPQr6bYVtt6PlCkzP0qqS
          stance: supports
          locator: CBDB 亲属：父（KinPerson 25788）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFPQr6bYVtt6PlCkzP0qqS
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 25789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json
            external_identifier: CBDB:25789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b5R1So1Z3XLD4KqnNJufMg
        status: active
        display_name: 王悅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王導

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王導 | accepted |
| death.date | 330年 | accepted |
| bio.summary | 王導（卒于330年），東晉人物。籍贯江寧，入仕封土建藩(始封)。（中国历代人物传记资料库 CBDB 25788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_awcmjvARumCUVcUWMzCoPg | 王裁 | accepted |
| children | p_b5R1So1Z3XLD4KqnNJufMg | 王悅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王導（CBDB 25788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25788&o=json)
- [中国历代人物传记资料库：王悅（CBDB 25789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json)
