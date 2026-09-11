---
schema: wang-person/v1
id: p_zsZCF6Y5jvBqHN9ntbr3BD
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_69UDjvDL9FoWfxFxVHENNt
        subject_person_id: p_zsZCF6Y5jvBqHN9ntbr3BD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mSnxp7H9JZ69hPX9C5kniC
          claim_id: c_69UDjvDL9FoWfxFxVHENNt
          source_id: s_ZC92cwE3qjYrKLTrr15LB1
          stance: supports
          locator: CBDB:100812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100812）
          source: &a1
            id: s_ZC92cwE3qjYrKLTrr15LB1
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 100812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100812&o=json
            external_identifier: CBDB:100812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mZkDXNSHpTNXKhj7QWqY91
        subject_person_id: p_zsZCF6Y5jvBqHN9ntbr3BD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LbG3G8vZQQvq9iCWZhkncy
          claim_id: c_mZkDXNSHpTNXKhj7QWqY91
          source_id: s_ZC92cwE3qjYrKLTrr15LB1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eqwy83uSqkAwHsumMqTi55
        subject_person_id: p_sBrch9576SA9L9dkiEbD91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zsZCF6Y5jvBqHN9ntbr3BD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4z3QHi637DAojao18thIsd
          claim_id: c_eqwy83uSqkAwHsumMqTi55
          source_id: s_66wo9JKogHd5biQVPDZjRE
          stance: supports
          locator: 元人傳記資料索引，630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_66wo9JKogHd5biQVPDZjRE
            source_type: api_record
            title: 中国历代人物传记资料库：王國昌（CBDB 101324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101324&o=json
            external_identifier: CBDB:101324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sBrch9576SA9L9dkiEbD91
        status: active
        display_name: 王國昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sBrch9576SA9L9dkiEbD91 | 王國昌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國昌（CBDB 101324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101324&o=json)
- [中国历代人物传记资料库：王通（CBDB 100812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100812&o=json)
