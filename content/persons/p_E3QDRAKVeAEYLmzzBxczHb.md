---
schema: wang-person/v1
id: p_E3QDRAKVeAEYLmzzBxczHb
status: active
merged_into: null
display_name: 王詡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akCA2yYCCBjBGpn44RQW7e
        subject_person_id: p_E3QDRAKVeAEYLmzzBxczHb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKb3HNBS7KAYrGuYNJgxXy
          claim_id: c_akCA2yYCCBjBGpn44RQW7e
          source_id: s_nMkGn5pL2CX8xQETeDHGWd
          stance: supports
          locator: CBDB:238063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238063）
          source: &a1
            id: s_nMkGn5pL2CX8xQETeDHGWd
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 238063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json
            external_identifier: CBDB:238063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8coH667vCJzgy6jUZ1n7gz
        subject_person_id: p_E3QDRAKVeAEYLmzzBxczHb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詡，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LLSu01tFLjN1dMHf5aNRdg
          claim_id: c_8coH667vCJzgy6jUZ1n7gz
          source_id: s_nMkGn5pL2CX8xQETeDHGWd
          stance: supports
          locator: CBDB:238063
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

# 王詡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詡 | accepted |
| bio.summary | 王詡，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詡（CBDB 238063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json)
