---
schema: wang-person/v1
id: p_g8hsSNbpb5At2Fke7RoQLi
status: active
merged_into: null
display_name: 王世安
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8TtGTxxgNyCAonLmBgxAHJ
        subject_person_id: p_g8hsSNbpb5At2Fke7RoQLi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世安，宋人物。CBDB 记录其籍贯记录为海北州，曾任尚書左僕射、尚書左右丞。中国历代人物传记资料库（CBDB）以人物编号 17756 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_C2HeGKrfDDskYDidCqSbzb
          claim_id: c_8TtGTxxgNyCAonLmBgxAHJ
          source_id: s_ZAiDsNLnd3WN2ziSoAzr7o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_ZAiDsNLnd3WN2ziSoAzr7o
            source_type: api_record
            title: 维基数据：王世安（Q45387128）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387128
            external_identifier: Q45387128
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs__-Gqt2-aOyr--KZgQW52Lz
          claim_id: c_8TtGTxxgNyCAonLmBgxAHJ
          source_id: s_ULsoiNJ1J3bLR5yykUZ8BY
          stance: supports
          locator: CBDB:17756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ULsoiNJ1J3bLR5yykUZ8BY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世安（17756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17756&o=json
            external_identifier: CBDB:17756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.182Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kpV1ipfzwjJPHYVKnaCn2H
        subject_person_id: p_g8hsSNbpb5At2Fke7RoQLi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世安
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gn82FPsVPHMmqSeBiF7QVh
          claim_id: c_kpV1ipfzwjJPHYVKnaCn2H
          source_id: s_ULsoiNJ1J3bLR5yykUZ8BY
          stance: supports
          locator: Q45387128
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_UD4BEEi4NqQa6SikPBwLXy
          claim_id: c_kpV1ipfzwjJPHYVKnaCn2H
          source_id: s_ZAiDsNLnd3WN2ziSoAzr7o
          stance: supports
          locator: Q45387128
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAiDsNLnd3WN2ziSoAzr7o
            source_type: api_record
            title: 维基数据：王世安（Q45387128）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387128
            external_identifier: Q45387128
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_evgCh8xQSPKsWTASHJLhJ5
        subject_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g8hsSNbpb5At2Fke7RoQLi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDmWFAgK7DPmfi9rWHSZFR
          claim_id: c_evgCh8xQSPKsWTASHJLhJ5
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
        - id: cs_UsQQHtCZiBKx72mFcBV7gG
          claim_id: c_evgCh8xQSPKsWTASHJLhJ5
          source_id: s_ZAiDsNLnd3WN2ziSoAzr7o
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_MihNqZ3SJLzVCCk6w9Rjg5
          claim_id: c_evgCh8xQSPKsWTASHJLhJ5
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
        id: c_cbN69RUN3RcvJghcENKsbc
        subject_person_id: p_g8hsSNbpb5At2Fke7RoQLi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHHaRtb4omTjfEtu1rWoHN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESocQGpeBGDzHBfWq4wC59
          claim_id: c_cbN69RUN3RcvJghcENKsbc
          source_id: s_ZAiDsNLnd3WN2ziSoAzr7o
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_bdsAUE84AbfQh1B6NkRQf4
          claim_id: c_cbN69RUN3RcvJghcENKsbc
          source_id: s_WNHB21KFB5wHMfbWD9YRox
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WNHB21KFB5wHMfbWD9YRox
            source_type: api_record
            title: 维基数据：王克正（Q45387134）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387134
            external_identifier: Q45387134
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_xxp1Nfuo6tm3LwQM94RLDi
          claim_id: c_cbN69RUN3RcvJghcENKsbc
          source_id: s_ULsoiNJ1J3bLR5yykUZ8BY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_cHHaRtb4omTjfEtu1rWoHN
        status: active
        display_name: 王克正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世安，宋人物。CBDB 记录其籍贯记录为海北州，曾任尚書左僕射、尚書左右丞。中国历代人物传记资料库（CBDB）以人物编号 17756 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |
| children | p_cHHaRtb4omTjfEtu1rWoHN | 王克正 | accepted |

## 外部来源

- [维基数据：王承衍（Q28415659）](https://www.wikidata.org/wiki/Q28415659)
- [维基数据：王克正（Q45387134）](https://www.wikidata.org/wiki/Q45387134)
- [维基数据：王世安（Q45387128）](https://www.wikidata.org/wiki/Q45387128)
- [CBDB 中国历代人物传记资料库：王承衍（3939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3939&o=json)
- [CBDB 中国历代人物传记资料库：王世安（17756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17756&o=json)
