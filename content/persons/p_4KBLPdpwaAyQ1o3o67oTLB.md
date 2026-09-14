---
schema: wang-person/v1
id: p_4KBLPdpwaAyQ1o3o67oTLB
status: active
merged_into: null
display_name: 王永
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rL1Dgam7gZ5vSFNpJYoAix
        subject_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T9NYRehLXesMu6Ufk1Rz4n
          claim_id: c_rL1Dgam7gZ5vSFNpJYoAix
          source_id: s_2PgQGF9yCocf7eYXANp64J
          stance: supports
          locator: CBDB:317130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317130）
          source: &a1
            id: s_2PgQGF9yCocf7eYXANp64J
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 317130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json
            external_identifier: CBDB:317130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_24ceHwYmztumQ2cFvgBhy9
        subject_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WrC_R_g1jtmlIXHLOCoPB1
          claim_id: c_24ceHwYmztumQ2cFvgBhy9
          source_id: s_2PgQGF9yCocf7eYXANp64J
          stance: supports
          locator: CBDB:317130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ecwXCmVh7fsoNCFz8Ybi8V
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AnC4Nj18VqEB91Nx4tnHdP
          claim_id: c_ecwXCmVh7fsoNCFz8Ybi8V
          source_id: s_UooVwaK_T-6eSUvrsI26yI
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王永 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王永 之父／母。
          source:
            id: s_UooVwaK_T-6eSUvrsI26yI
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 317130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json
            external_identifier: CBDB:317130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vv43N2CuZqbv1NMT55dzSf
        status: active
        display_name: 王琴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fFSWKFgt4TevEQuMCvxPId
        subject_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2RGkERccC9z5ymDwNQJ7r
          claim_id: c_fFSWKFgt4TevEQuMCvxPId
          source_id: s_UooVwaK_T-6eSUvrsI26yI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198790 王應奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UooVwaK_T-6eSUvrsI26yI
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 317130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json
            external_identifier: CBDB:317130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | 王永，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vv43N2CuZqbv1NMT55dzSf | 王琴 | accepted |
| other | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 317130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json)
