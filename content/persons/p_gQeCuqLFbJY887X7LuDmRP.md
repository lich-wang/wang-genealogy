---
schema: wang-person/v1
id: p_gQeCuqLFbJY887X7LuDmRP
status: active
merged_into: null
display_name: 王世忠
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mMps9tfY334hj6j7ZohJ7
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sN78UkP9ynimu4iU2NJzsx
          claim_id: c_9mMps9tfY334hj6j7ZohJ7
          source_id: s_Wm8g3XGtb5772AraWM4A8A
          stance: supports
          locator: CBDB:297275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297275）
          source: &a1
            id: s_Wm8g3XGtb5772AraWM4A8A
            source_type: api_record
            title: 中国历代人物传记资料库：王世忠（CBDB 297275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297275&o=json
            external_identifier: CBDB:297275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDkLW6L5Qpd3T7pn1xvAu2
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世忠，明人物。嘉靖十四年進士，籍贯代州，入仕監生，曾任典史、知州、主簿。（中国历代人物传记资料库 CBDB 297275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pv5UYrLwphJ21aXqR_oT0M
          claim_id: c_RDkLW6L5Qpd3T7pn1xvAu2
          source_id: s_Wm8g3XGtb5772AraWM4A8A
          stance: supports
          locator: CBDB:297275
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_diElRp8-1s--84dUn4NyIt
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YpZ31tuPrK3Zy_2Z5I1-d
          claim_id: c_diElRp8-1s--84dUn4NyIt
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vKbHuxPyeqDcM9pzGKeEoA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 126784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json
            external_identifier: CBDB:126784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
    - claim:
        id: c__-TxN32pDGC0vOln4ZBvW9
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DRJCw6nRUVx71c5a1FgJsY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4S-WNGcQzIKWGwT7T9NDfQ
          claim_id: c__-TxN32pDGC0vOln4ZBvW9
          source_id: s_2W9AWzadUAbKBA6GbikEZK
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢眾 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢眾 之父／母。
          source:
            id: s_2W9AWzadUAbKBA6GbikEZK
            source_type: api_record
            title: 中国历代人物传记资料库：王夢眾（CBDB 297284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297284&o=json
            external_identifier: CBDB:297284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DRJCw6nRUVx71c5a1FgJsY
        status: active
        display_name: 王夢眾
        merged_into_person_id: null
    - claim:
        id: c_5cHKarHgP5DAy5OO7b0SzE
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GSdLSx7MZP779ADvNNYsun
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AGx_rtNbpaaLXGgwUfiIuj
          claim_id: c_5cHKarHgP5DAy5OO7b0SzE
          source_id: s_927izC9kuKjpkc2dkQ7R7r
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢旐 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢旐 之父／母。
          source:
            id: s_927izC9kuKjpkc2dkQ7R7r
            source_type: api_record
            title: 中国历代人物传记资料库：王夢旐（CBDB 297282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297282&o=json
            external_identifier: CBDB:297282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GSdLSx7MZP779ADvNNYsun
        status: active
        display_name: 王夢旐
        merged_into_person_id: null
    - claim:
        id: c_r7Tg9Urdz5w-bWwMP2P1Vf
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JtoiuDAY7QeSdGJgYKMuma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFxhfTxtVN7QJoudglaCMc
          claim_id: c_r7Tg9Urdz5w-bWwMP2P1Vf
          source_id: s_XfMcp6rVAnSodEhfGiK8n_
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢羆 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢羆 之父／母。
          source:
            id: s_XfMcp6rVAnSodEhfGiK8n_
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羆（CBDB 297286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json
            external_identifier: CBDB:297286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JtoiuDAY7QeSdGJgYKMuma
        status: active
        display_name: 王夢羆
        merged_into_person_id: null
    - claim:
        id: c_9Q57iuguSiLI_SuqbkKrI8
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TYAHXGPQbZxUXTxQeL8qfz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtBbrCLgZh4skYVM_jN64U
          claim_id: c_9Q57iuguSiLI_SuqbkKrI8
          source_id: s_S43j9sBA-KJncfkhSiHZ78
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢槐 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢槐 之父／母。
          source:
            id: s_S43j9sBA-KJncfkhSiHZ78
            source_type: api_record
            title: 中国历代人物传记资料库：王夢槐（CBDB 297285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297285&o=json
            external_identifier: CBDB:297285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TYAHXGPQbZxUXTxQeL8qfz
        status: active
        display_name: 王夢槐
        merged_into_person_id: null
    - claim:
        id: c_g30fK3yE48-7hFG00Gw_0l
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVNd9HYorAIhUoQGoBFN0T
          claim_id: c_g30fK3yE48-7hFG00Gw_0l
          source_id: s_xCl954KktwfIaKfqvY6YBX
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢熊 与 王夢弼 为同胞（CBDB 记「弟」），王夢弼 之父／母即 王夢熊 之父／母。
          source:
            id: s_xCl954KktwfIaKfqvY6YBX
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 297278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json
            external_identifier: CBDB:297278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YQh2UnWjAUpFCsSFq5tiaF
        status: active
        display_name: 王夢熊
        merged_into_person_id: null
    - claim:
        id: c_JrS7bxBcJ5nR9Jh3742yYH
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iaPzaKLLZPWLhg19vBaqyb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZS2nL6t9XRPzL9kVVr4N1r
          claim_id: c_JrS7bxBcJ5nR9Jh3742yYH
          source_id: s_9DCsYX-VMLZ-sfrZd_nm5T
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢松 与 王夢弼 为同胞（CBDB 记「弟」），王夢弼 之父／母即 王夢松 之父／母。
          source:
            id: s_9DCsYX-VMLZ-sfrZd_nm5T
            source_type: api_record
            title: 中国历代人物传记资料库：王夢松（CBDB 297281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297281&o=json
            external_identifier: CBDB:297281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iaPzaKLLZPWLhg19vBaqyb
        status: active
        display_name: 王夢松
        merged_into_person_id: null
    - claim:
        id: c_kzA9lIaT7CTZqp_PKBPuLI
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kQJBgYox8247LCHAQbQ3L5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6ZZ2SHJHrsg_9H5FF-nW-
          claim_id: c_kzA9lIaT7CTZqp_PKBPuLI
          source_id: s_74k5g9njJ6ViyOfx5uAeg8
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢曉 与 王夢弼 为同胞（CBDB 记「弟」），王夢弼 之父／母即 王夢曉 之父／母。
          source:
            id: s_74k5g9njJ6ViyOfx5uAeg8
            source_type: api_record
            title: 中国历代人物传记资料库：王夢曉（CBDB 297279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json
            external_identifier: CBDB:297279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kQJBgYox8247LCHAQbQ3L5
        status: active
        display_name: 王夢曉
        merged_into_person_id: null
    - claim:
        id: c_K5fV0YAvVwF0sDeuVXKOSG
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHYLCKYqk2PWKCXm6atJ86
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4UARsdogv50b9CsT3knybs
          claim_id: c_K5fV0YAvVwF0sDeuVXKOSG
          source_id: s_XFiUlJjNzSh4jWrwvcdjKC
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢旟 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢旟 之父／母。
          source:
            id: s_XFiUlJjNzSh4jWrwvcdjKC
            source_type: api_record
            title: 中国历代人物传记资料库：王夢旟（CBDB 297283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297283&o=json
            external_identifier: CBDB:297283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xHYLCKYqk2PWKCXm6atJ86
        status: active
        display_name: 王夢旟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世忠 | accepted |
