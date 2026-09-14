---
schema: wang-person/v1
id: p_AfuEzx374a7WNXTfcMcWwd
status: active
merged_into: null
display_name: 王獻臣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQ2aFMYDaVBQGjC1K3rKXp
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RN5WPCU2SQoQZWDML55DkQ
          claim_id: c_KQ2aFMYDaVBQGjC1K3rKXp
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: CBDB:67807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67807）
          source: &a1
            id: s_eiGJS5K3CYMceZonDwA3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 67807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json
            external_identifier: CBDB:67807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tHk9n68mbtERAd8Stgkhn
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻臣，明人物。明清進士進士，籍贯吳縣，入仕進士，曾任監察御史、通判、縣丞。（中国历代人物传记资料库 CBDB 67807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q4d3lpekw8OX8zMLA58bIT
          claim_id: c_2tHk9n68mbtERAd8Stgkhn
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: CBDB:67807
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__Tr12bAUV9FL7T7DIPRKx6
        subject_person_id: p_vmWmptGLTYqo5zFQQyE1ek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPGd3S8IKwbP3L_n97l35E
          claim_id: c__Tr12bAUV9FL7T7DIPRKx6
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vmWmptGLTYqo5zFQQyE1ek
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZqSyYBMBh0joAwN7WoD4aI
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3XpQZsyy1MMzLgJ6d6jucq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppo0Lnftp6iPVpsQC7HuSD
          claim_id: c_ZqSyYBMBh0joAwN7WoD4aI
          source_id: s_STFHG_Zfs2rzPH5gKYm0wl
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_STFHG_Zfs2rzPH5gKYm0wl
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王獻臣妻)（CBDB 265732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265732&o=json
            external_identifier: CBDB:265732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3XpQZsyy1MMzLgJ6d6jucq
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_36byLAiV8H3S4dK2WCljgS
        subject_person_id: p_wUBGxrZa6P78WZVLrT2yi5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4MzcQP6gzM8O6RYO6TXHS
          claim_id: c_36byLAiV8H3S4dK2WCljgS
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wUBGxrZa6P78WZVLrT2yi5
        status: active
        display_name: 王文榮
        merged_into_person_id: null
    - claim:
        id: c_ZDpmjeK0rnewSTSGnRjH_Z
        subject_person_id: p_LbuKwgtm6zjB3poDp2uQZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XYXi5byx3_rDbns87JIfo
          claim_id: c_ZDpmjeK0rnewSTSGnRjH_Z
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LbuKwgtm6zjB3poDp2uQZP
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JErgejrt8E4OC6Bb6_b-F6
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KDpb7Vx8XfqRVqdRsUpFyd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7MhE_hAg9jQjIp2-mT88a
          claim_id: c_JErgejrt8E4OC6Bb6_b-F6
          source_id: s_LikcoNueijENcxPAnBAS7c
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67807 王獻臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LikcoNueijENcxPAnBAS7c
            source_type: api_record
            title: 中国历代人物传记资料库：王獻夫（CBDB 265734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json
            external_identifier: CBDB:265734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KDpb7Vx8XfqRVqdRsUpFyd
        status: active
        display_name: 王獻夫
        merged_into_person_id: null
    - claim:
        id: c__geqtjaQ3vY5_60tmM0vin
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dTF8SyB54g9jSjGqYL8185
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5oDOhTPeFLa8CeNMsdZXNH
          claim_id: c__geqtjaQ3vY5_60tmM0vin
          source_id: s_DYxhxUCLJJHHIMrqvh5si1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67807 王獻臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DYxhxUCLJJHHIMrqvh5si1
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 265733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265733&o=json
            external_identifier: CBDB:265733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dTF8SyB54g9jSjGqYL8185
        status: active
        display_name: 王獻民
        merged_into_person_id: null
---

# 王獻臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻臣 | accepted |
| bio.summary | 王獻臣，明人物。明清進士進士，籍贯吳縣，入仕進士，曾任監察御史、通判、縣丞。（中国历代人物传记资料库 CBDB 67807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vmWmptGLTYqo5zFQQyE1ek | 王瑾 | accepted |
| spouses | p_3XpQZsyy1MMzLgJ6d6jucq | 陳氏 | accepted |
| ancestors | p_wUBGxrZa6P78WZVLrT2yi5 | 王文榮 | accepted |
| ancestors | p_LbuKwgtm6zjB3poDp2uQZP | 王成 | accepted |
| other | p_KDpb7Vx8XfqRVqdRsUpFyd | 王獻夫 | accepted |
| other | p_dTF8SyB54g9jSjGqYL8185 | 王獻民 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王獻臣妻)（CBDB 265732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265732&o=json)
- [中国历代人物传记资料库：王獻臣（CBDB 67807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json)
- [中国历代人物传记资料库：王獻夫（CBDB 265734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json)
- [中国历代人物传记资料库：王獻民（CBDB 265733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265733&o=json)
