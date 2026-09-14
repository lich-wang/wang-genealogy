---
schema: wang-person/v1
id: p_6NqQVpARahg4TYnj77m3i2
status: active
merged_into: null
display_name: 王貴
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HiQhfDTBrhuxvq8PA28AJU
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hjtRy23BQjKGdJqg4nnXBd
          claim_id: c_HiQhfDTBrhuxvq8PA28AJU
          source_id: s_P9qHF8QvKg5wpAwzXJCTQJ
          stance: supports
          locator: CBDB:251896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251896）
          source: &a1
            id: s_P9qHF8QvKg5wpAwzXJCTQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 251896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251896&o=json
            external_identifier: CBDB:251896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mFAUrFsZp7PCXdx5MK1616
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-3uFTg8ovZvJT9xu3t-jGI
          claim_id: c_mFAUrFsZp7PCXdx5MK1616
          source_id: s_P9qHF8QvKg5wpAwzXJCTQJ
          stance: supports
          locator: CBDB:251896
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cwuk0TeKVDLhGHFvugbF8t
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOZh0hOyvtX-C8kyzoHFv7
          claim_id: c_cwuk0TeKVDLhGHFvugbF8t
          source_id: s_P9qHF8QvKg5wpAwzXJCTQJ
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cnN8Qwq9XduFw216Ep1U5h
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_WA_HhWPRn_3G23FJEdr6Jv
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6G9SoBa4VyqSABa4e5fnX2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NVQGKcemsfLBc4JWVbPat
          claim_id: c_WA_HhWPRn_3G23FJEdr6Jv
          source_id: s_wm-GKpSg6doPP-Fu5yZCwG
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王宇 与 王宏 为同胞（CBDB 记「弟」），王宏 之父／母即 王宇 之父／母。
          source:
            id: s_wm-GKpSg6doPP-Fu5yZCwG
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 251902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json
            external_identifier: CBDB:251902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6G9SoBa4VyqSABa4e5fnX2
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_xP4uecoLxXNfRdVTpeaH3g
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fTZDAyMQHEPwPzdxwLsA6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1k-G3T1D5e1Zx5PmQJ-9c
          claim_id: c_xP4uecoLxXNfRdVTpeaH3g
          source_id: s_GNoVAj_9QZDEBShKMgbyl2
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王寧 之父／母。
          source:
            id: s_GNoVAj_9QZDEBShKMgbyl2
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 251903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json
            external_identifier: CBDB:251903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fTZDAyMQHEPwPzdxwLsA6B
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_xbKdbI7B7c2e915xmbsRAg
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFQcy6DETPKktsh82zzt5x
          claim_id: c_xbKdbI7B7c2e915xmbsRAg
          source_id: s_713wVrtzQKjz3WqoJeN0nu
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王實 之父／母。
          source:
            id: s_713wVrtzQKjz3WqoJeN0nu
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 251904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json
            external_identifier: CBDB:251904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yTQMLPnTPSKXeZ2t1boCym
        status: active
        display_name: 王實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cnN8Qwq9XduFw216Ep1U5h | 王宏 | accepted |
| children | p_6G9SoBa4VyqSABa4e5fnX2 | 王宇 | accepted |
| children | p_fTZDAyMQHEPwPzdxwLsA6B | 王寧 | accepted |
| children | p_yTQMLPnTPSKXeZ2t1boCym | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 251896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251896&o=json)
- [中国历代人物传记资料库：王寧（CBDB 251903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json)
- [中国历代人物传记资料库：王實（CBDB 251904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json)
- [中国历代人物传记资料库：王宇（CBDB 251902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251902&o=json)
