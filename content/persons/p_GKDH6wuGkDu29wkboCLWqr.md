---
schema: wang-person/v1
id: p_GKDH6wuGkDu29wkboCLWqr
status: active
merged_into: null
display_name: 王珮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LvJqXZrzUz2dN5sNHGmRj3
        subject_person_id: p_GKDH6wuGkDu29wkboCLWqr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v6tBSt25aFosPD8uJo7Wng
          claim_id: c_LvJqXZrzUz2dN5sNHGmRj3
          source_id: s_7iPj4gGwrQ4iK1M3Kp86Zh
          stance: supports
          locator: CBDB:241890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241890）
          source: &a1
            id: s_7iPj4gGwrQ4iK1M3Kp86Zh
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 241890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json
            external_identifier: CBDB:241890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vHrbQ6u5FDvKp3N5KAijTJ
        subject_person_id: p_GKDH6wuGkDu29wkboCLWqr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珮，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h0W56KX_j8rVFQKYXGPbbo
          claim_id: c_vHrbQ6u5FDvKp3N5KAijTJ
          source_id: s_7iPj4gGwrQ4iK1M3Kp86Zh
          stance: supports
          locator: CBDB:241890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__WvsOoJrcIgJA4vuTJGfmQ
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GKDH6wuGkDu29wkboCLWqr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ikeACFF9C_pufHq-toi42
          claim_id: c__WvsOoJrcIgJA4vuTJGfmQ
          source_id: s_-UI2vXbXoLnoyMMomueoyJ
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王珮 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王珮 之父／母。
          source:
            id: s_-UI2vXbXoLnoyMMomueoyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 241890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json
            external_identifier: CBDB:241890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8D8JJjvAk9tGe283upkqdk
        status: active
        display_name: 王守文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f8LHaeEITW-6ox4lpTZZdm
        subject_person_id: p_GKDH6wuGkDu29wkboCLWqr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8prDWbSwm-EUypDTZ_dlj_
          claim_id: c_f8LHaeEITW-6ox4lpTZZdm
          source_id: s_-UI2vXbXoLnoyMMomueoyJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-UI2vXbXoLnoyMMomueoyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 241890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json
            external_identifier: CBDB:241890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TxHEXLnqR7Hmrn4YZb9SRE
        status: active
        display_name: 王璿
        merged_into_person_id: null
---

# 王珮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珮 | accepted |
| bio.summary | 王珮，明人物。成化二年進士，籍贯安岳。（中国历代人物传记资料库 CBDB 241890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8D8JJjvAk9tGe283upkqdk | 王守文 | accepted |
| other | p_TxHEXLnqR7Hmrn4YZb9SRE | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珮（CBDB 241890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json)
