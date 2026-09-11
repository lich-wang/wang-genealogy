---
schema: wang-person/v1
id: p_NeGtY2c1LP6bsAV77SRRqT
status: active
merged_into: null
display_name: 趙繼元
revision: 1
cbdb_id: 84331
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xAWcwQ4vJbDSmNEDwFLcik
        subject_person_id: p_NeGtY2c1LP6bsAV77SRRqT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙繼元
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6TnFH0E9S6FQy2yR00AL7K
          claim_id: c_xAWcwQ4vJbDSmNEDwFLcik
          source_id: s_WQCB8z03HJH0DPPPPyBwzt
          stance: supports
          locator: CBDB:84331
          quotation: null
          interpretation_note: CBDB 明确记录的王夢蘭配偶
          source: &a1
            id: s_WQCB8z03HJH0DPPPPyBwzt
            source_type: api_record
            title: 中国历代人物传记资料库：趙繼元（CBDB 84331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=84331&o=json
            external_identifier: CBDB:84331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PFgMGbqqyhq3vkrg25QIsj
        subject_person_id: p_CeoS98zPBNgPhc3XmEZo28
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NeGtY2c1LP6bsAV77SRRqT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LiF_OoEmlYReasGqhqSBSs
          claim_id: c_PFgMGbqqyhq3vkrg25QIsj
          source_id: s_WQCB8z03HJH0DPPPPyBwzt
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3742, HuWenKai #251：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CeoS98zPBNgPhc3XmEZo28
        status: active
        display_name: 王夢蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙繼元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙繼元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CeoS98zPBNgPhc3XmEZo28 | 王夢蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙繼元（CBDB 84331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=84331&o=json)
