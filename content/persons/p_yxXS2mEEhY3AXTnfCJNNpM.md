---
schema: wang-person/v1
id: p_yxXS2mEEhY3AXTnfCJNNpM
status: active
merged_into: null
display_name: 王孫貴
cbdb_id: 37948
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwyHYhuDxr5vqqNQMekHRX
        subject_person_id: p_yxXS2mEEhY3AXTnfCJNNpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫貴，宋人物。籍贯仙居，入仕武舉進士。（中国历代人物传记资料库 CBDB 37948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EdCbUhgFTqz1VVPTSbn7v7
          claim_id: c_bwyHYhuDxr5vqqNQMekHRX
          source_id: s_MM5CHSmLYBerSQRLAh9Bwr
          stance: supports
          locator: CBDB:37948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MM5CHSmLYBerSQRLAh9Bwr
            source_type: api_record
            title: 中国历代人物传记资料库：王孫貴（CBDB 37948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37948&o=json
            external_identifier: CBDB:37948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t49D3hs6qtz2XraAz36v3R
        subject_person_id: p_yxXS2mEEhY3AXTnfCJNNpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VU1SKDWDkSppDLVxUJGFoV
          claim_id: c_t49D3hs6qtz2XraAz36v3R
          source_id: s_MM5CHSmLYBerSQRLAh9Bwr
          stance: supports
          locator: CBDB:37948
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王孫貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫貴，宋人物。籍贯仙居，入仕武舉進士。（中国历代人物传记资料库 CBDB 37948） | accepted |
| name.primary | 王孫貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孫貴（CBDB 37948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37948&o=json)
