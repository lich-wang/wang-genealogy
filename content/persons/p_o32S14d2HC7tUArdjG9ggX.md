---
schema: wang-person/v1
id: p_o32S14d2HC7tUArdjG9ggX
status: active
merged_into: null
display_name: 王朝欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8GcW3JtqYTrm2vo4KCm4o9
        subject_person_id: p_o32S14d2HC7tUArdjG9ggX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1KS9KAvkbfrsJoKCA4VcBi
          claim_id: c_8GcW3JtqYTrm2vo4KCm4o9
          source_id: s_4PJEHMm1hj1xrVDF9S3CFJ
          stance: supports
          locator: CBDB:69385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69385）
          source: &a1
            id: s_4PJEHMm1hj1xrVDF9S3CFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王朝欽（CBDB 69385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69385&o=json
            external_identifier: CBDB:69385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Qw6ymZp6z2LZVV6Mc8XapD
        subject_person_id: p_o32S14d2HC7tUArdjG9ggX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBsEHPv2aC9sjwsPkgoDWK
          claim_id: c_Qw6ymZp6z2LZVV6Mc8XapD
          source_id: s_4PJEHMm1hj1xrVDF9S3CFJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P3KixAoDdgn3JxsWPWVB52
        subject_person_id: p_o32S14d2HC7tUArdjG9ggX
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
        - id: cs_QeA5jq73Xz6v11wFvt1zWn
          claim_id: c_P3KixAoDdgn3JxsWPWVB52
          source_id: s_4PJEHMm1hj1xrVDF9S3CFJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XZhaukh_iQ5ypUbvC-m4ST
        subject_person_id: p_o32S14d2HC7tUArdjG9ggX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_63snvz9zGDD7t6L83B6jts
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8tfhCNf3Y29eOvPMuaZvj
          claim_id: c_XZhaukh_iQ5ypUbvC-m4ST
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
          stance: supports
          locator: "(民國)續修陝西通志稿: 二百二十四卷 卷首一卷，lgid=1018936：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cdo2KwLcBLEECDXBmtt1f3
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 700241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json
            external_identifier: CBDB:700241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_63snvz9zGDD7t6L83B6jts
        status: active
        display_name: 王治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝欽 | accepted |
| death.date | 1694年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_63snvz9zGDD7t6L83B6jts | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝欽（CBDB 69385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69385&o=json)
- [中国历代人物传记资料库：王治（CBDB 700241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json)
