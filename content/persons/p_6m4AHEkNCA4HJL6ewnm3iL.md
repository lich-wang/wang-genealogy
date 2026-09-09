---
schema: wang-person/v1
id: p_6m4AHEkNCA4HJL6ewnm3iL
status: active
merged_into: null
display_name: 王仲華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g5wcA3x6KfRBN4G6sZY4Dr
        subject_person_id: p_6m4AHEkNCA4HJL6ewnm3iL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Mp6W8M9or8EAU8q2cKqJ5
          claim_id: c_g5wcA3x6KfRBN4G6sZY4Dr
          source_id: s_FBiQNgRBggotpTGFWVfezR
          stance: supports
          locator: CBDB:1798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1798）
          source: &a1
            id: s_FBiQNgRBggotpTGFWVfezR
            source_type: api_record
            title: 中国历代人物传记资料库：王仲華（CBDB 1798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1798&o=json
            external_identifier: CBDB:1798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whEf652joB82214icPAw3E
        subject_person_id: p_6m4AHEkNCA4HJL6ewnm3iL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7WLxLLPBNEfkrdo77KFUN
          claim_id: c_whEf652joB82214icPAw3E
          source_id: s_FBiQNgRBggotpTGFWVfezR
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

# 王仲華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲華 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲華（CBDB 1798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1798&o=json)
