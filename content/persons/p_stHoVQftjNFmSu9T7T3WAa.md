---
schema: wang-person/v1
id: p_stHoVQftjNFmSu9T7T3WAa
status: active
merged_into: null
display_name: 王昇
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CfFFKyzAvqNipMpqfqJ886
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FHfCaviXn8QBQp1xxLEiVx
          claim_id: c_CfFFKyzAvqNipMpqfqJ886
          source_id: s_NhfdrjA4YgefiM56ts4PEa
          stance: supports
          locator: CBDB:198437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198437）
          source: &a1
            id: s_NhfdrjA4YgefiM56ts4PEa
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 198437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198437&o=json
            external_identifier: CBDB:198437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4yUVQhJC3bFFdtx7R1H81i
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JqGPA5mGDqMzS82yur8nh4
          claim_id: c_4yUVQhJC3bFFdtx7R1H81i
          source_id: s_NhfdrjA4YgefiM56ts4PEa
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
        id: c_t3cNEZWpxLNWhnERZ7GxPM
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇（生于1421年），明人物。景泰五年進士，籍贯密雲，入仕進士。（中国历代人物传记资料库 CBDB 198437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iHeCCRkQGXjkmfzjfaLMBP
          claim_id: c_t3cNEZWpxLNWhnERZ7GxPM
          source_id: s_NhfdrjA4YgefiM56ts4PEa
          stance: supports
          locator: CBDB:198437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6W3s7FmtLshtB_n4Y4E0Ht
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkZKzuiGYuk2p425nfhmX6
          claim_id: c_6W3s7FmtLshtB_n4Y4E0Ht
          source_id: s_ziFYSQ2ruSLKUDGBjHyQau
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ziFYSQ2ruSLKUDGBjHyQau
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271773&o=json
            external_identifier: CBDB:271773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LHuTnNyG1C6YMk7ahAUHo3
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mBb0CA3iErAV6KBAtI-AUr
        subject_person_id: p_k2LuJSRwJYvYh71ScTHiPj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUM6tqqcE8MPkBqijFE7ke
          claim_id: c_mBb0CA3iErAV6KBAtI-AUr
          source_id: s_r5ZCaSCFkL2kfTDSG7fzp4
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r5ZCaSCFkL2kfTDSG7fzp4
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 271751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271751&o=json
            external_identifier: CBDB:271751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k2LuJSRwJYvYh71ScTHiPj
        status: active
        display_name: 王勉
        merged_into_person_id: null
    - claim:
        id: c_BPDjOvddOGrqF53dH2oAML
        subject_person_id: p_KA2HkQ1qdLYhBgz4ZSBGt7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlUNu0Uc_Bq5yhjy6A8QTS
          claim_id: c_BPDjOvddOGrqF53dH2oAML
          source_id: s_pVottD6QNt7gMJ6Q1Yv6eh
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pVottD6QNt7gMJ6Q1Yv6eh
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 271762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271762&o=json
            external_identifier: CBDB:271762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KA2HkQ1qdLYhBgz4ZSBGt7
        status: active
        display_name: 王綱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_HsOvwNNNOxoP9Yn08zSrMD
        subject_person_id: p_7zJTA8P44SADgfLmzQmWsp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUDzUJM_TtXb-N82G_sTtg
          claim_id: c_HsOvwNNNOxoP9Yn08zSrMD
          source_id: s_KhQlt26UbP6J1ZtusnVOii
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KhQlt26UbP6J1ZtusnVOii
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 271817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json
            external_identifier: CBDB:271817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7zJTA8P44SADgfLmzQmWsp
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_aD39HfmrG3iWlA3A6lC5-e
        subject_person_id: p_UQ6RTfM1eUG5mYfaY1pW9i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrGcdCIFQdWyT9ME5A8j_j
          claim_id: c_aD39HfmrG3iWlA3A6lC5-e
          source_id: s_YX40jBvgBWd8pvTZt91nuo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YX40jBvgBWd8pvTZt91nuo
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 271828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271828&o=json
            external_identifier: CBDB:271828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UQ6RTfM1eUG5mYfaY1pW9i
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_MDjZLMGZKUE4Noz96cAOg4
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3W3hKTQhE19bFUqc05_0f
          claim_id: c_MDjZLMGZKUE4Noz96cAOg4
          source_id: s_csG_l9GVk1kI3wch7n2-Gz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_csG_l9GVk1kI3wch7n2-Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s6y4se8DCW4eukcpENqdMJ
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_B8DbPymXckU_kbzN6Qh3zT
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j85AjWMp7Sn00owLYTkz_P
          claim_id: c_B8DbPymXckU_kbzN6Qh3zT
          source_id: s_YJ8fFHxKCt7lCiuRR6hF2u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YJ8fFHxKCt7lCiuRR6hF2u
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 271806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json
            external_identifier: CBDB:271806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z3W5Kxe67VFh1mAWJB2FDG
        status: active
        display_name: 王信
        merged_into_person_id: null
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | 王昇（生于1421年），明人物。景泰五年進士，籍贯密雲，入仕進士。（中国历代人物传记资料库 CBDB 198437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LHuTnNyG1C6YMk7ahAUHo3 | 王俊 | accepted |
| ancestors | p_k2LuJSRwJYvYh71ScTHiPj | 王勉 | accepted |
| ancestors | p_KA2HkQ1qdLYhBgz4ZSBGt7 | 王綱 | accepted |
| other | p_7zJTA8P44SADgfLmzQmWsp | 王興 | accepted |
| other | p_UQ6RTfM1eUG5mYfaY1pW9i | 王麟 | accepted |
| other | p_s6y4se8DCW4eukcpENqdMJ | 王鳳 | accepted |
| other | p_z3W5Kxe67VFh1mAWJB2FDG | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 271839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json)
- [中国历代人物传记资料库：王綱（CBDB 271762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271762&o=json)
- [中国历代人物传记资料库：王俊（CBDB 271773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271773&o=json)
- [中国历代人物传记资料库：王麟（CBDB 271828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271828&o=json)
- [中国历代人物传记资料库：王勉（CBDB 271751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271751&o=json)
- [中国历代人物传记资料库：王昇（CBDB 198437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198437&o=json)
- [中国历代人物传记资料库：王信（CBDB 271806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json)
- [中国历代人物传记资料库：王興（CBDB 271817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json)
