---
schema: wang-person/v1
id: p_r6pBWbK1n21iTCU2S5mqaD
status: active
merged_into: null
display_name: 王文爟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yEccBJwV2FaVMihg2ChhE4
        subject_person_id: p_r6pBWbK1n21iTCU2S5mqaD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文爟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTarAiVKNi2L6EbMWZDWHU
          claim_id: c_yEccBJwV2FaVMihg2ChhE4
          source_id: s_BQRRfnTAgyLtjWhWcH3L9i
          stance: supports
          locator: CBDB:207417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207417）
          source: &a1
            id: s_BQRRfnTAgyLtjWhWcH3L9i
            source_type: api_record
            title: 中国历代人物传记资料库：王文爟（CBDB 207417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207417&o=json
            external_identifier: CBDB:207417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9wQGKfgUjgQcu6cfwV4fx4
        subject_person_id: p_r6pBWbK1n21iTCU2S5mqaD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1562年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Si5qzWQATQmH6RBFNaRuB6
          claim_id: c_9wQGKfgUjgQcu6cfwV4fx4
          source_id: s_BQRRfnTAgyLtjWhWcH3L9i
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uk6CQo9bKtCnF5beVYV4RD
        subject_person_id: p_r6pBWbK1n21iTCU2S5mqaD
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
        - id: cs_YGECM36GKTAkR7gf3F4kUB
          claim_id: c_Uk6CQo9bKtCnF5beVYV4RD
          source_id: s_BQRRfnTAgyLtjWhWcH3L9i
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

# 王文爟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文爟 | accepted |
| birth.date | 1562年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文爟（CBDB 207417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207417&o=json)
