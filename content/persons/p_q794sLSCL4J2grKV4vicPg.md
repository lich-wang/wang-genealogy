---
schema: wang-person/v1
id: p_q794sLSCL4J2grKV4vicPg
status: active
merged_into: null
display_name: 王時佐
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nv3Li26dsDBJYAVB9ZFoiD
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BAJwas33idB6DBUy4gTJiT
          claim_id: c_Nv3Li26dsDBJYAVB9ZFoiD
          source_id: s_1pndQ4JeskVJJZMWhajj9D
          stance: supports
          locator: CBDB:324119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324119）
          source: &a1
            id: s_1pndQ4JeskVJJZMWhajj9D
            source_type: api_record
            title: 中国历代人物传记资料库：王時佐（CBDB 324119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324119&o=json
            external_identifier: CBDB:324119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QF1nqm26Li5NN1HqfmQnaE
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時佐，明人物。天順四年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 324119）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KjbDxuW64-_qjeMnHYxna-
          claim_id: c_QF1nqm26Li5NN1HqfmQnaE
          source_id: s_1pndQ4JeskVJJZMWhajj9D
          stance: supports
          locator: CBDB:324119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TAMee7q1VXZaHiYyeAvAlD
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MobT3eZxIgECeAWMGVGPpo
          claim_id: c_TAMee7q1VXZaHiYyeAvAlD
          source_id: s_1pndQ4JeskVJJZMWhajj9D
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HvKxCmK79R4YwoS4fwu3e3
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_1HzCT_todF9tklpvYSr0OL
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46scthyDjVnfBGKkEsCk7a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqipo9sQJMOH-VcsXEhLvn
          claim_id: c_1HzCT_todF9tklpvYSr0OL
          source_id: s_qPWiwqSAG0TSMoralL9jrp
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑀 之父／母。
          source:
            id: s_qPWiwqSAG0TSMoralL9jrp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 324174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324174&o=json
            external_identifier: CBDB:324174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_46scthyDjVnfBGKkEsCk7a
        status: active
        display_name: 王瑀
        merged_into_person_id: null
    - claim:
        id: c_mOYluAwWg5FBU2DZUCY13l
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GD557R9tpiLg87ViNK5wDo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAEKrYge3XuoApzFqS4A89
          claim_id: c_mOYluAwWg5FBU2DZUCY13l
          source_id: s__t-Xkvj-kVVTDOgyGCVSYH
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王璇 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璇 之父／母。
          source:
            id: s__t-Xkvj-kVVTDOgyGCVSYH
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GD557R9tpiLg87ViNK5wDo
        status: active
        display_name: 王璇
        merged_into_person_id: null
    - claim:
        id: c_qnLYEeOHRSM-5RxI1XoNRq
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XTPHfCfC1wNdLwgUN1Skwr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q5PSkluXabNp9pmukw6jPt
          claim_id: c_qnLYEeOHRSM-5RxI1XoNRq
          source_id: s_QaXJDTCunACw6XFYKoAb-m
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王璡 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璡 之父／母。
          source:
            id: s_QaXJDTCunACw6XFYKoAb-m
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 324196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324196&o=json
            external_identifier: CBDB:324196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XTPHfCfC1wNdLwgUN1Skwr
        status: active
        display_name: 王璡
        merged_into_person_id: null
    - claim:
        id: c_Q5_lbOYIJRF6XgX7Z05hRf
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YnqSaqw9WlUySuu3bIrdYK
          claim_id: c_Q5_lbOYIJRF6XgX7Z05hRf
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB：兄弟 王璽（198852）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王琦 之父／母。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pJ2QPSMCenPvGoQ2CpyCQD
        status: active
        display_name: 王琦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時佐 | accepted |
| bio.summary | 王時佐，明人物。天順四年進士，籍贯長垣。（中国历代人物传记资料库 CBDB 324119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HvKxCmK79R4YwoS4fwu3e3 | 王璽 | accepted |
| children | p_46scthyDjVnfBGKkEsCk7a | 王瑀 | accepted |
| children | p_GD557R9tpiLg87ViNK5wDo | 王璇 | accepted |
| children | p_XTPHfCfC1wNdLwgUN1Skwr | 王璡 | accepted |
| children | p_pJ2QPSMCenPvGoQ2CpyCQD | 王琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 324196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324196&o=json)
- [中国历代人物传记资料库：王琦（CBDB 256030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json)
- [中国历代人物传记资料库：王時佐（CBDB 324119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324119&o=json)
- [中国历代人物传记资料库：王璇（CBDB 324185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 324174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324174&o=json)
