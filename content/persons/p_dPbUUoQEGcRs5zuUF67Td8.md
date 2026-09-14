---
schema: wang-person/v1
id: p_dPbUUoQEGcRs5zuUF67Td8
status: active
merged_into: null
display_name: 王坤
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QxTujsG7PvJFCoM4tbvbjK
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9b1x7Nv1PKNWSM5D1ftCv
          claim_id: c_QxTujsG7PvJFCoM4tbvbjK
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: CBDB:274038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274038）
          source: &a1
            id: s_37EqMwj6AWqcVdX4xs8pBL
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 274038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json
            external_identifier: CBDB:274038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rnVmCahQP2aqA38QAMgQbX
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dw2CJOVbYzc9q6zSUp3KCY
          claim_id: c_rnVmCahQP2aqA38QAMgQbX
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: CBDB:274038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_a5esC13_CSruIZLXdahB3s
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsOvLH33kZgIqZi01DDAd1
          claim_id: c_a5esC13_CSruIZLXdahB3s
          source_id: s_37EqMwj6AWqcVdX4xs8pBL
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
    - claim:
        id: c_avO8OE9UvdgNBxorSOpJDl
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7NCEK5U9GqB6xrx3grQXiw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1wWL0zYEmjBYmPO3I52hMp
          claim_id: c_avO8OE9UvdgNBxorSOpJDl
          source_id: s_IaV4_YwqZQAExEbFOCglBI
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯政 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯政 之父／母。
          source:
            id: s_IaV4_YwqZQAExEbFOCglBI
            source_type: api_record
            title: 中国历代人物传记资料库：王伯政（CBDB 274047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274047&o=json
            external_identifier: CBDB:274047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7NCEK5U9GqB6xrx3grQXiw
        status: active
        display_name: 王伯政
        merged_into_person_id: null
    - claim:
        id: c_OlhxfQhwf8ADy6p3VBnglG
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7c3xzxcv5fZA64mUkpAEfE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MKCLZMHZluVNSAzXsYrYj
          claim_id: c_OlhxfQhwf8ADy6p3VBnglG
          source_id: s_FMDhGcccRWtaAuTdkNy16_
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯昌 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯昌 之父／母。
          source:
            id: s_FMDhGcccRWtaAuTdkNy16_
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 274043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json
            external_identifier: CBDB:274043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7c3xzxcv5fZA64mUkpAEfE
        status: active
        display_name: 王伯昌
        merged_into_person_id: null
    - claim:
        id: c_myBvm2OzxZZ4iQW8KCZRpe
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MRjK3U6BvYe3paNLexNCfM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8N5G9vSafgJphLAd_O9rG
          claim_id: c_myBvm2OzxZZ4iQW8KCZRpe
          source_id: s_Pi7Wu1vmtylmGUKrYVSLDx
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯溟 与 王一麟 为同胞（CBDB 记「兄」），王一麟 之父／母即 王伯溟 之父／母。
          source:
            id: s_Pi7Wu1vmtylmGUKrYVSLDx
            source_type: api_record
            title: 中国历代人物传记资料库：王伯溟（CBDB 274049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274049&o=json
            external_identifier: CBDB:274049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MRjK3U6BvYe3paNLexNCfM
        status: active
        display_name: 王伯溟
        merged_into_person_id: null
    - claim:
        id: c_XoBfv9zSX3RC8uuNhGLXxr
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UWL6G8d3xRxiAutVHQCCn6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OU69rYXW9pAqSmNWoW_h6n
          claim_id: c_XoBfv9zSX3RC8uuNhGLXxr
          source_id: s_R_XCfwnI8qkaekUD2unCVb
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯萬 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯萬 之父／母。
          source:
            id: s_R_XCfwnI8qkaekUD2unCVb
            source_type: api_record
            title: 中国历代人物传记资料库：王伯萬（CBDB 274046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274046&o=json
            external_identifier: CBDB:274046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UWL6G8d3xRxiAutVHQCCn6
        status: active
        display_name: 王伯萬
        merged_into_person_id: null
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
        id: p_mwAsCpj4gnXsHUA1V8g34t
        status: active
        display_name: 王伯瀛
        merged_into_person_id: null
    - claim:
        id: c_5bQfaitR3rgWo4vS9DRQhd
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6BBFwnL8PML5iF4nDhUH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsUz3SkKKdeqBKtDWYbzmM
          claim_id: c_5bQfaitR3rgWo4vS9DRQhd
          source_id: s_cxB4D4brHRbMj9p8FnzMK1
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯清 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯清 之父／母。
          source:
            id: s_cxB4D4brHRbMj9p8FnzMK1
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 274044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json
            external_identifier: CBDB:274044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r6BBFwnL8PML5iF4nDhUH1
        status: active
        display_name: 王伯清
        merged_into_person_id: null
    - claim:
        id: c_ykv4EQR6hbmpYs59zDs8st
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tYzfBfQG9EEVBDhinG8Vdp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9mZClxqTPV4YkHEYZAEni
          claim_id: c_ykv4EQR6hbmpYs59zDs8st
          source_id: s_Tj6XI3-aAdiK7sz14MhaX7
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯海 与 王一麟 为同胞（CBDB 记「兄」），王一麟 之父／母即 王伯海 之父／母。
          source:
            id: s_Tj6XI3-aAdiK7sz14MhaX7
            source_type: api_record
            title: 中国历代人物传记资料库：王伯海（CBDB 274048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274048&o=json
            external_identifier: CBDB:274048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tYzfBfQG9EEVBDhinG8Vdp
        status: active
        display_name: 王伯海
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | 王坤，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |
| children | p_7NCEK5U9GqB6xrx3grQXiw | 王伯政 | accepted |
| children | p_7c3xzxcv5fZA64mUkpAEfE | 王伯昌 | accepted |
| children | p_MRjK3U6BvYe3paNLexNCfM | 王伯溟 | accepted |
| children | p_UWL6G8d3xRxiAutVHQCCn6 | 王伯萬 | accepted |
| children | p_mwAsCpj4gnXsHUA1V8g34t | 王伯瀛 | accepted |
| children | p_r6BBFwnL8PML5iF4nDhUH1 | 王伯清 | accepted |
| children | p_tYzfBfQG9EEVBDhinG8Vdp | 王伯海 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯昌（CBDB 274043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274043&o=json)
- [中国历代人物传记资料库：王伯海（CBDB 274048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274048&o=json)
- [中国历代人物传记资料库：王伯溟（CBDB 274049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274049&o=json)
- [中国历代人物传记资料库：王伯清（CBDB 274044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json)
- [中国历代人物传记资料库：王伯萬（CBDB 274046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274046&o=json)
- [中国历代人物传记资料库：王伯瀛（CBDB 274045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274045&o=json)
- [中国历代人物传记资料库：王伯政（CBDB 274047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274047&o=json)
- [中国历代人物传记资料库：王坤（CBDB 274038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274038&o=json)
