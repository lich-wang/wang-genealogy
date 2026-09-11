---
schema: wang-person/v1
id: p_87vQWSqin1Cc8rN4TeH3X4
status: active
merged_into: null
display_name: 王完
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARLVLd5nM7vfByScm9jT7H
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAK49pgzdfeZtjNbikMYTG
          claim_id: c_ARLVLd5nM7vfByScm9jT7H
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: CBDB:201827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201827）
          source: &a1
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4fxWonC2FxdiKnjPDfxvu2
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTFuuMJ7ACm8SCqwFoa6iq
          claim_id: c_4fxWonC2FxdiKnjPDfxvu2
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BMeg4uZuBKjRxPCcL4zCf6
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nDGKATpwLJp5A2hxi7UJEa
          claim_id: c_BMeg4uZuBKjRxPCcL4zCf6
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
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
        id: c_VxlN4EbBh1B7TFsyTSeiPY
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_blwvgHJqux9_g7PWDbgZC6
          claim_id: c_VxlN4EbBh1B7TFsyTSeiPY
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nnGFsaS43J8ISJyxhiyrNd
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_khwGosbhuLr4aZrn4JXQRR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NmFyCZtRBprYRn-fTDBqT
          claim_id: c_nnGFsaS43J8ISJyxhiyrNd
          source_id: s_O6qi3AWGgzOvA0pAdIZPJT
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_O6qi3AWGgzOvA0pAdIZPJT
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王完妻)（CBDB 278856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278856&o=json
            external_identifier: CBDB:278856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_khwGosbhuLr4aZrn4JXQRR
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_uBx2Wu0-1O-3B2J8wh_KFo
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGixk2kvPs8FMeL2DSvS4R
          claim_id: c_uBx2Wu0-1O-3B2J8wh_KFo
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yj6fkEfBpBQSnB7FiNBbFN
        status: active
        display_name: 王文某
        merged_into_person_id: null
    - claim:
        id: c_AZ6iPN2MBI_RbB2Bqi56_X
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WRxjQliNpV9W5WPMoKo-FB
          claim_id: c_AZ6iPN2MBI_RbB2Bqi56_X
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2EDQ55UQpfwb7UC1C3XQAT
        status: active
        display_name: 王郁文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| birth.date | 1481年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| spouses | p_khwGosbhuLr4aZrn4JXQRR | 何氏 | accepted |
| ancestors | p_yj6fkEfBpBQSnB7FiNBbFN | 王文某 | accepted |
| ancestors | p_2EDQ55UQpfwb7UC1C3XQAT | 王郁文 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王完妻)（CBDB 278856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278856&o=json)
- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
