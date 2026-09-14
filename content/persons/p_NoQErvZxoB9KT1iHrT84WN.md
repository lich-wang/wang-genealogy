---
schema: wang-person/v1
id: p_NoQErvZxoB9KT1iHrT84WN
status: active
merged_into: null
display_name: 王紹
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8XG1vEVopTdvZQ9z7e7L3
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KwCutpARiZQm1euBoBKoq
          claim_id: c_n8XG1vEVopTdvZQ9z7e7L3
          source_id: s_gQx6RLAB7kCeVWVmM7d5GD
          stance: supports
          locator: CBDB:265617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265617）
          source: &a1
            id: s_gQx6RLAB7kCeVWVmM7d5GD
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 265617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265617&o=json
            external_identifier: CBDB:265617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCuqudsxNuGGqS5oHKJt2M
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。弘治六年進士，籍贯咸寧，曾任義官。（中国历代人物传记资料库 CBDB 265617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pwTkByoTvACog0-ZqWBFhH
          claim_id: c_nCuqudsxNuGGqS5oHKJt2M
          source_id: s_gQx6RLAB7kCeVWVmM7d5GD
          stance: supports
          locator: CBDB:265617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rj8d41foGGtKJkieDZVZxf
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_akpqJMSSGZNHLkzngCE1Qi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IrlVeAgRoD8BybLfkr9_nx
          claim_id: c_rj8d41foGGtKJkieDZVZxf
          source_id: s_gQx6RLAB7kCeVWVmM7d5GD
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_akpqJMSSGZNHLkzngCE1Qi
        status: active
        display_name: 王子成
        merged_into_person_id: null
    - claim:
        id: c_mVTWp6D2Ulhw6d97YYuG17
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KLvjbcsGwps3j-WGna1HAc
          claim_id: c_mVTWp6D2Ulhw6d97YYuG17
          source_id: s_HFYjsT_SVCvVS4ySQKZTEY
          stance: supports
          locator: CBDB：兄弟 王子成（200985）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王子卿 与 王子成 为同胞（CBDB 记「兄」），王子成 之父／母即 王子卿 之父／母。
          source:
            id: s_HFYjsT_SVCvVS4ySQKZTEY
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 265622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json
            external_identifier: CBDB:265622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        status: active
        display_name: 王子卿
        merged_into_person_id: null
    - claim:
        id: c_9cVIoeVZPnkNXZK0gCeMwa
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ggQxCcadxtcfySmVwm5bRK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRbgQsqrX_6BgTO-3jA2az
          claim_id: c_9cVIoeVZPnkNXZK0gCeMwa
          source_id: s_vNmAFz76L6htHNUQ7Bsmzy
          stance: supports
          locator: CBDB：兄弟 王子成（200985）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王子俊 与 王子成 为同胞（CBDB 记「兄」），王子成 之父／母即 王子俊 之父／母。
          source:
            id: s_vNmAFz76L6htHNUQ7Bsmzy
            source_type: api_record
            title: 中国历代人物传记资料库：王子俊（CBDB 265620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265620&o=json
            external_identifier: CBDB:265620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ggQxCcadxtcfySmVwm5bRK
        status: active
        display_name: 王子俊
        merged_into_person_id: null
    - claim:
        id: c_FCx2QzuzrxiduttwdO1dAk
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ifLLBKzA4dDTF7QaxtVFF9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APD9xOg7YvKpH22G18vXlB
          claim_id: c_FCx2QzuzrxiduttwdO1dAk
          source_id: s_eO7-5HXyQHGaOvOcJtzefi
          stance: supports
          locator: CBDB：兄弟 王子成（200985）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王子英 与 王子成 为同胞（CBDB 记「兄」），王子成 之父／母即 王子英 之父／母。
          source:
            id: s_eO7-5HXyQHGaOvOcJtzefi
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 265621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json
            external_identifier: CBDB:265621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ifLLBKzA4dDTF7QaxtVFF9
        status: active
        display_name: 王子英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。弘治六年進士，籍贯咸寧，曾任義官。（中国历代人物传记资料库 CBDB 265617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_akpqJMSSGZNHLkzngCE1Qi | 王子成 | accepted |
| children | p_GBf4b1HmrRRj3Ux38Gx5Hv | 王子卿 | accepted |
| children | p_ggQxCcadxtcfySmVwm5bRK | 王子俊 | accepted |
| children | p_ifLLBKzA4dDTF7QaxtVFF9 | 王子英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 265617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265617&o=json)
- [中国历代人物传记资料库：王子俊（CBDB 265620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265620&o=json)
- [中国历代人物传记资料库：王子卿（CBDB 265622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json)
- [中国历代人物传记资料库：王子英（CBDB 265621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json)
