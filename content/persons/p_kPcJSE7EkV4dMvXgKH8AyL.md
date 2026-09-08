---
schema: wang-person/v1
id: p_kPcJSE7EkV4dMvXgKH8AyL
status: active
merged_into: null
display_name: 魏国大长公主
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tQ5pfywI9fp6kxXUrFN3Mb
        subject_person_id: p_kPcJSE7EkV4dMvXgKH8AyL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏国大长公主，宋人物。CBDB 记录其曾任大長公主。中国历代人物传记资料库（CBDB）以人物编号 37660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_iIwrFaVLDB-31rSZ-GWk2y
          claim_id: c_tQ5pfywI9fp6kxXUrFN3Mb
          source_id: s_TKm2Nf2ZwafwrCESnAhsxP
          stance: supports
          locator: CBDB:37660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TKm2Nf2ZwafwrCESnAhsxP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（37660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37660&o=json
            external_identifier: CBDB:37660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:48.551Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CkV1D7TkadFYq1sSoFrMuk
        subject_person_id: p_kPcJSE7EkV4dMvXgKH8AyL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏国大长公主
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Br91s3nxbKx7BLUD26kMmD
          claim_id: c_CkV1D7TkadFYq1sSoFrMuk
          source_id: s_MhLT1sQmDJ7PHPDAKqbyvv
          stance: supports
          locator: Q13650437
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_MhLT1sQmDJ7PHPDAKqbyvv
            source_type: api_record
            title: 维基数据：魏国大长公主（Q13650437）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13650437
            external_identifier: Q13650437
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.390Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%AD%8F%E5%9C%8B%E5%A4%A7%E9%95%B7%E5%85%AC%E4%B8%BB
        - id: cs_EnoXM7UHjzBSFGvb6SRFjw
          claim_id: c_CkV1D7TkadFYq1sSoFrMuk
          source_id: s_TKm2Nf2ZwafwrCESnAhsxP
          stance: supports
          locator: Q13650437
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
        id: c_oWeKDaPHezERy2fdS4Pdfq
        subject_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kPcJSE7EkV4dMvXgKH8AyL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oK1Lu7db4rivA3uCdWTzcP
          claim_id: c_oWeKDaPHezERy2fdS4Pdfq
          source_id: s_5h3ogmep1VLLiYxHP9RUqR
          stance: supports
          locator: P26（配偶）
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
        - id: cs_7jT1HDaQiCseBuDEqnAbwW
          claim_id: c_oWeKDaPHezERy2fdS4Pdfq
          source_id: s_MhLT1sQmDJ7PHPDAKqbyvv
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_XDymYKisDC4EGdKFqMrXgJ
          claim_id: c_oWeKDaPHezERy2fdS4Pdfq
          source_id: s_c7NdGSVJDpv8cCcn7qJgcN
          stance: supports
          locator: 亲属关系：妻子
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
  ancestors: []
  descendants: []
  other: []
---

# 魏国大长公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 魏国大长公主，宋人物。CBDB 记录其曾任大長公主。中国历代人物传记资料库（CBDB）以人物编号 37660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 魏国大长公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |

## 外部来源

- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：魏国大长公主（Q13650437）](https://www.wikidata.org/wiki/Q13650437)
- [CBDB 中国历代人物传记资料库：王承衍（3939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（37660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37660&o=json)
