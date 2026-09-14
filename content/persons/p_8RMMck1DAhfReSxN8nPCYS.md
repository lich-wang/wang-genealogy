---
schema: wang-person/v1
id: p_8RMMck1DAhfReSxN8nPCYS
status: active
merged_into: null
display_name: 王琰
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9W2zpPBB2apxWbaod31Li
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qNcso8caQYA5xoUDxpbvT4
          claim_id: c_Y9W2zpPBB2apxWbaod31Li
          source_id: s_8Nab8qKc8iudZ5tVYtDwwf
          stance: supports
          locator: CBDB:284119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284119）
          source: &a1
            id: s_8Nab8qKc8iudZ5tVYtDwwf
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 284119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284119&o=json
            external_identifier: CBDB:284119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrGQCr6JurKzfnn9mXGkgj
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TbDgij0fAbRBvuek2zZV-P
          claim_id: c_GrGQCr6JurKzfnn9mXGkgj
          source_id: s_8Nab8qKc8iudZ5tVYtDwwf
          stance: supports
          locator: CBDB:284119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R0cYgkI_nsoETsRmyKWa9j
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFhJDNSDsgwd1pPaS_HOHr
          claim_id: c_R0cYgkI_nsoETsRmyKWa9j
          source_id: s_8Nab8qKc8iudZ5tVYtDwwf
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GBfHvW9j1wmH7AtQd6s7JQ
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_mBAWoyMaPzODJGz4Cz0X_r
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GZ2bFHWMcuDHDjVZRoMor
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTVvS6PjZ1DjgYtiYeYbpq
          claim_id: c_mBAWoyMaPzODJGz4Cz0X_r
          source_id: s_WzQ8o49h4JykmUMEU3NcK8
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王仕 之父／母。
          source:
            id: s_WzQ8o49h4JykmUMEU3NcK8
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 284125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json
            external_identifier: CBDB:284125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GZ2bFHWMcuDHDjVZRoMor
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_5AIcijypd63iSQ7G57qmlp
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4oMLDeezgsznyGNp4JdbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNAj3kfvcaxuJgpJd134eN
          claim_id: c_5AIcijypd63iSQ7G57qmlp
          source_id: s_gx7iSZ3tvCgQgeEf228AA2
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王耀 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王耀 之父／母。
          source:
            id: s_gx7iSZ3tvCgQgeEf228AA2
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 284129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json
            external_identifier: CBDB:284129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F4oMLDeezgsznyGNp4JdbB
        status: active
        display_name: 王耀
        merged_into_person_id: null
    - claim:
        id: c_RVFZM1SCBYsR1QyT-otUkA
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FTMTbiAbMxU7PWUuCYF9v4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5WlVmpoZEo8xniNms7yPL1
          claim_id: c_RVFZM1SCBYsR1QyT-otUkA
          source_id: s_GSvfNCyfvyTP-ZIoLzNIcA
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王卿 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王卿 之父／母。
          source:
            id: s_GSvfNCyfvyTP-ZIoLzNIcA
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 284126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284126&o=json
            external_identifier: CBDB:284126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FTMTbiAbMxU7PWUuCYF9v4
        status: active
        display_name: 王卿
        merged_into_person_id: null
    - claim:
        id: c_kgQAw6nOWTj6E6lFfF_fqG
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZPWvWKEMY8kw5M7I2GsCw
          claim_id: c_kgQAw6nOWTj6E6lFfF_fqG
          source_id: s_p-TrGgjk7qONYz2tl5Po0t
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔 与 王化 为同胞（CBDB 记「弟」），王化 之父／母即 王輔 之父／母。
          source:
            id: s_p-TrGgjk7qONYz2tl5Po0t
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 284123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json
            external_identifier: CBDB:284123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gf8KdiZ6CE1yT1eCYigv5Q
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_9LxpwkaYxgyNhAUcBRB3Vd
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K28ysUF3GGfsTe7eDafS7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IKf1ReQzJeg2u0Bdm7u_3H
          claim_id: c_9LxpwkaYxgyNhAUcBRB3Vd
          source_id: s_c_IE3WmC7SANJ83m0jkDic
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王天爵 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王天爵 之父／母。
          source:
            id: s_c_IE3WmC7SANJ83m0jkDic
            source_type: api_record
            title: 中国历代人物传记资料库：王天爵（CBDB 284124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284124&o=json
            external_identifier: CBDB:284124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K28ysUF3GGfsTe7eDafS7M
        status: active
        display_name: 王天爵
        merged_into_person_id: null
    - claim:
        id: c_0B0qOM9H3q2_xjMjJWOX6P
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ma7wqsosUBAP57FzkUYiid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTRqF-4PyGkF6TMXJpLwYb
          claim_id: c_0B0qOM9H3q2_xjMjJWOX6P
          source_id: s_-ztb0fIu5GE_yrdji6Cl8P
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王天壽 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王天壽 之父／母。
          source:
            id: s_-ztb0fIu5GE_yrdji6Cl8P
            source_type: api_record
            title: 中国历代人物传记资料库：王天壽（CBDB 284128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284128&o=json
            external_identifier: CBDB:284128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ma7wqsosUBAP57FzkUYiid
        status: active
        display_name: 王天壽
        merged_into_person_id: null
    - claim:
        id: c_D3_au3lbJ7os7WDcgtOMPm
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_segKycy9FXiZMaTd2sd8uK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MY1vWxnuoX-dfT8CugCZcg
          claim_id: c_D3_au3lbJ7os7WDcgtOMPm
          source_id: s_7EiqyGsMaNz8sE18_8hH_Z
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王慶 之父／母。
          source:
            id: s_7EiqyGsMaNz8sE18_8hH_Z
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 284127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284127&o=json
            external_identifier: CBDB:284127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_segKycy9FXiZMaTd2sd8uK
        status: active
        display_name: 王慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GBfHvW9j1wmH7AtQd6s7JQ | 王化 | accepted |
| children | p_6GZ2bFHWMcuDHDjVZRoMor | 王仕 | accepted |
| children | p_F4oMLDeezgsznyGNp4JdbB | 王耀 | accepted |
| children | p_FTMTbiAbMxU7PWUuCYF9v4 | 王卿 | accepted |
| children | p_Gf8KdiZ6CE1yT1eCYigv5Q | 王輔 | accepted |
| children | p_K28ysUF3GGfsTe7eDafS7M | 王天爵 | accepted |
| children | p_Ma7wqsosUBAP57FzkUYiid | 王天壽 | accepted |
| children | p_segKycy9FXiZMaTd2sd8uK | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 284123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284123&o=json)
- [中国历代人物传记资料库：王卿（CBDB 284126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284126&o=json)
- [中国历代人物传记资料库：王慶（CBDB 284127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284127&o=json)
- [中国历代人物传记资料库：王仕（CBDB 284125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json)
- [中国历代人物传记资料库：王天爵（CBDB 284124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284124&o=json)
- [中国历代人物传记资料库：王天壽（CBDB 284128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284128&o=json)
- [中国历代人物传记资料库：王琰（CBDB 284119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284119&o=json)
- [中国历代人物传记资料库：王耀（CBDB 284129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json)
