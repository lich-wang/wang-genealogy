---
schema: wang-person/v1
id: p_zAh17pTJy9yoR9V9ArCvL7
status: active
merged_into: null
display_name: 王楠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xfo7mS74wvra8mPLFTQNCW
        subject_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DexiHuq1jsLPj6HSXJa7VN
          claim_id: c_xfo7mS74wvra8mPLFTQNCW
          source_id: s_uLn7joU4AgRojH2z66Ko6Q
          stance: supports
          locator: CBDB:203575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203575）
          source: &a1
            id: s_uLn7joU4AgRojH2z66Ko6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 203575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203575&o=json
            external_identifier: CBDB:203575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_42Bp51GtiMxLzsw4tSdKzS
        subject_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWcHg88JAwqY9GYpZmUGL5
          claim_id: c_42Bp51GtiMxLzsw4tSdKzS
          source_id: s_uLn7joU4AgRojH2z66Ko6Q
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
        id: c_XzcTH6YdzUom3neHmoAdg2
        subject_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楠（生于1505年），明人物。明清進士進士，籍贯文登，入仕進士。（中国历代人物传记资料库 CBDB 203575）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o-Tgb_8mGEOzb255ZYjPUx
          claim_id: c_XzcTH6YdzUom3neHmoAdg2
          source_id: s_uLn7joU4AgRojH2z66Ko6Q
          stance: supports
          locator: CBDB:203575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E_mQiX5_OzTcDKUojeD1In
        subject_person_id: p_HRhvUU4qCYj6R73J2eH5D9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GlYhU-iNI4Yxic0RgRQthu
          claim_id: c_E_mQiX5_OzTcDKUojeD1In
          source_id: s_s3LEw7bHRPLzvWUT6gLhc3
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s3LEw7bHRPLzvWUT6gLhc3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 306730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306730&o=json
            external_identifier: CBDB:306730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HRhvUU4qCYj6R73J2eH5D9
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_SiEDIj6H0xZK2WWNveHPEl
        subject_person_id: p_56i4DUP2wFzJ6ymmACpTVE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2OuPG8SkJPGJvNY2wiSTiB
          claim_id: c_SiEDIj6H0xZK2WWNveHPEl
          source_id: s_zCfT17oF19rm1KB3EEqwHC
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zCfT17oF19rm1KB3EEqwHC
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 306727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306727&o=json
            external_identifier: CBDB:306727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56i4DUP2wFzJ6ymmACpTVE
        status: active
        display_name: 王福榮
        merged_into_person_id: null
    - claim:
        id: c_DeUS0MHXgvaa_a0kJkTHqY
        subject_person_id: p_fd9uj7Lqzrgnx5zjkGE8Mh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__FBPxPqjx5Kwo8wQmPrggg
          claim_id: c_DeUS0MHXgvaa_a0kJkTHqY
          source_id: s_KRaEPUpi5ARbenCV1fTyFP
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KRaEPUpi5ARbenCV1fTyFP
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 306729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306729&o=json
            external_identifier: CBDB:306729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fd9uj7Lqzrgnx5zjkGE8Mh
        status: active
        display_name: 王聚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楠 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | 王楠（生于1505年），明人物。明清進士進士，籍贯文登，入仕進士。（中国历代人物传记资料库 CBDB 203575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HRhvUU4qCYj6R73J2eH5D9 | 王崇 | accepted |
| ancestors | p_56i4DUP2wFzJ6ymmACpTVE | 王福榮 | accepted |
| ancestors | p_fd9uj7Lqzrgnx5zjkGE8Mh | 王聚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 306730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306730&o=json)
- [中国历代人物传记资料库：王福榮（CBDB 306727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306727&o=json)
- [中国历代人物传记资料库：王聚（CBDB 306729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306729&o=json)
- [中国历代人物传记资料库：王楠（CBDB 203575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203575&o=json)
