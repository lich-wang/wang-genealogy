---
schema: wang-person/v1
id: p_RntJXBiuJxcZMFp7Co29uq
status: active
merged_into: null
display_name: 王济
cbdb_id: 175489
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BnBdjFgpEWEiWfhYrs46nE
        subject_person_id: p_RntJXBiuJxcZMFp7Co29uq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王济（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任奉御。中国历代人物传记资料库（CBDB）以人物编号 175489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6UDGSMSoAX6txC6NAV3Gc2
          claim_id: c_BnBdjFgpEWEiWfhYrs46nE
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_nTDVTE8Dt_aDUJ9ddG1KFz
          claim_id: c_BnBdjFgpEWEiWfhYrs46nE
          source_id: s_GE4LTDmRWSam675rU54UCT
          stance: supports
          locator: CBDB:175489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GE4LTDmRWSam675rU54UCT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濟（175489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json
            external_identifier: CBDB:175489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.840Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wnF9X3UJxPHJ62i6vM261b
        subject_person_id: p_RntJXBiuJxcZMFp7Co29uq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VySvCDfYkgaex8D5LaWiq6
          claim_id: c_wnF9X3UJxPHJ62i6vM261b
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXzJC4FtxkJ21HV8hBAAFs
        subject_person_id: p_RntJXBiuJxcZMFp7Co29uq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王济
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QoZtQUQr6NCNEZ1CNVbmV9
          claim_id: c_DXzJC4FtxkJ21HV8hBAAFs
          source_id: s_GE4LTDmRWSam675rU54UCT
          stance: supports
          locator: Q45662692
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_X4g6oNSCxkryk783sHrfgw
          claim_id: c_DXzJC4FtxkJ21HV8hBAAFs
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: Q45662692
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R5fx5qG4AkdAK2a2YyxBPw
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RntJXBiuJxcZMFp7Co29uq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wnfPJzk4bpcsPb8Q9hkEVY
          claim_id: c_R5fx5qG4AkdAK2a2YyxBPw
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_zBZ2iXDN9gxCHwBFLqjb9A
          claim_id: c_R5fx5qG4AkdAK2a2YyxBPw
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_o2Gzwf4P9A7gz7W3YL575x
          claim_id: c_R5fx5qG4AkdAK2a2YyxBPw
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_rS9H2VL5AeNFfuHE1hHtXn
          claim_id: c_R5fx5qG4AkdAK2a2YyxBPw
          source_id: s_GE4LTDmRWSam675rU54UCT
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GE4LTDmRWSam675rU54UCT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濟（175489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json
            external_identifier: CBDB:175489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.840Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_WLGgiJPMGKg2PF6atCY5g9
        subject_person_id: p_RntJXBiuJxcZMFp7Co29uq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cAiShWPq5ZHK7zJ2C7oeN4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hdygjps4P4mLPAkw8K8N5U
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_sKx65iD9n9hf8HAcEkzzhW
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_GE4LTDmRWSam675rU54UCT
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GE4LTDmRWSam675rU54UCT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濟（175489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json
            external_identifier: CBDB:175489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.840Z
            metadata_json: null
        - id: cs_HRrWmuSK65HAHf88iUnXyX
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_zp21PNo6zWqr156dwfrj9E
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zp21PNo6zWqr156dwfrj9E
            source_type: api_record
            title: 维基数据：王源永（Q45662751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662751
            external_identifier: Q45662751
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_s1X6Tk6EEcxhbv9yfS46sV
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_Q15fCXs7ePEQAz75xS7Nsr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Q15fCXs7ePEQAz75xS7Nsr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源永（175490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175490&o=json
            external_identifier: CBDB:175490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.803Z
            metadata_json: null
      object_person:
        id: p_cAiShWPq5ZHK7zJ2C7oeN4
        status: active
        display_name: 王源永
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王济

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王济（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任奉御。中国历代人物传记资料库（CBDB）以人物编号 175489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王济 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_cAiShWPq5ZHK7zJ2C7oeN4 | 王源永 | accepted |

## 外部来源

- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王济（Q45662692）](https://www.wikidata.org/wiki/Q45662692)
- [维基数据：王源永（Q45662751）](https://www.wikidata.org/wiki/Q45662751)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王濟（175489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json)
- [CBDB 中国历代人物传记资料库：王源永（175490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175490&o=json)
