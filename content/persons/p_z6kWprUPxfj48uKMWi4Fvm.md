---
schema: wang-person/v1
id: p_z6kWprUPxfj48uKMWi4Fvm
status: active
merged_into: null
display_name: 王良材
cbdb_id: 309426
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fBQ3AGHymF3NEWJK9hmnu6
        subject_person_id: p_z6kWprUPxfj48uKMWi4Fvm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良材，明人物。嘉靖二十六年進士，籍贯寧津，曾任驛丞。（中国历代人物传记资料库 CBDB 309426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_D98WmE0RnXMCX6FbrVurcd
          claim_id: c_fBQ3AGHymF3NEWJK9hmnu6
          source_id: s_tkFtMyxawWVCyRtioLm6Nb
          stance: supports
          locator: CBDB:309426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tkFtMyxawWVCyRtioLm6Nb
            source_type: api_record
            title: 中国历代人物传记资料库：王良材（CBDB 309426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json
            external_identifier: CBDB:309426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aRKXbWoTacmESwZgGyHG1K
        subject_person_id: p_z6kWprUPxfj48uKMWi4Fvm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XoDJTQjLFEy66JWWe71yM7
          claim_id: c_aRKXbWoTacmESwZgGyHG1K
          source_id: s_tkFtMyxawWVCyRtioLm6Nb
          stance: supports
          locator: CBDB:309426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0cGOjEE5YBXQNy3k0PWPwl
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6kWprUPxfj48uKMWi4Fvm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YIHZh5qHpt-Mim7stoxeo
          claim_id: c_0cGOjEE5YBXQNy3k0PWPwl
          source_id: s_eldfpPdnhDopDzo2-QqHrh
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良材 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良材 之父／母。
          source:
            id: s_eldfpPdnhDopDzo2-QqHrh
            source_type: api_record
            title: 中国历代人物传记资料库：王良材（CBDB 309426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json
            external_identifier: CBDB:309426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzRS9JFfmbPcLsHDaoLQcY
        status: active
        display_name: 王玶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d96F587IlbnaZ_sfgGQuKI
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z6kWprUPxfj48uKMWi4Fvm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW69EozdtxBOGP66nXHRvp
          claim_id: c_d96F587IlbnaZ_sfgGQuKI
          source_id: s_eldfpPdnhDopDzo2-QqHrh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126530 王良貴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eldfpPdnhDopDzo2-QqHrh
            source_type: api_record
            title: 中国历代人物传记资料库：王良材（CBDB 309426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json
            external_identifier: CBDB:309426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
---

# 王良材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良材，明人物。嘉靖二十六年進士，籍贯寧津，曾任驛丞。（中国历代人物传记资料库 CBDB 309426） | accepted |
| name.primary | 王良材 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BzRS9JFfmbPcLsHDaoLQcY | 王玶 | accepted |
| other | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良材（CBDB 309426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309426&o=json)
