---
schema: wang-person/v1
id: p_1N7Z4wmfmL9xzTY7zGpnMb
status: active
merged_into: null
display_name: 王信
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M2TVSVBy6DP6hss78ZS6gu
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7r4Q55cUooHHvNhLDijU9A
          claim_id: c_M2TVSVBy6DP6hss78ZS6gu
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: CBDB:280170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280170）
          source: &a1
            id: s_Q18JHvwtCh7xyj63dHGaJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 280170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json
            external_identifier: CBDB:280170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f6dRMQDSajy298uYbBs7fo
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。正德十二年進士，籍贯襄陽衛，曾任都督府都督同知。（中国历代人物传记资料库 CBDB 280170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s1PkBr_sTtiiwfAH8ld5Ty
          claim_id: c_f6dRMQDSajy298uYbBs7fo
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: CBDB:280170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fvMxn8UhoYsP62PqAtE2E4
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_4FWWIoIuX1fI0JLMQ9P_
          claim_id: c_fvMxn8UhoYsP62PqAtE2E4
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
    - claim:
        id: c_iiaXthDbagnVM3xcR3yfld
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ZKGS2HkvaTrTLKFQL2mGi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evzx_XWoBdQ_w9D3ekdFZR
          claim_id: c_iiaXthDbagnVM3xcR3yfld
          source_id: s_je-fsa6SWpGLEqsoTiyOEL
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王巨善 与 王至善 为同胞（CBDB 记「兄」），王至善 之父／母即 王巨善 之父／母。
          source:
            id: s_je-fsa6SWpGLEqsoTiyOEL
            source_type: api_record
            title: 中国历代人物传记资料库：王巨善（CBDB 280181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280181&o=json
            external_identifier: CBDB:280181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ZKGS2HkvaTrTLKFQL2mGi
        status: active
        display_name: 王巨善
        merged_into_person_id: null
    - claim:
        id: c_jm-D8znAW6CZr_xATHyvfX
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4KlbbLpWUJeytWZ5FzKdo
          claim_id: c_jm-D8znAW6CZr_xATHyvfX
          source_id: s_jpwse8YCl64zrDQ2Xc0x4D
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王繼善 之父／母。
          source:
            id: s_jpwse8YCl64zrDQ2Xc0x4D
            source_type: api_record
            title: 中国历代人物传记资料库：王繼善（CBDB 280178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json
            external_identifier: CBDB:280178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CnjM6tcfgVMu6RfoJz4FnX
        status: active
        display_name: 王繼善
        merged_into_person_id: null
    - claim:
        id: c_HMSN6AK9wYXfiA10XhIwKM
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrGm1ZNZhQwytHhylh57BR
          claim_id: c_HMSN6AK9wYXfiA10XhIwKM
          source_id: s_uEinUD5sV9J9CILv_tz14-
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王明善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王明善 之父／母。
          source:
            id: s_uEinUD5sV9J9CILv_tz14-
            source_type: api_record
            title: 中国历代人物传记资料库：王明善（CBDB 280180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json
            external_identifier: CBDB:280180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JkVGYLSCTsNP1UEn97gdK7
        status: active
        display_name: 王明善
        merged_into_person_id: null
    - claim:
        id: c_fuZugImLr7wV3MuOARwxu_
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SkMrroZMaVf8SVRNciaEtD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qceI11FkZdSLtsEpJ8rPBI
          claim_id: c_fuZugImLr7wV3MuOARwxu_
          source_id: s_B3WPBrJ0PJhwJkoGa7IZ9x
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王從善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王從善 之父／母。
          source:
            id: s_B3WPBrJ0PJhwJkoGa7IZ9x
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 280177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json
            external_identifier: CBDB:280177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SkMrroZMaVf8SVRNciaEtD
        status: active
        display_name: 王從善
        merged_into_person_id: null
    - claim:
        id: c_bCe8R1m7otswed2IvMBfh5
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UbYyy4jud9ueasjAfZtjDu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tH6Qt27ImBa50zFUm3lx9-
          claim_id: c_bCe8R1m7otswed2IvMBfh5
          source_id: s_GQKZtO1ydYHu4atoP7Z_3H
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王復善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王復善 之父／母。
          source:
            id: s_GQKZtO1ydYHu4atoP7Z_3H
            source_type: api_record
            title: 中国历代人物传记资料库：王復善（CBDB 280179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280179&o=json
            external_identifier: CBDB:280179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UbYyy4jud9ueasjAfZtjDu
        status: active
        display_name: 王復善
        merged_into_person_id: null
    - claim:
        id: c_fAfj-H7Qi_Ld6ALmnQ3euU
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i3sGYAHtZL4S6XmZGtvfgG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bn5_CeGyGVIrRHYqVoHAhn
          claim_id: c_fAfj-H7Qi_Ld6ALmnQ3euU
          source_id: s_u-tWhTY7nLYeIxI5dBTjVF
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王為善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王為善 之父／母。
          source:
            id: s_u-tWhTY7nLYeIxI5dBTjVF
            source_type: api_record
            title: 中国历代人物传记资料库：王為善（CBDB 280176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json
            external_identifier: CBDB:280176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i3sGYAHtZL4S6XmZGtvfgG
        status: active
        display_name: 王為善
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。正德十二年進士，籍贯襄陽衛，曾任都督府都督同知。（中国历代人物传记资料库 CBDB 280170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |
| children | p_6ZKGS2HkvaTrTLKFQL2mGi | 王巨善 | accepted |
| children | p_CnjM6tcfgVMu6RfoJz4FnX | 王繼善 | accepted |
| children | p_JkVGYLSCTsNP1UEn97gdK7 | 王明善 | accepted |
| children | p_SkMrroZMaVf8SVRNciaEtD | 王從善 | accepted |
| children | p_UbYyy4jud9ueasjAfZtjDu | 王復善 | accepted |
| children | p_i3sGYAHtZL4S6XmZGtvfgG | 王為善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 280177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json)
- [中国历代人物传记资料库：王復善（CBDB 280179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280179&o=json)
- [中国历代人物传记资料库：王繼善（CBDB 280178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json)
- [中国历代人物传记资料库：王巨善（CBDB 280181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280181&o=json)
- [中国历代人物传记资料库：王明善（CBDB 280180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json)
- [中国历代人物传记资料库：王為善（CBDB 280176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json)
- [中国历代人物传记资料库：王信（CBDB 280170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json)
