---
schema: wang-person/v1
id: p_DoLeBbmsD7oxzdtpw4u7J8
status: active
merged_into: null
display_name: 王纁
cbdb_id: 258717
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i6neX2BDVEVFM8ZZs8Q7Yv
        subject_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纁，明人物。成化二十三年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 258717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_h5kEmwXvjJUlFX1Ro4xfLl
          claim_id: c_i6neX2BDVEVFM8ZZs8Q7Yv
          source_id: s_a8sk9DAAYu7vjbfJZs41of
          stance: supports
          locator: CBDB:258717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a8sk9DAAYu7vjbfJZs41of
            source_type: api_record
            title: 中国历代人物传记资料库：王纁（CBDB 258717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json
            external_identifier: CBDB:258717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KRJDxuPEZ1F9u93z3BGMLF
        subject_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rbconaMAf1Rjt4MJAj3CC7
          claim_id: c_KRJDxuPEZ1F9u93z3BGMLF
          source_id: s_a8sk9DAAYu7vjbfJZs41of
          stance: supports
          locator: CBDB:258717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cvTqbitRvjXIUnJ7CUShem
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZCf31feEsDtoKDbRT065BQ
          claim_id: c_cvTqbitRvjXIUnJ7CUShem
          source_id: s_zk0Dkm-fhSVSrEva58TvSu
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王纁 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王纁 之父／母。
          source:
            id: s_zk0Dkm-fhSVSrEva58TvSu
            source_type: api_record
            title: 中国历代人物传记资料库：王纁（CBDB 258717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json
            external_identifier: CBDB:258717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A34R6HSqpELVRnhSkVhaV5
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IXgi8OXmZHMyybklOztz0w
        subject_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7Aimds7hZQpa6_7o7FfNu
          claim_id: c_IXgi8OXmZHMyybklOztz0w
          source_id: s_zk0Dkm-fhSVSrEva58TvSu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zk0Dkm-fhSVSrEva58TvSu
            source_type: api_record
            title: 中国历代人物传记资料库：王纁（CBDB 258717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json
            external_identifier: CBDB:258717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RtbMaDgB4aPoZ2sWestmc6
        status: active
        display_name: 王緯
        merged_into_person_id: null
---

# 王纁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纁，明人物。成化二十三年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 258717） | accepted |
| name.primary | 王纁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A34R6HSqpELVRnhSkVhaV5 | 王豫 | accepted |
| other | p_RtbMaDgB4aPoZ2sWestmc6 | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纁（CBDB 258717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json)
