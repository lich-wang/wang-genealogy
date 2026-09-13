---
schema: wang-person/v1
id: p_FnKoSAfNuscoKyefuKvf8m
status: active
merged_into: null
display_name: 华叔阳
cbdb_id: 131528
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w60m6P7NYViuvsl9vvIknf
        subject_person_id: p_FnKoSAfNuscoKyefuKvf8m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 华叔阳，明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 131528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RyhGS1ONe657R7A_Km_Kdp
          claim_id: c_w60m6P7NYViuvsl9vvIknf
          source_id: s_Gn1Uky3kHW2tHKXgTHD9Ga
          stance: supports
          locator: CBDB:131528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gn1Uky3kHW2tHKXgTHD9Ga
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：華叔陽（131528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=131528&o=json
            external_identifier: CBDB:131528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:46:31.056Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yjws3sn3uHgH6DwjFxdJaA
        subject_person_id: p_FnKoSAfNuscoKyefuKvf8m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 华叔阳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BJPbZAgAzJhgzV1SAKnyu2
          claim_id: c_Yjws3sn3uHgH6DwjFxdJaA
          source_id: s_iigo2a2RsE9UED8U3mAFtk
          stance: supports
          locator: Q45593520
          quotation: null
          interpretation_note: null
          source:
            id: s_iigo2a2RsE9UED8U3mAFtk
            source_type: api_record
            title: 维基数据：华叔阳（Q45593520）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45593520
            external_identifier: Q45593520
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.696Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%8F%AF%E5%8F%94%E9%99%BD
        - id: cs_d5ec3DJmofsnEar1jUpBhK
          claim_id: c_Yjws3sn3uHgH6DwjFxdJaA
          source_id: s_Gn1Uky3kHW2tHKXgTHD9Ga
          stance: supports
          locator: Q45593520
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bG7GMJVb9wtte9FeBPSha3
        subject_person_id: p_FnKoSAfNuscoKyefuKvf8m
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_541bqqv1wPikGaXWrBMHKD
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_CCLQ1pJRTuuEF2NxgNkKEX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CCLQ1pJRTuuEF2NxgNkKEX
            source_type: api_record
            title: 维基数据：王氏（Q65861019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861019
            external_identifier: Q65861019
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_ZyxVPQNnJNyHdGLyLXzcNR
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source:
            id: s_vyhTKFDzDCgZDcw7SYs5du
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（333679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json
            external_identifier: CBDB:333679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:01.436Z
            metadata_json: null
        - id: cs_wfJBcLM4jrxPnvDFdg143Y
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_iigo2a2RsE9UED8U3mAFtk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iigo2a2RsE9UED8U3mAFtk
            source_type: api_record
            title: 维基数据：华叔阳（Q45593520）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45593520
            external_identifier: Q45593520
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.696Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%8F%AF%E5%8F%94%E9%99%BD
      object_person:
        id: p_cZvYCBgN67MGf6TAYHFPB7
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c__DIZ2yF0QXNTg0kLnIGrZs
        subject_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FnKoSAfNuscoKyefuKvf8m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-47A0oG25_0OwrDJm66G4z
          claim_id: c__DIZ2yF0QXNTg0kLnIGrZs
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第十一名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vyhTKFDzDCgZDcw7SYs5du
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（333679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json
            external_identifier: CBDB:333679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:01.436Z
            metadata_json: null
      object_person:
        id: p_cZvYCBgN67MGf6TAYHFPB7
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 华叔阳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 华叔阳，明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 131528） | accepted |
| name.primary | 华叔阳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cZvYCBgN67MGf6TAYHFPB7 | 王氏 | accepted |
| spouses | p_cZvYCBgN67MGf6TAYHFPB7 | 王氏 | accepted |

## 外部来源

- [维基数据：华叔阳（Q45593520）](https://www.wikidata.org/wiki/Q45593520)
- [维基数据：王氏（Q65861019）](https://www.wikidata.org/wiki/Q65861019)
- [CBDB 中国历代人物传记资料库：華叔陽（131528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=131528&o=json)
- [CBDB 中国历代人物传记资料库：王氏（333679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json)
