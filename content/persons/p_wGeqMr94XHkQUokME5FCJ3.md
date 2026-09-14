---
schema: wang-person/v1
id: p_wGeqMr94XHkQUokME5FCJ3
status: active
merged_into: null
display_name: 王舟
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyQM9DrFkLZrpDudX4LTjj
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RfVQ7HPSyNDsodbgHnePLd
          claim_id: c_KyQM9DrFkLZrpDudX4LTjj
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
          stance: supports
          locator: CBDB:199369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199369）
          source: &a1
            id: s_EZttuVPWEZxiDt9PpB3k5L
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 199369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json
            external_identifier: CBDB:199369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r3NjXm25bRQ1R1JtxdzA2G
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5HBVK9fiJMwQeK6jg1Yw3M
          claim_id: c_r3NjXm25bRQ1R1JtxdzA2G
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
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
        id: c_v549W4BgL9g9qDtc26PZ4o
        subject_person_id: p_wGeqMr94XHkQUokME5FCJ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟（生于1437年），明人物。明清進士進士，籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 199369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sij6uznOLnokGELemUUw89
          claim_id: c_v549W4BgL9g9qDtc26PZ4o
          source_id: s_EZttuVPWEZxiDt9PpB3k5L
          stance: supports
          locator: CBDB:199369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ie4Q7p1HoSLietOxRRh3Mu
        subject_person_id: p_PssJzEL6PmniEjHiumeCwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-ULr1oI23dJ2AWH1w78tc
          claim_id: c_Ie4Q7p1HoSLietOxRRh3Mu
          source_id: s_PdhDz4z55W6Zg9LekZmUks
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdhDz4z55W6Zg9LekZmUks
            source_type: api_record
            title: 中国历代人物传记资料库：王騶虞（CBDB 244055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json
            external_identifier: CBDB:244055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PssJzEL6PmniEjHiumeCwT
        status: active
        display_name: 王騶虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FgerTxe-ooVvcgsEAuRkDQ
        subject_person_id: p_agr7Kh67jpGsGa4tzGrKgc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__uZJ0dNkbkG3lEhIUVo-ah
          claim_id: c_FgerTxe-ooVvcgsEAuRkDQ
          source_id: s_FRg2kTGq97KBP7g6Qs2PT3
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FRg2kTGq97KBP7g6Qs2PT3
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 244054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244054&o=json
            external_identifier: CBDB:244054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_agr7Kh67jpGsGa4tzGrKgc
        status: active
        display_name: 王文華
        merged_into_person_id: null
    - claim:
        id: c_bBpQfYjn3-bMV_JsTkNLlo
        subject_person_id: p_B3XLSR6CqA2q9R5BhcVhA3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZPGqiD6wIxHHfhc59YERUd
          claim_id: c_bBpQfYjn3-bMV_JsTkNLlo
          source_id: s_b1BkED5SZ28nq7xm5UqpES
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b1BkED5SZ28nq7xm5UqpES
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 244053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json
            external_identifier: CBDB:244053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B3XLSR6CqA2q9R5BhcVhA3
        status: active
        display_name: 王克誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_xQCS9UwJmdYteifD_pxl2H
        subject_person_id: p_1VS5d5JMGjpzCDb5J1PWuV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zninbM-F19_JLQsxPJ_xOa
          claim_id: c_xQCS9UwJmdYteifD_pxl2H
          source_id: s_oniMCAHLLfYRlwz8sgWIHJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oniMCAHLLfYRlwz8sgWIHJ
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 244058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json
            external_identifier: CBDB:244058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VS5d5JMGjpzCDb5J1PWuV
        status: active
        display_name: 王琯
        merged_into_person_id: null
    - claim:
        id: c_q2jYfbLjq1qqHGZ4KbaR_T
        subject_person_id: p_7CmvTVtcahbLzzN6ngiXaW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCsDFmC67oqLJ5Tdc4XIYV
          claim_id: c_q2jYfbLjq1qqHGZ4KbaR_T
          source_id: s_Uw2uX5iy8_swi8lYIbQh0d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Uw2uX5iy8_swi8lYIbQh0d
            source_type: api_record
            title: 中国历代人物传记资料库：王含（CBDB 244062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json
            external_identifier: CBDB:244062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7CmvTVtcahbLzzN6ngiXaW
        status: active
        display_name: 王含
        merged_into_person_id: null
    - claim:
        id: c_Zhg84s93BNmA_S3jZnweFj
        subject_person_id: p_BmEQpjf4j1xNwS6TSfRHD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRyrQg-v5kobFilvX4IEMU
          claim_id: c_Zhg84s93BNmA_S3jZnweFj
          source_id: s_Bbmkpdj9MhpoSSuhVOXlq-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bbmkpdj9MhpoSSuhVOXlq-
            source_type: api_record
            title: 中国历代人物传记资料库：王由（CBDB 244059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244059&o=json
            external_identifier: CBDB:244059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BmEQpjf4j1xNwS6TSfRHD2
        status: active
        display_name: 王由
        merged_into_person_id: null
    - claim:
        id: c_Sa7jyIxpb_V0z8zpbqM8Vc
        subject_person_id: p_LkW5JtKZG528oiPeriHJh8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssHCamLoW9z4YOjJ7Ns8Br
          claim_id: c_Sa7jyIxpb_V0z8zpbqM8Vc
          source_id: s_q6dnKO2061EPRAKC_nwr0U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q6dnKO2061EPRAKC_nwr0U
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 244064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json
            external_identifier: CBDB:244064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LkW5JtKZG528oiPeriHJh8
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_P6qx5EKA8F-u55s3QZB7bT
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGLtkOyGgq0gji3hnjbpu6
          claim_id: c_P6qx5EKA8F-u55s3QZB7bT
          source_id: s_3mha0d4OpeayodNq7ggiff
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3mha0d4OpeayodNq7ggiff
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NwtP6da4w6tUKFJvZPjDZ5
        status: active
        display_name: 王賜
        merged_into_person_id: null
    - claim:
        id: c_mk98USgQQupdM3ETchmfZL
        subject_person_id: p_h4fUgakpkGMP1FF4xuXknq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wGeqMr94XHkQUokME5FCJ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jlBTv6-uJQrlNoOTBVeey
          claim_id: c_mk98USgQQupdM3ETchmfZL
          source_id: s_bVn48-KYOPhldNZ0yuY6i4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199369 王舟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bVn48-KYOPhldNZ0yuY6i4
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 244060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244060&o=json
            external_identifier: CBDB:244060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h4fUgakpkGMP1FF4xuXknq
        status: active
        display_name: 王遷
        merged_into_person_id: null
