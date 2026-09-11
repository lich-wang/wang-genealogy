---
schema: wang-person/v1
id: p_iRFm6e1TaQGqodt29a3YWr
status: active
merged_into: null
display_name: 王廷錫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vNFUzpg9EwutojFtkWV4Ns
        subject_person_id: p_iRFm6e1TaQGqodt29a3YWr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iz43BDFtSPMJd2TpN6iiF8
          claim_id: c_vNFUzpg9EwutojFtkWV4Ns
          source_id: s_xKBUQQh61TiU8bJeSDtged
          stance: supports
          locator: CBDB:207424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207424）
          source: &a1
            id: s_xKBUQQh61TiU8bJeSDtged
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錫（CBDB 207424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207424&o=json
            external_identifier: CBDB:207424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P56Q9SHRKGDbNfTkx8w4bN
        subject_person_id: p_iRFm6e1TaQGqodt29a3YWr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1566年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N23qjqW1DcCCWCvKWzURLT
          claim_id: c_P56Q9SHRKGDbNfTkx8w4bN
          source_id: s_xKBUQQh61TiU8bJeSDtged
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a8jjM6oye2ETvQVcULYfMn
        subject_person_id: p_iRFm6e1TaQGqodt29a3YWr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錫（生于1566年），明人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 207424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J713qIJK-uUKDiHMYqvfFU
          claim_id: c_a8jjM6oye2ETvQVcULYfMn
          source_id: s_xKBUQQh61TiU8bJeSDtged
          stance: supports
          locator: CBDB:207424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4LV_XKjBGaySm1sBNChjJO
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iRFm6e1TaQGqodt29a3YWr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmp5JooxfNzniP-CYp5tUz
          claim_id: c_4LV_XKjBGaySm1sBNChjJO
          source_id: s_P54A5UgS2hZWgMewuAWhPP
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P54A5UgS2hZWgMewuAWhPP
            source_type: api_record
            title: 中国历代人物传记资料库：王承勳（CBDB 232018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json
            external_identifier: CBDB:232018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9LSFQN2Ue5grcfePxzwh6f
        status: active
        display_name: 王承勳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qhjhzUjm_CulphOEQuzWvy
        subject_person_id: p_DqQ2vtWXjGyWfEvq6qa2wB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iRFm6e1TaQGqodt29a3YWr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BeuSyT-LE5mOgbFXOxaVE6
          claim_id: c_qhjhzUjm_CulphOEQuzWvy
          source_id: s_6U6GF9yBuKbJ1xDhguwF91
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6U6GF9yBuKbJ1xDhguwF91
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 232016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232016&o=json
            external_identifier: CBDB:232016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DqQ2vtWXjGyWfEvq6qa2wB
        status: active
        display_name: 王詔
        merged_into_person_id: null
    - claim:
        id: c_9mJ62uzvB4VU9iegVfVqmP
        subject_person_id: p_nXgXcNaho46CtNq398DQGM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iRFm6e1TaQGqodt29a3YWr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ADE0cteHabXXlXVtS2ija
          claim_id: c_9mJ62uzvB4VU9iegVfVqmP
          source_id: s_e8DzCRB8B15yw6F1gZAfak
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e8DzCRB8B15yw6F1gZAfak
            source_type: api_record
            title: 中国历代人物传记资料库：王體坤（CBDB 232017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232017&o=json
            external_identifier: CBDB:232017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nXgXcNaho46CtNq398DQGM
        status: active
        display_name: 王體坤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷錫 | accepted |
| birth.date | 1566年 | accepted |
| bio.summary | 王廷錫（生于1566年），明人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 207424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9LSFQN2Ue5grcfePxzwh6f | 王承勳 | accepted |
| ancestors | p_DqQ2vtWXjGyWfEvq6qa2wB | 王詔 | accepted |
| ancestors | p_nXgXcNaho46CtNq398DQGM | 王體坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承勳（CBDB 232018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json)
- [中国历代人物传记资料库：王體坤（CBDB 232017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232017&o=json)
- [中国历代人物传记资料库：王廷錫（CBDB 207424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207424&o=json)
- [中国历代人物传记资料库：王詔（CBDB 232016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232016&o=json)
