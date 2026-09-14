---
schema: wang-person/v1
id: p_ogs8LYM1HCL9aWfwQunUhX
status: active
merged_into: null
display_name: 王惟玄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E9WQ8HNMuKsUkRnVuexG6F
        subject_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TKXSZ1orCL1fxntpTd1c2K
          claim_id: c_E9WQ8HNMuKsUkRnVuexG6F
          source_id: s_1XfsfjkBL7eA5RPuu1xoAF
          stance: supports
          locator: CBDB:336618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336618）
          source: &a1
            id: s_1XfsfjkBL7eA5RPuu1xoAF
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 336618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json
            external_identifier: CBDB:336618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJNdrf3dvhDXpmXAK9wYy3
        subject_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟玄，明人物。隆慶二年進士，籍贯文安。（中国历代人物传记资料库 CBDB 336618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a4d25K3L7TvBFuYEDH1UBL
          claim_id: c_sJNdrf3dvhDXpmXAK9wYy3
          source_id: s_1XfsfjkBL7eA5RPuu1xoAF
          stance: supports
          locator: CBDB:336618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__wECjalo96jHLVAyErmuQw
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTTg_H8mgUrdyHjpc9kqKI
          claim_id: c__wECjalo96jHLVAyErmuQw
          source_id: s_4-2PMUimYUNFBsC0m1snfW
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟玄 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟玄 之父／母。
          source:
            id: s_4-2PMUimYUNFBsC0m1snfW
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 336618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json
            external_identifier: CBDB:336618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ftDTX1CGK9535aJ5ssi8pm
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_X_aOCixIyJfjRHSwgf_SrT
        subject_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ogs8LYM1HCL9aWfwQunUhX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fJd9I960CbcJSZ56LV9vTA
          claim_id: c_X_aOCixIyJfjRHSwgf_SrT
          source_id: s_4-2PMUimYUNFBsC0m1snfW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4-2PMUimYUNFBsC0m1snfW
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 336618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json
            external_identifier: CBDB:336618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUCuDeuG8a7t95vC5CL3P3
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
---

# 王惟玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟玄 | accepted |
| bio.summary | 王惟玄，明人物。隆慶二年進士，籍贯文安。（中国历代人物传记资料库 CBDB 336618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftDTX1CGK9535aJ5ssi8pm | 王佩 | accepted |
| other | p_kUCuDeuG8a7t95vC5CL3P3 | 王惟幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟玄（CBDB 336618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336618&o=json)
