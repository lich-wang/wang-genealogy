---
schema: wang-person/v1
id: p_vCGBgbgvgrm36F1yrFyGJH
status: active
merged_into: null
display_name: 王昌鉷
cbdb_id: 185204
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SsMtEQYqNyNpuqPvKD7qYH
        subject_person_id: p_vCGBgbgvgrm36F1yrFyGJH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌鉷（卒于869年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185204 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LEjs7PkvG-2ecz7v0ECc07
          claim_id: c_SsMtEQYqNyNpuqPvKD7qYH
          source_id: s_J5nXvASv7qZD245B6RcGZX
          stance: supports
          locator: CBDB:185204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_J5nXvASv7qZD245B6RcGZX
            source_type: api_record
            title: 中国历代人物传记资料库：王昌鉷（CBDB 185204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185204&o=json
            external_identifier: CBDB:185204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eEPeLaFXd2KWonkgh1gz9K
        subject_person_id: p_vCGBgbgvgrm36F1yrFyGJH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0869-01-01
            latest: 0869-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hi7A6CJdez6UEgZAsWSSRc
          claim_id: c_eEPeLaFXd2KWonkgh1gz9K
          source_id: s_J5nXvASv7qZD245B6RcGZX
          stance: supports
          locator: CBDB:185204
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 869
          source:
            id: s_J5nXvASv7qZD245B6RcGZX
            source_type: api_record
            title: 中国历代人物传记资料库：王昌鉷（CBDB 185204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185204&o=json
            external_identifier: CBDB:185204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TWYvvBgqEmSQPgfBiDfNfE
        subject_person_id: p_vCGBgbgvgrm36F1yrFyGJH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌鉷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xmCd7ZX28F9z9MLSGa52w1
          claim_id: c_TWYvvBgqEmSQPgfBiDfNfE
          source_id: s_J5nXvASv7qZD245B6RcGZX
          stance: supports
          locator: CBDB:185204
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 869
          source:
            id: s_J5nXvASv7qZD245B6RcGZX
            source_type: api_record
            title: 中国历代人物传记资料库：王昌鉷（CBDB 185204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185204&o=json
            external_identifier: CBDB:185204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kF6LICb7NNHmR8viyBK2Ne
        subject_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vCGBgbgvgrm36F1yrFyGJH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6CQcYbtNJHS0KtScQTpFG
          claim_id: c_kF6LICb7NNHmR8viyBK2Ne
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TDk5jVoLtbDiipRDH6amS1
            source_type: api_record
            title: 中国历代人物传记资料库：王逆修（CBDB 145292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json
            external_identifier: CBDB:145292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_meEJMsmnSyJgXvxdt3zvHa
        status: active
        display_name: 王逆修
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌鉷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌鉷（卒于869年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185204 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 869年 | accepted |
| name.primary | 王昌鉷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_meEJMsmnSyJgXvxdt3zvHa | 王逆修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌鉷（CBDB 185204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185204&o=json)
- [中国历代人物传记资料库：王逆修（CBDB 145292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json)
