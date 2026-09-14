---
schema: wang-person/v1
id: p_1GhPFs5m4G2BPwjpU26jtR
status: active
merged_into: null
display_name: 王亮
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJWpdihLjxwsYpt2ScPPtz
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RskRGqYdAQyfJFFPT93uZ2
          claim_id: c_QJWpdihLjxwsYpt2ScPPtz
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: CBDB:207345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207345）
          source: &a1
            id: s_kEMvWdXNEMrMUFHnwDnn61
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 207345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json
            external_identifier: CBDB:207345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LQEif1RBDmkMVHfwvPrrbZ
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qu3bfKP74fRqoM73q6rQHV
          claim_id: c_LQEif1RBDmkMVHfwvPrrbZ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h7492Ld94gK4SVc1Lvou5d
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮（生于1395年），明人物。明清進士進士，籍贯大城，入仕進士。（中国历代人物传记资料库 CBDB 207345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g8V4WlHAZUP2MIjTu_NNhZ
          claim_id: c_h7492Ld94gK4SVc1Lvou5d
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: CBDB:207345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8gITiTW42Lj8rwHU8Dd1dJ
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IF1QRaoJbp1MozUWC5QACt
          claim_id: c_8gITiTW42Lj8rwHU8Dd1dJ
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        status: active
        display_name: 王甫林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jQxggGBw_1qoY5zbESd0PG
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0XDQ9F5I1jk_S7_JgsiUr
          claim_id: c_jQxggGBw_1qoY5zbESd0PG
          source_id: s_shrh2vvQn1AJaxuJJ96F8f
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_shrh2vvQn1AJaxuJJ96F8f
            source_type: api_record
            title: 中国历代人物传记资料库：王彥實（CBDB 231565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json
            external_identifier: CBDB:231565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CqoXtbYtPK4GM5A6zB25Z1
        status: active
        display_name: 王彥實
        merged_into_person_id: null
    - claim:
        id: c_7hQPTGTvM5xWeWOurFqlwV
        subject_person_id: p_4bu2im8699zCsccbtJF1P5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-0AkyvDaVH43pMMzGwOwV
          claim_id: c_7hQPTGTvM5xWeWOurFqlwV
          source_id: s_eQun86xSxMmWF591JHoBmM
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eQun86xSxMmWF591JHoBmM
            source_type: api_record
            title: 中国历代人物传记资料库：王某中（CBDB 231566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231566&o=json
            external_identifier: CBDB:231566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4bu2im8699zCsccbtJF1P5
        status: active
        display_name: 王某中
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_YqVmWXc1iMwjAYlAqlsqLn
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ix4NEmDya0tyo0Pn1GufY_
          claim_id: c_YqVmWXc1iMwjAYlAqlsqLn
          source_id: s_7FS9xZrI2oV90M4LvQ2KcN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207345 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7FS9xZrI2oV90M4LvQ2KcN
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_275vi8UU2NrwrnRkZzLYPQ
        status: active
        display_name: 王從政
        merged_into_person_id: null
    - claim:
        id: c_zaNGBdjYqztVH3879gOWeB
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MJmALtK53voZtSLwScQrHF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t662QVASd5wvhmBcOtM-em
          claim_id: c_zaNGBdjYqztVH3879gOWeB
          source_id: s_spjigKJUcZa0qW-TmsSmtx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207345 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_spjigKJUcZa0qW-TmsSmtx
            source_type: api_record
            title: 中国历代人物传记资料库：王從美（CBDB 231572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231572&o=json
            external_identifier: CBDB:231572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MJmALtK53voZtSLwScQrHF
        status: active
        display_name: 王從美
        merged_into_person_id: null
    - claim:
        id: c_JJIYkV_nYDQmc4BRKF8sKw
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NMC9HyK2b3NRX3PXmAHnYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j77n6vmXq5sAeF5wRgjRFX
          claim_id: c_JJIYkV_nYDQmc4BRKF8sKw
          source_id: s_V5VsyaDofccSEy-js-Zutp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207345 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V5VsyaDofccSEy-js-Zutp
            source_type: api_record
            title: 中国历代人物传记资料库：王從讓（CBDB 231573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json
            external_identifier: CBDB:231573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMC9HyK2b3NRX3PXmAHnYA
        status: active
        display_name: 王從讓
        merged_into_person_id: null
---

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | 王亮（生于1395年），明人物。明清進士進士，籍贯大城，入仕進士。（中国历代人物传记资料库 CBDB 207345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jn7Z5DoHyCUh3Tr3UBMSXH | 王甫林 | accepted |
| ancestors | p_CqoXtbYtPK4GM5A6zB25Z1 | 王彥實 | accepted |
| ancestors | p_4bu2im8699zCsccbtJF1P5 | 王某中 | accepted |
| other | p_275vi8UU2NrwrnRkZzLYPQ | 王從政 | accepted |
| other | p_MJmALtK53voZtSLwScQrHF | 王從美 | accepted |
| other | p_NMC9HyK2b3NRX3PXmAHnYA | 王從讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從美（CBDB 231572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231572&o=json)
- [中国历代人物传记资料库：王從讓（CBDB 231573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231573&o=json)
- [中国历代人物传记资料库：王從政（CBDB 231571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json)
- [中国历代人物传记资料库：王亮（CBDB 207345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json)
- [中国历代人物传记资料库：王某中（CBDB 231566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231566&o=json)
- [中国历代人物传记资料库：王彥實（CBDB 231565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json)
