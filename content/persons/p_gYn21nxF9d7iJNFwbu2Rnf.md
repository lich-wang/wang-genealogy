---
schema: wang-person/v1
id: p_gYn21nxF9d7iJNFwbu2Rnf
status: active
merged_into: null
display_name: 王鳴臣
cbdb_id: 126785
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dvaHeiMa3oFRh3V8FA6nTc
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴臣（生于1513年），明人物。中国历代人物传记资料库（CBDB）以人物编号 126785 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_QWivp5hpqtlfNRY3iHskxx
          claim_id: c_dvaHeiMa3oFRh3V8FA6nTc
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_R8B9GAYbPdCC45L2JGg8q6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴臣（CBDB 126785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json
            external_identifier: CBDB:126785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DdkZAj9JdXWf93sC22t1Hs
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1513-01-01
            latest: 1513-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o9eJBXHW7XEoYYergzv1k1
          claim_id: c_DdkZAj9JdXWf93sC22t1Hs
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
          source:
            id: s_R8B9GAYbPdCC45L2JGg8q6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴臣（CBDB 126785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json
            external_identifier: CBDB:126785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3ArLcX6U9VdAxpEFYh5X6
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FP33Xe7JT4QU8M6EbF21MF
          claim_id: c_z3ArLcX6U9VdAxpEFYh5X6
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
          source:
            id: s_R8B9GAYbPdCC45L2JGg8q6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴臣（CBDB 126785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json
            external_identifier: CBDB:126785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2ufrxAVQUefS4Cz7h_5gML
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVqMdErx3zBCXoDb6u05XU
          claim_id: c_2ufrxAVQUefS4Cz7h_5gML
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y4FNMr5v5UBkNhYB7rhbfs
        status: active
        display_name: 王國賜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vjfPj-e7D_6O-uYI6IeOSW
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1oeS3ozES1xNf6Ww7VNcgB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8aRUZLn-WhtdEYTfCHjJM
          claim_id: c_vjfPj-e7D_6O-uYI6IeOSW
          source_id: s_KBqF5TGVsWibwKkW8Cetxg
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KBqF5TGVsWibwKkW8Cetxg
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json
            external_identifier: CBDB:306738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oeS3ozES1xNf6Ww7VNcgB
        status: active
        display_name: 蕭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HV8SthSQ8N1p06T-QTKTuU
        subject_person_id: p_qS7NvXbMFNn76qPYrgmG6D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yW3B2Yluu9Mmew0hzHF-h1
          claim_id: c_HV8SthSQ8N1p06T-QTKTuU
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qS7NvXbMFNn76qPYrgmG6D
        status: active
        display_name: 王大溪
        merged_into_person_id: null
    - claim:
        id: c_rDVTQnxi9vbobZV7Xwr9j6
        subject_person_id: p_k34ZxihPVrsTG6XCDpNhfP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFCb74oSvLM1mhZ1NLIar5
          claim_id: c_rDVTQnxi9vbobZV7Xwr9j6
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k34ZxihPVrsTG6XCDpNhfP
        status: active
        display_name: 王學漁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鳴臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳴臣（生于1513年），明人物。中国历代人物传记资料库（CBDB）以人物编号 126785 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1513年 | accepted |
| name.primary | 王鳴臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y4FNMr5v5UBkNhYB7rhbfs | 王國賜 | accepted |
| spouses | p_1oeS3ozES1xNf6Ww7VNcgB | 蕭氏 | accepted |
| ancestors | p_qS7NvXbMFNn76qPYrgmG6D | 王大溪 | accepted |
| ancestors | p_k34ZxihPVrsTG6XCDpNhfP | 王學漁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳴臣（CBDB 126785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json)
- [中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json)
