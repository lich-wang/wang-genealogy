---
schema: wang-person/v1
id: p_bDTZa7DXJ6Rm9PFujJJ47a
status: active
merged_into: null
display_name: 王廷第
cbdb_id: 325998
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fRHfYVmx5tzEDwkw1Qse1D
        subject_person_id: p_bDTZa7DXJ6Rm9PFujJJ47a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷第，明人物。嘉靖三十八年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 325998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_43hB1xm8-BV27CAPCxbKh3
          claim_id: c_fRHfYVmx5tzEDwkw1Qse1D
          source_id: s_KgEYcCGWQTxSEgHT1LGFSK
          stance: supports
          locator: CBDB:325998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KgEYcCGWQTxSEgHT1LGFSK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷第（CBDB 325998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json
            external_identifier: CBDB:325998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B93zh3uhPApKamGJopSj6V
        subject_person_id: p_bDTZa7DXJ6Rm9PFujJJ47a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H1Vkfyf6tssJsQBN7xe8g9
          claim_id: c_B93zh3uhPApKamGJopSj6V
          source_id: s_KgEYcCGWQTxSEgHT1LGFSK
          stance: supports
          locator: CBDB:325998
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A2q0SSTwBcN3iFMHWvwBz7
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDTZa7DXJ6Rm9PFujJJ47a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MADbREJefS-beB1urPGsvh
          claim_id: c_A2q0SSTwBcN3iFMHWvwBz7
          source_id: s_RIavL2aBs4bjeHYafLPR3h
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷第 与 王廷瞻 为同胞（CBDB 记「兄」），王廷瞻 之父／母即 王廷第 之父／母。
          source:
            id: s_RIavL2aBs4bjeHYafLPR3h
            source_type: api_record
            title: 中国历代人物传记资料库：王廷第（CBDB 325998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json
            external_identifier: CBDB:325998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_noZgaygFpJ1TRCc093-2A3
        subject_person_id: p_bDTZa7DXJ6Rm9PFujJJ47a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cjzJ94u8_RKj2qBPnPp7fj
          claim_id: c_noZgaygFpJ1TRCc093-2A3
          source_id: s_RIavL2aBs4bjeHYafLPR3h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34669 王廷瞻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RIavL2aBs4bjeHYafLPR3h
            source_type: api_record
            title: 中国历代人物传记资料库：王廷第（CBDB 325998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json
            external_identifier: CBDB:325998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
---

# 王廷第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷第，明人物。嘉靖三十八年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 325998） | accepted |
| name.primary | 王廷第 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷第（CBDB 325998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325998&o=json)
