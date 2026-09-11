---
schema: wang-person/v1
id: p_ox7yiximghECqCRKNggNvk
status: active
merged_into: null
display_name: 秦氏
cbdb_id: 305711
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JH2sUpuEkHoP4eKC8gwLtv
        subject_person_id: p_ox7yiximghECqCRKNggNvk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦氏，王宗沐妻。维基数据以独立条目 Q65829777 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FS8mNTL6R8g8HOmOfgiW1U
          claim_id: c_JH2sUpuEkHoP4eKC8gwLtv
          source_id: s_a5pFTW9aQEBFYKT1XQDG4Q
          stance: supports
          locator: Q65829777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_a5pFTW9aQEBFYKT1XQDG4Q
            source_type: api_record
            title: 维基数据：秦氏（Q65829777）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65829777
            external_identifier: Q65829777
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.169Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_77RkyjqGHwCPD2MTCwHXvu
        subject_person_id: p_ox7yiximghECqCRKNggNvk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EjdUP4SfH1934PnrwURaEp
          claim_id: c_77RkyjqGHwCPD2MTCwHXvu
          source_id: s_cGaqYxCpTDcUzNoW1L3HHJ
          stance: supports
          locator: Q65829777
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_cGaqYxCpTDcUzNoW1L3HHJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：秦氏（305711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305711&o=json
            external_identifier: CBDB:305711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:42.305Z
            metadata_json: null
        - id: cs_oS1KHn6BnLtykiA5MesQgy
          claim_id: c_77RkyjqGHwCPD2MTCwHXvu
          source_id: s_a5pFTW9aQEBFYKT1XQDG4Q
          stance: supports
          locator: Q65829777
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
        id: c_HdbYy6PHHKdeKsJ9L9SrQN
        subject_person_id: p_ox7yiximghECqCRKNggNvk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_trUE1ub3cUR7dMLX7JC1NK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pPCk5neABtayQ6J4UeFzn
          claim_id: c_HdbYy6PHHKdeKsJ9L9SrQN
          source_id: s_a5pFTW9aQEBFYKT1XQDG4Q
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_a5pFTW9aQEBFYKT1XQDG4Q
            source_type: api_record
            title: 维基数据：秦氏（Q65829777）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65829777
            external_identifier: Q65829777
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.169Z
            metadata_json: null
        - id: cs_h7EZaa8meH4D8rJrQTL3UN
          claim_id: c_HdbYy6PHHKdeKsJ9L9SrQN
          source_id: s_1BiHuNh6H5KWNtwUrGwhWa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_1BiHuNh6H5KWNtwUrGwhWa
            source_type: api_record
            title: 维基数据：王宗沐（Q15916933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916933
            external_identifier: Q15916933
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
        - id: cs_pjMKBP7LPzacEzeHSWKwnU
          claim_id: c_HdbYy6PHHKdeKsJ9L9SrQN
          source_id: s_NBWJiKpoVrEhQpjwX5tzx2
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十三年登科錄:一卷
          source:
            id: s_NBWJiKpoVrEhQpjwX5tzx2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗沐（35065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35065&o=json
            external_identifier: CBDB:35065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:23.555Z
            metadata_json: null
      object_person:
        id: p_trUE1ub3cUR7dMLX7JC1NK
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
    - claim:
        id: c_mlQkqtdkS1l_nfLQOC5dbr
        subject_person_id: p_ox7yiximghECqCRKNggNvk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AxnhzouFhPDEcn88n2bfsw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jmyRid1XrwPI4s9ZcgGn5
          claim_id: c_mlQkqtdkS1l_nfLQOC5dbr
          source_id: s_cGaqYxCpTDcUzNoW1L3HHJ
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第四十三名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_AxnhzouFhPDEcn88n2bfsw
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 秦氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 秦氏，王宗沐妻。维基数据以独立条目 Q65829777 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 秦氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_trUE1ub3cUR7dMLX7JC1NK | 王宗沐 | accepted |
| spouses | p_AxnhzouFhPDEcn88n2bfsw | 王宗沐 | accepted |

## 外部来源

- [维基数据：秦氏（Q65829777）](https://www.wikidata.org/wiki/Q65829777)
- [维基数据：王宗沐（Q15916933）](https://www.wikidata.org/wiki/Q15916933)
- [CBDB 中国历代人物传记资料库：秦氏（305711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305711&o=json)
- [CBDB 中国历代人物传记资料库：王宗沐（35065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35065&o=json)
