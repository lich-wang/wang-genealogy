---
schema: wang-person/v1
id: p_W23we9byNz7nTFvjTHpgBS
status: active
merged_into: null
display_name: 王振
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2FMjtGGSjK4v2kSC92Amx
        subject_person_id: p_W23we9byNz7nTFvjTHpgBS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振，宋人物。CBDB 记录其籍贯记录为德安。中国历代人物传记资料库（CBDB）以人物编号 22013 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1JeQTXmXW6vM48TLBNhzYC
          claim_id: c_a2FMjtGGSjK4v2kSC92Amx
          source_id: s_U1B748Cu93AcdUeKM39JDf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_U1B748Cu93AcdUeKM39JDf
            source_type: api_record
            title: 维基数据：王振（Q45401681）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401681
            external_identifier: Q45401681
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_kXsIj-s7F1PM4rL-HAGaS-
          claim_id: c_a2FMjtGGSjK4v2kSC92Amx
          source_id: s_iGSUeJbRyNc1ZycggjwHJ7
          stance: supports
          locator: CBDB:22013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iGSUeJbRyNc1ZycggjwHJ7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王振（22013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22013&o=json
            external_identifier: CBDB:22013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.011Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCpK6Q7rS9LPGPCAZ7tBnB
        subject_person_id: p_W23we9byNz7nTFvjTHpgBS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NTNZ7YxKMpmKajbKsTfUay
          claim_id: c_qCpK6Q7rS9LPGPCAZ7tBnB
          source_id: s_iGSUeJbRyNc1ZycggjwHJ7
          stance: supports
          locator: Q45401681
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xnh4Y4sQ93JSGAbsy7kTKV
          claim_id: c_qCpK6Q7rS9LPGPCAZ7tBnB
          source_id: s_U1B748Cu93AcdUeKM39JDf
          stance: supports
          locator: Q45401681
          quotation: null
          interpretation_note: null
          source:
            id: s_U1B748Cu93AcdUeKM39JDf
            source_type: api_record
            title: 维基数据：王振（Q45401681）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401681
            external_identifier: Q45401681
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZZZR5YDxZoejrd1ZRPeCkR
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W23we9byNz7nTFvjTHpgBS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LcenUwZ26zV4enLW1AVg9q
          claim_id: c_ZZZR5YDxZoejrd1ZRPeCkR
          source_id: s_U1B748Cu93AcdUeKM39JDf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_mHX4S3jPs65uTGZTaWBoXV
          claim_id: c_ZZZR5YDxZoejrd1ZRPeCkR
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPzHqSAS1LsGaC1U81Firc
            source_type: api_record
            title: 维基数据：王世规（Q45387330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387330
            external_identifier: Q45387330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_CpxQhx4E48gBX7nqfNzQVD
          claim_id: c_ZZZR5YDxZoejrd1ZRPeCkR
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_HjaMgtangcVgf3VCL8yuSe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世規（17818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17818&o=json
            external_identifier: CBDB:17818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.406Z
            metadata_json: null
      object_person:
        id: p_TXJvtdFRgZUQXsFzGvjCnR
        status: active
        display_name: 王世规
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王振，宋人物。CBDB 记录其籍贯记录为德安。中国历代人物传记资料库（CBDB）以人物编号 22013 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王振 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TXJvtdFRgZUQXsFzGvjCnR | 王世规 | accepted |

## 外部来源

- [维基数据：王世规（Q45387330）](https://www.wikidata.org/wiki/Q45387330)
- [维基数据：王振（Q45401681）](https://www.wikidata.org/wiki/Q45401681)
- [CBDB 中国历代人物传记资料库：王世規（17818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17818&o=json)
- [CBDB 中国历代人物传记资料库：王振（22013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22013&o=json)
