---
schema: wang-person/v1
id: p_sUZvQKbRHopC7A9EWMCwib
status: active
merged_into: null
display_name: 王巽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txLbYU3ET9zjUA1tWkGejN
        subject_person_id: p_sUZvQKbRHopC7A9EWMCwib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dChPNTPhZswxa1NK4KPLkD
          claim_id: c_txLbYU3ET9zjUA1tWkGejN
          source_id: s_ZfDaV4pgqCLB83zHfzsbwx
          stance: supports
          locator: CBDB:343683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343683）
          source: &a1
            id: s_ZfDaV4pgqCLB83zHfzsbwx
            source_type: api_record
            title: 中国历代人物传记资料库：王巽（CBDB 343683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343683&o=json
            external_identifier: CBDB:343683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xqpnSKEV5guvn7NFJphA7w
        subject_person_id: p_sUZvQKbRHopC7A9EWMCwib
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽，清人物。明清進士進士，籍贯河南省，入仕進士。（中国历代人物传记资料库 CBDB 343683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q8zFVdTeCK5nTxnoiAOq2p
          claim_id: c_xqpnSKEV5guvn7NFJphA7w
          source_id: s_ZfDaV4pgqCLB83zHfzsbwx
          stance: supports
          locator: CBDB:343683
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

# 王巽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巽 | accepted |
| bio.summary | 王巽，清人物。明清進士進士，籍贯河南省，入仕進士。（中国历代人物传记资料库 CBDB 343683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巽（CBDB 343683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343683&o=json)
