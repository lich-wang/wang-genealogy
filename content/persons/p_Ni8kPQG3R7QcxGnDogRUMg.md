---
schema: wang-person/v1
id: p_Ni8kPQG3R7QcxGnDogRUMg
status: active
merged_into: null
display_name: 王珍
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3oAdNqUn9LkiJRQtHGFHUv
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RFepSA9S8gzPESEQ8Nk2uR
          claim_id: c_3oAdNqUn9LkiJRQtHGFHUv
          source_id: s_wxj1YbQmbioLwL8MbCjeNf
          stance: supports
          locator: CBDB:166175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166175）
          source: &a1
            id: s_wxj1YbQmbioLwL8MbCjeNf
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 166175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166175&o=json
            external_identifier: CBDB:166175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29jiuW39o43RrY3VLrokRE
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍，史料所见人物。本项目依据《中国历代人物传记资料库：王珍（CBDB 166175）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P99Nc8dkZdMJjgu-Pz26gF
          claim_id: c_29jiuW39o43RrY3VLrokRE
          source_id: s_wxj1YbQmbioLwL8MbCjeNf
          stance: supports
          locator: CBDB:166175
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-vvsutJx99DkFcxhHP_HWf
        subject_person_id: p_icFiqV4qE727ZGi81Wiaj9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NX7YZGOrDrqJpOwKiDGU8I
          claim_id: c_-vvsutJx99DkFcxhHP_HWf
          source_id: s_5vMiv1iEZEf1ReAx618mW6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5vMiv1iEZEf1ReAx618mW6
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 166174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json
            external_identifier: CBDB:166174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_icFiqV4qE727ZGi81Wiaj9
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children:
    - claim:
        id: c_1aSG5wkfGHCD2wnAtQLLLy
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1oA2SCUtyqTAKoNj4aeMg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoDmbGyd1h8LCYFhvfJVGT
          claim_id: c_1aSG5wkfGHCD2wnAtQLLLy
          source_id: s_EtXbGSubP3wXw6hencmE7t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 29933：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EtXbGSubP3wXw6hencmE7t
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 166180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166180&o=json
            external_identifier: CBDB:166180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oA2SCUtyqTAKoNj4aeMg8
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_N2FoEzgWsMtBlFmKr0jYR6
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZyQWXZPtEvbu-6d2CaFlEm
          claim_id: c_N2FoEzgWsMtBlFmKr0jYR6
          source_id: s_3T1wtSa6a7tTCkiA7jtCE6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3T1wtSa6a7tTCkiA7jtCE6
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 166177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166177&o=json
            external_identifier: CBDB:166177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LPxCbHVHyT4kwZF5i6X5Mr
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_ivoXNWDyjA_9JthPnBSo0o
        subject_person_id: p_Ni8kPQG3R7QcxGnDogRUMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vVPscNDAZYKEb6xxpD9TFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMYQgYg2iYTPQqRvwaHp1e
          claim_id: c_ivoXNWDyjA_9JthPnBSo0o
          source_id: s_2to8BPNNdmBFnDxbQm7NZQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2to8BPNNdmBFnDxbQm7NZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 166179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166179&o=json
            external_identifier: CBDB:166179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vVPscNDAZYKEb6xxpD9TFB
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | 王珍，史料所见人物。本项目依据《中国历代人物传记资料库：王珍（CBDB 166175）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_icFiqV4qE727ZGi81Wiaj9 | 王逸 | accepted |
| children | p_1oA2SCUtyqTAKoNj4aeMg8 | 王冕 | accepted |
| children | p_LPxCbHVHyT4kwZF5i6X5Mr | 王緒 | accepted |
| children | p_vVPscNDAZYKEb6xxpD9TFB | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 166180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166180&o=json)
- [中国历代人物传记资料库：王緒（CBDB 166177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166177&o=json)
- [中国历代人物传记资料库：王逸（CBDB 166174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json)
- [中国历代人物传记资料库：王珍（CBDB 166175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166175&o=json)
- [中国历代人物传记资料库：王政（CBDB 166179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166179&o=json)
