---
schema: wang-person/v1
id: p_qS7NvXbMFNn76qPYrgmG6D
status: active
merged_into: null
display_name: 王大溪
cbdb_id: 306734
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZazRAtdN372nTM25N9XYv
        subject_person_id: p_qS7NvXbMFNn76qPYrgmG6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大溪，史料所见人物。本项目依据《中国历代人物传记资料库：王大溪（CBDB 306734）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_cnqc4506_FCh1LR3ZEawPC
          claim_id: c_EZazRAtdN372nTM25N9XYv
          source_id: s_GEDcYRoT7CjiF2mrjrjxh5
          stance: supports
          locator: CBDB:306734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GEDcYRoT7CjiF2mrjrjxh5
            source_type: api_record
            title: 中国历代人物传记资料库：王大溪（CBDB 306734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306734&o=json
            external_identifier: CBDB:306734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ur95b51B89rwCkSu9TH5dB
        subject_person_id: p_qS7NvXbMFNn76qPYrgmG6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大溪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i8uakz2oNNoA5opVk5AwWP
          claim_id: c_Ur95b51B89rwCkSu9TH5dB
          source_id: s_GEDcYRoT7CjiF2mrjrjxh5
          stance: supports
          locator: CBDB:306734
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
  other: []
---

# 王大溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大溪，史料所见人物。本项目依据《中国历代人物传记资料库：王大溪（CBDB 306734）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王大溪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大溪（CBDB 306734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306734&o=json)
- [中国历代人物传记资料库：王鳴臣（CBDB 126785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json)
