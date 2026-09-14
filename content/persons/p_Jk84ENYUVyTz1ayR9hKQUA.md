---
schema: wang-person/v1
id: p_Jk84ENYUVyTz1ayR9hKQUA
status: active
merged_into: null
display_name: 王鋀
cbdb_id: 281994
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvpMkDK7GMEQVP4UvUWXe6
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋀，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 281994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e75JArwSjHIJrpbwDCNDqO
          claim_id: c_zvpMkDK7GMEQVP4UvUWXe6
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: CBDB:281994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91zTCSGb2cvwynBnPzjTLX
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mdH4SsfyVzFGxzM66Edvua
          claim_id: c_91zTCSGb2cvwynBnPzjTLX
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: CBDB:281994
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TxpogaEAQuHTK8Gj-4PmAd
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwGV6YIrq3rDaVIHI2OCol
          claim_id: c_TxpogaEAQuHTK8Gj-4PmAd
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
    - claim:
        id: c_FFPBcwpEWBd4HHRihdoUR7
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3AokdZcYT8U75hh2eRDx4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uIde6zLMT4HZHKP3KMKl6R
          claim_id: c_FFPBcwpEWBd4HHRihdoUR7
          source_id: s_mFf__j4HRRC5VcKvYv66qw
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王學 之父／母。
          source:
            id: s_mFf__j4HRRC5VcKvYv66qw
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3AokdZcYT8U75hh2eRDx4S
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_IrBvb3lRCYGoj557WjXcP2
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7B549LaasamNja69qSEBtm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-Kb22XLIGFbetmQU4n8H6
          claim_id: c_IrBvb3lRCYGoj557WjXcP2
          source_id: s__i1OWF8NzZV_uNjY08G_53
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀾 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王瀾 之父／母。
          source:
            id: s__i1OWF8NzZV_uNjY08G_53
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 281999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281999&o=json
            external_identifier: CBDB:281999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7B549LaasamNja69qSEBtm
        status: active
        display_name: 王瀾
        merged_into_person_id: null
    - claim:
        id: c_Jpov8r60CxrhNkHuRq9mCF
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9spu7KX9j35GAa5eR26Y8a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iw8SxBBQnGaKx4w61ftbRY
          claim_id: c_Jpov8r60CxrhNkHuRq9mCF
          source_id: s_9FDwSuxtid0jkMxzgkqnP0
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王紀 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王紀 之父／母。
          source:
            id: s_9FDwSuxtid0jkMxzgkqnP0
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 282002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282002&o=json
            external_identifier: CBDB:282002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9spu7KX9j35GAa5eR26Y8a
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_HTgYDFtEk3CRHh_PpJZswU
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E5ejKQJp28b98X9an76Um2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ahQT1m--BKe2ohvkFN1LVK
          claim_id: c_HTgYDFtEk3CRHh_PpJZswU
          source_id: s_17QvZ108fmYsxxgVX-7r06
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王河 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王河 之父／母。
          source:
            id: s_17QvZ108fmYsxxgVX-7r06
            source_type: api_record
            title: 中国历代人物传记资料库：王河（CBDB 282006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282006&o=json
            external_identifier: CBDB:282006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E5ejKQJp28b98X9an76Um2
        status: active
        display_name: 王河
        merged_into_person_id: null
    - claim:
        id: c_--vhxDPOPg13CiqmeUYyVk
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ETDrZ5qP4w6vvdBqYMJLtX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmXM_aQ7EalcKLThma6-In
          claim_id: c_--vhxDPOPg13CiqmeUYyVk
          source_id: s_dx29bQPBZ4M-43d_jtifUT
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王潺 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王潺 之父／母。
          source:
            id: s_dx29bQPBZ4M-43d_jtifUT
            source_type: api_record
            title: 中国历代人物传记资料库：王潺（CBDB 282000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282000&o=json
            external_identifier: CBDB:282000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ETDrZ5qP4w6vvdBqYMJLtX
        status: active
        display_name: 王潺
        merged_into_person_id: null
    - claim:
        id: c_KRS8LVhac5ewH13gUMuzMs
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FwcinwtNvRNP4ZKMYFZNSt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yb-zUB71xPT0OpRQe0ULr9
          claim_id: c_KRS8LVhac5ewH13gUMuzMs
          source_id: s_hgjii-aK-FPrIWmBZSBroC
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王汾 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王汾 之父／母。
          source:
            id: s_hgjii-aK-FPrIWmBZSBroC
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 282009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282009&o=json
            external_identifier: CBDB:282009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwcinwtNvRNP4ZKMYFZNSt
        status: active
        display_name: 王汾
        merged_into_person_id: null
    - claim:
        id: c_WIxC9tmsrVz-16aLwyIzDD
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ka98ykn5WmnmYPVBjnYQHP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iL9OBaKKypPA6GqQBAOr4M
          claim_id: c_WIxC9tmsrVz-16aLwyIzDD
          source_id: s_7gvL1jaZPw9Khl4D9HEXRW
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洵 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王洵 之父／母。
          source:
            id: s_7gvL1jaZPw9Khl4D9HEXRW
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 281998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281998&o=json
            external_identifier: CBDB:281998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ka98ykn5WmnmYPVBjnYQHP
        status: active
        display_name: 王洵
        merged_into_person_id: null
    - claim:
        id: c_qawYZdS8IAtV7U2p7wqCUY
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OtJqDb_J2rIWZJMX5Jttju
          claim_id: c_qawYZdS8IAtV7U2p7wqCUY
          source_id: s_H9I43kdBFDxa4vGkMjUM2e
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王可 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王可 之父／母。
          source:
            id: s_H9I43kdBFDxa4vGkMjUM2e
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 282003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json
            external_identifier: CBDB:282003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MnaMCeAh8tGpLvYiyvWACQ
        status: active
        display_name: 王可
        merged_into_person_id: null
    - claim:
        id: c_bJXEpAPqpwEhoctH7qA1VT
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTFqxG_0TmvV0AeUH9q8Nb
          claim_id: c_bJXEpAPqpwEhoctH7qA1VT
          source_id: s_EJnaySB4My-cIn_RtWbPKq
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王濬 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王濬 之父／母。
          source:
            id: s_EJnaySB4My-cIn_RtWbPKq
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 282001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json
            external_identifier: CBDB:282001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aGnwTJ3SbYM6TYDu3oTaSR
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_34_ewbGh9qBykxEqRyGgjF
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xhqt595RpzgjTyznQk9gLZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NIBjHZDH2SiftBx_It37s4
          claim_id: c_34_ewbGh9qBykxEqRyGgjF
          source_id: s_Tse_sZF9Ypu3H2uZk1hy-L
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王法 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王法 之父／母。
          source:
            id: s_Tse_sZF9Ypu3H2uZk1hy-L
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 282007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json
            external_identifier: CBDB:282007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xhqt595RpzgjTyznQk9gLZ
        status: active
        display_name: 王法
        merged_into_person_id: null
    - claim:
        id: c_frEgjXBB631OhbkzD782nG
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pD_vkZGwXTmUJq2B-NrQnG
          claim_id: c_frEgjXBB631OhbkzD782nG
          source_id: s_8a4vGVuqbkAioad1lt5oIy
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀛 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王瀛 之父／母。
          source:
            id: s_8a4vGVuqbkAioad1lt5oIy
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 282005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json
            external_identifier: CBDB:282005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xwfQAzxXNfMPWEyHRQresZ
        status: active
        display_name: 王瀛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鋀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鋀，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 281994） | accepted |
