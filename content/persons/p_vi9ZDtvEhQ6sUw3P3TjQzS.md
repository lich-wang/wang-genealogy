---
schema: wang-person/v1
id: p_vi9ZDtvEhQ6sUw3P3TjQzS
status: active
merged_into: null
display_name: 王鞏謙
cbdb_id: 255904
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6HZi21CkbBBT4VenMN38y
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏謙，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255904）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ttlqwYkYNBda7Pnl-qoUL8
          claim_id: c_R6HZi21CkbBBT4VenMN38y
          source_id: s_wTU7KenGJD5pskZB5g2Vyq
          stance: supports
          locator: CBDB:255904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wTU7KenGJD5pskZB5g2Vyq
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏謙（CBDB 255904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255904&o=json
            external_identifier: CBDB:255904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDP7Qk8UPkKFeQjovbB9Ly
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UNjv59iiQBKvTnkHnTsv7P
          claim_id: c_JDP7Qk8UPkKFeQjovbB9Ly
          source_id: s_wTU7KenGJD5pskZB5g2Vyq
          stance: supports
          locator: CBDB:255904
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y62dBJCA0oQ_cxMcpy1QvO
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zcJawQrxbahAYSGOM1U4tk
          claim_id: c_Y62dBJCA0oQ_cxMcpy1QvO
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Guq4H2hQkEkTKmCjpGDt7H
            source_type: api_record
            title: 中国历代人物传记资料库：王瑫（CBDB 126779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json
            external_identifier: CBDB:126779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
    - claim:
        id: c_SXqprCz2M2IWZQrX_XPYKH
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15ZxJBjMwdYPjPybzLR5sG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nN1qTbZU5TEJEdo5F5h0_6
          claim_id: c_SXqprCz2M2IWZQrX_XPYKH
          source_id: s_bAc09U-nAKGNBqIh-Lu6Tk
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王璠 与 王瑫 为同胞（CBDB 记「弟」），王瑫 之父／母即 王璠 之父／母。
          source:
            id: s_bAc09U-nAKGNBqIh-Lu6Tk
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 255908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255908&o=json
            external_identifier: CBDB:255908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_15ZxJBjMwdYPjPybzLR5sG
        status: active
        display_name: 王璠
        merged_into_person_id: null
    - claim:
        id: c_XeKTXgaG8SfgNxsvZuMMh_
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8d6Q9HR5vtb1rQMQy3iee
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pi1nIMuvEbkEFz-XrtNmv2
          claim_id: c_XeKTXgaG8SfgNxsvZuMMh_
          source_id: s_YgektQ-hW0lrIRPGqrd9TN
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王瓊 之父／母。
          source:
            id: s_YgektQ-hW0lrIRPGqrd9TN
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 255912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255912&o=json
            external_identifier: CBDB:255912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A8d6Q9HR5vtb1rQMQy3iee
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_wztG7kqbxftfc2NTdbPwuY
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LH26wNU5A1mxpo4iK4N5Kd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVOrZjg7UhSZGDPze_kP0m
          claim_id: c_wztG7kqbxftfc2NTdbPwuY
          source_id: s_a28JDFuEOGOFlUWFFUlPeU
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑗 与 王瑫 为同胞（CBDB 记「弟」），王瑫 之父／母即 王瑗 之父／母。
          source:
            id: s_a28JDFuEOGOFlUWFFUlPeU
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗（CBDB 255907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255907&o=json
            external_identifier: CBDB:255907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LH26wNU5A1mxpo4iK4N5Kd
        status: active
        display_name: 王瑗
        merged_into_person_id: null
    - claim:
        id: c_xMzcLlqJp2PnIh69Ai9uak
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Peaoc2Q1ixzgiJjT7a4DGX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i_L4l5oZM_mBy21NM-g9SR
          claim_id: c_xMzcLlqJp2PnIh69Ai9uak
          source_id: s_Ji9GuU1IjA571OmkdpO_e4
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王玢 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王玢 之父／母。
          source:
            id: s_Ji9GuU1IjA571OmkdpO_e4
            source_type: api_record
            title: 中国历代人物传记资料库：王玢（CBDB 255911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255911&o=json
            external_identifier: CBDB:255911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Peaoc2Q1ixzgiJjT7a4DGX
        status: active
        display_name: 王玢
        merged_into_person_id: null
    - claim:
        id: c_S2YXJjqn-zZh6AoGj_2Tem
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y7ypdWasBUqk6qpTn2Bhb5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KqCkRGVxsXGM-ENNlQuEyv
          claim_id: c_S2YXJjqn-zZh6AoGj_2Tem
          source_id: s_y9AevbnsJ59UAGU0e4B7HF
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王璐 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王璐 之父／母。
          source:
            id: s_y9AevbnsJ59UAGU0e4B7HF
            source_type: api_record
            title: 中国历代人物传记资料库：王璐（CBDB 255910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json
            external_identifier: CBDB:255910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y7ypdWasBUqk6qpTn2Bhb5
        status: active
        display_name: 王璐
        merged_into_person_id: null
    - claim:
        id: c_lCI4jwaIyhfCyKEikl11KQ
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yj7cEhqWCMhHks254mEdHH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qMSgJMoxtZfZ7DcZaJFSH8
          claim_id: c_lCI4jwaIyhfCyKEikl11KQ
          source_id: s_5iHLGb2O7R8QcOJgqrHmpq
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王琳 之父／母。
          source:
            id: s_5iHLGb2O7R8QcOJgqrHmpq
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 255913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json
            external_identifier: CBDB:255913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yj7cEhqWCMhHks254mEdHH
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_cj96-OBq2ZfQvv2PJ2Xcr6
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDhKdhFXpAzjMqU9hAowzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_unDKD5CDT9G3yfY83bLtAP
          claim_id: c_cj96-OBq2ZfQvv2PJ2Xcr6
          source_id: s_rUpMHzgJUz_Dw0AsxouVq-
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王珽 与 王瑫 为同胞（CBDB 记「弟」），王瑫 之父／母即 王珽 之父／母。
          source:
            id: s_rUpMHzgJUz_Dw0AsxouVq-
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 255909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json
            external_identifier: CBDB:255909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bDhKdhFXpAzjMqU9hAowzC
        status: active
        display_name: 王珽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鞏謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鞏謙，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255904） | accepted |
| name.primary | 王鞏謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |
| children | p_15ZxJBjMwdYPjPybzLR5sG | 王璠 | accepted |
| children | p_A8d6Q9HR5vtb1rQMQy3iee | 王瓊 | accepted |
| children | p_LH26wNU5A1mxpo4iK4N5Kd | 王瑗 | accepted |
| children | p_Peaoc2Q1ixzgiJjT7a4DGX | 王玢 | accepted |
| children | p_Y7ypdWasBUqk6qpTn2Bhb5 | 王璐 | accepted |
| children | p_Yj7cEhqWCMhHks254mEdHH | 王琳 | accepted |
| children | p_bDhKdhFXpAzjMqU9hAowzC | 王珽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玢（CBDB 255911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255911&o=json)
- [中国历代人物传记资料库：王璠（CBDB 255908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255908&o=json)
- [中国历代人物传记资料库：王鞏謙（CBDB 255904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255904&o=json)
- [中国历代人物传记资料库：王琳（CBDB 255913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json)
- [中国历代人物传记资料库：王璐（CBDB 255910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 255912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255912&o=json)
- [中国历代人物传记资料库：王瑫（CBDB 126779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json)
- [中国历代人物传记资料库：王珽（CBDB 255909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255909&o=json)
- [中国历代人物传记资料库：王瑗（CBDB 255907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255907&o=json)