---

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | 王舟（生于1437年），明人物。明清進士進士，籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 199369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PssJzEL6PmniEjHiumeCwT | 王騶虞 | accepted |
| ancestors | p_agr7Kh67jpGsGa4tzGrKgc | 王文華 | accepted |
| ancestors | p_B3XLSR6CqA2q9R5BhcVhA3 | 王克誠 | accepted |
| other | p_1VS5d5JMGjpzCDb5J1PWuV | 王琯 | accepted |
| other | p_7CmvTVtcahbLzzN6ngiXaW | 王含 | accepted |
| other | p_BmEQpjf4j1xNwS6TSfRHD2 | 王由 | accepted |
| other | p_LkW5JtKZG528oiPeriHJh8 | 王章 | accepted |
| other | p_NwtP6da4w6tUKFJvZPjDZ5 | 王賜 | accepted |
| other | p_h4fUgakpkGMP1FF4xuXknq | 王遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賜（CBDB 244061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json)
- [中国历代人物传记资料库：王琯（CBDB 244058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json)
- [中国历代人物传记资料库：王含（CBDB 244062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244062&o=json)
- [中国历代人物传记资料库：王克誠（CBDB 244053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244053&o=json)
- [中国历代人物传记资料库：王遷（CBDB 244060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244060&o=json)
- [中国历代人物传记资料库：王文華（CBDB 244054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244054&o=json)
- [中国历代人物传记资料库：王由（CBDB 244059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244059&o=json)
- [中国历代人物传记资料库：王章（CBDB 244064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244064&o=json)
- [中国历代人物传记资料库：王舟（CBDB 199369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199369&o=json)
- [中国历代人物传记资料库：王騶虞（CBDB 244055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244055&o=json)
