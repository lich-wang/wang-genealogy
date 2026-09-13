---
schema: wang-person/v1
id: p_m3yi9K5yZsVRwPPF1yaNKL
status: active
merged_into: null
display_name: 王國翼
cbdb_id: 207372
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wi8ZizotZG6xzWwr6tYXbz
        subject_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國翼（生于1561年），明人物。籍贯開平中屯衛，入仕進士。（中国历代人物传记资料库 CBDB 207372）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qGbdAJL6ezU1X7h-ORB_BU
          claim_id: c_wi8ZizotZG6xzWwr6tYXbz
          source_id: s_gbLgdexoSzEUaWx8k8UP2G
          stance: supports
          locator: CBDB:207372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gbLgdexoSzEUaWx8k8UP2G
            source_type: api_record
            title: 中国历代人物传记资料库：王國翼（CBDB 207372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207372&o=json
            external_identifier: CBDB:207372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7apUdoBHWdZamVyjdUsMvo
        subject_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1561-01-01
            latest: 1561-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ATsmGQJB3Di1uKLH2W2qov
          claim_id: c_7apUdoBHWdZamVyjdUsMvo
          source_id: s_gbLgdexoSzEUaWx8k8UP2G
          stance: supports
          locator: CBDB:207372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1561
          source:
            id: s_gbLgdexoSzEUaWx8k8UP2G
            source_type: api_record
            title: 中国历代人物传记资料库：王國翼（CBDB 207372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207372&o=json
            external_identifier: CBDB:207372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjEyE6KRdDCyw72U3iQoUv
        subject_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vJxwY7jrsJGnYkfY7oVavM
          claim_id: c_LjEyE6KRdDCyw72U3iQoUv
          source_id: s_gbLgdexoSzEUaWx8k8UP2G
          stance: supports
          locator: CBDB:207372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1561
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HJVzIHWlHT4VZYuQHEkW64
        subject_person_id: p_he2wMHyNK6nBCLNJF5nWDE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PPlTKPbRX_2z1IEyufEaK1
          claim_id: c_HJVzIHWlHT4VZYuQHEkW64
          source_id: s_bNst2zfLLrqLXaCHvjCBjm
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百□名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bNst2zfLLrqLXaCHvjCBjm
            source_type: api_record
            title: 中国历代人物传记资料库：王志能（CBDB 231793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231793&o=json
            external_identifier: CBDB:231793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_he2wMHyNK6nBCLNJF5nWDE
        status: active
        display_name: 王志能
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BYWX3Nw-dJOn8BYq4T8fDG
        subject_person_id: p_M5KxKvuqpJd2c6xSCDSY4t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5xYxWB719PYurjoWoy_dX
          claim_id: c_BYWX3Nw-dJOn8BYq4T8fDG
          source_id: s_1G7GC8E67pD61v2ZaAz8h3
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百□名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1G7GC8E67pD61v2ZaAz8h3
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 231792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231792&o=json
            external_identifier: CBDB:231792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M5KxKvuqpJd2c6xSCDSY4t
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_9L5SOuLiPq6YxANeEbUTuW
        subject_person_id: p_xQupwnQaJxHTxjJmcoKwGH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xevslO-jTFGsmX-ZRq0265
          claim_id: c_9L5SOuLiPq6YxANeEbUTuW
          source_id: s_ucsy3CBbmsjjdzZ89T1WFV
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百□名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ucsy3CBbmsjjdzZ89T1WFV
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 231791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231791&o=json
            external_identifier: CBDB:231791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xQupwnQaJxHTxjJmcoKwGH
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國翼（生于1561年），明人物。籍贯開平中屯衛，入仕進士。（中国历代人物传记资料库 CBDB 207372） | accepted |
| birth.date | 1561年 | accepted |
| name.primary | 王國翼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_he2wMHyNK6nBCLNJF5nWDE | 王志能 | accepted |
| ancestors | p_M5KxKvuqpJd2c6xSCDSY4t | 王宣 | accepted |
| ancestors | p_xQupwnQaJxHTxjJmcoKwGH | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國翼（CBDB 207372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207372&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 231791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231791&o=json)
- [中国历代人物传记资料库：王宣（CBDB 231792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231792&o=json)
- [中国历代人物传记资料库：王志能（CBDB 231793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231793&o=json)
