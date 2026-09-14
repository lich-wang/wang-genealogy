---
schema: wang-person/v1
id: p_2Rw5jj5s9QHTFioRpUjkzn
status: active
merged_into: null
display_name: 王象泰
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zferwFx4QmpTCZspTHHnJG
        subject_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iGXvn3bPJQG1R1D2cWRErH
          claim_id: c_zferwFx4QmpTCZspTHHnJG
          source_id: s_rKsCajVcj652jc9kZBtdZe
          stance: supports
          locator: CBDB:220268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220268）
          source: &a1
            id: s_rKsCajVcj652jc9kZBtdZe
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DSqQgfG6FonDPUvZHz16nG
        subject_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象泰，明人物。萬曆八年進士，籍贯新城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 220268）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W3_RqZkGovxa5u6Y1g3q13
          claim_id: c_DSqQgfG6FonDPUvZHz16nG
          source_id: s_rKsCajVcj652jc9kZBtdZe
          stance: supports
          locator: CBDB:220268
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W6gFXwp8k1btQTaWPtD7oA
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WftnxIkW4BbFv_w4kE8tvi
          claim_id: c_W6gFXwp8k1btQTaWPtD7oA
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象泰 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象泰 之父／母。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
    - claim:
        id: c_zkZHaKPIx69VhbqHD7BiZw
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvxNFEjZlXSccreN3KBdGV
          claim_id: c_zkZHaKPIx69VhbqHD7BiZw
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象泰 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象泰 之父／母。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3P-UyuPQLgdPwdZcF7gjg-
        subject_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYp-mRtvTCKUMh9NJWFt9T
          claim_id: c_3P-UyuPQLgdPwdZcF7gjg-
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
    - claim:
        id: c_pjlDCsBDe--ADXSrAsx-ij
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JPa3CyriuGbCaNAjDsEvtT
          claim_id: c_pjlDCsBDe--ADXSrAsx-ij
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象泰 | accepted |
| bio.summary | 王象泰，明人物。萬曆八年進士，籍贯新城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 220268） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象泰（CBDB 220268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json)
