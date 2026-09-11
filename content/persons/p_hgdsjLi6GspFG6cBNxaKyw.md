---
schema: wang-person/v1
id: p_hgdsjLi6GspFG6cBNxaKyw
status: active
merged_into: null
display_name: 王增龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cAfqHD2Fk5SCkdmn8xTrPb
        subject_person_id: p_hgdsjLi6GspFG6cBNxaKyw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u15BHB6jjTJjHcnWK21yMG
          claim_id: c_cAfqHD2Fk5SCkdmn8xTrPb
          source_id: s_VP3192dA8aL8eX7r7MHQyY
          stance: supports
          locator: CBDB:577898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577898）
          source: &a1
            id: s_VP3192dA8aL8eX7r7MHQyY
            source_type: api_record
            title: 中国历代人物传记资料库：王增龍（CBDB 577898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577898&o=json
            external_identifier: CBDB:577898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FRi1F4oDgFMV7d58B13oAB
        subject_person_id: p_hgdsjLi6GspFG6cBNxaKyw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增龍，清人物。籍贯歙縣，身份为農民、孝子/孝女。（中国历代人物传记资料库 CBDB 577898）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yND4gM0VRfmFyDOWt4eAwQ
          claim_id: c_FRi1F4oDgFMV7d58B13oAB
          source_id: s_VP3192dA8aL8eX7r7MHQyY
          stance: supports
          locator: CBDB:577898
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

# 王增龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增龍 | accepted |
| bio.summary | 王增龍，清人物。籍贯歙縣，身份为農民、孝子/孝女。（中国历代人物传记资料库 CBDB 577898） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增龍（CBDB 577898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577898&o=json)
