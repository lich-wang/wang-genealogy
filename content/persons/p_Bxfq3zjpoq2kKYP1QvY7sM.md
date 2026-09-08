---
schema: wang-person/v1
id: p_Bxfq3zjpoq2kKYP1QvY7sM
status: active
merged_into: null
display_name: 王世融
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FrU4M7X5pKhFqPmecyuXbn
        subject_person_id: p_Bxfq3zjpoq2kKYP1QvY7sM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世融，宋人物。CBDB 记录其籍贯记录为海北州，入仕记录为軍員轉補，曾任尚書左僕射。中国历代人物传记资料库（CBDB）以人物编号 3972 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5y9wy3Rf5QzWoZ3C72FNih
          claim_id: c_FrU4M7X5pKhFqPmecyuXbn
          source_id: s_jvpVhi8Dn6ZYk8DHKdDRT1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_jvpVhi8Dn6ZYk8DHKdDRT1
            source_type: api_record
            title: 维基数据：王世融（Q45363002）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363002
            external_identifier: Q45363002
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.114Z
            metadata_json: null
        - id: cs_ei50F-YV1IcG1c3HW1puIh
          claim_id: c_FrU4M7X5pKhFqPmecyuXbn
          source_id: s_JwHhzmm8rehrsyPhhkBDsr
          stance: supports
          locator: CBDB:3972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JwHhzmm8rehrsyPhhkBDsr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世融（3972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3972&o=json
            external_identifier: CBDB:3972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:54.286Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcgb5847jWWxRvx2VzXCMJ
        subject_person_id: p_Bxfq3zjpoq2kKYP1QvY7sM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世融
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K5YnNidWPe3nGJ1AgxN1Mf
          claim_id: c_bcgb5847jWWxRvx2VzXCMJ
          source_id: s_JwHhzmm8rehrsyPhhkBDsr
          stance: supports
          locator: Q45363002
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qcDyhJ1cQPhExjmnnvcwg9
          claim_id: c_bcgb5847jWWxRvx2VzXCMJ
          source_id: s_jvpVhi8Dn6ZYk8DHKdDRT1
          stance: supports
          locator: Q45363002
          quotation: null
          interpretation_note: null
          source:
            id: s_jvpVhi8Dn6ZYk8DHKdDRT1
            source_type: api_record
            title: 维基数据：王世融（Q45363002）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363002
            external_identifier: Q45363002
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.114Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tqQ5NDXWJETK2mH3CFovQ2
        subject_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxfq3zjpoq2kKYP1QvY7sM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZYJiVYdmF7cuEsvT8UbBs1
          claim_id: c_tqQ5NDXWJETK2mH3CFovQ2
          source_id: s_5h3ogmep1VLLiYxHP9RUqR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5h3ogmep1VLLiYxHP9RUqR
            source_type: api_record
            title: 维基数据：王承衍（Q28415659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28415659
            external_identifier: Q28415659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E8%A1%8D
        - id: cs_ht4upG342RJ3t53N17fHx5
          claim_id: c_tqQ5NDXWJETK2mH3CFovQ2
          source_id: s_jvpVhi8Dn6ZYk8DHKdDRT1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_b3GtbM2kDC4Yk5jbdvusuW
          claim_id: c_tqQ5NDXWJETK2mH3CFovQ2
          source_id: s_c7NdGSVJDpv8cCcn7qJgcN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_c7NdGSVJDpv8cCcn7qJgcN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承衍（3939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json
            external_identifier: CBDB:3939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:56.527Z
            metadata_json: null
      object_person:
        id: p_6MGDJDsMfhoCMpi8TCXnFR
        status: active
        display_name: 王承衍
        merged_into_person_id: null
  children:
    - claim:
        id: c_8GwvkYhU8PE3MaA4PAAKoJ
        subject_person_id: p_Bxfq3zjpoq2kKYP1QvY7sM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5SQGh5AbvY3Ln1ftLHdsC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V4TCpCs8CWa2CHX6SFhdri
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_jvpVhi8Dn6ZYk8DHKdDRT1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_xurHvzvAPdbgSubN73C3Rc
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_UArBFCc85vrjBPti5SxwAa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UArBFCc85vrjBPti5SxwAa
            source_type: api_record
            title: 维基数据：王克存（Q45362980）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362980
            external_identifier: Q45362980
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_Xcrik3niUX44tzmZd48hNa
          claim_id: c_8GwvkYhU8PE3MaA4PAAKoJ
          source_id: s_JwHhzmm8rehrsyPhhkBDsr
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_G5SQGh5AbvY3Ln1ftLHdsC
        status: active
        display_name: 王克存
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世融，宋人物。CBDB 记录其籍贯记录为海北州，入仕记录为軍員轉補，曾任尚書左僕射。中国历代人物传记资料库（CBDB）以人物编号 3972 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世融 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |
| children | p_G5SQGh5AbvY3Ln1ftLHdsC | 王克存 | accepted |

## 外部来源

- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：王克存（Q45362980）](https://www.wikidata.org/wiki/Q45362980)
- [维基数据：王世融（Q45363002）](https://www.wikidata.org/wiki/Q45363002)
- [CBDB 中国历代人物传记资料库：王承衍（3939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json)
- [CBDB 中国历代人物传记资料库：王世融（3972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3972&o=json)
