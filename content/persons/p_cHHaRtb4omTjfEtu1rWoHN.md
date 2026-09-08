---
schema: wang-person/v1
id: p_cHHaRtb4omTjfEtu1rWoHN
status: active
merged_into: null
display_name: 王克正
cbdb_id: 17758
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CLMNNxh1jx4LTE7Zvdd9To
        subject_person_id: p_cHHaRtb4omTjfEtu1rWoHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克正
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMFcA32Sg5c4z2wkMFZ9JF
          claim_id: c_CLMNNxh1jx4LTE7Zvdd9To
          source_id: s_WNHB21KFB5wHMfbWD9YRox
          stance: supports
          locator: Q45387134
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
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
        - id: cs_MKytdw1SD5VixPa7n8Dpbm
          claim_id: c_CLMNNxh1jx4LTE7Zvdd9To
          source_id: s_F7pEb6eesoDfPHAzhHZGJa
          stance: supports
          locator: CBDB:17758
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_F7pEb6eesoDfPHAzhHZGJa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王克正（17758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17758&o=json
            external_identifier: CBDB:17758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYCEyRyoYMUXhUfiCmtCML
        subject_person_id: p_cHHaRtb4omTjfEtu1rWoHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 17758
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQHmFD9SNeV6MaRVVL4cCo
          claim_id: c_NYCEyRyoYMUXhUfiCmtCML
          source_id: s_WNHB21KFB5wHMfbWD9YRox
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        - id: cs_bdsAUE84AbfQh1B6NkRQf4
          claim_id: c_cbN69RUN3RcvJghcENKsbc
          source_id: s_WNHB21KFB5wHMfbWD9YRox
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xxp1Nfuo6tm3LwQM94RLDi
          claim_id: c_cbN69RUN3RcvJghcENKsbc
          source_id: s_ULsoiNJ1J3bLR5yykUZ8BY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
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
      object_person:
        id: p_g8hsSNbpb5At2Fke7RoQLi
        status: active
        display_name: 王世安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克正 | accepted |
| bio.summary | Song dynasty person CBDB = 17758 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g8hsSNbpb5At2Fke7RoQLi | 王世安 | accepted |

## 外部来源

- [维基数据：王克正（Q45387134）](https://www.wikidata.org/wiki/Q45387134)
- [维基数据：王世安（Q45387128）](https://www.wikidata.org/wiki/Q45387128)
- [CBDB 中国历代人物传记资料库：王克正（17758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17758&o=json)
- [CBDB 中国历代人物传记资料库：王世安（17756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17756&o=json)
