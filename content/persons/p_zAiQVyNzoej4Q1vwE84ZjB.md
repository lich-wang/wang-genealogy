---
schema: wang-person/v1
id: p_zAiQVyNzoej4Q1vwE84ZjB
status: active
merged_into: null
display_name: 王漸逵
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QsMdrumwvYpuvcBMYx2VxM
        subject_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aDzWfGerj4BqMcpBAsVRWx
          claim_id: c_QsMdrumwvYpuvcBMYx2VxM
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: CBDB:126774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126774）
          source: &a1
            id: s_zo7nrDWhznM6UPg2n7eSAd
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逵（CBDB 126774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126774&o=json
            external_identifier: CBDB:126774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8LtQSusk5rs8hf18S9uoA1
        subject_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJbUtHxGu69mKow3Z6S4QK
          claim_id: c_8LtQSusk5rs8hf18S9uoA1
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DXge9NpMoqUNe5n9U4L1E9
        subject_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6oRPKRwYT9WjFigXVcxQE
          claim_id: c_DXge9NpMoqUNe5n9U4L1E9
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Kon3RboVBztbAP5XATLn8
        subject_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸逵（1498年—1558年），明人物。明清進士進士，籍贯番禺，入仕進士。（中国历代人物传记资料库 CBDB 126774）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_le1gXhxq22QVLGSkWRcaCe
          claim_id: c_3Kon3RboVBztbAP5XATLn8
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: CBDB:126774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7JVkxP32j7p2MbqfM71i6M
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcqXZY8WuZLbn50WpFNDGS
          claim_id: c_7JVkxP32j7p2MbqfM71i6M
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_83yzu33D3zG1xGPeEb9Ebe
        status: active
        display_name: 王傅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Gjq_WCB9379kekK3CdVISD
        subject_person_id: p_C5E5FRAAqgq5bUt3aJdU9J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZYMcl2HxrcUBCvrhPMqTW
          claim_id: c_Gjq_WCB9379kekK3CdVISD
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C5E5FRAAqgq5bUt3aJdU9J
        status: active
        display_name: 王茕立
        merged_into_person_id: null
    - claim:
        id: c_H4zDQMErqQtQrRh9GESaRo
        subject_person_id: p_RrddoDHvhLNarezkWkfGUJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U8Lb85mZAPC7KpBnrI9_Ph
          claim_id: c_H4zDQMErqQtQrRh9GESaRo
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RrddoDHvhLNarezkWkfGUJ
        status: active
        display_name: 王珤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2wYJCmF2ru8NXfdtgvw0CA
        subject_person_id: p_6ejbA13NwK2QQUt5VT8wE3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LrySv0yTQL2hSV1uDJ5jhF
          claim_id: c_2wYJCmF2ru8NXfdtgvw0CA
          source_id: s_HsNSGet-uZXsl_FzM3C5Z4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HsNSGet-uZXsl_FzM3C5Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王漸適（CBDB 279747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279747&o=json
            external_identifier: CBDB:279747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ejbA13NwK2QQUt5VT8wE3
        status: active
        display_name: 王漸適
        merged_into_person_id: null
    - claim:
        id: c_nJXmxNwG5-qAaBlOuU2NA8
        subject_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xw34vm7booOs9sJSgw3YBJ
          claim_id: c_nJXmxNwG5-qAaBlOuU2NA8
          source_id: s_feriU1vMvJnMq6mXQBzW8K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_feriU1vMvJnMq6mXQBzW8K
            source_type: api_record
            title: 中国历代人物传记资料库：王适迪（CBDB 279742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json
            external_identifier: CBDB:279742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AxsVtrCi1ZCfXEQCu435z3
        status: active
        display_name: 王适迪
        merged_into_person_id: null
    - claim:
        id: c_kv4fO_I2OZCrNNUiOyNA93
        subject_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NioVa479JUDKEChywUJWxz
          claim_id: c_kv4fO_I2OZCrNNUiOyNA93
          source_id: s_eKDA9NC-CJG1PzkaHsMEz7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eKDA9NC-CJG1PzkaHsMEz7
            source_type: api_record
            title: 中国历代人物传记资料库：王漸造（CBDB 279745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json
            external_identifier: CBDB:279745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVBKSKkbmm3UpBzszMgVLL
        status: active
        display_name: 王漸造
        merged_into_person_id: null
    - claim:
        id: c_v-NQHnOw2jH8r-B7YCrDl7
        subject_person_id: p_EJwVDZj1xNqv72p5LMTvfk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQKESHUK4CzR5ANw0-4bMW
          claim_id: c_v-NQHnOw2jH8r-B7YCrDl7
          source_id: s_w04pQc7yt1b9-lyZbWdRoh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w04pQc7yt1b9-lyZbWdRoh
            source_type: api_record
            title: 中国历代人物传记资料库：王達途（CBDB 279744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json
            external_identifier: CBDB:279744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJwVDZj1xNqv72p5LMTvfk
        status: active
        display_name: 王達途
        merged_into_person_id: null
    - claim:
        id: c_F9KGXVzzWF91Q6I4tV4G6b
        subject_person_id: p_X8ey8mTATQs82jLVUHi3v5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3l4nTCZ9f6diNcSRD3_Z8L
          claim_id: c_F9KGXVzzWF91Q6I4tV4G6b
          source_id: s_uHbF-RV8N0jjl5CW8LgRfe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uHbF-RV8N0jjl5CW8LgRfe
            source_type: api_record
            title: 中国历代人物传记资料库：王遲速（CBDB 279743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279743&o=json
            external_identifier: CBDB:279743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8ey8mTATQs82jLVUHi3v5
        status: active
        display_name: 王遲速
        merged_into_person_id: null
    - claim:
        id: c_lFkxM2sD6i-fUkznUJsiJc
        subject_person_id: p_foNgNH1fWVwkc8JrcWVu76
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YYKfzzFlF1QV_5U6NH8X3b
          claim_id: c_lFkxM2sD6i-fUkznUJsiJc
          source_id: s_06MlpVOJ2CYeGIzGKNtXax
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_06MlpVOJ2CYeGIzGKNtXax
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逑（CBDB 279746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279746&o=json
            external_identifier: CBDB:279746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_foNgNH1fWVwkc8JrcWVu76
        status: active
        display_name: 王漸逑
        merged_into_person_id: null
