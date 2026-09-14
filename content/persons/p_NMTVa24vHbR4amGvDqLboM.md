---
schema: wang-person/v1
id: p_NMTVa24vHbR4amGvDqLboM
status: active
merged_into: null
display_name: 王勇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AvP8FCtVx2uG9f1y6BHCBF
        subject_person_id: p_NMTVa24vHbR4amGvDqLboM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NcCmw9AVS8VkTU9EGcgYos
          claim_id: c_AvP8FCtVx2uG9f1y6BHCBF
          source_id: s_igvG71AwYbV8GCCLb5FKY2
          stance: supports
          locator: CBDB:242215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242215）
          source: &a1
            id: s_igvG71AwYbV8GCCLb5FKY2
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 242215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json
            external_identifier: CBDB:242215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mygKewzytvsWVBriWEM9ab
        subject_person_id: p_NMTVa24vHbR4amGvDqLboM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勇，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bh_GOsot9DP4Cm-ku6iKaf
          claim_id: c_mygKewzytvsWVBriWEM9ab
          source_id: s_igvG71AwYbV8GCCLb5FKY2
          stance: supports
          locator: CBDB:242215
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fv28FviKeQq158ZsigOc60
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMTVa24vHbR4amGvDqLboM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKVhaBZGySB4WvZCxo2jjA
          claim_id: c_Fv28FviKeQq158ZsigOc60
          source_id: s_JQP_a4FEbcSUbXp0cG08YA
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王勇 与 王義 为同胞（CBDB 记「弟」），王義 之父／母即 王勇 之父／母。
          source:
            id: s_JQP_a4FEbcSUbXp0cG08YA
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 242215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json
            external_identifier: CBDB:242215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZSdmaffBtX3DKbv12A8Zie
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E23eK_xuV1rc6KYsH89nre
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NMTVa24vHbR4amGvDqLboM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFdt7kfO741AHXoOQoYxuN
          claim_id: c_E23eK_xuV1rc6KYsH89nre
          source_id: s_JQP_a4FEbcSUbXp0cG08YA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JQP_a4FEbcSUbXp0cG08YA
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 242215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json
            external_identifier: CBDB:242215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
---

# 王勇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勇 | accepted |
| bio.summary | 王勇，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSdmaffBtX3DKbv12A8Zie | 王輝 | accepted |
| other | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勇（CBDB 242215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json)
