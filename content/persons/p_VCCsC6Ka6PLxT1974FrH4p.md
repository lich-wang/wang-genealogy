---
schema: wang-person/v1
id: p_VCCsC6Ka6PLxT1974FrH4p
status: active
merged_into: null
display_name: 王宏之
cbdb_id: 162538
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Cfsz3LWD588P69cTdwS6N
        subject_person_id: p_VCCsC6Ka6PLxT1974FrH4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏之，唐人物。籍贯貝州。（中国历代人物传记资料库 CBDB 162538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_27ZCetd48yyyBprMiDk88M
          claim_id: c_8Cfsz3LWD588P69cTdwS6N
          source_id: s_mH6vCRohxKJqd15GJdSLsX
          stance: supports
          locator: CBDB:162538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mH6vCRohxKJqd15GJdSLsX
            source_type: api_record
            title: 中国历代人物传记资料库：王宏之（CBDB 162538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162538&o=json
            external_identifier: CBDB:162538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vNzLzs4hPLQMY5bNFD5cj
        subject_person_id: p_VCCsC6Ka6PLxT1974FrH4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xVnVUXRLb49ZgEwx3rNK9E
          claim_id: c_9vNzLzs4hPLQMY5bNFD5cj
          source_id: s_mH6vCRohxKJqd15GJdSLsX
          stance: supports
          locator: CBDB:162538
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7YqZrSdUqw4ZEgNK_0mOTV
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VCCsC6Ka6PLxT1974FrH4p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2PB-YGtMmSVPlZdoSl32Mm
          claim_id: c_7YqZrSdUqw4ZEgNK_0mOTV
          source_id: s_ukzzWZC3hbEtGgUGotV5TV
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng24：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ukzzWZC3hbEtGgUGotV5TV
            source_type: api_record
            title: 中国历代人物传记资料库：王韋（CBDB 142621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json
            external_identifier: CBDB:142621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i47UsMhA15jMqEZ7iDqoa7
        status: active
        display_name: 王韋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_H3x2GqcFs-FQEJLJMyC0VU
        subject_person_id: p_VCCsC6Ka6PLxT1974FrH4p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0f1VEGpwDwmIOT5RsuxBA
          claim_id: c_H3x2GqcFs-FQEJLJMyC0VU
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y7B65XeE2bvCsAck3T9oCY
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 143108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json
            external_identifier: CBDB:143108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7QnGBiPzUFUWD8rSwCwAQh
        status: active
        display_name: 王鈞
        merged_into_person_id: null
  other: []
---

# 王宏之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宏之，唐人物。籍贯貝州。（中国历代人物传记资料库 CBDB 162538） | accepted |
| name.primary | 王宏之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i47UsMhA15jMqEZ7iDqoa7 | 王韋 | accepted |
| descendants | p_7QnGBiPzUFUWD8rSwCwAQh | 王鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏之（CBDB 162538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162538&o=json)
- [中国历代人物传记资料库：王鈞（CBDB 143108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json)
- [中国历代人物传记资料库：王韋（CBDB 142621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142621&o=json)
