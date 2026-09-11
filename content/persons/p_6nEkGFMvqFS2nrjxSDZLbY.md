---
schema: wang-person/v1
id: p_6nEkGFMvqFS2nrjxSDZLbY
status: active
merged_into: null
display_name: 王洧
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3PALVL4k7FKuJViV7yP9t
        subject_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HD1waK99M6FUP2PQmiNquB
          claim_id: c_G3PALVL4k7FKuJViV7yP9t
          source_id: s_aMeAaFWnDEj7WZrAQe7ptF
          stance: supports
          locator: CBDB:126589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126589）
          source: &a1
            id: s_aMeAaFWnDEj7WZrAQe7ptF
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 126589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126589&o=json
            external_identifier: CBDB:126589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5iFBjMV4tF96Nk2SnnkCe
        subject_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧，明人物。明清進士進士，籍贯濬縣，入仕進士。（中国历代人物传记资料库 CBDB 126589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bon0_wFqoq-v4p-tm4ZmqW
          claim_id: c_n5iFBjMV4tF96Nk2SnnkCe
          source_id: s_aMeAaFWnDEj7WZrAQe7ptF
          stance: supports
          locator: CBDB:126589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aU4PJY8iQaLcrrAfdmnUjH
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv-tIBscsy886eKyvQB9Of
          claim_id: c_aU4PJY8iQaLcrrAfdmnUjH
          source_id: s_2fQdgU9EJNAPTPZq3DVYTA
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2fQdgU9EJNAPTPZq3DVYTA
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 260073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json
            external_identifier: CBDB:260073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_43jCdaQscpAsd5Gw1VzpwH
        status: active
        display_name: 王宸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_B7yk29jZE4VYcCIhddbYS5
        subject_person_id: p_5S7P9KLyyLw7ZRuNbx66kY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KNbcCNroQL-1KnZaQ56wNH
          claim_id: c_B7yk29jZE4VYcCIhddbYS5
          source_id: s_E66uYzszXuE2BTq1DyQLav
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E66uYzszXuE2BTq1DyQLav
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 260071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260071&o=json
            external_identifier: CBDB:260071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5S7P9KLyyLw7ZRuNbx66kY
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_hCcq7KWI4U5vegPH1t0K56
        subject_person_id: p_Ah1SoyZmqog4CSwGSZFed3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fb45fzJKHdywx35OtQPQkB
          claim_id: c_hCcq7KWI4U5vegPH1t0K56
          source_id: s_aQ2UVT8b9QAWzQN39xE4qY
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aQ2UVT8b9QAWzQN39xE4qY
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 260072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260072&o=json
            external_identifier: CBDB:260072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ah1SoyZmqog4CSwGSZFed3
        status: active
        display_name: 王述
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王洧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洧 | accepted |
| bio.summary | 王洧，明人物。明清進士進士，籍贯濬縣，入仕進士。（中国历代人物传记资料库 CBDB 126589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_43jCdaQscpAsd5Gw1VzpwH | 王宸 | accepted |
| ancestors | p_5S7P9KLyyLw7ZRuNbx66kY | 王禮 | accepted |
| ancestors | p_Ah1SoyZmqog4CSwGSZFed3 | 王述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 260073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260073&o=json)
- [中国历代人物传记资料库：王禮（CBDB 260071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260071&o=json)
- [中国历代人物传记资料库：王述（CBDB 260072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260072&o=json)
- [中国历代人物传记资料库：王洧（CBDB 126589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126589&o=json)
