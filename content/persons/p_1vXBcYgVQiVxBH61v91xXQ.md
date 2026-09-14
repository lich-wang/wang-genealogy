---
schema: wang-person/v1
id: p_1vXBcYgVQiVxBH61v91xXQ
status: active
merged_into: null
display_name: 王廉
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDhR4jaL69wNS1TE9Uxuf4
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VsxWwWWuq6QVEJwgAgNSnP
          claim_id: c_tDhR4jaL69wNS1TE9Uxuf4
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: CBDB:304722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304722）
          source: &a1
            id: s_LCWsS3btiTdj2aM5MXxBoq
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 304722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json
            external_identifier: CBDB:304722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VUrYn95jZZvSy1buk62C5B
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6wH640McsDcenJAvV8En4O
          claim_id: c_VUrYn95jZZvSy1buk62C5B
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: CBDB:304722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_N4f5w6qE-csJzv_mqoMhbv
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LI2grqW6rhQH6tKv1bdAjA
          claim_id: c_N4f5w6qE-csJzv_mqoMhbv
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z6vCWYnkMUoH1H52LSJS5y
        status: active
        display_name: 王俸
        merged_into_person_id: null
    - claim:
        id: c_90NeG8LyG2ByTX8vz95xXu
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_37YctnLjYvAXFedpxMFvr1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpIVwPYjNGf-n5BJqiXNNb
          claim_id: c_90NeG8LyG2ByTX8vz95xXu
          source_id: s_B4InzFC6CVZ5DT3HRTbpw3
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王俸 为同胞（CBDB 记「弟」），王俸 之父／母即 王儒 之父／母。
          source:
            id: s_B4InzFC6CVZ5DT3HRTbpw3
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 304727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json
            external_identifier: CBDB:304727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_37YctnLjYvAXFedpxMFvr1
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_lPEzO-4x-79hmXAUCIut2w
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CYSbLcrhUroKmDmuaFhCJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQ2m_8f4__CZv8utpTg1I8
          claim_id: c_lPEzO-4x-79hmXAUCIut2w
          source_id: s_2ZgfdYsGlfTYoXo6xff5Vl
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王佶 之父／母。
          source:
            id: s_2ZgfdYsGlfTYoXo6xff5Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 304729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304729&o=json
            external_identifier: CBDB:304729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CYSbLcrhUroKmDmuaFhCJ
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_0nRe3RZYsRFxLfJ1S6zr4i
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVv5P34pBnFHcgHT_0dNmb
          claim_id: c_0nRe3RZYsRFxLfJ1S6zr4i
          source_id: s_jxFV9atsVLJ6yzI3y4PcjL
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王仲 之父／母。
          source:
            id: s_jxFV9atsVLJ6yzI3y4PcjL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 304733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json
            external_identifier: CBDB:304733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bzj2a8hKNQx4JMEGjEBMNh
        status: active
        display_name: 王仲
        merged_into_person_id: null
    - claim:
        id: c_WW8adUK9_297jSwCP02A91
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZojHxxgU8v_7VYMjzMrrNe
          claim_id: c_WW8adUK9_297jSwCP02A91
          source_id: s_EQQ4gfoJ12jxJUemjraw67
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王化 之父／母。
          source:
            id: s_EQQ4gfoJ12jxJUemjraw67
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 304728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json
            external_identifier: CBDB:304728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Krk9KgADV1VDvSxNzrf8pY
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_r4zkQR8MU2UcrY2dzQx0n0
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V15WZryB1Do7iJ8HXNmG4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_irNYmKohfIvniuleji0rh1
          claim_id: c_r4zkQR8MU2UcrY2dzQx0n0
          source_id: s_-wcQ-jwjOs2mLk3aSmwckz
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王俊 之父／母。
          source:
            id: s_-wcQ-jwjOs2mLk3aSmwckz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 304732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304732&o=json
            external_identifier: CBDB:304732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V15WZryB1Do7iJ8HXNmG4K
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_6Mn6-CjXpKNv9q0Mm0asZA
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XriFRwbMuazo6ZKheezBNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SEBO1fAspqqCiHLn7qCRW
          claim_id: c_6Mn6-CjXpKNv9q0Mm0asZA
          source_id: s_gITyUh5CrZIeMRfMAndVM4
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王佃 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王佃 之父／母。
          source:
            id: s_gITyUh5CrZIeMRfMAndVM4
            source_type: api_record
            title: 中国历代人物传记资料库：王佃（CBDB 304730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304730&o=json
            external_identifier: CBDB:304730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XriFRwbMuazo6ZKheezBNi
        status: active
        display_name: 王佃
        merged_into_person_id: null
    - claim:
        id: c_FlEGsUZepX_ZDuJW2tCwjo
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atUCs7ZH7FNCtL52HJnWN8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qbo6OFaPsyvWZXx8zZUbY5
          claim_id: c_FlEGsUZepX_ZDuJW2tCwjo
          source_id: s_Nqn1LtIQvft_ZyP_q9awsR
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王儀 之父／母。
          source:
            id: s_Nqn1LtIQvft_ZyP_q9awsR
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 304731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304731&o=json
            external_identifier: CBDB:304731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_atUCs7ZH7FNCtL52HJnWN8
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_uoiR224xhCsqwRfHHX_Af3
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h2qiA12QTpUJHWVpf23KM6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QSyD0wLnCJBWQ0TD3o9aG8
          claim_id: c_uoiR224xhCsqwRfHHX_Af3
          source_id: s_6Wbf463YvADn6GdG4Xpaof
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王佩 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王佩 之父／母。
          source:
            id: s_6Wbf463YvADn6GdG4Xpaof
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 304734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304734&o=json
            external_identifier: CBDB:304734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h2qiA12QTpUJHWVpf23KM6
        status: active
        display_name: 王佩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | 王廉，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z6vCWYnkMUoH1H52LSJS5y | 王俸 | accepted |
| children | p_37YctnLjYvAXFedpxMFvr1 | 王儒 | accepted |
| children | p_5CYSbLcrhUroKmDmuaFhCJ | 王佶 | accepted |
| children | p_Bzj2a8hKNQx4JMEGjEBMNh | 王仲 | accepted |
| children | p_Krk9KgADV1VDvSxNzrf8pY | 王化 | accepted |
| children | p_V15WZryB1Do7iJ8HXNmG4K | 王俊 | accepted |
| children | p_XriFRwbMuazo6ZKheezBNi | 王佃 | accepted |
| children | p_atUCs7ZH7FNCtL52HJnWN8 | 王儀 | accepted |
| children | p_h2qiA12QTpUJHWVpf23KM6 | 王佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佃（CBDB 304730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304730&o=json)
- [中国历代人物传记资料库：王化（CBDB 304728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json)
- [中国历代人物传记资料库：王佶（CBDB 304729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304729&o=json)
- [中国历代人物传记资料库：王俊（CBDB 304732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304732&o=json)
- [中国历代人物传记资料库：王廉（CBDB 304722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json)
- [中国历代人物传记资料库：王佩（CBDB 304734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304734&o=json)
- [中国历代人物传记资料库：王儒（CBDB 304727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json)
- [中国历代人物传记资料库：王儀（CBDB 304731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304731&o=json)
- [中国历代人物传记资料库：王仲（CBDB 304733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json)