---

# 王漸逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸逵 | accepted |
| birth.date | 1498年 | accepted |
| death.date | 1558年 | accepted |
| bio.summary | 王漸逵（1498年—1558年），明人物。明清進士進士，籍贯番禺，入仕進士。（中国历代人物传记资料库 CBDB 126774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_83yzu33D3zG1xGPeEb9Ebe | 王傅 | accepted |
| ancestors | p_C5E5FRAAqgq5bUt3aJdU9J | 王茕立 | accepted |
| ancestors | p_RrddoDHvhLNarezkWkfGUJ | 王珤 | accepted |
| other | p_6ejbA13NwK2QQUt5VT8wE3 | 王漸適 | accepted |
| other | p_AxsVtrCi1ZCfXEQCu435z3 | 王适迪 | accepted |
| other | p_BVBKSKkbmm3UpBzszMgVLL | 王漸造 | accepted |
| other | p_EJwVDZj1xNqv72p5LMTvfk | 王達途 | accepted |
| other | p_X8ey8mTATQs82jLVUHi3v5 | 王遲速 | accepted |
| other | p_foNgNH1fWVwkc8JrcWVu76 | 王漸逑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遲速（CBDB 279743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279743&o=json)
- [中国历代人物传记资料库：王達途（CBDB 279744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json)
- [中国历代人物传记资料库：王漸逵（CBDB 126774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126774&o=json)
- [中国历代人物传记资料库：王漸逑（CBDB 279746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279746&o=json)
- [中国历代人物传记资料库：王漸適（CBDB 279747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279747&o=json)
- [中国历代人物传记资料库：王漸造（CBDB 279745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json)
- [中国历代人物传记资料库：王适迪（CBDB 279742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json)
