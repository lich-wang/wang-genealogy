---
schema: wang-person/v1
id: p_kZkKxALRntmNFHbEZnos7z
status: active
merged_into: null
display_name: 王垚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TXEZSTPPimc5qjPdwTegkx
        subject_person_id: p_kZkKxALRntmNFHbEZnos7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kb3cA4jxUErJJr2njkCupB
          claim_id: c_TXEZSTPPimc5qjPdwTegkx
          source_id: s_rd2YSQ2DGZpmHAEwLowY5m
          stance: supports
          locator: CBDB:687241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687241）
          source: &a1
            id: s_rd2YSQ2DGZpmHAEwLowY5m
            source_type: api_record
            title: 中国历代人物传记资料库：王垚（CBDB 687241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687241&o=json
            external_identifier: CBDB:687241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yp3i64jhYCHLWgt2Sd7GoV
        subject_person_id: p_kZkKxALRntmNFHbEZnos7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垚，宋人物。籍贯祁陽，入仕進士。（中国历代人物传记资料库 CBDB 687241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a00_tr5oCBUlBlmDDmnO0x
          claim_id: c_yp3i64jhYCHLWgt2Sd7GoV
          source_id: s_rd2YSQ2DGZpmHAEwLowY5m
          stance: supports
          locator: CBDB:687241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王垚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垚 | accepted |
| bio.summary | 王垚，宋人物。籍贯祁陽，入仕進士。（中国历代人物传记资料库 CBDB 687241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垚（CBDB 687241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687241&o=json)
