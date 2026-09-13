---
schema: wang-person/v1
id: p_J7gMbpNRBvFNanWSCrNShv
status: active
merged_into: null
display_name: 王國瑚
cbdb_id: 207582
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vpryZ5r3MaXZYz5RdMZFkT
        subject_person_id: p_J7gMbpNRBvFNanWSCrNShv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑚（生于1557年），明人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 207582）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZZp8C7wkc8JX7WGlLAuwW2
          claim_id: c_vpryZ5r3MaXZYz5RdMZFkT
          source_id: s_ATLtY2Bv26S2PPZ4bPE14p
          stance: supports
          locator: CBDB:207582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ATLtY2Bv26S2PPZ4bPE14p
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑚（CBDB 207582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207582&o=json
            external_identifier: CBDB:207582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LdzHKe1NHWRFGDC8GuXTqB
        subject_person_id: p_J7gMbpNRBvFNanWSCrNShv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1557-01-01
            latest: 1557-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hLMg1KDoXQqTSWr4TEMwzg
          claim_id: c_LdzHKe1NHWRFGDC8GuXTqB
          source_id: s_ATLtY2Bv26S2PPZ4bPE14p
          stance: supports
          locator: CBDB:207582
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1557
          source:
            id: s_ATLtY2Bv26S2PPZ4bPE14p
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑚（CBDB 207582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207582&o=json
            external_identifier: CBDB:207582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YZRx1D1DF7MtR5kVwFNhoj
        subject_person_id: p_J7gMbpNRBvFNanWSCrNShv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g9AK1TwRELhckksd2LQ7So
          claim_id: c_YZRx1D1DF7MtR5kVwFNhoj
          source_id: s_ATLtY2Bv26S2PPZ4bPE14p
          stance: supports
          locator: CBDB:207582
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1557
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PKVrRDsJu2ERwdmcGb6XSD
        subject_person_id: p_ggdwKPx5333V6pcYeoNE4J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J7gMbpNRBvFNanWSCrNShv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVqhSyS6WGrsec3ON3cN2Q
          claim_id: c_PKVrRDsJu2ERwdmcGb6XSD
          source_id: s_b4CfamJFWKHH6MRr14AYDB
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4CfamJFWKHH6MRr14AYDB
            source_type: api_record
            title: 中国历代人物传记资料库：王明德（CBDB 232623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232623&o=json
            external_identifier: CBDB:232623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ggdwKPx5333V6pcYeoNE4J
        status: active
        display_name: 王明德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__6GIMY58yXLEjZUO6uvNhF
        subject_person_id: p_ASXSbEMaQPTPfnj7aoaUKN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J7gMbpNRBvFNanWSCrNShv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PJF2RLdX4UdhDJwJ4zpykZ
          claim_id: c__6GIMY58yXLEjZUO6uvNhF
          source_id: s_1EG92c1iPu2hfvH4gUq2Vp
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1EG92c1iPu2hfvH4gUq2Vp
            source_type: api_record
            title: 中国历代人物传记资料库：王守（CBDB 232622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232622&o=json
            external_identifier: CBDB:232622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ASXSbEMaQPTPfnj7aoaUKN
        status: active
        display_name: 王守
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國瑚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國瑚（生于1557年），明人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 207582） | accepted |
| birth.date | 1557年 | accepted |
| name.primary | 王國瑚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggdwKPx5333V6pcYeoNE4J | 王明德 | accepted |
| ancestors | p_ASXSbEMaQPTPfnj7aoaUKN | 王守 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國瑚（CBDB 207582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207582&o=json)
- [中国历代人物传记资料库：王明德（CBDB 232623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232623&o=json)
- [中国历代人物传记资料库：王守（CBDB 232622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232622&o=json)
