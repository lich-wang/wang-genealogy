---
schema: wang-person/v1
id: p_mtMHeaLVMRzHPiV6MMKoBB
status: active
merged_into: null
display_name: 王慎术
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXYet5HpzKo7EtLsjCRxXd
        subject_person_id: p_mtMHeaLVMRzHPiV6MMKoBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎术，宋人物。CBDB 记录其籍贯记录为洛陽，曾任中散大夫。中国历代人物传记资料库（CBDB）以人物编号 22056 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bu74nrZk7jMdHKnPcxBZUu
          claim_id: c_gXYet5HpzKo7EtLsjCRxXd
          source_id: s_WveuHAksgj3T15Bodst1yc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_WveuHAksgj3T15Bodst1yc
            source_type: api_record
            title: 维基数据：王慎术（Q45401760）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401760
            external_identifier: Q45401760
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
        - id: cs_uriCRcvwGPY3fBDOQQqluN
          claim_id: c_gXYet5HpzKo7EtLsjCRxXd
          source_id: s_53Q76UH5PAU4WrPNUaSHBF
          stance: supports
          locator: CBDB:22056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_53Q76UH5PAU4WrPNUaSHBF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎術（22056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22056&o=json
            external_identifier: CBDB:22056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.953Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RpEqNUYbXe9gqzT6xURjzh
        subject_person_id: p_mtMHeaLVMRzHPiV6MMKoBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎术
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C7AxfnA4K5V5DUgT1VyadC
          claim_id: c_RpEqNUYbXe9gqzT6xURjzh
          source_id: s_WveuHAksgj3T15Bodst1yc
          stance: supports
          locator: Q45401760
          quotation: null
          interpretation_note: null
          source:
            id: s_WveuHAksgj3T15Bodst1yc
            source_type: api_record
            title: 维基数据：王慎术（Q45401760）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401760
            external_identifier: Q45401760
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
        - id: cs_zKiqk7G25LyjQdV3Vj4Q9j
          claim_id: c_RpEqNUYbXe9gqzT6xURjzh
          source_id: s_53Q76UH5PAU4WrPNUaSHBF
          stance: supports
          locator: Q45401760
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XEGjYMsJN9xJhyunNe3EM1
        subject_person_id: p_8yGvQV64DEaN7zXdMCaL2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mtMHeaLVMRzHPiV6MMKoBB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vevHMKR9RUwnRUiM6ui4XG
          claim_id: c_XEGjYMsJN9xJhyunNe3EM1
          source_id: s_9d6NmxQWLcW1dsP819MSKa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9d6NmxQWLcW1dsP819MSKa
            source_type: api_record
            title: 维基数据：王益恭（Q45401756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401756
            external_identifier: Q45401756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:19.863Z
            metadata_json: null
        - id: cs_xJFK3xHBQUhVennf7CD6sM
          claim_id: c_XEGjYMsJN9xJhyunNe3EM1
          source_id: s_WveuHAksgj3T15Bodst1yc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_wKreo4LZSndDQqHg1Poyy7
          claim_id: c_XEGjYMsJN9xJhyunNe3EM1
          source_id: s_ESiRG3f9yMVCAnGCJMXcMN
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ESiRG3f9yMVCAnGCJMXcMN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益恭（22054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json
            external_identifier: CBDB:22054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:20.031Z
            metadata_json: null
      object_person:
        id: p_8yGvQV64DEaN7zXdMCaL2M
        status: active
        display_name: 王益恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎术

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎术，宋人物。CBDB 记录其籍贯记录为洛陽，曾任中散大夫。中国历代人物传记资料库（CBDB）以人物编号 22056 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王慎术 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8yGvQV64DEaN7zXdMCaL2M | 王益恭 | accepted |

## 外部来源

- [维基数据：王慎术（Q45401760）](https://www.wikidata.org/wiki/Q45401760)
- [维基数据：王益恭（Q45401756）](https://www.wikidata.org/wiki/Q45401756)
- [CBDB 中国历代人物传记资料库：王慎術（22056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22056&o=json)
- [CBDB 中国历代人物传记资料库：王益恭（22054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22054&o=json)
