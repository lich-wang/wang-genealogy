---
schema: wang-person/v1
id: p_3s7v73vFKQD8q1YUeZswcD
status: active
merged_into: null
display_name: 王來賀
cbdb_id: 338034
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wd5oMYMx3fRetgTqnN3XR4
        subject_person_id: p_3s7v73vFKQD8q1YUeZswcD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賀，明人物。隆慶五年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 338034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fLz3_3Iw_2k71uAFAFIOHE
          claim_id: c_wd5oMYMx3fRetgTqnN3XR4
          source_id: s_unYugCKd2U7TPzrA2Hpz2A
          stance: supports
          locator: CBDB:338034
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_unYugCKd2U7TPzrA2Hpz2A
            source_type: api_record
            title: 中国历代人物传记资料库：王來賀（CBDB 338034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json
            external_identifier: CBDB:338034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLcHsenqWs5VfLkTPbXLhK
        subject_person_id: p_3s7v73vFKQD8q1YUeZswcD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_veCYVt3pmxiHnrfNxRQrfL
          claim_id: c_VLcHsenqWs5VfLkTPbXLhK
          source_id: s_unYugCKd2U7TPzrA2Hpz2A
          stance: supports
          locator: CBDB:338034
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Am_HYXvhhRwShS3vFBVJbR
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3s7v73vFKQD8q1YUeZswcD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQAF6V4Htin7NV2wWLYfmP
          claim_id: c_Am_HYXvhhRwShS3vFBVJbR
          source_id: s_9zlFTu3ACu5pJm3hE6AAts
          stance: supports
          locator: CBDB：兄弟 王來賢（205758）之父／母 王好義
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賀 与 王來賢 为同胞（CBDB 记「兄」），王來賢 之父／母即 王來賀 之父／母。
          source:
            id: s_9zlFTu3ACu5pJm3hE6AAts
            source_type: api_record
            title: 中国历代人物传记资料库：王來賀（CBDB 338034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json
            external_identifier: CBDB:338034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QnpAMHvuyLgE52HMUUdB1Q
        status: active
        display_name: 王好義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bil-1yQG3-mjw51yrku9Sf
        subject_person_id: p_3s7v73vFKQD8q1YUeZswcD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zuZbV5rn2nuFKuRNaTGGFq
          claim_id: c_Bil-1yQG3-mjw51yrku9Sf
          source_id: s_9zlFTu3ACu5pJm3hE6AAts
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205758 王來賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9zlFTu3ACu5pJm3hE6AAts
            source_type: api_record
            title: 中国历代人物传记资料库：王來賀（CBDB 338034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json
            external_identifier: CBDB:338034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aAFSBPvreHZtKBpYbVoLGC
        status: active
        display_name: 王來賢
        merged_into_person_id: null
---

# 王來賀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來賀，明人物。隆慶五年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 338034） | accepted |
| name.primary | 王來賀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QnpAMHvuyLgE52HMUUdB1Q | 王好義 | accepted |
| other | p_aAFSBPvreHZtKBpYbVoLGC | 王來賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來賀（CBDB 338034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338034&o=json)
