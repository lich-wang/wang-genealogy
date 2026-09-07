---
schema: wang-person/v1
id: p_vCSXWHEEa1hukQBzvMQ9VV
status: active
merged_into: null
display_name: 王承偓
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9of5MTEVDJmNPyjXYSxT8T
        subject_person_id: p_vCSXWHEEa1hukQBzvMQ9VV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承偓，宋人物。CBDB 记录其籍贯记录为海北州，曾任閤門祗候。中国历代人物传记资料库（CBDB）以人物编号 17751 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Rj31JzxiXdNnk7cWKP12yK
          claim_id: c_9of5MTEVDJmNPyjXYSxT8T
          source_id: s_99yEoSjQJZkxUHQLJeCPnA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_99yEoSjQJZkxUHQLJeCPnA
            source_type: api_record
            title: 维基数据：王承偓（Q45387113）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387113
            external_identifier: Q45387113
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_Sf-kxYaZYshOKptbHCC8KV
          claim_id: c_9of5MTEVDJmNPyjXYSxT8T
          source_id: s_CY5oAxFeQ44ChXCrFG2vd9
          stance: supports
          locator: CBDB:17751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CY5oAxFeQ44ChXCrFG2vd9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承偓（17751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17751&o=json
            external_identifier: CBDB:17751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.748Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBrxTtp4WTFgSN1rDNHtkE
        subject_person_id: p_vCSXWHEEa1hukQBzvMQ9VV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承偓
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8HxKURHtAhjhKMw9YLUKiV
          claim_id: c_dBrxTtp4WTFgSN1rDNHtkE
          source_id: s_99yEoSjQJZkxUHQLJeCPnA
          stance: supports
          locator: Q45387113
          quotation: null
          interpretation_note: null
          source:
            id: s_99yEoSjQJZkxUHQLJeCPnA
            source_type: api_record
            title: 维基数据：王承偓（Q45387113）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387113
            external_identifier: Q45387113
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_hfLJ8vjkQhsvh7wYHJE4CV
          claim_id: c_dBrxTtp4WTFgSN1rDNHtkE
          source_id: s_CY5oAxFeQ44ChXCrFG2vd9
          stance: supports
          locator: Q45387113
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gMRgLwaY95Q4dCKDhVTEX5
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vCSXWHEEa1hukQBzvMQ9VV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pteTChXnuPByfs23G8hyP
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
          source_id: s_99yEoSjQJZkxUHQLJeCPnA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_99yEoSjQJZkxUHQLJeCPnA
            source_type: api_record
            title: 维基数据：王承偓（Q45387113）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387113
            external_identifier: Q45387113
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_33EocYo4BV57EhM5gNwLSY
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_xENpuVFCdYJGng5v6VfekN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王審琦（3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:41.447Z
            metadata_json: null
        - id: cs_kJXSUA1C8KaYa28wgrhm8c
          claim_id: c_gMRgLwaY95Q4dCKDhVTEX5
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DD7i8QKPn7xPVwKmB24Dfi
            source_type: api_record
            title: 维基数据：王审琦（Q15940340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940340
            external_identifier: Q15940340
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_jhAXJEb1U9Ldt73n9uUeLS
        status: active
        display_name: 王审琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承偓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承偓，宋人物。CBDB 记录其籍贯记录为海北州，曾任閤門祗候。中国历代人物传记资料库（CBDB）以人物编号 17751 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王承偓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |

## 外部来源

- [维基数据：王承偓（Q45387113）](https://www.wikidata.org/wiki/Q45387113)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [CBDB 中国历代人物传记资料库：王承偓（17751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17751&o=json)
- [CBDB 中国历代人物传记资料库：王審琦（3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
