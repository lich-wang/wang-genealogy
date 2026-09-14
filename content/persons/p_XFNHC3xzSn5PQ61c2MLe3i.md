---
schema: wang-person/v1
id: p_XFNHC3xzSn5PQ61c2MLe3i
status: active
merged_into: null
display_name: 王偉
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ka2a1mY1NgMCRj6Ycmzenn
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BMZrK2kxggRJAo7ifmzeZf
          claim_id: c_ka2a1mY1NgMCRj6Ycmzenn
          source_id: s_rtahuuM6oUzKq85Pc5Bait
          stance: supports
          locator: CBDB:67431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67431）
          source: &a1
            id: s_rtahuuM6oUzKq85Pc5Bait
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 67431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67431&o=json
            external_identifier: CBDB:67431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qcKBfyaA1xXpusJMKck8r5
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZmysTjbWF9ZAVJevLyHCG
          claim_id: c_qcKBfyaA1xXpusJMKck8r5
          source_id: s_rtahuuM6oUzKq85Pc5Bait
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
        id: c_rfm8R46Xp9mGZChQ519BPs
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉（生于1442年），明人物。籍贯寧州，入仕進士，曾任庶吉士。（中国历代人物传记资料库 CBDB 67431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d3FIXObvZyf1jKZkEgkdr8
          claim_id: c_rfm8R46Xp9mGZChQ519BPs
          source_id: s_rtahuuM6oUzKq85Pc5Bait
          stance: supports
          locator: CBDB:67431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PCyQBQpLSOIL-1HXZtbosH
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pTi8pL8Hk7IjI0bdfMyoWh
          claim_id: c_PCyQBQpLSOIL-1HXZtbosH
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EF7DHHGHXKcw4Nmxy3fCNB
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 242559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242559&o=json
            external_identifier: CBDB:242559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EN3ydiKjRibv3nRcEaCbqj
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9aKZgqZP91R328jYEqYQef
        subject_person_id: p_pKqADZ4jx6wZMUxP8joPTh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hs1po3NOWlGJ2UFeVhRfPv
          claim_id: c_9aKZgqZP91R328jYEqYQef
          source_id: s_JPNFmszFkaojMsxNBudfjs
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JPNFmszFkaojMsxNBudfjs
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 242558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242558&o=json
            external_identifier: CBDB:242558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pKqADZ4jx6wZMUxP8joPTh
        status: active
        display_name: 王壽
        merged_into_person_id: null
    - claim:
        id: c_rzCB5ZE9Sk3U2KfWxYcFk8
        subject_person_id: p_vyvZcRpWhm68ZgPXAWAcXH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PezaeydxEsmP8qIGuQU2Tk
          claim_id: c_rzCB5ZE9Sk3U2KfWxYcFk8
          source_id: s_GsqkTmcfYrRYj3ZPwH3f95
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GsqkTmcfYrRYj3ZPwH3f95
            source_type: api_record
            title: 中国历代人物传记资料库：王原禮（CBDB 242557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242557&o=json
            external_identifier: CBDB:242557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vyvZcRpWhm68ZgPXAWAcXH
        status: active
        display_name: 王原禮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_WJz_aG2aD-fLm9mvnJBT8Z
        subject_person_id: p_9TfMLpFEsw54FQg72hzEwW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDsn6hGgVtRIKQLvgZVqK3
          claim_id: c_WJz_aG2aD-fLm9mvnJBT8Z
          source_id: s_GCj74Fu3oWLkkIgCL-xlFR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GCj74Fu3oWLkkIgCL-xlFR
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 242565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json
            external_identifier: CBDB:242565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9TfMLpFEsw54FQg72hzEwW
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_doCEXIDJ_Xn2RGSTFjcmOz
        subject_person_id: p_DELBeVYN8dEEVCNmAP3M98
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQfYT6YEgrmHvJu67rpT-J
          claim_id: c_doCEXIDJ_Xn2RGSTFjcmOz
          source_id: s_ZXFNvYElM7VWPDay1yAP4X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZXFNvYElM7VWPDay1yAP4X
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 242566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json
            external_identifier: CBDB:242566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DELBeVYN8dEEVCNmAP3M98
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_pDIRWtgKpbbEGJsj8Mc3mg
        subject_person_id: p_QAAidE1KSDn9s8S93QtNDw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FLwh--tWG5Gj4T5DxOdjJv
          claim_id: c_pDIRWtgKpbbEGJsj8Mc3mg
          source_id: s_IdCHVAsTtVsR60Zv0E-Swb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IdCHVAsTtVsR60Zv0E-Swb
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 242563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242563&o=json
            external_identifier: CBDB:242563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QAAidE1KSDn9s8S93QtNDw
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_mWPF8YgVjYq6WSbcWkCnzU
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4Zw5wDB8IQ-OzSVjur3Dt
          claim_id: c_mWPF8YgVjYq6WSbcWkCnzU
          source_id: s_eO6THSszD0Y3L3TcGhcwiI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eO6THSszD0Y3L3TcGhcwiI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 242562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json
            external_identifier: CBDB:242562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fyyzj57Mm8DAzGDRJKwT4w
        status: active
        display_name: 王傑
        merged_into_person_id: null
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1442年 | accepted |
| bio.summary | 王偉（生于1442年），明人物。籍贯寧州，入仕進士，曾任庶吉士。（中国历代人物传记资料库 CBDB 67431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EN3ydiKjRibv3nRcEaCbqj | 王政 | accepted |
| ancestors | p_pKqADZ4jx6wZMUxP8joPTh | 王壽 | accepted |
| ancestors | p_vyvZcRpWhm68ZgPXAWAcXH | 王原禮 | accepted |
| other | p_9TfMLpFEsw54FQg72hzEwW | 王侃 | accepted |
| other | p_DELBeVYN8dEEVCNmAP3M98 | 王儼 | accepted |
| other | p_QAAidE1KSDn9s8S93QtNDw | 王倫 | accepted |
| other | p_fyyzj57Mm8DAzGDRJKwT4w | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 242562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json)
- [中国历代人物传记资料库：王侃（CBDB 242565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json)
- [中国历代人物传记资料库：王倫（CBDB 242563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242563&o=json)
- [中国历代人物传记资料库：王壽（CBDB 242558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242558&o=json)
- [中国历代人物传记资料库：王偉（CBDB 67431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67431&o=json)
- [中国历代人物传记资料库：王儼（CBDB 242566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json)
- [中国历代人物传记资料库：王原禮（CBDB 242557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242557&o=json)
- [中国历代人物传记资料库：王政（CBDB 242559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242559&o=json)
