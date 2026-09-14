---
schema: wang-person/v1
id: p_1bhXJAXaVpf689XsatKT86
status: active
merged_into: null
display_name: 王公冕
cbdb_id: 332833
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smq1R5GXgQ1LJRsGfCBpRU
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公冕，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_K8PcDea7dXHdUrMP-C_0Z4
          claim_id: c_smq1R5GXgQ1LJRsGfCBpRU
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: CBDB:332833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCbJiMraMdjs5LF7G6TLP9
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aPqiB2UzBYKzW4wdnZRtSw
          claim_id: c_NCbJiMraMdjs5LF7G6TLP9
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: CBDB:332833
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yZC-wx0xvdiWDsIhDArEw-
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnA3xB0dWd-_vY-E-tf5Sn
          claim_id: c_yZC-wx0xvdiWDsIhDArEw-
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3mAauYa8M61LZB5CiRWcsN
        status: active
        display_name: 王崇
        merged_into_person_id: null
    - claim:
        id: c_waxi7Edq-1y9noLqpYftWd
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N7LCVcZXSYwiwG743AcXBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xPzWrcCEyGlNYlA6wP607c
          claim_id: c_waxi7Edq-1y9noLqpYftWd
          source_id: s_L385Zl8UjqkFasSWvL8-7I
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王崢 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王崢 之父／母。
          source:
            id: s_L385Zl8UjqkFasSWvL8-7I
            source_type: api_record
            title: 中国历代人物传记资料库：王崢（CBDB 332866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332866&o=json
            external_identifier: CBDB:332866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7LCVcZXSYwiwG743AcXBe
        status: active
        display_name: 王崢
        merged_into_person_id: null
    - claim:
        id: c_w9fAbN_GkiKZRm4RmWcCAo
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHZyG6MTFiLjXOwk7RsOMI
          claim_id: c_w9fAbN_GkiKZRm4RmWcCAo
          source_id: s_prXpst5PaW0FWrVUk_leZQ
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王嶸 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王嶸 之父／母。
          source:
            id: s_prXpst5PaW0FWrVUk_leZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嶸（CBDB 332922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json
            external_identifier: CBDB:332922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yap43sMPPgQeMHyWeaNJ3S
        status: active
        display_name: 王嶸
        merged_into_person_id: null
    - claim:
        id: c_Touh6kGxJyo7wCVwT_44J6
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCkuUqyrSEwXPGDf3QRiyw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t82z73KikwsVltgU8-IR0H
          claim_id: c_Touh6kGxJyo7wCVwT_44J6
          source_id: s_QbavqfopkkrKaYegBP_4su
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王嶨 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王嶨 之父／母。
          source:
            id: s_QbavqfopkkrKaYegBP_4su
            source_type: api_record
            title: 中国历代人物传记资料库：王嶨（CBDB 332911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332911&o=json
            external_identifier: CBDB:332911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCkuUqyrSEwXPGDf3QRiyw
        status: active
        display_name: 王嶨
        merged_into_person_id: null
    - claim:
        id: c_vpkBmV6u9sLlIJtDKCC35n
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dy27ajzh3QzQRxcmcsRwGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfyoipd5wvlZq4df1YZ8JK
          claim_id: c_vpkBmV6u9sLlIJtDKCC35n
          source_id: s_l3JHEU8bsb4nXF7KGUz4-2
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王岏 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王岏 之父／母。
          source:
            id: s_l3JHEU8bsb4nXF7KGUz4-2
            source_type: api_record
            title: 中国历代人物传记资料库：王岏（CBDB 332877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332877&o=json
            external_identifier: CBDB:332877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dy27ajzh3QzQRxcmcsRwGE
        status: active
        display_name: 王岏
        merged_into_person_id: null
    - claim:
        id: c_VKBrhWzWJDJYao1AXz27sy
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kv4sjC5VXhvz3Tw97ERrL6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy7yOgbPuU8IPiTREp2nRL
          claim_id: c_VKBrhWzWJDJYao1AXz27sy
          source_id: s_lQfjOL2tqGKES3mCWMXVaw
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王岫 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王岫 之父／母。
          source:
            id: s_lQfjOL2tqGKES3mCWMXVaw
            source_type: api_record
            title: 中国历代人物传记资料库：王岫（CBDB 332900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json
            external_identifier: CBDB:332900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kv4sjC5VXhvz3Tw97ERrL6
        status: active
        display_name: 王岫
        merged_into_person_id: null
    - claim:
        id: c_CPm4ysVAWpXvKS2a-b52Of
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qGcgjetyzP3K3Bq2Gw8v4X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yMl0adsvA6uGC8nQwIaRpX
          claim_id: c_CPm4ysVAWpXvKS2a-b52Of
          source_id: s_epgFCv9vaKwa5QuS-MU4Xp
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王嵩 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王嵩 之父／母。
          source:
            id: s_epgFCv9vaKwa5QuS-MU4Xp
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 332889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json
            external_identifier: CBDB:332889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGcgjetyzP3K3Bq2Gw8v4X
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公冕，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332833） | accepted |
| name.primary | 王公冕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3mAauYa8M61LZB5CiRWcsN | 王崇 | accepted |
| children | p_N7LCVcZXSYwiwG743AcXBe | 王崢 | accepted |
| children | p_Yap43sMPPgQeMHyWeaNJ3S | 王嶸 | accepted |
| children | p_cCkuUqyrSEwXPGDf3QRiyw | 王嶨 | accepted |
| children | p_dy27ajzh3QzQRxcmcsRwGE | 王岏 | accepted |
| children | p_kv4sjC5VXhvz3Tw97ERrL6 | 王岫 | accepted |
| children | p_qGcgjetyzP3K3Bq2Gw8v4X | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公冕（CBDB 332833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json)
- [中国历代人物传记资料库：王嶸（CBDB 332922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 332889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json)
- [中国历代人物传记资料库：王岏（CBDB 332877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332877&o=json)
- [中国历代人物传记资料库：王岫（CBDB 332900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332900&o=json)
- [中国历代人物传记资料库：王嶨（CBDB 332911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332911&o=json)
- [中国历代人物传记资料库：王崢（CBDB 332866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332866&o=json)
