---
schema: wang-person/v1
id: p_S9XZsVMSPPCYHPg3x3s7jm
status: active
merged_into: null
display_name: 王彥奇
cbdb_id: 126594
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1U9TrxekyLHiVLm6fzc4Ho
        subject_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥奇，明人物。明清進士進士，籍贯雲陽，入仕進士，曾任府丞、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FxTkeGXxGitXMlDwRRuhbY
          claim_id: c_1U9TrxekyLHiVLm6fzc4Ho
          source_id: s_51q4q1gniRbgjxNTBsHMp2
          stance: supports
          locator: CBDB:126594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_51q4q1gniRbgjxNTBsHMp2
            source_type: api_record
            title: 中国历代人物传记资料库：王彥奇（CBDB 126594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126594&o=json
            external_identifier: CBDB:126594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Twzmsf45hncEKa7HEhqbDG
        subject_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SNBEB2d7zc27ACdAVJf49v
          claim_id: c_Twzmsf45hncEKa7HEhqbDG
          source_id: s_51q4q1gniRbgjxNTBsHMp2
          stance: supports
          locator: CBDB:126594
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pVZpdwh87cQgIlyLOZWrxt
        subject_person_id: p_ZqnLzRT9XT7NL5ciADvB8h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qrAq8I5R7QqCPwj62_fkI
          claim_id: c_pVZpdwh87cQgIlyLOZWrxt
          source_id: s_Bmi5KPJgmdUbeCDtzees5k
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Bmi5KPJgmdUbeCDtzees5k
            source_type: api_record
            title: 中国历代人物传记资料库：王景先（CBDB 261598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261598&o=json
            external_identifier: CBDB:261598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZqnLzRT9XT7NL5ciADvB8h
        status: active
        display_name: 王景先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2dzZ5a7ZyxZ_ue5ewMOOu9
        subject_person_id: p_ozM2Qob3tqkhCmBB9dE9CR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWsYJ2fwEHVezS7mQVXeEG
          claim_id: c_2dzZ5a7ZyxZ_ue5ewMOOu9
          source_id: s_1CbAmw63HqkBqNxF96X8Lc
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第七十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1CbAmw63HqkBqNxF96X8Lc
            source_type: api_record
            title: 中国历代人物传记资料库：王文秀（CBDB 261597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261597&o=json
            external_identifier: CBDB:261597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ozM2Qob3tqkhCmBB9dE9CR
        status: active
        display_name: 王文秀
        merged_into_person_id: null
    - claim:
        id: c_L8c3QA3vt5b6K0CfxAN1Bc
        subject_person_id: p_MBrPDvYR34aq1wQnSM6vm3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jf2Be_8JXx8rjcvpQJdRL
          claim_id: c_L8c3QA3vt5b6K0CfxAN1Bc
          source_id: s_Pu3hwbRB8d9afw7MPV3Jw8
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pu3hwbRB8d9afw7MPV3Jw8
            source_type: api_record
            title: 中国历代人物传记资料库：王才傑（CBDB 261596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261596&o=json
            external_identifier: CBDB:261596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MBrPDvYR34aq1wQnSM6vm3
        status: active
        display_name: 王才傑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_XzGX-rByVtMzSvz2omNi96
        subject_person_id: p_HYyUvME69gA6T2zhKJ2JfN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kY3cUJ7aKq3BX1t2iaSH9E
          claim_id: c_XzGX-rByVtMzSvz2omNi96
          source_id: s_-BkixD5YLJDgDG5a4m2B9t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126594 王彥奇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-BkixD5YLJDgDG5a4m2B9t
            source_type: api_record
            title: 中国历代人物传记资料库：王彥章（CBDB 261602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261602&o=json
            external_identifier: CBDB:261602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HYyUvME69gA6T2zhKJ2JfN
        status: active
        display_name: 王彥章
        merged_into_person_id: null
    - claim:
        id: c_kjoxs45tEnqoyECuGt3RoD
        subject_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ymvfwqfQJ1bMiRn2YZe5st
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpXqDhe8shS09ER1b5yv2W
          claim_id: c_kjoxs45tEnqoyECuGt3RoD
          source_id: s_UMmd30PKIOoxTT-jWb2_zq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126594 王彥奇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UMmd30PKIOoxTT-jWb2_zq
            source_type: api_record
            title: 中国历代人物传记资料库：王彥音（CBDB 261601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json
            external_identifier: CBDB:261601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymvfwqfQJ1bMiRn2YZe5st
        status: active
        display_name: 王彥音
        merged_into_person_id: null
---

# 王彥奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥奇，明人物。明清進士進士，籍贯雲陽，入仕進士，曾任府丞、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126594） | accepted |
| name.primary | 王彥奇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZqnLzRT9XT7NL5ciADvB8h | 王景先 | accepted |
| ancestors | p_ozM2Qob3tqkhCmBB9dE9CR | 王文秀 | accepted |
| ancestors | p_MBrPDvYR34aq1wQnSM6vm3 | 王才傑 | accepted |
| other | p_HYyUvME69gA6T2zhKJ2JfN | 王彥章 | accepted |
| other | p_ymvfwqfQJ1bMiRn2YZe5st | 王彥音 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才傑（CBDB 261596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261596&o=json)
- [中国历代人物传记资料库：王景先（CBDB 261598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261598&o=json)
- [中国历代人物传记资料库：王文秀（CBDB 261597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261597&o=json)
- [中国历代人物传记资料库：王彥奇（CBDB 126594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126594&o=json)
- [中国历代人物传记资料库：王彥音（CBDB 261601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json)
- [中国历代人物传记资料库：王彥章（CBDB 261602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261602&o=json)