| bio.summary | 王世忠，明人物。嘉靖十四年進士，籍贯代州，入仕監生，曾任典史、知州、主簿。（中国历代人物传记资料库 CBDB 297275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |
| children | p_DRJCw6nRUVx71c5a1FgJsY | 王夢眾 | accepted |
| children | p_GSdLSx7MZP779ADvNNYsun | 王夢旐 | accepted |
| children | p_JtoiuDAY7QeSdGJgYKMuma | 王夢羆 | accepted |
| children | p_TYAHXGPQbZxUXTxQeL8qfz | 王夢槐 | accepted |
| children | p_YQh2UnWjAUpFCsSFq5tiaF | 王夢熊 | accepted |
| children | p_iaPzaKLLZPWLhg19vBaqyb | 王夢松 | accepted |
| children | p_kQJBgYox8247LCHAQbQ3L5 | 王夢曉 | accepted |
| children | p_xHYLCKYqk2PWKCXm6atJ86 | 王夢旟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢弼（CBDB 126784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json)
- [中国历代人物传记资料库：王夢槐（CBDB 297285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297285&o=json)
- [中国历代人物传记资料库：王夢羆（CBDB 297286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json)
- [中国历代人物传记资料库：王夢松（CBDB 297281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297281&o=json)
- [中国历代人物传记资料库：王夢曉（CBDB 297279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json)
- [中国历代人物传记资料库：王夢熊（CBDB 297278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json)
- [中国历代人物传记资料库：王夢旟（CBDB 297283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297283&o=json)
- [中国历代人物传记资料库：王夢旐（CBDB 297282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297282&o=json)
- [中国历代人物传记资料库：王夢眾（CBDB 297284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297284&o=json)
- [中国历代人物传记资料库：王世忠（CBDB 297275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297275&o=json)
