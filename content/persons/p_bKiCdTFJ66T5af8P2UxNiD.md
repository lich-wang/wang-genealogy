---
schema: wang-person/v1
id: p_bKiCdTFJ66T5af8P2UxNiD
status: active
merged_into: null
display_name: 王廷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gt82tuw1mxEsD4VxgFhi8
        subject_person_id: p_bKiCdTFJ66T5af8P2UxNiD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ixMUzc6xzGP3Dcu93xzQ3N
          claim_id: c_9gt82tuw1mxEsD4VxgFhi8
          source_id: s_DoAoTFWMaG8Gq4Boc9PiY4
          stance: supports
          locator: CBDB:294867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294867）
          source: &a1
            id: s_DoAoTFWMaG8Gq4Boc9PiY4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 294867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294867&o=json
            external_identifier: CBDB:294867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ao8Sz58jDcXD9yRxYchAcN
        subject_person_id: p_bKiCdTFJ66T5af8P2UxNiD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V4rqRqYXnuRhhY0bMok0nY
          claim_id: c_Ao8Sz58jDcXD9yRxYchAcN
          source_id: s_DoAoTFWMaG8Gq4Boc9PiY4
          stance: supports
          locator: CBDB:294867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_baFfIetZNzz7YEcuSVGJYB
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bKiCdTFJ66T5af8P2UxNiD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCApAdyRaBcRfkHmulvA2z
          claim_id: c_baFfIetZNzz7YEcuSVGJYB
          source_id: s_R6LPio7mOyjLE7wo9OQ_Fw
          stance: supports
          locator: CBDB：兄弟 王龙溪（126814）之父／母 王经
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷 与 王龙溪 为同胞（CBDB 记「弟」），王龙溪 之父／母即 王廷 之父／母。
          source:
            id: s_R6LPio7mOyjLE7wo9OQ_Fw
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 294867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294867&o=json
            external_identifier: CBDB:294867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1Ybf_tvTUWa_LfIGmVx0ew
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bKiCdTFJ66T5af8P2UxNiD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BLKvIKrGwv2_x5KKYcCEKe
          claim_id: c_1Ybf_tvTUWa_LfIGmVx0ew
          source_id: s_R6LPio7mOyjLE7wo9OQ_Fw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126814 王畿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R6LPio7mOyjLE7wo9OQ_Fw
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 294867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294867&o=json
            external_identifier: CBDB:294867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | 王廷，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |
| other | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 294867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294867&o=json)