| name.primary | 王鋀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |
| children | p_3AokdZcYT8U75hh2eRDx4S | 王學 | accepted |
| children | p_7B549LaasamNja69qSEBtm | 王瀾 | accepted |
| children | p_9spu7KX9j35GAa5eR26Y8a | 王紀 | accepted |
| children | p_E5ejKQJp28b98X9an76Um2 | 王河 | accepted |
| children | p_ETDrZ5qP4w6vvdBqYMJLtX | 王潺 | accepted |
| children | p_FwcinwtNvRNP4ZKMYFZNSt | 王汾 | accepted |
| children | p_Ka98ykn5WmnmYPVBjnYQHP | 王洵 | accepted |
| children | p_MnaMCeAh8tGpLvYiyvWACQ | 王可 | accepted |
| children | p_aGnwTJ3SbYM6TYDu3oTaSR | 王濬 | accepted |
| children | p_xhqt595RpzgjTyznQk9gLZ | 王法 | accepted |
| children | p_xwfQAzxXNfMPWEyHRQresZ | 王瀛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潺（CBDB 282000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282000&o=json)
- [中国历代人物传记资料库：王法（CBDB 282007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json)
- [中国历代人物传记资料库：王汾（CBDB 282009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282009&o=json)
- [中国历代人物传记资料库：王河（CBDB 282006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282006&o=json)
- [中国历代人物传记资料库：王紀（CBDB 282002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282002&o=json)
- [中国历代人物传记资料库：王濬（CBDB 282001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json)
- [中国历代人物传记资料库：王可（CBDB 282003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 281999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281999&o=json)
- [中国历代人物传记资料库：王鋀（CBDB 281994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json)
- [中国历代人物传记资料库：王學（CBDB 282004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json)
- [中国历代人物传记资料库：王洵（CBDB 281998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281998&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 282005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json)
