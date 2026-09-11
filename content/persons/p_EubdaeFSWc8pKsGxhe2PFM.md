---
schema: wang-person/v1
id: p_EubdaeFSWc8pKsGxhe2PFM
status: active
merged_into: null
display_name: 王學古
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2vTLhZWSyhVJjTj4Bp7Ka
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8aBkhovHYMnCpeRXD3z5hr
          claim_id: c_L2vTLhZWSyhVJjTj4Bp7Ka
          source_id: s_JPgUEN1u7YPCqTPCBashqU
          stance: supports
          locator: CBDB:205095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205095）
          source: &a1
            id: s_JPgUEN1u7YPCqTPCBashqU
            source_type: api_record
            title: 中国历代人物传记资料库：王學古（CBDB 205095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205095&o=json
            external_identifier: CBDB:205095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BTkKc8tgtj97nWTA2F79kt
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KZkEWt64aTtt1LGjDeapU
          claim_id: c_BTkKc8tgtj97nWTA2F79kt
          source_id: s_JPgUEN1u7YPCqTPCBashqU
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
        id: c_ze9Y4KtyJ2B9mi8xtXptBL
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tT7sChnXGKBwDrNJaSAo2w
          claim_id: c_ze9Y4KtyJ2B9mi8xtXptBL
          source_id: s_JPgUEN1u7YPCqTPCBashqU
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
        id: c_SnhpLj1dfndDldT9yzANsl
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LymFw1VWJbC8JscJ7YZvWZ
          claim_id: c_SnhpLj1dfndDldT9yzANsl
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WWo3kG2R2Pqv7JiMi5mLqk
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 328246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json
            external_identifier: CBDB:328246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4rZFET2VU5QfJTezy8ktoQ
        status: active
        display_name: 王來召
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DRRxxVUzYLFNnuBaMGj4Le
        subject_person_id: p_AEoLvxREWsQv64x31fvdPq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjRtqRGi7rvOfPckAPciif
          claim_id: c_DRRxxVUzYLFNnuBaMGj4Le
          source_id: s_BeBTYcMcFuseukqVQsTkow
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BeBTYcMcFuseukqVQsTkow
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 328245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328245&o=json
            external_identifier: CBDB:328245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AEoLvxREWsQv64x31fvdPq
        status: active
        display_name: 王夔
        merged_into_person_id: null
    - claim:
        id: c_3mjTmYRtZN_DRjM2TQRq96
        subject_person_id: p_NW1w6vJKoibfXJvGkuM1JG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVKa0CWw2ibeEmHGwgWPyJ
          claim_id: c_3mjTmYRtZN_DRjM2TQRq96
          source_id: s_kQnAFasSQ9pPy7CXdEnMBY
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kQnAFasSQ9pPy7CXdEnMBY
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 328244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json
            external_identifier: CBDB:328244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NW1w6vJKoibfXJvGkuM1JG
        status: active
        display_name: 王文美
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王學古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學古 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| ancestors | p_AEoLvxREWsQv64x31fvdPq | 王夔 | accepted |
| ancestors | p_NW1w6vJKoibfXJvGkuM1JG | 王文美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 328245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328245&o=json)
- [中国历代人物传记资料库：王來召（CBDB 328246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json)
- [中国历代人物传记资料库：王文美（CBDB 328244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328244&o=json)
- [中国历代人物传记资料库：王學古（CBDB 205095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205095&o=json)
