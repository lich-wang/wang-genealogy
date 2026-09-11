---
schema: wang-person/v1
id: p_MWFGy9uHg9NsSwK8c42QRv
status: active
merged_into: null
display_name: 王同休
cbdb_id: 207136
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_guRf4hgPVDk9NJkHhC7MnB
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同休（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PZgSp78SlUaGmZUi6qXLWU
          claim_id: c_guRf4hgPVDk9NJkHhC7MnB
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_uPRGd16VLneaaXqs5MHxfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王同休（CBDB 207136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json
            external_identifier: CBDB:207136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9rF31BgYpoVoTNTn7qmYCL
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1558-01-01
            latest: 1558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JtyFW3ucGQmRCMpoNPWYGF
          claim_id: c_9rF31BgYpoVoTNTn7qmYCL
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_uPRGd16VLneaaXqs5MHxfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王同休（CBDB 207136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json
            external_identifier: CBDB:207136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4To6YGPCLWsxcaCMs6DtMb
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fyMHL2Q9BU2y42GK6dvJtd
          claim_id: c_4To6YGPCLWsxcaCMs6DtMb
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_uPRGd16VLneaaXqs5MHxfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王同休（CBDB 207136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json
            external_identifier: CBDB:207136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p0tj7EIMohCg0e_5rHN1FV
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYhSm1gQZ0-d0_55qLU7r8
          claim_id: c_p0tj7EIMohCg0e_5rHN1FV
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JdxuK8SMW5Cg89USVQp6Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 228268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json
            external_identifier: CBDB:228268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DlCAFr35uLobZcNgn9ZMhk
        subject_person_id: p_MdTA9g1vPfh7eB7W38aEek
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWywQoJaEMykQGVtykVesm
          claim_id: c_DlCAFr35uLobZcNgn9ZMhk
          source_id: s_4GwQtJPeQrwuWxRSdyreku
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4GwQtJPeQrwuWxRSdyreku
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 228266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228266&o=json
            external_identifier: CBDB:228266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MdTA9g1vPfh7eB7W38aEek
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_oQ8UlbVNNnZWYmqJ68p_2a
        subject_person_id: p_wJBmjFiTtjYvsNPmK8eR1t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4tZHzbwSRc0bzIvFDZAgQ
          claim_id: c_oQ8UlbVNNnZWYmqJ68p_2a
          source_id: s_VZ8CmK1k5KXdrdtUmSMbzr
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VZ8CmK1k5KXdrdtUmSMbzr
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 228267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json
            external_identifier: CBDB:228267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wJBmjFiTtjYvsNPmK8eR1t
        status: active
        display_name: 王紀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同休（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1558年 | accepted |
| name.primary | 王同休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| ancestors | p_MdTA9g1vPfh7eB7W38aEek | 王寰 | accepted |
| ancestors | p_wJBmjFiTtjYvsNPmK8eR1t | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 228266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228266&o=json)
- [中国历代人物传记资料库：王紀（CBDB 228267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json)
- [中国历代人物传记资料库：王同休（CBDB 207136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json)
- [中国历代人物传记资料库：王惟中（CBDB 228268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json)
