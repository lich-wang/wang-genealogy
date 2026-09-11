---
schema: wang-person/v1
id: p_fR2N3ddMBUUG3UGxzAGX1L
status: active
merged_into: null
display_name: 王許之
cbdb_id: 205842
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XzLT5SzG4Wt6BCJeH3Djb1
        subject_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許之（生于1544年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205842 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7VSjF3nP5ARaLeTm0TUpxx
          claim_id: c_XzLT5SzG4Wt6BCJeH3Djb1
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: CBDB:205842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E4zKM9ogFspN587Znn1wuq
            source_type: api_record
            title: 中国历代人物传记资料库：王許之（CBDB 205842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json
            external_identifier: CBDB:205842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KJw2ZkqTNNFi1yxRnJL2Kr
        subject_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1544年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1544-01-01
            latest: 1544-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jk2qECtnJST68unWL7Ep8K
          claim_id: c_KJw2ZkqTNNFi1yxRnJL2Kr
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: CBDB:205842
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1544
          source:
            id: s_E4zKM9ogFspN587Znn1wuq
            source_type: api_record
            title: 中国历代人物传记资料库：王許之（CBDB 205842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json
            external_identifier: CBDB:205842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EA1iyB8i7D5EFhw7a4ueuM
        subject_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2W84vCiKrsCB7nFZgvPUK4
          claim_id: c_EA1iyB8i7D5EFhw7a4ueuM
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: CBDB:205842
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1544
          source:
            id: s_E4zKM9ogFspN587Znn1wuq
            source_type: api_record
            title: 中国历代人物传记资料库：王許之（CBDB 205842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json
            external_identifier: CBDB:205842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ozhH6R_VotmUqa7hgPz7VB
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbslzmyN4clstfMmKM5cbF
          claim_id: c_ozhH6R_VotmUqa7hgPz7VB
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q7ze7pnk6x88hZDm3ZFKt3
        status: active
        display_name: 王湯相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-u8A6vw3mgHW4d4gFxATN9
        subject_person_id: p_HuCPb2BQe3yJw3CN3sLRqE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHD1IxD5H1AGVDQEl8H6ht
          claim_id: c_-u8A6vw3mgHW4d4gFxATN9
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第六十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HuCPb2BQe3yJw3CN3sLRqE
        status: active
        display_name: 王舜韶
        merged_into_person_id: null
    - claim:
        id: c_TkI8vnnsaY69GOxRFUml0J
        subject_person_id: p_zK991JnPgoDLt2L6zBXFf9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1R4Sy7XkFzLmp9iTYbCMPK
          claim_id: c_TkI8vnnsaY69GOxRFUml0J
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第六十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zK991JnPgoDLt2L6zBXFf9
        status: active
        display_name: 王禹都
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王許之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王許之（生于1544年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205842 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1544年 | accepted |
| name.primary | 王許之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q7ze7pnk6x88hZDm3ZFKt3 | 王湯相 | accepted |
| ancestors | p_HuCPb2BQe3yJw3CN3sLRqE | 王舜韶 | accepted |
| ancestors | p_zK991JnPgoDLt2L6zBXFf9 | 王禹都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王許之（CBDB 205842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json)
