---
schema: wang-person/v1
id: p_sQKFgBKrX6N7mKYfJwtry2
status: active
merged_into: null
display_name: 王洪
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmUFsSzSs4qQqDM24A1T3o
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gJ9FreFfHfdgTNxea4f3QF
          claim_id: c_QmUFsSzSs4qQqDM24A1T3o
          source_id: s_EjwpYk3YVv9nwyebg6iaE3
          stance: supports
          locator: CBDB:257024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257024）
          source: &a1
            id: s_EjwpYk3YVv9nwyebg6iaE3
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 257024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257024&o=json
            external_identifier: CBDB:257024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FGWH7mJ2TAp4vsScFAj62q
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257024）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xz0OEonhKl62QTZLKXmfh7
          claim_id: c_FGWH7mJ2TAp4vsScFAj62q
          source_id: s_EjwpYk3YVv9nwyebg6iaE3
          stance: supports
          locator: CBDB:257024
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7B4g9euoX6AZsooX9sFZ3I
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbLAHTEvX9ko5I5qJaMdFu
          claim_id: c_7B4g9euoX6AZsooX9sFZ3I
          source_id: s_EjwpYk3YVv9nwyebg6iaE3
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y6fRdWmSHjB68krJYq7FPT
        status: active
        display_name: 王杲
        merged_into_person_id: null
    - claim:
        id: c_29QG2Q8pw0bqMrUa2Pqrzc
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MxYmHWJxdOYCtfUb7jPtj
          claim_id: c_29QG2Q8pw0bqMrUa2Pqrzc
          source_id: s_bWCrqxa_SxdJT3jXkdxMYU
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王冕 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王冕 之父／母。
          source:
            id: s_bWCrqxa_SxdJT3jXkdxMYU
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 257034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json
            external_identifier: CBDB:257034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ea9hQd6Q69frdQad5zNKrV
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_3qFFUgCawtWFvhfYwaBl0b
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBGKYtFo0cVZ22pIJM-eg4
          claim_id: c_3qFFUgCawtWFvhfYwaBl0b
          source_id: s_NlIth9kNDT99n1tRRgD8cG
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王昆 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王昆 之父／母。
          source:
            id: s_NlIth9kNDT99n1tRRgD8cG
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 257028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json
            external_identifier: CBDB:257028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K7jaohG6D5Gda4GnuYwiPL
        status: active
        display_name: 王昆
        merged_into_person_id: null
    - claim:
        id: c_mX4kdvIY2DeOfIg0Nkos7h
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KiqHQvLZramwBA1Zbz9yoN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGVfqOOgb_W77uOof-7Xxw
          claim_id: c_mX4kdvIY2DeOfIg0Nkos7h
          source_id: s_PYnKzawMmpED83OWHifKro
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王昌 之父／母。
          source:
            id: s_PYnKzawMmpED83OWHifKro
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 257031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257031&o=json
            external_identifier: CBDB:257031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KiqHQvLZramwBA1Zbz9yoN
        status: active
        display_name: 王昌
        merged_into_person_id: null
    - claim:
        id: c_mWaAFOnOlRuIUnVf6ke7-U
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U63UV8xnqF5BNWDzc6uk94
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3vkRmvDRvu0GsrJm_-K8PE
          claim_id: c_mWaAFOnOlRuIUnVf6ke7-U
          source_id: s_ksUBeourDxaxZn3GSE3R_f
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王昊 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王昊 之父／母。
          source:
            id: s_ksUBeourDxaxZn3GSE3R_f
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 257029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json
            external_identifier: CBDB:257029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U63UV8xnqF5BNWDzc6uk94
        status: active
        display_name: 王昊
        merged_into_person_id: null
    - claim:
        id: c_0pwvCj9tyRtA2SWtNN18I7
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yns1iWuHDB3R29fGN1dznn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apefO5TPp9F6eDDggi26p3
          claim_id: c_0pwvCj9tyRtA2SWtNN18I7
          source_id: s_fS_aUacUNmB3Na_lzuZBgS
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王昺 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王昺 之父／母。
          source:
            id: s_fS_aUacUNmB3Na_lzuZBgS
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 257030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json
            external_identifier: CBDB:257030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yns1iWuHDB3R29fGN1dznn
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_BBuCegazMJYPCjHNPB634C
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSQ0WU8LB8P22HNjL8Riff
          claim_id: c_BBuCegazMJYPCjHNPB634C
          source_id: s_ik-_CaUCEd5yBAcXext1oW
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王易 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王易 之父／母。
          source:
            id: s_ik-_CaUCEd5yBAcXext1oW
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 257032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json
            external_identifier: CBDB:257032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peeTqcu5W5PCnqfBM2QXEG
        status: active
        display_name: 王易
        merged_into_person_id: null
    - claim:
        id: c_Sspycfets9QeY6aTWniHk9
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zWVPbLfhnq567spQxsGZdR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c612pQw6Uj7BqioptuLLEL
          claim_id: c_Sspycfets9QeY6aTWniHk9
          source_id: s_NcP7Rp-u83m8f2yLrPMeUf
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王旦 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王旦 之父／母。
          source:
            id: s_NcP7Rp-u83m8f2yLrPMeUf
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 257033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257033&o=json
            external_identifier: CBDB:257033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zWVPbLfhnq567spQxsGZdR
        status: active
        display_name: 王旦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Y6fRdWmSHjB68krJYq7FPT | 王杲 | accepted |
| children | p_Ea9hQd6Q69frdQad5zNKrV | 王冕 | accepted |
| children | p_K7jaohG6D5Gda4GnuYwiPL | 王昆 | accepted |
| children | p_KiqHQvLZramwBA1Zbz9yoN | 王昌 | accepted |
| children | p_U63UV8xnqF5BNWDzc6uk94 | 王昊 | accepted |
| children | p_Yns1iWuHDB3R29fGN1dznn | 王昺 | accepted |
| children | p_peeTqcu5W5PCnqfBM2QXEG | 王易 | accepted |
| children | p_zWVPbLfhnq567spQxsGZdR | 王旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 257030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json)
- [中国历代人物传记资料库：王昌（CBDB 257031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257031&o=json)
- [中国历代人物传记资料库：王旦（CBDB 257033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257033&o=json)
- [中国历代人物传记资料库：王昊（CBDB 257029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json)
- [中国历代人物传记资料库：王洪（CBDB 257024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257024&o=json)
- [中国历代人物传记资料库：王昆（CBDB 257028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json)
- [中国历代人物传记资料库：王冕（CBDB 257034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json)
- [中国历代人物传记资料库：王易（CBDB 257032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json)
