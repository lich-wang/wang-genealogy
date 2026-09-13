---
schema: wang-person/v1
id: p_FE9iKixvWjw4EnshKC62T1
status: active
merged_into: null
display_name: 王拳
cbdb_id: 266171
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z84AqFCi76E7XRGJ6LHQNx
        subject_person_id: p_FE9iKixvWjw4EnshKC62T1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拳，史料所见人物。本项目依据《中国历代人物传记资料库：王拳（CBDB 266171）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DOXHpxOlhhMMpDTeCgsGwm
          claim_id: c_Z84AqFCi76E7XRGJ6LHQNx
          source_id: s_HpM76YvcH6QKqUcFKkW4zB
          stance: supports
          locator: CBDB:266171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HpM76YvcH6QKqUcFKkW4zB
            source_type: api_record
            title: 中国历代人物传记资料库：王拳（CBDB 266171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266171&o=json
            external_identifier: CBDB:266171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M54P4UWHj2NQPjK5nxLGEA
        subject_person_id: p_FE9iKixvWjw4EnshKC62T1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x6BGJdDvb4DAq6Yiid9EVV
          claim_id: c_M54P4UWHj2NQPjK5nxLGEA
          source_id: s_HpM76YvcH6QKqUcFKkW4zB
          stance: supports
          locator: CBDB:266171
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lCVepfWn7fcpG9FwEeJ_Dk
        subject_person_id: p_FE9iKixvWjw4EnshKC62T1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fq3LjegE7spxMiqLcguRno
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9jE_r-QZuVpPn_k1Zvh_O
          claim_id: c_lCVepfWn7fcpG9FwEeJ_Dk
          source_id: s_HpM76YvcH6QKqUcFKkW4zB
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HpM76YvcH6QKqUcFKkW4zB
            source_type: api_record
            title: 中国历代人物传记资料库：王拳（CBDB 266171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266171&o=json
            external_identifier: CBDB:266171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fq3LjegE7spxMiqLcguRno
        status: active
        display_name: 王績
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王拳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拳，史料所见人物。本项目依据《中国历代人物传记资料库：王拳（CBDB 266171）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王拳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fq3LjegE7spxMiqLcguRno | 王績 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拳（CBDB 266171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266171&o=json)
