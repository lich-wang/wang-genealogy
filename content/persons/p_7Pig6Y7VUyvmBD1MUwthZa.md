---
schema: wang-person/v1
id: p_7Pig6Y7VUyvmBD1MUwthZa
status: active
merged_into: null
display_name: 王勔
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CauwhshWzc6H3VMEKPRqgp
        subject_person_id: p_7Pig6Y7VUyvmBD1MUwthZa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王勔（卒于697年），唐人物。CBDB 记录其籍贯记录为龍門，身份包括詩人，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 30980 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NsQiCP4biK4NxtWNYWv6WQ
          claim_id: c_CauwhshWzc6H3VMEKPRqgp
          source_id: s_UZsHa8e6u8wx6hx6ym22MQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UZsHa8e6u8wx6hx6ym22MQ
            source_type: api_record
            title: 维基数据：王勔（Q45418879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418879
            external_identifier: Q45418879
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:23.837Z
            metadata_json: null
        - id: cs_NP1bfQ35-qB8goONnWJHfZ
          claim_id: c_CauwhshWzc6H3VMEKPRqgp
          source_id: s_Erh9MFrsAQ1i612GUm5gYh
          stance: supports
          locator: CBDB:30980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Erh9MFrsAQ1i612GUm5gYh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勔（30980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30980&o=json
            external_identifier: CBDB:30980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:23.966Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7VGkDg9KxqxAzvhosoVcLq
        subject_person_id: p_7Pig6Y7VUyvmBD1MUwthZa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 697年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0697-01-01
            latest: 0697-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tmZkRE8uHKGKnsbMc7AykM
          claim_id: c_7VGkDg9KxqxAzvhosoVcLq
          source_id: s_UZsHa8e6u8wx6hx6ym22MQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UZsHa8e6u8wx6hx6ym22MQ
            source_type: api_record
            title: 维基数据：王勔（Q45418879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418879
            external_identifier: Q45418879
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:23.837Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QE5VD55moPspnxU8KfiR9H
        subject_person_id: p_7Pig6Y7VUyvmBD1MUwthZa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7aEt2JM8qz6GYH7GRSXDim
          claim_id: c_QE5VD55moPspnxU8KfiR9H
          source_id: s_UZsHa8e6u8wx6hx6ym22MQ
          stance: supports
          locator: Q45418879
          quotation: null
          interpretation_note: null
          source:
            id: s_UZsHa8e6u8wx6hx6ym22MQ
            source_type: api_record
            title: 维基数据：王勔（Q45418879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418879
            external_identifier: Q45418879
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:23.837Z
            metadata_json: null
        - id: cs_UoCPAa2F4BkKG9LN67W4GC
          claim_id: c_QE5VD55moPspnxU8KfiR9H
          source_id: s_Erh9MFrsAQ1i612GUm5gYh
          stance: supports
          locator: Q45418879
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dh9siP1ieWBG4D5gPYzxN3
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Pig6Y7VUyvmBD1MUwthZa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mm3RcdWES2B5HGnY2oWJF4
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_teYhMDYEY1dN3wF8Aajyvy
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_fVDB18rDLDQB93JrEAdCxx
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_UZsHa8e6u8wx6hx6ym22MQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UZsHa8e6u8wx6hx6ym22MQ
            source_type: api_record
            title: 维基数据：王勔（Q45418879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418879
            external_identifier: Q45418879
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:23.837Z
            metadata_json: null
        - id: cs_KrqDuLu9gMhWfHq9rtNMJa
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_Erh9MFrsAQ1i612GUm5gYh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Erh9MFrsAQ1i612GUm5gYh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勔（30980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30980&o=json
            external_identifier: CBDB:30980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:23.966Z
            metadata_json: null
      object_person:
        id: p_fCpXRw3ympYVRWdSX3T5cq
        status: active
        display_name: 王福畤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勔（卒于697年），唐人物。CBDB 记录其籍贯记录为龍門，身份包括詩人，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 30980 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 697年 | accepted |
| name.primary | 王勔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fCpXRw3ympYVRWdSX3T5cq | 王福畤 | accepted |

## 外部来源

- [维基数据：王勔（Q45418879）](https://www.wikidata.org/wiki/Q45418879)
- [維基數據：王福畤（Q18905529）](https://www.wikidata.org/wiki/Q18905529)
- [CBDB 中国历代人物传记资料库：王福畤（30885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json)
- [CBDB 中国历代人物传记资料库：王勔（30980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30980&o=json)
