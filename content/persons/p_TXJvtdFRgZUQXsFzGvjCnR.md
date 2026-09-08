---
schema: wang-person/v1
id: p_TXJvtdFRgZUQXsFzGvjCnR
status: active
merged_into: null
display_name: 王世规
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDAytzq8pygJyavCW8M4RN
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世规，宋人物。CBDB 记录其籍贯记录为德安，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 17818 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m85dA86ESaRSJrrbr17FcN
          claim_id: c_KDAytzq8pygJyavCW8M4RN
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: null
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
        - id: cs_d_ajjCtKazHtaA3myDVvG-
          claim_id: c_KDAytzq8pygJyavCW8M4RN
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: CBDB:17818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oZ8FUmi4ParDvo6iRQHSxk
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世规
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1qCX1KauJ7JwR5rJa4TSF1
          claim_id: c_oZ8FUmi4ParDvo6iRQHSxk
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: Q45387330
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
        - id: cs_aYo3n4sgFvXr6qvBGFNGKr
          claim_id: c_oZ8FUmi4ParDvo6iRQHSxk
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: Q45387330
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xQ6ojZBk4RH4HgfjsaxYv4
        subject_person_id: p_9UwDT9fs142EB3GvRsQLfL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ALyAWxGKBdin3gWX3BCo4F
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_cSYRH9ZFJM3DEQ7pFE1k67
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_QQn29PxFMX8EzvWMUNKErk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQn29PxFMX8EzvWMUNKErk
            source_type: api_record
            title: 维基数据：王承寿（Q45406224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45406224
            external_identifier: Q45406224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_aXau6hU5D7kaqPNM3MS4m6
          claim_id: c_xQ6ojZBk4RH4HgfjsaxYv4
          source_id: s_ps7vvtKuB1AovCDojRD8d9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ps7vvtKuB1AovCDojRD8d9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承壽（24463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24463&o=json
            external_identifier: CBDB:24463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.015Z
            metadata_json: null
      object_person:
        id: p_9UwDT9fs142EB3GvRsQLfL
        status: active
        display_name: 王承寿
        merged_into_person_id: null
  children:
    - claim:
        id: c_N6oLgPuKBNPjzKpgoP3XC6
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7oU8TBN5wMRJ7DC6NM1YHJ
          claim_id: c_N6oLgPuKBNPjzKpgoP3XC6
          source_id: s_AMCEA11HjgWEugGDaB86eR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMCEA11HjgWEugGDaB86eR
            source_type: api_record
            title: 维基数据：王韶（Q10417893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417893
            external_identifier: Q10417893
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
        - id: cs_7tk6ScBkNU6fpc3nVyHH8N
          claim_id: c_N6oLgPuKBNPjzKpgoP3XC6
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
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_E2iRSuEBTp3EHMeM3MGQNU
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE4sL9jW5Hc4NuJaSNf9Tu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9NhBoQt6J5qoiP93PMjYjV
          claim_id: c_E2iRSuEBTp3EHMeM3MGQNU
          source_id: s_ewbvH2LmxxKcNZzqymwqC6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ewbvH2LmxxKcNZzqymwqC6
            source_type: api_record
            title: 维基数据：王夏（Q45359489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359489
            external_identifier: Q45359489
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
        - id: cs_5gnWkV5ey5DJ7xedNCJXsF
          claim_id: c_E2iRSuEBTp3EHMeM3MGQNU
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_dQKpsCQ3givR9TybNg61ZE
          claim_id: c_E2iRSuEBTp3EHMeM3MGQNU
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_gE4sL9jW5Hc4NuJaSNf9Tu
        status: active
        display_name: 王夏
        merged_into_person_id: null
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
        - id: cs_mHX4S3jPs65uTGZTaWBoXV
          claim_id: c_ZZZR5YDxZoejrd1ZRPeCkR
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_CpxQhx4E48gBX7nqfNzQVD
          claim_id: c_ZZZR5YDxZoejrd1ZRPeCkR
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_W23we9byNz7nTFvjTHpgBS
        status: active
        display_name: 王振
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世规

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世规，宋人物。CBDB 记录其籍贯记录为德安，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 17818 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世规 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9UwDT9fs142EB3GvRsQLfL | 王承寿 | accepted |
| children | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |
| children | p_gE4sL9jW5Hc4NuJaSNf9Tu | 王夏 | accepted |
| children | p_W23we9byNz7nTFvjTHpgBS | 王振 | accepted |

## 外部来源

- [维基数据：王承寿（Q45406224）](https://www.wikidata.org/wiki/Q45406224)
- [维基数据：王韶（Q10417893）](https://www.wikidata.org/wiki/Q10417893)
- [维基数据：王世规（Q45387330）](https://www.wikidata.org/wiki/Q45387330)
- [维基数据：王夏（Q45359489）](https://www.wikidata.org/wiki/Q45359489)
- [维基数据：王振（Q45401681）](https://www.wikidata.org/wiki/Q45401681)
- [CBDB 中国历代人物传记资料库：王承壽（24463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24463&o=json)
- [CBDB 中国历代人物传记资料库：王世規（17818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17818&o=json)
