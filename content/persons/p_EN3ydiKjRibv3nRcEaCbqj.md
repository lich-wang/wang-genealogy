---
schema: wang-person/v1
id: p_EN3ydiKjRibv3nRcEaCbqj
status: active
merged_into: null
display_name: 王政
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jNdz7Rd6M2Y8FuJA62vr9
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zj4VBh2hP7CU3J2dvN1VCE
          claim_id: c_2jNdz7Rd6M2Y8FuJA62vr9
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: CBDB:242559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242559）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pt1MFaQjaGhVEBEdBjfdy8
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。成化二年進士，籍贯寧州，曾任府經歷。（中国历代人物传记资料库 CBDB 242559）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yuk8V-id6Xq5Pu874aJxD3
          claim_id: c_Pt1MFaQjaGhVEBEdBjfdy8
          source_id: s_EF7DHHGHXKcw4Nmxy3fCNB
          stance: supports
          locator: CBDB:242559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_XFNHC3xzSn5PQ61c2MLe3i
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_l9DlO8LBV4-1ro8Fg8u2fh
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9TfMLpFEsw54FQg72hzEwW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VzlYF6Nke8G4SmEw5zOK_
          claim_id: c_l9DlO8LBV4-1ro8Fg8u2fh
          source_id: s_GCj74Fu3oWLkkIgCL-xlFR
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王侃 之父／母。
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
        id: c_AHOd7lkwPjNGJn4A5LCqjy
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DELBeVYN8dEEVCNmAP3M98
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g6ziPa8DtGnv070Um3fLBS
          claim_id: c_AHOd7lkwPjNGJn4A5LCqjy
          source_id: s_ZXFNvYElM7VWPDay1yAP4X
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王儼 之父／母。
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
        id: c_QymyE6ZL4GV6ALhAf8UqfF
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QAAidE1KSDn9s8S93QtNDw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCirMB1R4dugLakzfTJBxJ
          claim_id: c_QymyE6ZL4GV6ALhAf8UqfF
          source_id: s_IdCHVAsTtVsR60Zv0E-Swb
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王倫 之父／母。
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
        id: c_214Pc1NXE2aTOrRjCZycBb
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YakaXyulVnPY6MdO6REfHH
          claim_id: c_214Pc1NXE2aTOrRjCZycBb
          source_id: s_eO6THSszD0Y3L3TcGhcwiI
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王傑 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。成化二年進士，籍贯寧州，曾任府經歷。（中国历代人物传记资料库 CBDB 242559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XFNHC3xzSn5PQ61c2MLe3i | 王偉 | accepted |
| children | p_9TfMLpFEsw54FQg72hzEwW | 王侃 | accepted |
| children | p_DELBeVYN8dEEVCNmAP3M98 | 王儼 | accepted |
| children | p_QAAidE1KSDn9s8S93QtNDw | 王倫 | accepted |
| children | p_fyyzj57Mm8DAzGDRJKwT4w | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 242562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json)
- [中国历代人物传记资料库：王侃（CBDB 242565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json)
- [中国历代人物传记资料库：王倫（CBDB 242563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242563&o=json)
- [中国历代人物传记资料库：王儼（CBDB 242566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json)
- [中国历代人物传记资料库：王政（CBDB 242559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242559&o=json)
