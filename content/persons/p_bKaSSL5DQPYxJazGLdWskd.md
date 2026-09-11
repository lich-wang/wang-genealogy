---
schema: wang-person/v1
id: p_bKaSSL5DQPYxJazGLdWskd
status: active
merged_into: null
display_name: 王裕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEnBibHGKiyLBR79MEgqSR
        subject_person_id: p_bKaSSL5DQPYxJazGLdWskd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XH54Y7DqdJBh41sXrKi6HF
          claim_id: c_hEnBibHGKiyLBR79MEgqSR
          source_id: s_mwJD2VykhQso2nAzRLNFXE
          stance: supports
          locator: CBDB:170011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170011）
          source: &a1
            id: s_mwJD2VykhQso2nAzRLNFXE
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 170011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170011&o=json
            external_identifier: CBDB:170011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_n34Ce5dA4Lprmr7njPzAHj
        subject_person_id: p_bKaSSL5DQPYxJazGLdWskd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1yM5DP2ToMJP6HwocKKte
          claim_id: c_n34Ce5dA4Lprmr7njPzAHj
          source_id: s_mwJD2VykhQso2nAzRLNFXE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fg4MAiCmisJ8g1KyYLA6BP
        subject_person_id: p_bKaSSL5DQPYxJazGLdWskd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4oYzPr9f28uaJPhnx9Udz4
          claim_id: c_fg4MAiCmisJ8g1KyYLA6BP
          source_id: s_mwJD2VykhQso2nAzRLNFXE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dYXcy0GzNVWkcuIWqyMuck
        subject_person_id: p_W7WaER6HRxudKTTBYr4Ed2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bKaSSL5DQPYxJazGLdWskd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afsX-KE-jgZnAyN_UqLdI2
          claim_id: c_dYXcy0GzNVWkcuIWqyMuck
          source_id: s_mwJD2VykhQso2nAzRLNFXE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W7WaER6HRxudKTTBYr4Ed2
        status: active
        display_name: 王諗
        merged_into_person_id: null
  children:
    - claim:
        id: c_QRbkDwnOJprbucLRjG3t0B
        subject_person_id: p_bKaSSL5DQPYxJazGLdWskd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GLAuP8mfCJ5qhAzfzprTQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnZzF7PrUkLRbSZW-yaU3j
          claim_id: c_QRbkDwnOJprbucLRjG3t0B
          source_id: s_sjyocE5sEpVVamUeSLW4P3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sjyocE5sEpVVamUeSLW4P3
            source_type: api_record
            title: 中国历代人物传记资料库：王茂章（CBDB 169312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169312&o=json
            external_identifier: CBDB:169312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GLAuP8mfCJ5qhAzfzprTQ
        status: active
        display_name: 王茂章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| death.date | 878年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W7WaER6HRxudKTTBYr4Ed2 | 王諗 | accepted |
| children | p_5GLAuP8mfCJ5qhAzfzprTQ | 王茂章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂章（CBDB 169312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169312&o=json)
- [中国历代人物传记资料库：王裕（CBDB 170011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170011&o=json)
