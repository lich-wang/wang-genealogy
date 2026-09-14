---
schema: wang-person/v1
id: p_HvKxCmK79R4YwoS4fwu3e3
status: active
merged_into: null
display_name: 王璽
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7M54ELzytAzANn9rJMLtdW
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NG1QicGNshcPFHERTWNdV4
          claim_id: c_7M54ELzytAzANn9rJMLtdW
          source_id: s_DSo626Cyg9WRytvNrdPkTp
          stance: supports
          locator: CBDB:198852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198852）
          source: &a1
            id: s_DSo626Cyg9WRytvNrdPkTp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 198852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198852&o=json
            external_identifier: CBDB:198852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UqGQu7S2iGpn1zLkC9DMd6
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFTpVzvcBc8tir3x8NHVzv
          claim_id: c_UqGQu7S2iGpn1zLkC9DMd6
          source_id: s_DSo626Cyg9WRytvNrdPkTp
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
        id: c_gEX7nLxUwqfojo69LYbX2E
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽（生于1430年），明人物。天順四年進士，籍贯長垣，入仕進士。（中国历代人物传记资料库 CBDB 198852）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LC97kCKq0BSQ-wNGSoWBQf
          claim_id: c_gEX7nLxUwqfojo69LYbX2E
          source_id: s_DSo626Cyg9WRytvNrdPkTp
          stance: supports
          locator: CBDB:198852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TAMee7q1VXZaHiYyeAvAlD
        subject_person_id: p_q794sLSCL4J2grKV4vicPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MobT3eZxIgECeAWMGVGPpo
          claim_id: c_TAMee7q1VXZaHiYyeAvAlD
          source_id: s_1pndQ4JeskVJJZMWhajj9D
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1pndQ4JeskVJJZMWhajj9D
            source_type: api_record
            title: 中国历代人物传记资料库：王時佐（CBDB 324119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324119&o=json
            external_identifier: CBDB:324119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_q794sLSCL4J2grKV4vicPg
        status: active
        display_name: 王時佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DRJMFHqOodo3SgpLT5Cqf4
        subject_person_id: p_Gf7GU7Np8Jdkb6BBsuBjFS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9_Aa5KUmghB2jZIgXnfMi
          claim_id: c_DRJMFHqOodo3SgpLT5Cqf4
          source_id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJDrZ7Gh7Pg2TfiN1Bpxrp
            source_type: api_record
            title: 中国历代人物传记资料库：王克銘（CBDB 324108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324108&o=json
            external_identifier: CBDB:324108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gf7GU7Np8Jdkb6BBsuBjFS
        status: active
        display_name: 王克銘
        merged_into_person_id: null
    - claim:
        id: c_KZWR-Fyg4HIGxLc2AY9RN4
        subject_person_id: p_sBg3cskAEC4VP4zx8fzJFq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7A6DgOGmvo5mDXTdGie1a
          claim_id: c_KZWR-Fyg4HIGxLc2AY9RN4
          source_id: s_r744nw9fMLvCXKQJavt4qE
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第一百零二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r744nw9fMLvCXKQJavt4qE
            source_type: api_record
            title: 中国历代人物传记资料库：王六（CBDB 324096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324096&o=json
            external_identifier: CBDB:324096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sBg3cskAEC4VP4zx8fzJFq
        status: active
        display_name: 王六
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_nRQnG7KrG16qA2qnP725RH
        subject_person_id: p_46scthyDjVnfBGKkEsCk7a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uUAdhPp2TK1dbWhrJS-kCp
          claim_id: c_nRQnG7KrG16qA2qnP725RH
          source_id: s_qPWiwqSAG0TSMoralL9jrp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qPWiwqSAG0TSMoralL9jrp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 324174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324174&o=json
            external_identifier: CBDB:324174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_46scthyDjVnfBGKkEsCk7a
        status: active
        display_name: 王瑀
        merged_into_person_id: null
    - claim:
        id: c_Gn85B1bmra4KgzILjKLOuz
        subject_person_id: p_GD557R9tpiLg87ViNK5wDo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MIf6M7PLJbOcoGjoXYIEI7
          claim_id: c_Gn85B1bmra4KgzILjKLOuz
          source_id: s__t-Xkvj-kVVTDOgyGCVSYH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__t-Xkvj-kVVTDOgyGCVSYH
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 324185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json
            external_identifier: CBDB:324185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GD557R9tpiLg87ViNK5wDo
        status: active
        display_name: 王璇
        merged_into_person_id: null
    - claim:
        id: c_fcGQxF76_K2lA0FwgfEeWL
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XTPHfCfC1wNdLwgUN1Skwr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87p4O_7NbTwNo8O3KAYHvZ
          claim_id: c_fcGQxF76_K2lA0FwgfEeWL
          source_id: s_QaXJDTCunACw6XFYKoAb-m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QaXJDTCunACw6XFYKoAb-m
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 324196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324196&o=json
            external_identifier: CBDB:324196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XTPHfCfC1wNdLwgUN1Skwr
        status: active
        display_name: 王璡
        merged_into_person_id: null
    - claim:
        id: c_ue49R9PAgT1NS01s_HU72M
        subject_person_id: p_HvKxCmK79R4YwoS4fwu3e3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3auhkT5nRW7F_7bpjffDtu
          claim_id: c_ue49R9PAgT1NS01s_HU72M
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198852 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pJ2QPSMCenPvGoQ2CpyCQD
        status: active
        display_name: 王琦
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | 王璽（生于1430年），明人物。天順四年進士，籍贯長垣，入仕進士。（中国历代人物传记资料库 CBDB 198852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q794sLSCL4J2grKV4vicPg | 王時佐 | accepted |
| ancestors | p_Gf7GU7Np8Jdkb6BBsuBjFS | 王克銘 | accepted |
| ancestors | p_sBg3cskAEC4VP4zx8fzJFq | 王六 | accepted |
| other | p_46scthyDjVnfBGKkEsCk7a | 王瑀 | accepted |
| other | p_GD557R9tpiLg87ViNK5wDo | 王璇 | accepted |
| other | p_XTPHfCfC1wNdLwgUN1Skwr | 王璡 | accepted |
| other | p_pJ2QPSMCenPvGoQ2CpyCQD | 王琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 324196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324196&o=json)
- [中国历代人物传记资料库：王克銘（CBDB 324108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324108&o=json)
- [中国历代人物传记资料库：王六（CBDB 324096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324096&o=json)
- [中国历代人物传记资料库：王琦（CBDB 256030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json)
- [中国历代人物传记资料库：王時佐（CBDB 324119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324119&o=json)
- [中国历代人物传记资料库：王璽（CBDB 198852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198852&o=json)
- [中国历代人物传记资料库：王璇（CBDB 324185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324185&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 324174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324174&o=json)
