---
schema: wang-person/v1
id: p_87vQWSqin1Cc8rN4TeH3X4
status: active
merged_into: null
display_name: 王完
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARLVLd5nM7vfByScm9jT7H
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAK49pgzdfeZtjNbikMYTG
          claim_id: c_ARLVLd5nM7vfByScm9jT7H
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: CBDB:201827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201827）
          source: &a1
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4fxWonC2FxdiKnjPDfxvu2
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTFuuMJ7ACm8SCqwFoa6iq
          claim_id: c_4fxWonC2FxdiKnjPDfxvu2
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
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
        id: c_BMeg4uZuBKjRxPCcL4zCf6
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完（生于1481年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 201827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tOTidct0Ug6dyg8s2lmBBe
          claim_id: c_BMeg4uZuBKjRxPCcL4zCf6
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: CBDB:201827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VxlN4EbBh1B7TFsyTSeiPY
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_blwvgHJqux9_g7PWDbgZC6
          claim_id: c_VxlN4EbBh1B7TFsyTSeiPY
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nnGFsaS43J8ISJyxhiyrNd
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_khwGosbhuLr4aZrn4JXQRR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NmFyCZtRBprYRn-fTDBqT
          claim_id: c_nnGFsaS43J8ISJyxhiyrNd
          source_id: s_O6qi3AWGgzOvA0pAdIZPJT
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_O6qi3AWGgzOvA0pAdIZPJT
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王完妻)（CBDB 278856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278856&o=json
            external_identifier: CBDB:278856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_khwGosbhuLr4aZrn4JXQRR
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_uBx2Wu0-1O-3B2J8wh_KFo
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGixk2kvPs8FMeL2DSvS4R
          claim_id: c_uBx2Wu0-1O-3B2J8wh_KFo
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yj6fkEfBpBQSnB7FiNBbFN
        status: active
        display_name: 王文某
        merged_into_person_id: null
    - claim:
        id: c_AZ6iPN2MBI_RbB2Bqi56_X
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WRxjQliNpV9W5WPMoKo-FB
          claim_id: c_AZ6iPN2MBI_RbB2Bqi56_X
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2EDQ55UQpfwb7UC1C3XQAT
        status: active
        display_name: 王郁文
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_X_JtnIiVDND6BATmQhl6Qq
        subject_person_id: p_575PN2zenAgGgPucoUhYuD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Av8WDpqP53Psg8wukcjIQ_
          claim_id: c_X_JtnIiVDND6BATmQhl6Qq
          source_id: s_Pcz5gGNzY05jmbzCVbu9iN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Pcz5gGNzY05jmbzCVbu9iN
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 278865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278865&o=json
            external_identifier: CBDB:278865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_575PN2zenAgGgPucoUhYuD
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_vmvEZcr10JJWW4ljJ1vi7w
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FhThjsF4g73SkGN41F7MyF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKlinAR9jy_6UqPk3MQbcJ
          claim_id: c_vmvEZcr10JJWW4ljJ1vi7w
          source_id: s_7eeFsHfjPwCP9X7dB-LldA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7eeFsHfjPwCP9X7dB-LldA
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 278858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json
            external_identifier: CBDB:278858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FhThjsF4g73SkGN41F7MyF
        status: active
        display_name: 王正
        merged_into_person_id: null
    - claim:
        id: c_3kS9SmmRNcy0HqLcuB-988
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L94W3zHB9wTdKzvMk5FW8v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--NmxwX5rJt8F3qSXGfqKt
          claim_id: c_3kS9SmmRNcy0HqLcuB-988
          source_id: s_T6AXkdJIEWLc75iy6kPmPT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T6AXkdJIEWLc75iy6kPmPT
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 278861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278861&o=json
            external_identifier: CBDB:278861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L94W3zHB9wTdKzvMk5FW8v
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_zGd1Qq8jI-hUQXOCJA_38Z
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W2QTGFNH3T6tJPXUFjAVSb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FBMrjdUx8marM6qOBdMUPI
          claim_id: c_zGd1Qq8jI-hUQXOCJA_38Z
          source_id: s_7FWy5efYXfvAS268rswIp3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7FWy5efYXfvAS268rswIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王公（CBDB 278857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json
            external_identifier: CBDB:278857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2QTGFNH3T6tJPXUFjAVSb
        status: active
        display_name: 王公
        merged_into_person_id: null
    - claim:
        id: c_o9PPue_An8KOVkI2dPvm_I
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFn10kaoiAaS13ws28zc3o
          claim_id: c_o9PPue_An8KOVkI2dPvm_I
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8L3VuucF7CjfcSpgUwBjH
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_s21DLNT7kLQ3wwOS4eA9e9
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_idFGhxp89gx2A42LcmhSeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4KOZsoVPoQsY_d9kUCx3P
          claim_id: c_s21DLNT7kLQ3wwOS4eA9e9
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_idFGhxp89gx2A42LcmhSeP
        status: active
        display_name: 王宸
        merged_into_person_id: null
    - claim:
        id: c_M0HGSHTE4DN3Y2QBW7ag9N
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kHHPCpYNN3LLHAdyLEy4C9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-c3o73ABlnJXsq5AJDUD0
          claim_id: c_M0HGSHTE4DN3Y2QBW7ag9N
          source_id: s_n5F9d112SvtSkHMr3Pueo6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n5F9d112SvtSkHMr3Pueo6
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 278869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278869&o=json
            external_identifier: CBDB:278869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kHHPCpYNN3LLHAdyLEy4C9
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_QD6ln3aNo8hhJXVMR_8E1l
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqsYBeOHFBz8y0F1EBDKKg
          claim_id: c_QD6ln3aNo8hhJXVMR_8E1l
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yAZqZv44Jk4YRjmrCJ1gEz
        status: active
        display_name: 王寓
        merged_into_person_id: null
---

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| birth.date | 1481年 | accepted |
| bio.summary | 王完（生于1481年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 201827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| spouses | p_khwGosbhuLr4aZrn4JXQRR | 何氏 | accepted |
| ancestors | p_yj6fkEfBpBQSnB7FiNBbFN | 王文某 | accepted |
| ancestors | p_2EDQ55UQpfwb7UC1C3XQAT | 王郁文 | accepted |
| other | p_575PN2zenAgGgPucoUhYuD | 王宏 | accepted |
| other | p_FhThjsF4g73SkGN41F7MyF | 王正 | accepted |
| other | p_L94W3zHB9wTdKzvMk5FW8v | 王賓 | accepted |
| other | p_W2QTGFNH3T6tJPXUFjAVSb | 王公 | accepted |
| other | p_X8L3VuucF7CjfcSpgUwBjH | 王宜 | accepted |
| other | p_idFGhxp89gx2A42LcmhSeP | 王宸 | accepted |
| other | p_kHHPCpYNN3LLHAdyLEy4C9 | 王宇 | accepted |
| other | p_yAZqZv44Jk4YRjmrCJ1gEz | 王寓 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王完妻)（CBDB 278856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278856&o=json)
- [中国历代人物传记资料库：王賓（CBDB 278861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278861&o=json)
- [中国历代人物传记资料库：王宸（CBDB 278870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json)
- [中国历代人物传记资料库：王公（CBDB 278857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278857&o=json)
- [中国历代人物传记资料库：王宏（CBDB 278865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278865&o=json)
- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
- [中国历代人物传记资料库：王宜（CBDB 278859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json)
- [中国历代人物传记资料库：王宇（CBDB 278869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278869&o=json)
- [中国历代人物传记资料库：王寓（CBDB 278871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json)
- [中国历代人物传记资料库：王正（CBDB 278858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json)
