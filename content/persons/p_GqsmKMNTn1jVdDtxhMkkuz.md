---
schema: wang-person/v1
id: p_GqsmKMNTn1jVdDtxhMkkuz
status: active
merged_into: null
display_name: 王志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gnRrHPNXkxcpkh7BpTHsAz
        subject_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNnkbENtE2j7STX8ZFtKBC
          claim_id: c_gnRrHPNXkxcpkh7BpTHsAz
          source_id: s_hwVwwGpfKzXQ7C2mKitHoL
          stance: supports
          locator: CBDB:337222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337222）
          source: &a1
            id: s_hwVwwGpfKzXQ7C2mKitHoL
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 337222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json
            external_identifier: CBDB:337222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MTQ5CTGXLnnU4wbgpE6osL
        subject_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fE7S8K71SblOavXBiLeByg
          claim_id: c_MTQ5CTGXLnnU4wbgpE6osL
          source_id: s_hwVwwGpfKzXQ7C2mKitHoL
          stance: supports
          locator: CBDB:337222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S-MjWV_sGLPDr_BVB5nHtM
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHD-iTH8HfU8K5qpl90CB_
          claim_id: c_S-MjWV_sGLPDr_BVB5nHtM
          source_id: s_8Y3uiVZeklcOovuRL9JNeP
          stance: supports
          locator: CBDB：兄弟 王臣（126514）之父／母 王威
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王志 之父／母。
          source:
            id: s_8Y3uiVZeklcOovuRL9JNeP
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 337222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json
            external_identifier: CBDB:337222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1mTZr3NQ9UFGyoNN92bJE
        status: active
        display_name: 王威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6PUaySAOcIoZqkAhr9FvLj
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4lw_qkDqwQb6Yz1dP_D8ZC
          claim_id: c_6PUaySAOcIoZqkAhr9FvLj
          source_id: s_8Y3uiVZeklcOovuRL9JNeP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126514 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8Y3uiVZeklcOovuRL9JNeP
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 337222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json
            external_identifier: CBDB:337222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1mTZr3NQ9UFGyoNN92bJE | 王威 | accepted |
| other | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 337222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json)
