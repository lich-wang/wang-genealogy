---
schema: wang-person/v1
id: p_CeoS98zPBNgPhc3XmEZo28
status: active
merged_into: null
display_name: 王夢蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMZi7NxRPWuKBmbwvYKZ4n
        subject_person_id: p_CeoS98zPBNgPhc3XmEZo28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jodrA77v15j5JTCMBf9wrQ
          claim_id: c_bMZi7NxRPWuKBmbwvYKZ4n
          source_id: s_vg2cpzmN5d3vAkFSSkSdjS
          stance: supports
          locator: CBDB:120573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120573）
          source: &a1
            id: s_vg2cpzmN5d3vAkFSSkSdjS
            source_type: api_record
            title: 中国历代人物传记资料库：王夢蘭（CBDB 120573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120573&o=json
            external_identifier: CBDB:120573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6khFw41QoQz5bq3kkLByQh
        subject_person_id: p_CeoS98zPBNgPhc3XmEZo28
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
        - id: cs_Sr1sMdsiC31K5jhic3GPBq
          claim_id: c_6khFw41QoQz5bq3kkLByQh
          source_id: s_vg2cpzmN5d3vAkFSSkSdjS
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
          source:
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
      object_person:
        id: p_NeGtY2c1LP6bsAV77SRRqT
        status: active
        display_name: 趙繼元
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王夢蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NeGtY2c1LP6bsAV77SRRqT | 趙繼元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢蘭（CBDB 120573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120573&o=json)
- [中国历代人物传记资料库：趙繼元（CBDB 84331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=84331&o=json)
