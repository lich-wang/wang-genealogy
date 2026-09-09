---
schema: wang-person/v1
id: p_eQN4y9LgUeW1EE3eV6uurj
status: active
merged_into: null
display_name: 王同讚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLq1CoZTa4rf5bbnU9LKhc
        subject_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gcm87mvK5LgxYnM8ngnCUN
          claim_id: c_aLq1CoZTa4rf5bbnU9LKhc
          source_id: s_qkwnqhh1BJVEVVDDiBvPQP
          stance: supports
          locator: CBDB:228274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228274）
          source: &a1
            id: s_qkwnqhh1BJVEVVDDiBvPQP
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fb67k5DYj5kLJgLHPbQr1W
        subject_person_id: p_eQN4y9LgUeW1EE3eV6uurj
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
        - id: cs_pArENsh6rJiTjDWQuQMEki
          claim_id: c_Fb67k5DYj5kLJgLHPbQr1W
          source_id: s_qkwnqhh1BJVEVVDDiBvPQP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王同讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同讚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同讚（CBDB 228274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json)
