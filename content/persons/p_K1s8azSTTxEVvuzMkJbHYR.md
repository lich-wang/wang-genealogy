---
schema: wang-person/v1
id: p_K1s8azSTTxEVvuzMkJbHYR
status: active
merged_into: null
display_name: 王猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eHJEmjKEtYKuGfq4Hd5MWj
        subject_person_id: p_K1s8azSTTxEVvuzMkJbHYR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3FFUP43V98BpAzFQqd5eFh
          claim_id: c_eHJEmjKEtYKuGfq4Hd5MWj
          source_id: s_rXtgvc9jbWc5Wbkn5PGfX5
          stance: supports
          locator: CBDB:685598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685598）
          source: &a1
            id: s_rXtgvc9jbWc5Wbkn5PGfX5
            source_type: api_record
            title: 中国历代人物传记资料库：王猷（CBDB 685598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685598&o=json
            external_identifier: CBDB:685598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jmXBiB7teY2Ud4P7HQ6weU
        subject_person_id: p_K1s8azSTTxEVvuzMkJbHYR
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
        - id: cs_LmQxDxpA57x8JkiKU1LaMp
          claim_id: c_jmXBiB7teY2Ud4P7HQ6weU
          source_id: s_rXtgvc9jbWc5Wbkn5PGfX5
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

# 王猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王猷（CBDB 685598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685598&o=json)
