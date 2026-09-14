---
schema: wang-person/v1
id: p_vowE3XMF6f9r166gUrc4qM
status: active
merged_into: null
display_name: 王遵孝
cbdb_id: 224063
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hq98CRNSRJiZN5D3PEVuUe
        subject_person_id: p_vowE3XMF6f9r166gUrc4qM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵孝，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224063）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9qqwzUcz2CkC_MIQESAciC
          claim_id: c_Hq98CRNSRJiZN5D3PEVuUe
          source_id: s_ntSsYeWCopbk8YLeRsHdYH
          stance: supports
          locator: CBDB:224063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ntSsYeWCopbk8YLeRsHdYH
            source_type: api_record
            title: 中国历代人物传记资料库：王遵孝（CBDB 224063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json
            external_identifier: CBDB:224063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1f6jgFfCSVFsoeNbafVky
        subject_person_id: p_vowE3XMF6f9r166gUrc4qM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qvUD951NJpXofyWgbF6Vc8
          claim_id: c_A1f6jgFfCSVFsoeNbafVky
          source_id: s_ntSsYeWCopbk8YLeRsHdYH
          stance: supports
          locator: CBDB:224063
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gpQnPSr5nrB6orbNMKLVu3
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vowE3XMF6f9r166gUrc4qM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Xp8BeoZCINGi7Q9Drb_pX
          claim_id: c_gpQnPSr5nrB6orbNMKLVu3
          source_id: s_K8pMIzjWh0eEKJNwHoHN4-
          stance: supports
          locator: CBDB：兄弟 王遵訓（206844）之父／母 王倫
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵孝 与 王遵訓 为同胞（CBDB 记「兄」），王遵訓 之父／母即 王遵孝 之父／母。
          source:
            id: s_K8pMIzjWh0eEKJNwHoHN4-
            source_type: api_record
            title: 中国历代人物传记资料库：王遵孝（CBDB 224063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json
            external_identifier: CBDB:224063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SW2vBS5Q2Gs57G32UxYrWC
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8oLGparNAziGgdQ8W-kXAz
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vowE3XMF6f9r166gUrc4qM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8K7mRVY2I9hPEXE5_Lms4
          claim_id: c_8oLGparNAziGgdQ8W-kXAz
          source_id: s_K8pMIzjWh0eEKJNwHoHN4-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206844 王遵訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K8pMIzjWh0eEKJNwHoHN4-
            source_type: api_record
            title: 中国历代人物传记资料库：王遵孝（CBDB 224063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json
            external_identifier: CBDB:224063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
---

# 王遵孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵孝，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224063） | accepted |
| name.primary | 王遵孝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SW2vBS5Q2Gs57G32UxYrWC | 王倫 | accepted |
| other | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵孝（CBDB 224063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224063&o=json)
