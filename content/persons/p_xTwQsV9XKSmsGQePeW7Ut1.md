---
schema: wang-person/v1
id: p_xTwQsV9XKSmsGQePeW7Ut1
status: active
merged_into: null
display_name: 王懋
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LL67Zjeas7JDLwA9fXBJGW
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSW9cgkxySUjf7RZNvkSmQ
          claim_id: c_LL67Zjeas7JDLwA9fXBJGW
          source_id: s_he7oa3KBdhRZKFKodMAEUH
          stance: supports
          locator: CBDB:199698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199698）
          source: &a1
            id: s_he7oa3KBdhRZKFKodMAEUH
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 199698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199698&o=json
            external_identifier: CBDB:199698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cwvmL7asgEg6vaNh6Ey12c
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AoBSjsUN9FkTmDPQnW7U9M
          claim_id: c_cwvmL7asgEg6vaNh6Ey12c
          source_id: s_he7oa3KBdhRZKFKodMAEUH
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
        id: c_k4p1khQuJJ2mwzdG7msGPr
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋（生于1444年），明人物。明清進士進士，籍贯沂州，入仕進士。（中国历代人物传记资料库 CBDB 199698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sdCHq4szapaY9pcBWGgAUA
          claim_id: c_k4p1khQuJJ2mwzdG7msGPr
          source_id: s_he7oa3KBdhRZKFKodMAEUH
          stance: supports
          locator: CBDB:199698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wze8afH02p_mNB6gt7wRgE
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRKJ1bH5gakDP8eh2RHm_T
          claim_id: c_Wze8afH02p_mNB6gt7wRgE
          source_id: s_v3VAH59R5prFHTrBaLk33k
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3VAH59R5prFHTrBaLk33k
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 248664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json
            external_identifier: CBDB:248664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PEt7x529igvwnBDEaRjBZt
        status: active
        display_name: 王玘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7ToOR9z4CyoPmw4CG-QUZK
        subject_person_id: p_SwHKV5Y4jiVTDLuyMHygcN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__f83wSVtKdY8P4Wn-gh1IV
          claim_id: c_7ToOR9z4CyoPmw4CG-QUZK
          source_id: s_889tLY2mq8DhZ8pdy7PfFb
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_889tLY2mq8DhZ8pdy7PfFb
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 248663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248663&o=json
            external_identifier: CBDB:248663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SwHKV5Y4jiVTDLuyMHygcN
        status: active
        display_name: 王整
        merged_into_person_id: null
    - claim:
        id: c_jszEWVRFkQO7iaVN-HSRnE
        subject_person_id: p_7p6AH9EtpMSok17EPtLBRe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH5cbUvFrIj9-g-1X7YL5V
          claim_id: c_jszEWVRFkQO7iaVN-HSRnE
          source_id: s_99JMG6RfkTryJsRQvDi3p4
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_99JMG6RfkTryJsRQvDi3p4
            source_type: api_record
            title: 中国历代人物传记资料库：王奉禮（CBDB 248662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248662&o=json
            external_identifier: CBDB:248662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7p6AH9EtpMSok17EPtLBRe
        status: active
        display_name: 王奉禮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_4gEbGW933i9qLrmlTREUu-
        subject_person_id: p_LzwTC7rjboeY7nbXhQjcvS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9kidbXkE5Sn11wxCgC84s
          claim_id: c_4gEbGW933i9qLrmlTREUu-
          source_id: s_EEr5iRraHNEIH2YmGvNyKe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199698 王懋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EEr5iRraHNEIH2YmGvNyKe
            source_type: api_record
            title: 中国历代人物传记资料库：王東蒙（CBDB 248669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json
            external_identifier: CBDB:248669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzwTC7rjboeY7nbXhQjcvS
        status: active
        display_name: 王東蒙
        merged_into_person_id: null
    - claim:
        id: c_A19yBuOArJO1ZIYPY-O0-8
        subject_person_id: p_V4e1nc6vnnM1JHKJ6qWc9L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8RowfjrwCQehLWbGHR-Y82
          claim_id: c_A19yBuOArJO1ZIYPY-O0-8
          source_id: s_npF9mu6Qnz34_dE_50UPgf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199698 王懋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_npF9mu6Qnz34_dE_50UPgf
            source_type: api_record
            title: 中国历代人物传记资料库：王東泰（CBDB 248668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248668&o=json
            external_identifier: CBDB:248668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V4e1nc6vnnM1JHKJ6qWc9L
        status: active
        display_name: 王東泰
        merged_into_person_id: null
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | 王懋（生于1444年），明人物。明清進士進士，籍贯沂州，入仕進士。（中国历代人物传记资料库 CBDB 199698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PEt7x529igvwnBDEaRjBZt | 王玘 | accepted |
| ancestors | p_SwHKV5Y4jiVTDLuyMHygcN | 王整 | accepted |
| ancestors | p_7p6AH9EtpMSok17EPtLBRe | 王奉禮 | accepted |
| other | p_LzwTC7rjboeY7nbXhQjcvS | 王東蒙 | accepted |
| other | p_V4e1nc6vnnM1JHKJ6qWc9L | 王東泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東蒙（CBDB 248669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248669&o=json)
- [中国历代人物传记资料库：王東泰（CBDB 248668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248668&o=json)
- [中国历代人物传记资料库：王奉禮（CBDB 248662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248662&o=json)
- [中国历代人物传记资料库：王懋（CBDB 199698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199698&o=json)
- [中国历代人物传记资料库：王玘（CBDB 248664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json)
- [中国历代人物传记资料库：王整（CBDB 248663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248663&o=json)
