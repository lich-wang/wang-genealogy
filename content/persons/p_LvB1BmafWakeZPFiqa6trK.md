---
schema: wang-person/v1
id: p_LvB1BmafWakeZPFiqa6trK
status: active
merged_into: null
display_name: 王偉
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59ytDCWQXLtHPBJd86CjQs
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xeFPRHJKC9TsPb45dfkWEM
          claim_id: c_59ytDCWQXLtHPBJd86CjQs
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
          stance: supports
          locator: CBDB:201651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201651）
          source: &a1
            id: s_DVmGTWuY3xEpbLaXH1ajMf
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 201651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201651&o=json
            external_identifier: CBDB:201651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CKhozREXGoJhhXdV6FoQhR
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgSDn95g4ixjz8pdA6uj11
          claim_id: c_CKhozREXGoJhhXdV6FoQhR
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
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
        id: c_KDLKzx8MC5s5B1MGyWNmZa
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉（生于1468年），明人物。弘治十八年進士，籍贯即墨，入仕進士。（中国历代人物传记资料库 CBDB 201651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vIyjZuXGZPSxY_Nlq2LaR9
          claim_id: c_KDLKzx8MC5s5B1MGyWNmZa
          source_id: s_DVmGTWuY3xEpbLaXH1ajMf
          stance: supports
          locator: CBDB:201651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a0RmZeJbEzwF_Ay1PnXFu1
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvp3J3Wgmc_h0hgdINXur-
          claim_id: c_a0RmZeJbEzwF_Ay1PnXFu1
          source_id: s_VEiJuCDKCars6dXDia88fv
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VEiJuCDKCars6dXDia88fv
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 275661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275661&o=json
            external_identifier: CBDB:275661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ax45r2gqCk3bG46hzyK38p
        status: active
        display_name: 王璣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IsEd5bosZgkDm3URNc5lUD
        subject_person_id: p_Mm9Q1z5hqMLq3zsdACinK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYZ8goCMY1FtSoQRoKjYJn
          claim_id: c_IsEd5bosZgkDm3URNc5lUD
          source_id: s_eFxhiYSiuSTvh2A5mkFNS2
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eFxhiYSiuSTvh2A5mkFNS2
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 275660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275660&o=json
            external_identifier: CBDB:275660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mm9Q1z5hqMLq3zsdACinK7
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_lqroLLOh4SmcrDcN16lNdR
        subject_person_id: p_zw9tnG2aWxAJEChJcyJp7z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6vAyJgGsWXR8GBs7XdD0q
          claim_id: c_lqroLLOh4SmcrDcN16lNdR
          source_id: s_U8spKeS4EYPNWtvE1UynDm
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U8spKeS4EYPNWtvE1UynDm
            source_type: api_record
            title: 中国历代人物传记资料库：王志嚴（CBDB 275659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275659&o=json
            external_identifier: CBDB:275659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zw9tnG2aWxAJEChJcyJp7z
        status: active
        display_name: 王志嚴
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_UWF3UePrfEFXTx6Pqf6KhQ
        subject_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hnXQg9e5uOuCMAwB1AFhMG
          claim_id: c_UWF3UePrfEFXTx6Pqf6KhQ
          source_id: s_ruXa_5S4cp-SOvWcYa3JP4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ruXa_5S4cp-SOvWcYa3JP4
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XTQk3YrwG9QtLMPvUZk3y
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_qBJZjDmY2lTGzSNXXrrUwp
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GfDk5YhMc6p9CoqoREdk8Y
          claim_id: c_qBJZjDmY2lTGzSNXXrrUwp
          source_id: s_gBv0JKC6fEkH7mrn4aRQ08
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gBv0JKC6fEkH7mrn4aRQ08
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UP7zDrLNWoXaos8XXmeZ3C
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_JsGWigAOxxL9VmgR78-ByM
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XR2vLngReApeX9AQ8f6DVq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qGjk0Ut7faJvMadjy6keYk
          claim_id: c_JsGWigAOxxL9VmgR78-ByM
          source_id: s_EYLluDsZwzN980HeRrH648
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EYLluDsZwzN980HeRrH648
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 275666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json
            external_identifier: CBDB:275666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XR2vLngReApeX9AQ8f6DVq
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_gEFyxNj3QJxVauFuhOKz4T
        subject_person_id: p_LvB1BmafWakeZPFiqa6trK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_frRRsYuBAC2BAd33oM9ocj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-kOh-jhWbwJ89Hd4VWbw_g
          claim_id: c_gEFyxNj3QJxVauFuhOKz4T
          source_id: s_MTk4OpvYwRR32WZEf7chiM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201651 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MTk4OpvYwRR32WZEf7chiM
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 275668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275668&o=json
            external_identifier: CBDB:275668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_frRRsYuBAC2BAd33oM9ocj
        status: active
        display_name: 王儒
        merged_into_person_id: null
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1468年 | accepted |
| bio.summary | 王偉（生于1468年），明人物。弘治十八年進士，籍贯即墨，入仕進士。（中国历代人物传记资料库 CBDB 201651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ax45r2gqCk3bG46hzyK38p | 王璣 | accepted |
| ancestors | p_Mm9Q1z5hqMLq3zsdACinK7 | 王榮 | accepted |
| ancestors | p_zw9tnG2aWxAJEChJcyJp7z | 王志嚴 | accepted |
| other | p_2XTQk3YrwG9QtLMPvUZk3y | 王仁 | accepted |
| other | p_UP7zDrLNWoXaos8XXmeZ3C | 王仕 | accepted |
| other | p_XR2vLngReApeX9AQ8f6DVq | 王紳 | accepted |
| other | p_frRRsYuBAC2BAd33oM9ocj | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 275661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275661&o=json)
- [中国历代人物传记资料库：王仁（CBDB 275665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json)
- [中国历代人物传记资料库：王榮（CBDB 275660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275660&o=json)
- [中国历代人物传记资料库：王儒（CBDB 275668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275668&o=json)
- [中国历代人物传记资料库：王紳（CBDB 275666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json)
- [中国历代人物传记资料库：王仕（CBDB 275667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json)
- [中国历代人物传记资料库：王偉（CBDB 201651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201651&o=json)
- [中国历代人物传记资料库：王志嚴（CBDB 275659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275659&o=json)
