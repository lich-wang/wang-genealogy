---
schema: wang-person/v1
id: p_9R6yLWJqy9QZVUAQhYQHfj
status: active
merged_into: null
display_name: 王铎
cbdb_id: 3984
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S1sERDFHtMLcveMBvqfWJi
        subject_person_id: p_9R6yLWJqy9QZVUAQhYQHfj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王铎，宋人物。CBDB 记录其籍贯记录为臨海，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 3984 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7gk9Dk6R4mFGjhAKM4oSbK
          claim_id: c_S1sERDFHtMLcveMBvqfWJi
          source_id: s_KcXtCEDKP5qJLo6AN9oJ1z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KcXtCEDKP5qJLo6AN9oJ1z
            source_type: api_record
            title: 维基数据：王铎（Q45363035）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363035
            external_identifier: Q45363035
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
        - id: cs_7VqosYM7FuV532atA-20oW
          claim_id: c_S1sERDFHtMLcveMBvqfWJi
          source_id: s_yFw4nFQMpzbXouEESC5h7M
          stance: supports
          locator: CBDB:3984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yFw4nFQMpzbXouEESC5h7M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鐸（3984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3984&o=json
            external_identifier: CBDB:3984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:16.044Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4mQqvaK9SXNDXAz7b79Yy
        subject_person_id: p_9R6yLWJqy9QZVUAQhYQHfj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ULFSaeJAqBYBThaytsNcCQ
          claim_id: c_H4mQqvaK9SXNDXAz7b79Yy
          source_id: s_yFw4nFQMpzbXouEESC5h7M
          stance: supports
          locator: Q45363035
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gqNaYgtLALk5y9ov1nQUhA
          claim_id: c_H4mQqvaK9SXNDXAz7b79Yy
          source_id: s_KcXtCEDKP5qJLo6AN9oJ1z
          stance: supports
          locator: Q45363035
          quotation: null
          interpretation_note: null
          source:
            id: s_KcXtCEDKP5qJLo6AN9oJ1z
            source_type: api_record
            title: 维基数据：王铎（Q45363035）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363035
            external_identifier: Q45363035
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2F736N3G7Ft4TV8mR7eeXa
        subject_person_id: p_EWAx1K1Zcs56idxSXpA1ot
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9R6yLWJqy9QZVUAQhYQHfj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DFnGvTmEQ1S2NEGf5xxzdE
          claim_id: c_2F736N3G7Ft4TV8mR7eeXa
          source_id: s_kh4vsvPos18srjSBh8r915
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kh4vsvPos18srjSBh8r915
            source_type: api_record
            title: 维基数据：王之望（Q16077412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077412
            external_identifier: Q16077412
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:56.805Z
            metadata_json: null
        - id: cs_QV9YVNwj45RAFHqR9scsQP
          claim_id: c_2F736N3G7Ft4TV8mR7eeXa
          source_id: s_bVAFY7MNcm3gZny5izDbqD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bVAFY7MNcm3gZny5izDbqD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之望（1787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json
            external_identifier: CBDB:1787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:10.266Z
            metadata_json: null
        - id: cs_gPPnDL5NX7ny8DzUFWGEmA
          claim_id: c_2F736N3G7Ft4TV8mR7eeXa
          source_id: s_KcXtCEDKP5qJLo6AN9oJ1z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KcXtCEDKP5qJLo6AN9oJ1z
            source_type: api_record
            title: 维基数据：王铎（Q45363035）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363035
            external_identifier: Q45363035
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person:
        id: p_EWAx1K1Zcs56idxSXpA1ot
        status: active
        display_name: 王之望
        merged_into_person_id: null
    - claim:
        id: c_bnCnsPclZdNtCswxQBV6sg
        subject_person_id: p_M9sDetT5acG1nDTAxFe7as
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9R6yLWJqy9QZVUAQhYQHfj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxMcLLffCx6wPi5B4DSTs7
          claim_id: c_bnCnsPclZdNtCswxQBV6sg
          source_id: s_yFw4nFQMpzbXouEESC5h7M
          stance: supports
          locator: CBDB 双向互证（父 王之望 ⇄ 子 王鐸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_M9sDetT5acG1nDTAxFe7as
        status: active
        display_name: 王之望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王铎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铎，宋人物。CBDB 记录其籍贯记录为臨海，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 3984 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王铎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EWAx1K1Zcs56idxSXpA1ot | 王之望 | accepted |
| parents | p_M9sDetT5acG1nDTAxFe7as | 王之望 | accepted |

## 外部来源

- [维基数据：王铎（Q45363035）](https://www.wikidata.org/wiki/Q45363035)
- [维基数据：王之望（Q16077412）](https://www.wikidata.org/wiki/Q16077412)
- [CBDB 中国历代人物传记资料库：王鐸（3984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3984&o=json)
- [CBDB 中国历代人物传记资料库：王之望（1787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1787&o=json)
