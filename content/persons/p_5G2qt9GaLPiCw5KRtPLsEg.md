---
schema: wang-person/v1
id: p_5G2qt9GaLPiCw5KRtPLsEg
status: active
merged_into: null
display_name: 王代興
cbdb_id: 526827
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tDtjvNAmhKA4rh3zYe7G2m
        subject_person_id: p_5G2qt9GaLPiCw5KRtPLsEg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代興，史料所见人物。本项目依据《中国历代人物传记资料库：王代興（CBDB 526827）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ghpDK_jd4U3-3zn2sM0sky
          claim_id: c_tDtjvNAmhKA4rh3zYe7G2m
          source_id: s_AKkCaG852x85jZGzTLAsPm
          stance: supports
          locator: CBDB:526827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AKkCaG852x85jZGzTLAsPm
            source_type: api_record
            title: 中国历代人物传记资料库：王代興（CBDB 526827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526827&o=json
            external_identifier: CBDB:526827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tsQ89LD9TgPBZpJtSB9B8A
        subject_person_id: p_5G2qt9GaLPiCw5KRtPLsEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HyTgZQVdG1xHHTBAwrWpc5
          claim_id: c_tsQ89LD9TgPBZpJtSB9B8A
          source_id: s_AKkCaG852x85jZGzTLAsPm
          stance: supports
          locator: CBDB:526827
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6kN4SWKLXCND1ncxzn5B44
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5G2qt9GaLPiCw5KRtPLsEg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1OW8P-ulUjmXjUSjOdJBt
          claim_id: c_6kN4SWKLXCND1ncxzn5B44
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n5SveC4vwRXeJFjECJn3hm
            source_type: api_record
            title: 中国历代人物传记资料库：王家賓（CBDB 69290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json
            external_identifier: CBDB:69290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pEdGRSnHAWXvL7ekoq9irm
        status: active
        display_name: 王家賓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王代興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王代興，史料所见人物。本项目依据《中国历代人物传记资料库：王代興（CBDB 526827）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王代興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_pEdGRSnHAWXvL7ekoq9irm | 王家賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王代興（CBDB 526827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526827&o=json)
- [中国历代人物传记资料库：王家賓（CBDB 69290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json)
