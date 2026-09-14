---
schema: wang-person/v1
id: p_RGZcAsK4gvBLjAnNq7jieH
status: active
merged_into: null
display_name: 王貴
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBczcwZ7cYSp7K3xjd7KN8
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
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
        - id: cs_eiMmfDYg1eWx5562oQ9T3c
          claim_id: c_KBczcwZ7cYSp7K3xjd7KN8
          source_id: s_5yEv2bZJD5MrRPEenjYBF5
          stance: supports
          locator: CBDB:309095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309095）
          source: &a1
            id: s_5yEv2bZJD5MrRPEenjYBF5
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 309095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309095&o=json
            external_identifier: CBDB:309095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8kTb3B939cnaWqY8xL3h7K
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309095）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o48U2ASeLF-WtMdhiQrNp1
          claim_id: c_8kTb3B939cnaWqY8xL3h7K
          source_id: s_5yEv2bZJD5MrRPEenjYBF5
          stance: supports
          locator: CBDB:309095
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_qADtxjrVEChTrGk5M7bGg2
        status: active
        display_name: 王雯
        merged_into_person_id: null
    - claim:
        id: c_zH22DNwPgkWGPd21tneiV8
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7yvrn2CESKu5EfHRBGQ4bK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giKb-z6aFnsvz1tvypETku
          claim_id: c_zH22DNwPgkWGPd21tneiV8
          source_id: s_TonPdypro1l8NLQy55IW-L
          stance: supports
          locator: CBDB：兄弟 王雯（198731）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王雯 为同胞（CBDB 记「兄」），王雯 之父／母即 王福 之父／母。
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
        id: c_L9bDZudCjjvM_1P-7vubf1
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmMsLry5PjjbAY5QMForp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80svr7xlRCwVV8i1cHRqnZ
          claim_id: c_L9bDZudCjjvM_1P-7vubf1
          source_id: s_goAJfHodBtVZ7Eee4hWaMQ
          stance: supports
          locator: CBDB：兄弟 王雯（198731）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王雯 为同胞（CBDB 记「兄」），王雯 之父／母即 王章 之父／母。
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
        id: c_zZm9uUIVkXslIqgWX-dAtB
        subject_person_id: p_RGZcAsK4gvBLjAnNq7jieH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_whi7BPRQ5A3rQiSFxSpdGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWkckFq7vvWvM4gL8bs7RZ
          claim_id: c_zZm9uUIVkXslIqgWX-dAtB
          source_id: s_QMW3qY025nuB0PJ2FmTHG_
          stance: supports
          locator: CBDB：兄弟 王雯（198731）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王雯 为同胞（CBDB 记「弟」），王雯 之父／母即 王玘 之父／母。
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
| bio.summary | 王貴，明人物。天順元年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 309095） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qADtxjrVEChTrGk5M7bGg2 | 王雯 | accepted |
| children | p_7yvrn2CESKu5EfHRBGQ4bK | 王福 | accepted |
| children | p_VmMsLry5PjjbAY5QMForp6 | 王章 | accepted |
| children | p_whi7BPRQ5A3rQiSFxSpdGY | 王玘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 309162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309162&o=json)
- [中国历代人物传记资料库：王貴（CBDB 309095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309095&o=json)
- [中国历代人物传记资料库：王玘（CBDB 309140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309140&o=json)
- [中国历代人物传记资料库：王雯（CBDB 198731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json)
- [中国历代人物传记资料库：王章（CBDB 309151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309151&o=json)
