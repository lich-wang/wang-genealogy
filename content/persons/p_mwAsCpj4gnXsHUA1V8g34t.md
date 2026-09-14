---
schema: wang-person/v1
id: p_mwAsCpj4gnXsHUA1V8g34t
status: active
merged_into: null
display_name: 王伯瀛
cbdb_id: 274045
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iidXhcHurK9d3frUVHusmM
        subject_person_id: p_mwAsCpj4gnXsHUA1V8g34t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯瀛，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NEE2YgkWHsEjoEcQ0QVTsX
          claim_id: c_iidXhcHurK9d3frUVHusmM
          source_id: s_ABHdparuuYDrabbzz9rDCw
          stance: supports
          locator: CBDB:274045
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ABHdparuuYDrabbzz9rDCw
            source_type: api_record
            title: 中国历代人物传记资料库：王伯瀛（CBDB 274045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274045&o=json
            external_identifier: CBDB:274045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZ3tiLG48VdcoEyfR84UNY
        subject_person_id: p_mwAsCpj4gnXsHUA1V8g34t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ea84WumgfQFVF6iJMToxPd
          claim_id: c_LZ3tiLG48VdcoEyfR84UNY
          source_id: s_ABHdparuuYDrabbzz9rDCw
          stance: supports
          locator: CBDB:274045
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tnG7LGQP9sYnMfAciQBrew
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mwAsCpj4gnXsHUA1V8g34t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KtHY1hjsrvrvc818-0gcic
          claim_id: c_tnG7LGQP9sYnMfAciQBrew
          source_id: s_Ab4srcelDKCQ-ezVGv1QR2
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯瀛 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯瀛 之父／母。
          source:
            id: s_Ab4srcelDKCQ-ezVGv1QR2
            source_type: api_record
            title: 中国历代人物传记资料库：王伯瀛（CBDB 274045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274045&o=json
            external_identifier: CBDB:274045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPbUUoQEGcRs5zuUF67Td8
        status: active
        display_name: 王坤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0d1boLXH_enk1Xb36MDWw_
        subject_person_id: p_mwAsCpj4gnXsHUA1V8g34t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7lOY3PIld4P9XASIG_AOup
          claim_id: c_0d1boLXH_enk1Xb36MDWw_
          source_id: s_Ab4srcelDKCQ-ezVGv1QR2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201540 王一麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ab4srcelDKCQ-ezVGv1QR2
            source_type: api_record
            title: 中国历代人物传记资料库：王伯瀛（CBDB 274045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274045&o=json
            external_identifier: CBDB:274045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
---

# 王伯瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯瀛，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274045） | accepted |
| name.primary | 王伯瀛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dPbUUoQEGcRs5zuUF67Td8 | 王坤 | accepted |
| other | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯瀛（CBDB 274045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274045&o=json)
