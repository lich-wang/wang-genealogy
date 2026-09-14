---
schema: wang-person/v1
id: p_kNK3hhmWa9pT6tDvK4Pp9u
status: active
merged_into: null
display_name: 王任重
cbdb_id: 126522
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oxojNgvR691qvWGPrn37Vn
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任重，明人物。明清進士進士，籍贯晉江，入仕進士，曾任府推官、布政使司布政使、道員。（中国历代人物传记资料库 CBDB 126522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WGQrW4AAg68L8-S8rSwUaV
          claim_id: c_oxojNgvR691qvWGPrn37Vn
          source_id: s_Jw3DV6Qm6zzHVEego4AE9x
          stance: supports
          locator: CBDB:126522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Jw3DV6Qm6zzHVEego4AE9x
            source_type: api_record
            title: 中国历代人物传记资料库：王任重（CBDB 126522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126522&o=json
            external_identifier: CBDB:126522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PyFtuoNT489rcVFWX1DD3E
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z3rW7esMNSU2h4wa9EHVTT
          claim_id: c_PyFtuoNT489rcVFWX1DD3E
          source_id: s_Jw3DV6Qm6zzHVEego4AE9x
          stance: supports
          locator: CBDB:126522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fvJ4VMB0MxNSx-C-NzJWvp
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8bLkOMum2KbsYsysL9dtQ
          claim_id: c_fvJ4VMB0MxNSx-C-NzJWvp
          source_id: s_P2Qs5521hThEdkmPWDzduG
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P2Qs5521hThEdkmPWDzduG
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 334516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334516&o=json
            external_identifier: CBDB:334516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v9S8oyRFWQnLjHDjQjs8bc
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IGcGKKh7wdZAjopkFiwddc
        subject_person_id: p_nQkuo1HqhgEYREvrbFAEPs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NX3ucHHpDeWsmXViPGAsjy
          claim_id: c_IGcGKKh7wdZAjopkFiwddc
          source_id: s_pzFMAbP53u4Mqt1QSze1QM
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pzFMAbP53u4Mqt1QSze1QM
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 334515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334515&o=json
            external_identifier: CBDB:334515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nQkuo1HqhgEYREvrbFAEPs
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_VXDW_Iw_m45CbtxczRjtkB
        subject_person_id: p_SFzsLGx5pnHVeDMR9uM7K4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CO5SV7pTohCqMXqkauMVO
          claim_id: c_VXDW_Iw_m45CbtxczRjtkB
          source_id: s_RRdMjANQfYEpzK3FgGG6B1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RRdMjANQfYEpzK3FgGG6B1
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 334514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334514&o=json
            external_identifier: CBDB:334514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SFzsLGx5pnHVeDMR9uM7K4
        status: active
        display_name: 王榮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_D5JQCSuYA2HJ3YOHprz4HX
        subject_person_id: p_9ykAqz3teDmM63tMZoaV1m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XKGJPDMjPBMINnfMj-kgkg
          claim_id: c_D5JQCSuYA2HJ3YOHprz4HX
          source_id: s_6IR3W6-qLDJrdsXsFoBvCB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126522 王任重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6IR3W6-qLDJrdsXsFoBvCB
            source_type: api_record
            title: 中国历代人物传记资料库：王任聘（CBDB 334519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334519&o=json
            external_identifier: CBDB:334519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9ykAqz3teDmM63tMZoaV1m
        status: active
        display_name: 王任聘
        merged_into_person_id: null
    - claim:
        id: c_i1Xdd9v6_B9geSn7PN9D35
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rYMJL55y1FnVEUGLgE11wj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRuEfBqF_hTURSd37FaW0C
          claim_id: c_i1Xdd9v6_B9geSn7PN9D35
          source_id: s_OIhZ7aCWCIWtTY0kGGSDtW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126522 王任重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OIhZ7aCWCIWtTY0kGGSDtW
            source_type: api_record
            title: 中国历代人物传记资料库：王任翰（CBDB 334521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json
            external_identifier: CBDB:334521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rYMJL55y1FnVEUGLgE11wj
        status: active
        display_name: 王任翰
        merged_into_person_id: null
    - claim:
        id: c_5YgfdF3KniznJOJ4aAQfkN
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJEWU8EDX-RtvFiDp4dbej
          claim_id: c_5YgfdF3KniznJOJ4aAQfkN
          source_id: s_rJdssbctaNth_xueaBnXe_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126522 王任重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rJdssbctaNth_xueaBnXe_
            source_type: api_record
            title: 中国历代人物传记资料库：王任選（CBDB 334522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json
            external_identifier: CBDB:334522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybe5jUPL3jqpTv7TRwnMv5
        status: active
        display_name: 王任選
        merged_into_person_id: null
---

# 王任重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王任重，明人物。明清進士進士，籍贯晉江，入仕進士，曾任府推官、布政使司布政使、道員。（中国历代人物传记资料库 CBDB 126522） | accepted |
| name.primary | 王任重 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v9S8oyRFWQnLjHDjQjs8bc | 王寅 | accepted |
| ancestors | p_nQkuo1HqhgEYREvrbFAEPs | 王璉 | accepted |
| ancestors | p_SFzsLGx5pnHVeDMR9uM7K4 | 王榮 | accepted |
| other | p_9ykAqz3teDmM63tMZoaV1m | 王任聘 | accepted |
| other | p_rYMJL55y1FnVEUGLgE11wj | 王任翰 | accepted |
| other | p_ybe5jUPL3jqpTv7TRwnMv5 | 王任選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 334515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334515&o=json)
- [中国历代人物传记资料库：王任翰（CBDB 334521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json)
- [中国历代人物传记资料库：王任聘（CBDB 334519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334519&o=json)
- [中国历代人物传记资料库：王任選（CBDB 334522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json)
- [中国历代人物传记资料库：王任重（CBDB 126522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126522&o=json)
- [中国历代人物传记资料库：王榮（CBDB 334514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334514&o=json)
- [中国历代人物传记资料库：王寅（CBDB 334516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334516&o=json)
