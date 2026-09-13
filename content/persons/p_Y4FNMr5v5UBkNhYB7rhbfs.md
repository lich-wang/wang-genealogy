---
schema: wang-person/v1
id: p_Y4FNMr5v5UBkNhYB7rhbfs
status: active
merged_into: null
display_name: 王國賜
cbdb_id: 306736
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUx7EKP615G9nbXkZ6Rggu
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賜，史料所见人物。本项目依据《中国历代人物传记资料库：王國賜（CBDB 306736）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fMWwMCUmBYfInE2TLL4Gxi
          claim_id: c_DUx7EKP615G9nbXkZ6Rggu
          source_id: s_L11YpaunVbHBMExBfVN7EZ
          stance: supports
          locator: CBDB:306736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_L11YpaunVbHBMExBfVN7EZ
            source_type: api_record
            title: 中国历代人物传记资料库：王國賜（CBDB 306736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306736&o=json
            external_identifier: CBDB:306736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMpnSK985NvX3zjygbUMbf
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b2X8i11o5rgoFXPnVAcFh3
          claim_id: c_qMpnSK985NvX3zjygbUMbf
          source_id: s_L11YpaunVbHBMExBfVN7EZ
          stance: supports
          locator: CBDB:306736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國賜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國賜，史料所见人物。本项目依据《中国历代人物传记资料库：王國賜（CBDB 306736）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王國賜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國賜（CBDB 306736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306736&o=json)
- [中国历代人物传记资料库：王鳴臣（CBDB 126785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json)
