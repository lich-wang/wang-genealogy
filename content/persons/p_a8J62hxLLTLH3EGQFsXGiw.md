---
schema: wang-person/v1
id: p_a8J62hxLLTLH3EGQFsXGiw
status: active
merged_into: null
display_name: 冀氏
cbdb_id: 282597
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bby8ljZe2mtpDjoVXkbnBc
        subject_person_id: p_a8J62hxLLTLH3EGQFsXGiw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 冀氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_cvC-yHDObi6sp878HNjgmz
          claim_id: c_bby8ljZe2mtpDjoVXkbnBc
          source_id: s_skCikYpCcMivM5f2JK3EQb
          stance: supports
          locator: CBDB:282597
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_skCikYpCcMivM5f2JK3EQb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：冀氏（282597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282597&o=json
            external_identifier: CBDB:282597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.582Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7AqptSr8PWWrtDAgoeC1Be
        subject_person_id: p_a8J62hxLLTLH3EGQFsXGiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 冀氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VQMZzv9NgQWidZGSYXEHP9
          claim_id: c_7AqptSr8PWWrtDAgoeC1Be
          source_id: s_skCikYpCcMivM5f2JK3EQb
          stance: supports
          locator: Q65837990
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yy24TgL3GRGCLVaypZ7S82
          claim_id: c_7AqptSr8PWWrtDAgoeC1Be
          source_id: s_kLVL5ivzJuKmKPgEyt7PZ5
          stance: supports
          locator: Q65837990
          quotation: null
          interpretation_note: null
          source:
            id: s_kLVL5ivzJuKmKPgEyt7PZ5
            source_type: api_record
            title: 维基数据：冀氏（Q65837990）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65837990
            external_identifier: Q65837990
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.411Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_u4EUAnNANGNXXYx8fmpB48
        subject_person_id: p_Uu3urkECTiPumEtH6sBydY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_a8J62hxLLTLH3EGQFsXGiw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R5ciKJRqJFCpwmtaXi89h1
          claim_id: c_u4EUAnNANGNXXYx8fmpB48
          source_id: s_C1ecq7ZgLdnhnPUti9bP2x
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：正德十二年進士登科錄:一卷
          source:
            id: s_C1ecq7ZgLdnhnPUti9bP2x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邦瑞（68262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68262&o=json
            external_identifier: CBDB:68262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:02.734Z
            metadata_json: null
        - id: cs_dM8TobRdiaW14YBGJ8nyPM
          claim_id: c_u4EUAnNANGNXXYx8fmpB48
          source_id: s_EmS3UhLTK9Hc6EoC789D6G
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_EmS3UhLTK9Hc6EoC789D6G
            source_type: api_record
            title: 维基数据：王邦瑞（Q15909508）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909508
            external_identifier: Q15909508
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:37.936Z
            metadata_json: null
        - id: cs_u9TQg34Pz5VGTECnFhdH6z
          claim_id: c_u4EUAnNANGNXXYx8fmpB48
          source_id: s_kLVL5ivzJuKmKPgEyt7PZ5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kLVL5ivzJuKmKPgEyt7PZ5
            source_type: api_record
            title: 维基数据：冀氏（Q65837990）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65837990
            external_identifier: Q65837990
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.411Z
            metadata_json: null
      object_person:
        id: p_Uu3urkECTiPumEtH6sBydY
        status: active
        display_name: 王邦瑞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 冀氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 冀氏，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282597） | accepted |
| name.primary | 冀氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Uu3urkECTiPumEtH6sBydY | 王邦瑞 | accepted |

## 外部来源

- [维基数据：冀氏（Q65837990）](https://www.wikidata.org/wiki/Q65837990)
- [维基数据：王邦瑞（Q15909508）](https://www.wikidata.org/wiki/Q15909508)
- [CBDB 中国历代人物传记资料库：冀氏（282597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282597&o=json)
- [CBDB 中国历代人物传记资料库：王邦瑞（68262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68262&o=json)
