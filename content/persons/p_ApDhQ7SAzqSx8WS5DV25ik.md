---
schema: wang-person/v1
id: p_ApDhQ7SAzqSx8WS5DV25ik
status: active
merged_into: null
display_name: 王德恆
cbdb_id: 230040
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnLWR8McdGvqivifK66pfP
        subject_person_id: p_ApDhQ7SAzqSx8WS5DV25ik
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王德恆，明人物。萬曆丙戌科進士進士，籍贯安州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230040）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_X_Ch--R276i5icn2q-86gM
          claim_id: c_GnLWR8McdGvqivifK66pfP
          source_id: s_hzW7EEaVePLVrmXk52PNFe
          stance: supports
          locator: CBDB:230040
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hzW7EEaVePLVrmXk52PNFe
            source_type: api_record
            title: 中国历代人物传记资料库：王德恆（CBDB 230040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230040&o=json
            external_identifier: CBDB:230040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ESXLPVTa4pAeNss3vEPm6
        subject_person_id: p_ApDhQ7SAzqSx8WS5DV25ik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JM6CYUsCiHPSqr1Z9PBPoe
          claim_id: c_8ESXLPVTa4pAeNss3vEPm6
          source_id: s_hzW7EEaVePLVrmXk52PNFe
          stance: supports
          locator: CBDB:230040
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NcW-RWyAluuOxykLlV3jrL
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ApDhQ7SAzqSx8WS5DV25ik
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OMHi9B9i9ZSDUt-l8mNPR-
          claim_id: c_NcW-RWyAluuOxykLlV3jrL
          source_id: s_GmQ_BIKQptkAfnfxIZi-mN
          stance: supports
          locator: CBDB：兄弟 王德完（126817）之父／母 王梁
          quotation: null
          interpretation_note: 由兄弟关系推断：王德恆 与 王德完 为同胞（CBDB 记「弟」），王德完 之父／母即 王德恆 之父／母。
          source:
            id: s_GmQ_BIKQptkAfnfxIZi-mN
            source_type: api_record
            title: 中国历代人物传记资料库：王德恆（CBDB 230040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230040&o=json
            external_identifier: CBDB:230040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2njDB7hmvoYHNUkzktGMvR
        status: active
        display_name: 王梁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HiXXhFLD9hEOJoWVDxPtQJ
        subject_person_id: p_ApDhQ7SAzqSx8WS5DV25ik
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_E9W2DShq5Qkj6ZiKVB1xLN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pq47GNRKGRG4K1jqUZ5tid
          claim_id: c_HiXXhFLD9hEOJoWVDxPtQJ
          source_id: s_GmQ_BIKQptkAfnfxIZi-mN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126817 王德完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GmQ_BIKQptkAfnfxIZi-mN
            source_type: api_record
            title: 中国历代人物传记资料库：王德恆（CBDB 230040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230040&o=json
            external_identifier: CBDB:230040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E9W2DShq5Qkj6ZiKVB1xLN
        status: active
        display_name: 王德完
        merged_into_person_id: null
---

# 王德恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德恆，明人物。萬曆丙戌科進士進士，籍贯安州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 230040） | accepted |
| name.primary | 王德恆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2njDB7hmvoYHNUkzktGMvR | 王梁 | accepted |
| other | p_E9W2DShq5Qkj6ZiKVB1xLN | 王德完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德恆（CBDB 230040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230040&o=json)
