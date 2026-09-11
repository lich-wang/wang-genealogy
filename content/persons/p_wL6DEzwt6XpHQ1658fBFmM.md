---
schema: wang-person/v1
id: p_wL6DEzwt6XpHQ1658fBFmM
status: active
merged_into: null
display_name: 王伯元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFAffNmqyap3vQaC4QbG44
        subject_person_id: p_wL6DEzwt6XpHQ1658fBFmM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5uriVL6AK3UzoRM4p23ciK
          claim_id: c_hFAffNmqyap3vQaC4QbG44
          source_id: s_vSBy3uxRCxGCd9uZ4UrazE
          stance: supports
          locator: CBDB:29331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29331）
          source: &a1
            id: s_vSBy3uxRCxGCd9uZ4UrazE
            source_type: api_record
            title: 中国历代人物传记资料库：王伯元（CBDB 29331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29331&o=json
            external_identifier: CBDB:29331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RDKymCbLNTtVJbe5CF4Yg
        subject_person_id: p_wL6DEzwt6XpHQ1658fBFmM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯元，元人物。籍贯陽曲。（中国历代人物传记资料库 CBDB 29331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nv4TTOk0t9_veRq5fP8VQp
          claim_id: c_2RDKymCbLNTtVJbe5CF4Yg
          source_id: s_vSBy3uxRCxGCd9uZ4UrazE
          stance: supports
          locator: CBDB:29331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TL3f4G761Vl3W6FMbIVXcj
        subject_person_id: p_sJhMbwjHu6A2QrasBxy59J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wL6DEzwt6XpHQ1658fBFmM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCC7CSUpaJ_gpvSCgUiFHM
          claim_id: c_TL3f4G761Vl3W6FMbIVXcj
          source_id: s_gaAtRG9zVs7FA4TP9gyMwz
          stance: supports
          locator: CBDB 双向互证（子 王伯元 ⇄ 父 王彥）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_gaAtRG9zVs7FA4TP9gyMwz
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 29332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29332&o=json
            external_identifier: CBDB:29332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sJhMbwjHu6A2QrasBxy59J
        status: active
        display_name: 王彥
        merged_into_person_id: null
  children:
    - claim:
        id: c_javWiIZw52385d5uIwcKSk
        subject_person_id: p_wL6DEzwt6XpHQ1658fBFmM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P3HnkHGBWeAK7W75pJr413
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rBZ6dT76p-AIyBiXiSEHN5
          claim_id: c_javWiIZw52385d5uIwcKSk
          source_id: s_dKuqRYJAzpMDUEnLyxk7F9
          stance: supports
          locator: CBDB 双向互证（父 王伯元 ⇄ 子 王璋）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_dKuqRYJAzpMDUEnLyxk7F9
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 29330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29330&o=json
            external_identifier: CBDB:29330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P3HnkHGBWeAK7W75pJr413
        status: active
        display_name: 王璋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯元 | accepted |
| bio.summary | 王伯元，元人物。籍贯陽曲。（中国历代人物传记资料库 CBDB 29331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sJhMbwjHu6A2QrasBxy59J | 王彥 | accepted |
| children | p_P3HnkHGBWeAK7W75pJr413 | 王璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯元（CBDB 29331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29331&o=json)
- [中国历代人物传记资料库：王彥（CBDB 29332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29332&o=json)
- [中国历代人物传记资料库：王璋（CBDB 29330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29330&o=json)
