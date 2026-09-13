---
schema: wang-person/v1
id: p_UYeZjxwRSFnnKq62fsnzid
status: active
merged_into: null
display_name: 王葑
cbdb_id: 204755
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1D55yNEtVrJDLruBMCLRzw
        subject_person_id: p_UYeZjxwRSFnnKq62fsnzid
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葑（生于1529年），明人物。明清進士進士，籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 204755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QZcQXmr_cTbf-ghSd2A9bJ
          claim_id: c_1D55yNEtVrJDLruBMCLRzw
          source_id: s_EWrxW7b1p29AAW9sHJ6MZK
          stance: supports
          locator: CBDB:204755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EWrxW7b1p29AAW9sHJ6MZK
            source_type: api_record
            title: 中国历代人物传记资料库：王葑（CBDB 204755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204755&o=json
            external_identifier: CBDB:204755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Eo9CBSc86s46K83dMVR1ve
        subject_person_id: p_UYeZjxwRSFnnKq62fsnzid
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1529-01-01
            latest: 1529-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fFB7738E9gNUdHZBizPw7x
          claim_id: c_Eo9CBSc86s46K83dMVR1ve
          source_id: s_EWrxW7b1p29AAW9sHJ6MZK
          stance: supports
          locator: CBDB:204755
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source:
            id: s_EWrxW7b1p29AAW9sHJ6MZK
            source_type: api_record
            title: 中国历代人物传记资料库：王葑（CBDB 204755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204755&o=json
            external_identifier: CBDB:204755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbPr64VxbTY9DrUquyLj3W
        subject_person_id: p_UYeZjxwRSFnnKq62fsnzid
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m3zDKzhv3WFZK2PJfNFxNd
          claim_id: c_nbPr64VxbTY9DrUquyLj3W
          source_id: s_EWrxW7b1p29AAW9sHJ6MZK
          stance: supports
          locator: CBDB:204755
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1529
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ALIJESpL_NjPjmzMZMS3hp
        subject_person_id: p_wHjp1JMvU1aPHYazUSZMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UYeZjxwRSFnnKq62fsnzid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHrWNwJzbRtrbaE_uldKav
          claim_id: c_ALIJESpL_NjPjmzMZMS3hp
          source_id: s_VBSdwWicjCZTKdLSo2PWXH
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VBSdwWicjCZTKdLSo2PWXH
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 323579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323579&o=json
            external_identifier: CBDB:323579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wHjp1JMvU1aPHYazUSZMfH
        status: active
        display_name: 王琴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6v5xlMSdJo-tBSrLKdhnzz
        subject_person_id: p_hRDNX5mnYXEF5X2cQ7U6H4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UYeZjxwRSFnnKq62fsnzid
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j_M674bDZbwnAIKjABVWtA
          claim_id: c_6v5xlMSdJo-tBSrLKdhnzz
          source_id: s_eY8NP7mExVoQjUXqCqnTus
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eY8NP7mExVoQjUXqCqnTus
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 323577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323577&o=json
            external_identifier: CBDB:323577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hRDNX5mnYXEF5X2cQ7U6H4
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_XzvfYckO-yl_jpOXZ46QeG
        subject_person_id: p_3P6PL5iSpXsS5WK4moYCCA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UYeZjxwRSFnnKq62fsnzid
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqi_9JjTcDihCV9kGfzUD0
          claim_id: c_XzvfYckO-yl_jpOXZ46QeG
          source_id: s_MB3h4ovn7qsRd3TE21rFuE
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MB3h4ovn7qsRd3TE21rFuE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀴（CBDB 323578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323578&o=json
            external_identifier: CBDB:323578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3P6PL5iSpXsS5WK4moYCCA
        status: active
        display_name: 王瀴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王葑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王葑（生于1529年），明人物。明清進士進士，籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 204755） | accepted |
| birth.date | 1529年 | accepted |
| name.primary | 王葑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wHjp1JMvU1aPHYazUSZMfH | 王琴 | accepted |
| ancestors | p_hRDNX5mnYXEF5X2cQ7U6H4 | 王福 | accepted |
| ancestors | p_3P6PL5iSpXsS5WK4moYCCA | 王瀴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王葑（CBDB 204755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204755&o=json)
- [中国历代人物传记资料库：王福（CBDB 323577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323577&o=json)
- [中国历代人物传记资料库：王琴（CBDB 323579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323579&o=json)
- [中国历代人物传记资料库：王瀴（CBDB 323578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323578&o=json)
