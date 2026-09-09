---
schema: wang-person/v1
id: p_dzhbRNp1iCFTNtyKGMmcgy
status: active
merged_into: null
display_name: 王封淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bG7H5T3n37VnPzAS26GjvK
        subject_person_id: p_dzhbRNp1iCFTNtyKGMmcgy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9266Db2BpkE7C9muHFYvi
          claim_id: c_bG7H5T3n37VnPzAS26GjvK
          source_id: s_c61517ePLirtwX27BqRcfS
          stance: supports
          locator: CBDB:574251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574251）
          source: &a1
            id: s_c61517ePLirtwX27BqRcfS
            source_type: api_record
            title: 中国历代人物传记资料库：王封淑（CBDB 574251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574251&o=json
            external_identifier: CBDB:574251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DaTQpwzRai3cLd1UcpieVx
        subject_person_id: p_dzhbRNp1iCFTNtyKGMmcgy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHPtFQ1SBvePFBSTgYxaDw
          claim_id: c_DaTQpwzRai3cLd1UcpieVx
          source_id: s_c61517ePLirtwX27BqRcfS
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

# 王封淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王封淑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王封淑（CBDB 574251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574251&o=json)
