---
schema: wang-person/v1
id: p_xHekMpoEQyryADJWz2qmff
status: active
merged_into: null
display_name: 王立轂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fk33ViwGu5WQmehidrsJA7
        subject_person_id: p_xHekMpoEQyryADJWz2qmff
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立轂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1PUo6pKm3dCDNND3Hwdvf
          claim_id: c_Fk33ViwGu5WQmehidrsJA7
          source_id: s_B84tG19fbAZaBR8qXKc9vm
          stance: supports
          locator: CBDB:702399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702399）
          source: &a1
            id: s_B84tG19fbAZaBR8qXKc9vm
            source_type: api_record
            title: 中国历代人物传记资料库：王立轂（CBDB 702399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json
            external_identifier: CBDB:702399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nTDPVnx77AikrQQGeURSVa
        subject_person_id: p_xHekMpoEQyryADJWz2qmff
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立轂，明人物。籍贯臨海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 702399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e0_iZMnPkeVS-MdPc1fEZj
          claim_id: c_nTDPVnx77AikrQQGeURSVa
          source_id: s_B84tG19fbAZaBR8qXKc9vm
          stance: supports
          locator: CBDB:702399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PHYXoubcmIqudMeLnXmpFf
        subject_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHekMpoEQyryADJWz2qmff
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpCvT0mf2_hO_U2P4pzEmz
          claim_id: c_PHYXoubcmIqudMeLnXmpFf
          source_id: s_B84tG19fbAZaBR8qXKc9vm
          stance: supports
          locator: 臨海縣志，lgid=353171：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K23baGuNzCVmxSWXhhYJ4B
        status: active
        display_name: 王士性
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立轂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立轂 | accepted |
| bio.summary | 王立轂，明人物。籍贯臨海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 702399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K23baGuNzCVmxSWXhhYJ4B | 王士性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立轂（CBDB 702399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json)
