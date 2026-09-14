---
schema: wang-person/v1
id: p_uRxHoeETPENUnB4UpGZ636
status: active
merged_into: null
display_name: 王崇古
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N8yocVVq2sKJ7v9FFmJdhw
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z5P5sbrCB5WR98F7KYkAAR
          claim_id: c_N8yocVVq2sKJ7v9FFmJdhw
          source_id: s_35VSXdNh52Bdmbnof9F1w5
          stance: supports
          locator: CBDB:215866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215866）
          source: &a1
            id: s_35VSXdNh52Bdmbnof9F1w5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇古（CBDB 215866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215866&o=json
            external_identifier: CBDB:215866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVUrUfRFfxDtw5YaU7gtTa
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古，明人物。萬曆五年進士，籍贯蒲州，曾任少保、太子太保、刑部尚書。（中国历代人物传记资料库 CBDB 215866）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q-Bem0Yjhp0wPCYkttjkDB
          claim_id: c_AVUrUfRFfxDtw5YaU7gtTa
          source_id: s_35VSXdNh52Bdmbnof9F1w5
          stance: supports
          locator: CBDB:215866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c__T5SG8_6tb3oYEf6g6tmJr
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rksTfkThDoK87xQymRLD5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gCGDStSt6JQXNymgSFOJT
          claim_id: c__T5SG8_6tb3oYEf6g6tmJr
          source_id: s_a3WHmxbVo1vyOr-_zl0L1D
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王節 与 王謙 为同胞（CBDB 记「弟」），王謙 之父／母即 王節 之父／母。
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
        id: c_zI5NOuUL9xd3O-e2MLSeum
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_25bCJTSEJGvJRhiJuNYr6v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g-iITsF1uuF2z8zy-HLFax
          claim_id: c_zI5NOuUL9xd3O-e2MLSeum
          source_id: s_yrkEbWxNY3imVHaGbkdWeH
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王賁 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王賁 之父／母。
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
        id: c_uVre7hU4P1AcqCeDZ-QYgN
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AusSBwQw7JfTCWDKoctEvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mY2i5cbi6AYsD_qR7MZLwU
          claim_id: c_uVre7hU4P1AcqCeDZ-QYgN
          source_id: s_I3NHm2DTufSluD4cb6XHN7
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王謹 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王謹 之父／母。
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
        id: c_YEQaW3tzNXZ8zGcpbK8MCE
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cr25NpP3VKFx9r13FKuRdu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A69pyXvZEq0sl6U82Q1UBL
          claim_id: c_YEQaW3tzNXZ8zGcpbK8MCE
          source_id: s_DAlX0G9vfdSKMoLloCUAda
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王詠 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王詠 之父／母。
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
        id: c_0ejImKXTgE_gw-GnYS2LnT
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KuY4sRqZJPnwEeJd2Psi4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gHsHbbWm70exZ_sCsfT_9_
          claim_id: c_0ejImKXTgE_gw-GnYS2LnT
          source_id: s_qd4lGf3KPYJ5klG7h720Of
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王升 与 王謙 为同胞（CBDB 记「弟」），王謙 之父／母即 王升 之父／母。
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
        id: c_k0IrFaVGdvziHnBgGlOES1
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LhgDda3MrTy5CKN7i2oWBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNqgFJ2n73HKIcx_yQK00f
          claim_id: c_k0IrFaVGdvziHnBgGlOES1
          source_id: s_aUMT9r3jDFu6Pq0Mf7iXxz
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王諟 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王諟 之父／母。
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
        id: c_oH1MjxLixVv2ejvqHf13iI
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4cWR818XFAYgD2CBiLzXr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SBXaNaTkY6z_Tl9pIujaSZ
          claim_id: c_oH1MjxLixVv2ejvqHf13iI
          source_id: s_u-Z1hARzTQlLTVti3XsXys
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王訥 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王訥 之父／母。
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
        id: c__uWrgZsJ39Fd37H4rLZUMH
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WmW2WX6wR3N6nKrFsU5jsb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6X5xVqXYC0K4cXU46Qox8
          claim_id: c__uWrgZsJ39Fd37H4rLZUMH
          source_id: s_dlzNnT1i97uYWfLCgdB4GX
          stance: supports
          locator: CBDB：兄弟 王謙（124982）之父／母 王崇古
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王謙 为同胞（CBDB 记「兄」），王謙 之父／母即 王益 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇古 | accepted |
| bio.summary | 王崇古，明人物。萬曆五年進士，籍贯蒲州，曾任少保、太子太保、刑部尚書。（中国历代人物传记资料库 CBDB 215866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |
| children | p_1rksTfkThDoK87xQymRLD5 | 王節 | accepted |
| children | p_25bCJTSEJGvJRhiJuNYr6v | 王賁 | accepted |
| children | p_AusSBwQw7JfTCWDKoctEvL | 王謹 | accepted |
| children | p_Cr25NpP3VKFx9r13FKuRdu | 王詠 | accepted |
| children | p_KuY4sRqZJPnwEeJd2Psi4A | 王升 | accepted |
| children | p_LhgDda3MrTy5CKN7i2oWBu | 王諟 | accepted |
| children | p_Q4cWR818XFAYgD2CBiLzXr | 王訥 | accepted |
| children | p_WmW2WX6wR3N6nKrFsU5jsb | 王益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 215873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215873&o=json)
- [中国历代人物传记资料库：王崇古（CBDB 215866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215866&o=json)
- [中国历代人物传记资料库：王節（CBDB 215870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215870&o=json)
- [中国历代人物传记资料库：王謹（CBDB 215876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215876&o=json)
- [中国历代人物传记资料库：王訥（CBDB 215875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215875&o=json)
- [中国历代人物传记资料库：王謙（CBDB 124982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json)
- [中国历代人物传记资料库：王升（CBDB 215871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215871&o=json)
- [中国历代人物传记资料库：王諟（CBDB 215874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215874&o=json)
- [中国历代人物传记资料库：王益（CBDB 215872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215872&o=json)
- [中国历代人物传记资料库：王詠（CBDB 215877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215877&o=json)
