---
schema: wang-person/v1
id: p_NUN9V2WpcJELAKS3hvUbxx
status: active
merged_into: null
display_name: 王瑞
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaoPqtT1sP8kdDZDeXgdjo
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vP5C2LwVPGC94P9rWZ8K6v
          claim_id: c_uaoPqtT1sP8kdDZDeXgdjo
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: CBDB:279876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279876）
          source: &a1
            id: s_zjyME1KpDFD2t6hpRmnWEe
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 279876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json
            external_identifier: CBDB:279876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mz9zkE8ePsFv8Y4xMsQzSD
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H4MJXN4dys4iVQUA9axjkq
          claim_id: c_mz9zkE8ePsFv8Y4xMsQzSD
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: CBDB:279876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_k72CkhfDxJJb829bsFCcgj
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h5QYsIG5JTPSRKby-x7cOb
          claim_id: c_k72CkhfDxJJb829bsFCcgj
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_p6ALYhWgcAsGOeMsEQNNuJ
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7QkkxYZtCELYZvWaF4VnzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7czPFBqJEdxwa2SNxVBgOR
          claim_id: c_p6ALYhWgcAsGOeMsEQNNuJ
          source_id: s_Qql9mVd-jN06EQJWb8ir3b
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三槐 之父／母。
          source:
            id: s_Qql9mVd-jN06EQJWb8ir3b
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 279880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json
            external_identifier: CBDB:279880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7QkkxYZtCELYZvWaF4VnzC
        status: active
        display_name: 王三槐
        merged_into_person_id: null
    - claim:
        id: c_zJh19SvsE2OSqq2T7E66jy
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V3NoaPW32WtKxJVEudvZx7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j4HjxdgXuBOaUXXNRCPOtU
          claim_id: c_zJh19SvsE2OSqq2T7E66jy
          source_id: s_4vthFCCmL5HQqfMM_W4DQD
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三鑑 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三鑑 之父／母。
          source:
            id: s_4vthFCCmL5HQqfMM_W4DQD
            source_type: api_record
            title: 中国历代人物传记资料库：王三鑑（CBDB 279881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json
            external_identifier: CBDB:279881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V3NoaPW32WtKxJVEudvZx7
        status: active
        display_name: 王三鑑
        merged_into_person_id: null
    - claim:
        id: c_TprHw1x9ZBwTxZdwSYnJXZ
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wk3sC5J4yRt2WoJturnPL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9bIB2ocUtPQlv3Aqgiu55
          claim_id: c_TprHw1x9ZBwTxZdwSYnJXZ
          source_id: s_TZHJzTDgkY8cLyEha9YSme
          stance: supports
          locator: CBDB：兄弟 王三錫（126453）之父／母 王瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王三俊 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三俊 之父／母。
          source:
            id: s_TZHJzTDgkY8cLyEha9YSme
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 279882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json
            external_identifier: CBDB:279882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wk3sC5J4yRt2WoJturnPL7
        status: active
        display_name: 王三俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，明人物。正德十二年進士，籍贯曹州。（中国历代人物传记资料库 CBDB 279876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |
| children | p_7QkkxYZtCELYZvWaF4VnzC | 王三槐 | accepted |
| children | p_V3NoaPW32WtKxJVEudvZx7 | 王三鑑 | accepted |
| children | p_Wk3sC5J4yRt2WoJturnPL7 | 王三俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 279876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 279880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279880&o=json)
- [中国历代人物传记资料库：王三鑑（CBDB 279881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279881&o=json)
- [中国历代人物传记资料库：王三俊（CBDB 279882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279882&o=json)
