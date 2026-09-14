---
schema: wang-person/v1
id: p_DCTkDfQk8qHYiFjuEH45Mr
status: active
merged_into: null
display_name: 王遂
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GyBgQu1PMn5J9KE6ZAq3J2
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_23sKfDtP4ES69mdo4xUupS
          claim_id: c_GyBgQu1PMn5J9KE6ZAq3J2
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: CBDB:12053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12053）
          source: &a1
            id: s_4z3F8MMmD2S1em5Hn7hH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 12053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json
            external_identifier: CBDB:12053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AircSDGDFvLvLLHUtc6X9Q
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂，宋人物。籍贯金壇，入仕進士，曾任尚書省工部尚書、尚書省戶部侍郎、安撫使。（中国历代人物传记资料库 CBDB 12053）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6aKwbOx31oxgLpsWAQsBVN
          claim_id: c_AircSDGDFvLvLLHUtc6X9Q
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: CBDB:12053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XO8_GYeepXSmZ-d_VSLAK0
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVqCXVicYP0bCstTcSSyb0
          claim_id: c_XO8_GYeepXSmZ-d_VSLAK0
          source_id: s_4z3F8MMmD2S1em5Hn7hH1H
          stance: supports
          locator: 宋史：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_aNYffmfwCJfpWwCWa9xXnv
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ME9qH9btttK3rra3Adn7d5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-hEKm2_cM9QU5ADyDAZ8XB
          claim_id: c_aNYffmfwCJfpWwCWa9xXnv
          source_id: s_-VTadVqTh6g8O2g0KjWTzg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12053 王遂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-VTadVqTh6g8O2g0KjWTzg
            source_type: api_record
            title: 中国历代人物传记资料库：王志叔（CBDB 38990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38990&o=json
            external_identifier: CBDB:38990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ME9qH9btttK3rra3Adn7d5
        status: active
        display_name: 王志叔
        merged_into_person_id: null
    - claim:
        id: c_Rid2GxEOrJRiW0DAihA3Q9
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hJDteFRnQExBHBJA693Wh3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KvHD1Qnn49siZZZk8HmiUu
          claim_id: c_Rid2GxEOrJRiW0DAihA3Q9
          source_id: s_tUFnz-YC3zOeey1UksTUPE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12053 王遂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tUFnz-YC3zOeey1UksTUPE
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 12054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12054&o=json
            external_identifier: CBDB:12054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJDteFRnQExBHBJA693Wh3
        status: active
        display_name: 王遜
        merged_into_person_id: null
    - claim:
        id: c_FrEm6kqeMC-HK8IIlMuzmz
        subject_person_id: p_DCTkDfQk8qHYiFjuEH45Mr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QDDCadTvJV88yy67-_D1Oi
          claim_id: c_FrEm6kqeMC-HK8IIlMuzmz
          source_id: s_hwidjsOxrcsbKglxeMQW43
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12053 王遂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hwidjsOxrcsbKglxeMQW43
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 12055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json
            external_identifier: CBDB:12055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ik2xLF8xu36Bj6AhBMnYty
        status: active
        display_name: 王選
        merged_into_person_id: null
---

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| bio.summary | 王遂，宋人物。籍贯金壇，入仕進士，曾任尚書省工部尚書、尚書省戶部侍郎、安撫使。（中国历代人物传记资料库 CBDB 12053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |
| other | p_ME9qH9btttK3rra3Adn7d5 | 王志叔 | accepted |
| other | p_hJDteFRnQExBHBJA693Wh3 | 王遜 | accepted |
| other | p_ik2xLF8xu36Bj6AhBMnYty | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遂（CBDB 12053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12053&o=json)
- [中国历代人物传记资料库：王選（CBDB 12055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json)
- [中国历代人物传记资料库：王遜（CBDB 12054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12054&o=json)
- [中国历代人物传记资料库：王志叔（CBDB 38990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38990&o=json)
