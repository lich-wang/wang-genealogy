---
schema: wang-person/v1
id: p_vF3BNQJmoFCZph3f3LWH7k
status: active
merged_into: null
display_name: 王迪
cbdb_id: 175507
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q4g2A47wZt9LtzuBYfU7ns
        subject_person_id: p_vF3BNQJmoFCZph3f3LWH7k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪（卒于838年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175507 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jodp6M625YXGPYX3vW2QLw
          claim_id: c_Q4g2A47wZt9LtzuBYfU7ns
          source_id: s_aZv7btLyNQaHorMXH2GZQT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aZv7btLyNQaHorMXH2GZQT
            source_type: api_record
            title: 维基数据：王迪（Q45663715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663715
            external_identifier: Q45663715
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_j_MWshpq5o6c3H0fnEl2NN
          claim_id: c_Q4g2A47wZt9LtzuBYfU7ns
          source_id: s_4ekSrCmLKAaDBHAMn7vSFN
          stance: supports
          locator: CBDB:175507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4ekSrCmLKAaDBHAMn7vSFN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迪（175507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175507&o=json
            external_identifier: CBDB:175507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.284Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mHekKVE175M3GnmMgp7tRZ
        subject_person_id: p_vF3BNQJmoFCZph3f3LWH7k
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0838-01-01
            latest: 0838-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R7r8UQU6LAeTi8M7Nb3VFv
          claim_id: c_mHekKVE175M3GnmMgp7tRZ
          source_id: s_aZv7btLyNQaHorMXH2GZQT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aZv7btLyNQaHorMXH2GZQT
            source_type: api_record
            title: 维基数据：王迪（Q45663715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663715
            external_identifier: Q45663715
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbZSLNdDYTQtqpWNJd1uXd
        subject_person_id: p_vF3BNQJmoFCZph3f3LWH7k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NRt3ap62gf3z6eQihM2jDo
          claim_id: c_wbZSLNdDYTQtqpWNJd1uXd
          source_id: s_aZv7btLyNQaHorMXH2GZQT
          stance: supports
          locator: Q45663715
          quotation: null
          interpretation_note: null
          source:
            id: s_aZv7btLyNQaHorMXH2GZQT
            source_type: api_record
            title: 维基数据：王迪（Q45663715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663715
            external_identifier: Q45663715
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_dMJ53hb3VpiJMFNMu8iDKq
          claim_id: c_wbZSLNdDYTQtqpWNJd1uXd
          source_id: s_4ekSrCmLKAaDBHAMn7vSFN
          stance: supports
          locator: Q45663715
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ag4qbnLJxkn4WuALuXV9gN
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vF3BNQJmoFCZph3f3LWH7k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFpA6fTVrivv7m892GEBSf
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_SeK4xDLuNnanuvkekMLMAt
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_VkZS1mHMT2G7LbmXN6LT7y
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_aZv7btLyNQaHorMXH2GZQT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aZv7btLyNQaHorMXH2GZQT
            source_type: api_record
            title: 维基数据：王迪（Q45663715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663715
            external_identifier: Q45663715
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_9a6JDPmixxW3jxtdtB9KB4
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_4ekSrCmLKAaDBHAMn7vSFN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4ekSrCmLKAaDBHAMn7vSFN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迪（175507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175507&o=json
            external_identifier: CBDB:175507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.284Z
            metadata_json: null
      object_person:
        id: p_nKXmXJSn1SSK6HeL7KRZPW
        status: active
        display_name: 王润
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迪（卒于838年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175507 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 838年 | accepted |
| name.primary | 王迪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nKXmXJSn1SSK6HeL7KRZPW | 王润 | accepted |

## 外部来源

- [维基数据：王迪（Q45663715）](https://www.wikidata.org/wiki/Q45663715)
- [维基数据：王润（Q45663208）](https://www.wikidata.org/wiki/Q45663208)
- [CBDB 中国历代人物传记资料库：王迪（175507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175507&o=json)
- [CBDB 中国历代人物传记资料库：王潤（175498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json)
