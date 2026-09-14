---
schema: wang-person/v1
id: p_qADtxjrVEChTrGk5M7bGg2
status: active
merged_into: null
display_name: 王雯
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JjQ2eBuVgQU9j6wx6EfR7B
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e2DcvAvG2kDMfA93GvJx97
          claim_id: c_JjQ2eBuVgQU9j6wx6EfR7B
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: CBDB:198731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198731）
          source: &a1
            id: s_zRnrEasJ9KGuHqrF8D8JQK
            source_type: api_record
            title: 中国历代人物传记资料库：王雯（CBDB 198731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json
            external_identifier: CBDB:198731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zQAXPwJmq8efAjHnpSWEYd
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMxHfxk678B3h1LzfkLMPB
          claim_id: c_zQAXPwJmq8efAjHnpSWEYd
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nKCbH54D77ZdMeQLPWbwKE
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雯（生于1420年），明人物。天順元年進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 198731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qatNNaoFT2SWWB-J4MteBT
          claim_id: c_nKCbH54D77ZdMeQLPWbwKE
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: CBDB:198731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PW7fp5JLeTGajjxJvalBPA
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4WCWL_hNZZBklWrl5Ue0G
          claim_id: c_PW7fp5JLeTGajjxJvalBPA
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RGZcAsK4gvBLjAnNq7jieH
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KBwP_9YoPlbkUyCPT8taCQ
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UX1A3rLPJJWoYT4KUFhVhZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCTl2JIR6J_aI2wwgDRsyh
          claim_id: c_KBwP_9YoPlbkUyCPT8taCQ
          source_id: s_xSiEMb5rMaJjWW_uBO9Nf6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSiEMb5rMaJjWW_uBO9Nf6
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王雯妻)（CBDB 309129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309129&o=json
            external_identifier: CBDB:309129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UX1A3rLPJJWoYT4KUFhVhZ
        status: active
        display_name: 段氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_fOUChNZCUDpbYquQT529cx
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yDX0AKbUbILNkexpMGUu_0
          claim_id: c_fOUChNZCUDpbYquQT529cx
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W5GaHUMJSWCuMuNBjxxdj7
        status: active
        display_name: 王友諒
        merged_into_person_id: null
    - claim:
        id: c__NQx5D1QFo_7BcoMXcE6CT
        subject_person_id: p_rtTpAcE9M3Q5KZbcW2tezW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VkQJLEZEpn5XOc7w_hR4fw
          claim_id: c__NQx5D1QFo_7BcoMXcE6CT
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rtTpAcE9M3Q5KZbcW2tezW
        status: active
        display_name: 王敬達
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_YmbTbX4iIfq8MwfFf17vPK
        subject_person_id: p_7yvrn2CESKu5EfHRBGQ4bK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbYPW0PLVbVvD9XOBdgKuY
          claim_id: c_YmbTbX4iIfq8MwfFf17vPK
          source_id: s_TonPdypro1l8NLQy55IW-L
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198731 王雯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TonPdypro1l8NLQy55IW-L
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 309162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309162&o=json
            external_identifier: CBDB:309162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7yvrn2CESKu5EfHRBGQ4bK
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_ERMk2TbE3FpRibl95vzTlZ
        subject_person_id: p_VmMsLry5PjjbAY5QMForp6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxbg-Hb1fvP85IlqVNliNA
          claim_id: c_ERMk2TbE3FpRibl95vzTlZ
          source_id: s_goAJfHodBtVZ7Eee4hWaMQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198731 王雯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_goAJfHodBtVZ7Eee4hWaMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 309151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json
            external_identifier: CBDB:309151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmMsLry5PjjbAY5QMForp6
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c__Q-pqOAbbi-5V6IgwqW9Gw
        subject_person_id: p_qADtxjrVEChTrGk5M7bGg2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_alOYFmTwL_9IPmyhbphnCf
          claim_id: c__Q-pqOAbbi-5V6IgwqW9Gw
          source_id: s_QMW3qY025nuB0PJ2FmTHG_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198731 王雯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QMW3qY025nuB0PJ2FmTHG_
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 309140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json
            external_identifier: CBDB:309140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_whi7BPRQ5A3rQiSFxSpdGY
        status: active
        display_name: 王玘
        merged_into_person_id: null
---

# 王雯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雯 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | 王雯（生于1420年），明人物。天順元年進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 198731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RGZcAsK4gvBLjAnNq7jieH | 王貴 | accepted |
| spouses | p_UX1A3rLPJJWoYT4KUFhVhZ | 段氏 | accepted |
| ancestors | p_W5GaHUMJSWCuMuNBjxxdj7 | 王友諒 | accepted |
| ancestors | p_rtTpAcE9M3Q5KZbcW2tezW | 王敬達 | accepted |
| other | p_7yvrn2CESKu5EfHRBGQ4bK | 王福 | accepted |
| other | p_VmMsLry5PjjbAY5QMForp6 | 王章 | accepted |
| other | p_whi7BPRQ5A3rQiSFxSpdGY | 王玘 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王雯妻)（CBDB 309129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309129&o=json)
- [中国历代人物传记资料库：王福（CBDB 309162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309162&o=json)
- [中国历代人物传记资料库：王玘（CBDB 309140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json)
- [中国历代人物传记资料库：王雯（CBDB 198731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json)
- [中国历代人物传记资料库：王章（CBDB 309151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json)
