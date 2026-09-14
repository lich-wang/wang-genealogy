---
schema: wang-person/v1
id: p_Q7ze7pnk6x88hZDm3ZFKt3
status: active
merged_into: null
display_name: 王湯相
cbdb_id: 209579
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a8Y1KQ575X989utokoJm11
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯相，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EMNfa1xq13uDg_BkcOJFcg
          claim_id: c_a8Y1KQ575X989utokoJm11
          source_id: s_kWHZTcEPo3kFgqDpTjTRVR
          stance: supports
          locator: CBDB:209579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kWHZTcEPo3kFgqDpTjTRVR
            source_type: api_record
            title: 中国历代人物传记资料库：王湯相（CBDB 209579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209579&o=json
            external_identifier: CBDB:209579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GApwPU9uQbL1kKiKFpFfWA
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湯相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BwYwX6S2xSZYVpyWVtxZEp
          claim_id: c_GApwPU9uQbL1kKiKFpFfWA
          source_id: s_kWHZTcEPo3kFgqDpTjTRVR
          stance: supports
          locator: CBDB:209579
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
      object_person:
        id: p_fR2N3ddMBUUG3UGxzAGX1L
        status: active
        display_name: 王許之
        merged_into_person_id: null
    - claim:
        id: c_hM-BJrxLzTV-4XoEdjzeOq
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2KPfZCAa8pBPWBV5eZSsQE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0ATesC2gHovsYfDhVFZFm
          claim_id: c_hM-BJrxLzTV-4XoEdjzeOq
          source_id: s_hzwLe44Mj6MS8nrwlHTYUB
          stance: supports
          locator: CBDB：兄弟 王許之（205842）之父／母 王湯相
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥之 与 王許之 为同胞（CBDB 记「兄」），王許之 之父／母即 王誥之 之父／母。
          source:
            id: s_hzwLe44Mj6MS8nrwlHTYUB
            source_type: api_record
            title: 中国历代人物传记资料库：王誥之（CBDB 209586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209586&o=json
            external_identifier: CBDB:209586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2KPfZCAa8pBPWBV5eZSsQE
        status: active
        display_name: 王誥之
        merged_into_person_id: null
    - claim:
        id: c_IuUUNmDmaIJg_teWYRiS4T
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5HQu23jcME6zt69ukr6bAw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvxGJCr-yQEAF25gfz8Y7Y
          claim_id: c_IuUUNmDmaIJg_teWYRiS4T
          source_id: s_P9g4SE9kQ58Ys_DEbQRSiP
          stance: supports
          locator: CBDB：兄弟 王許之（205842）之父／母 王湯相
          quotation: null
          interpretation_note: 由兄弟关系推断：王訟之 与 王許之 为同胞（CBDB 记「兄」），王許之 之父／母即 王訟之 之父／母。
          source:
            id: s_P9g4SE9kQ58Ys_DEbQRSiP
            source_type: api_record
            title: 中国历代人物传记资料库：王訟之（CBDB 209585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json
            external_identifier: CBDB:209585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5HQu23jcME6zt69ukr6bAw
        status: active
        display_name: 王訟之
        merged_into_person_id: null
    - claim:
        id: c_QMz9xpM7oXlG2LJLy5HVia
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CdZEKFenMpNvj8Nz9W1F16
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjN9pGmK9-143H_pAG0pV2
          claim_id: c_QMz9xpM7oXlG2LJLy5HVia
          source_id: s_dCUwnNyscxsuD9XJc39Qgt
          stance: supports
          locator: CBDB：兄弟 王許之（205842）之父／母 王湯相
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓之 与 王許之 为同胞（CBDB 记「兄」），王許之 之父／母即 王訓之 之父／母。
          source:
            id: s_dCUwnNyscxsuD9XJc39Qgt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓之（CBDB 209584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json
            external_identifier: CBDB:209584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CdZEKFenMpNvj8Nz9W1F16
        status: active
        display_name: 王訓之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湯相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湯相，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209579） | accepted |
| name.primary | 王湯相 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fR2N3ddMBUUG3UGxzAGX1L | 王許之 | accepted |
| children | p_2KPfZCAa8pBPWBV5eZSsQE | 王誥之 | accepted |
| children | p_5HQu23jcME6zt69ukr6bAw | 王訟之 | accepted |
| children | p_CdZEKFenMpNvj8Nz9W1F16 | 王訓之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥之（CBDB 209586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209586&o=json)
- [中国历代人物传记资料库：王訟之（CBDB 209585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json)
- [中国历代人物传记资料库：王湯相（CBDB 209579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209579&o=json)
- [中国历代人物传记资料库：王許之（CBDB 205842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json)
- [中国历代人物传记资料库：王訓之（CBDB 209584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209584&o=json)
