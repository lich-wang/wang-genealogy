---
schema: wang-person/v1
id: p_stHoVQftjNFmSu9T7T3WAa
status: active
merged_into: null
display_name: 王昇
revision: 3
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JYdtmD1k8gMvG58Wakh3uQ
          claim_id: c_t3cNEZWpxLNWhnERZ7GxPM
          source_id: s_NhfdrjA4YgefiM56ts4PEa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LHuTnNyG1C6YMk7ahAUHo3 | 王俊 | accepted |
| ancestors | p_k2LuJSRwJYvYh71ScTHiPj | 王勉 | accepted |
| ancestors | p_KA2HkQ1qdLYhBgz4ZSBGt7 | 王綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 271762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271762&o=json)
- [中国历代人物传记资料库：王俊（CBDB 271773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271773&o=json)
- [中国历代人物传记资料库：王勉（CBDB 271751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271751&o=json)
- [中国历代人物传记资料库：王昇（CBDB 198437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198437&o=json)
