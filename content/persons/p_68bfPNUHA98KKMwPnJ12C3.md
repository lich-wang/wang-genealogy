---
schema: wang-person/v1
id: p_68bfPNUHA98KKMwPnJ12C3
status: active
merged_into: null
display_name: 王謙
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GhPHavNNBgLhxcPrmubqJt
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RbC3tMVoKoRV8TdPZ7c1BM
          claim_id: c_GhPHavNNBgLhxcPrmubqJt
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: CBDB:124982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124982）
          source: &a1
            id: s_HXFJiTCNt1A5HD2f7yj48e
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 124982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json
            external_identifier: CBDB:124982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H9F85DcWMqAKGfXATCRUGM
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。明清進士進士，籍贯蒲州，入仕進士，曾任兵部武庫司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 124982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QFp37L0X8bERzLbv9NBEUp
          claim_id: c_H9F85DcWMqAKGfXATCRUGM
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: CBDB:124982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1NDRlcLlQpXVJoy7_kUuF5
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvbsKpU1r9rlDHokifAAo5
          claim_id: c_1NDRlcLlQpXVJoy7_kUuF5
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uRxHoeETPENUnB4UpGZ636
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fw12tkpDhDinMIl9-wix2f
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8cxn7qhC9RcaoQ98GdxCBt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpr3q--43KQkJIGyc_c38Y
          claim_id: c_fw12tkpDhDinMIl9-wix2f
          source_id: s_jO2YNPSM6wvoRobLYVhJjT
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jO2YNPSM6wvoRobLYVhJjT
            source_type: api_record
            title: 中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json
            external_identifier: CBDB:215868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8cxn7qhC9RcaoQ98GdxCBt
        status: active
        display_name: 史氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HXq9K3Gi3z30lVX15wdLgt
        subject_person_id: p_n3VXQL5pitaZ4dih84qWf8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2ejinfs5fCpdAbYogRzYI
          claim_id: c_HXq9K3Gi3z30lVX15wdLgt
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n3VXQL5pitaZ4dih84qWf8
        status: active
        display_name: 王馨
        merged_into_person_id: null
    - claim:
        id: c_YrWR8A5JcuTl1RBg1A07kl
        subject_person_id: p_WV7ubqMfsAHuJnpcg7NTN2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_df9_UvqVUCgJFzvDEeHOLz
          claim_id: c_YrWR8A5JcuTl1RBg1A07kl
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WV7ubqMfsAHuJnpcg7NTN2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_pSmNCcML46GkldH6fFqpFo
        subject_person_id: p_1rksTfkThDoK87xQymRLD5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2M0ZFE-HWgRH_Kpnbox2gP
          claim_id: c_pSmNCcML46GkldH6fFqpFo
          source_id: s_a3WHmxbVo1vyOr-_zl0L1D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a3WHmxbVo1vyOr-_zl0L1D
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 215870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215870&o=json
            external_identifier: CBDB:215870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1rksTfkThDoK87xQymRLD5
        status: active
        display_name: 王節
        merged_into_person_id: null
    - claim:
        id: c_Cf9VdAg1ldsqQphtEUJ0f_
        subject_person_id: p_25bCJTSEJGvJRhiJuNYr6v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQ5HXzc5sWL1MiUMuS4KiE
          claim_id: c_Cf9VdAg1ldsqQphtEUJ0f_
          source_id: s_yrkEbWxNY3imVHaGbkdWeH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yrkEbWxNY3imVHaGbkdWeH
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 215873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215873&o=json
            external_identifier: CBDB:215873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_25bCJTSEJGvJRhiJuNYr6v
        status: active
        display_name: 王賁
        merged_into_person_id: null
    - claim:
        id: c_06tD9h3vmUgiTwycD8iFx4
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AusSBwQw7JfTCWDKoctEvL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Gba25no0V_tTGLSmNGAK6
          claim_id: c_06tD9h3vmUgiTwycD8iFx4
          source_id: s_I3NHm2DTufSluD4cb6XHN7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I3NHm2DTufSluD4cb6XHN7
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 215876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215876&o=json
            external_identifier: CBDB:215876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AusSBwQw7JfTCWDKoctEvL
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_gYQtWdtxetZEYvUS7U4vkp
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdc8T5Lsc-8MRdyMaeJP1h
          claim_id: c_gYQtWdtxetZEYvUS7U4vkp
          source_id: s_DAlX0G9vfdSKMoLloCUAda
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DAlX0G9vfdSKMoLloCUAda
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 215877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json
            external_identifier: CBDB:215877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cr25NpP3VKFx9r13FKuRdu
        status: active
        display_name: 王詠
        merged_into_person_id: null
    - claim:
        id: c_5y60fP117JMbbkeKgOCgOx
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KuY4sRqZJPnwEeJd2Psi4A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqutYGF2GncrueheDy1cYG
          claim_id: c_5y60fP117JMbbkeKgOCgOx
          source_id: s_qd4lGf3KPYJ5klG7h720Of
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qd4lGf3KPYJ5klG7h720Of
            source_type: api_record
            title: 中国历代人物传记资料库：王升（CBDB 215871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215871&o=json
            external_identifier: CBDB:215871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KuY4sRqZJPnwEeJd2Psi4A
        status: active
        display_name: 王升
        merged_into_person_id: null
    - claim:
        id: c_1IHizAWRVsDB921KK6OYSy
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LhgDda3MrTy5CKN7i2oWBu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKcGtPzQQJGSr3ufeffYUk
          claim_id: c_1IHizAWRVsDB921KK6OYSy
          source_id: s_aUMT9r3jDFu6Pq0Mf7iXxz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aUMT9r3jDFu6Pq0Mf7iXxz
            source_type: api_record
            title: 中国历代人物传记资料库：王諟（CBDB 215874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215874&o=json
            external_identifier: CBDB:215874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LhgDda3MrTy5CKN7i2oWBu
        status: active
        display_name: 王諟
        merged_into_person_id: null
    - claim:
        id: c_5PZpuuIOcFDzu747e5ZgaH
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DgrpyqbqVII48jW6FurXv
          claim_id: c_5PZpuuIOcFDzu747e5ZgaH
          source_id: s_u-Z1hARzTQlLTVti3XsXys
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u-Z1hARzTQlLTVti3XsXys
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 215875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json
            external_identifier: CBDB:215875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4cWR818XFAYgD2CBiLzXr
        status: active
        display_name: 王訥
        merged_into_person_id: null
    - claim:
        id: c_e7lkr-0W_QynraKTdKkVFi
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WmW2WX6wR3N6nKrFsU5jsb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CEv82H5hjHaAQBvwCZoXCu
          claim_id: c_e7lkr-0W_QynraKTdKkVFi
          source_id: s_dlzNnT1i97uYWfLCgdB4GX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124982 王謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dlzNnT1i97uYWfLCgdB4GX
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 215872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215872&o=json
            external_identifier: CBDB:215872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WmW2WX6wR3N6nKrFsU5jsb
        status: active
        display_name: 王益
        merged_into_person_id: null
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。明清進士進士，籍贯蒲州，入仕進士，曾任兵部武庫司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 124982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uRxHoeETPENUnB4UpGZ636 | 王崇古 | accepted |
| spouses | p_8cxn7qhC9RcaoQ98GdxCBt | 史氏 | accepted |
| ancestors | p_n3VXQL5pitaZ4dih84qWf8 | 王馨 | accepted |
| ancestors | p_WV7ubqMfsAHuJnpcg7NTN2 | 王瑤 | accepted |
| other | p_1rksTfkThDoK87xQymRLD5 | 王節 | accepted |
| other | p_25bCJTSEJGvJRhiJuNYr6v | 王賁 | accepted |
| other | p_AusSBwQw7JfTCWDKoctEvL | 王謹 | accepted |
| other | p_Cr25NpP3VKFx9r13FKuRdu | 王詠 | accepted |
| other | p_KuY4sRqZJPnwEeJd2Psi4A | 王升 | accepted |
| other | p_LhgDda3MrTy5CKN7i2oWBu | 王諟 | accepted |
| other | p_Q4cWR818XFAYgD2CBiLzXr | 王訥 | accepted |
| other | p_WmW2WX6wR3N6nKrFsU5jsb | 王益 | accepted |

## 外部来源

- [中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json)
- [中国历代人物传记资料库：王賁（CBDB 215873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215873&o=json)
- [中国历代人物传记资料库：王節（CBDB 215870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215870&o=json)
- [中国历代人物传记资料库：王謹（CBDB 215876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215876&o=json)
- [中国历代人物传记资料库：王訥（CBDB 215875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json)
- [中国历代人物传记资料库：王謙（CBDB 124982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json)
- [中国历代人物传记资料库：王升（CBDB 215871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215871&o=json)
- [中国历代人物传记资料库：王諟（CBDB 215874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215874&o=json)
- [中国历代人物传记资料库：王益（CBDB 215872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215872&o=json)
- [中国历代人物传记资料库：王詠（CBDB 215877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json)
