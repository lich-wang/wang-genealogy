---
schema: wang-person/v1
id: p_FZsZBsVgtXYBR7R5He9YWs
status: active
merged_into: null
display_name: 王嘉言
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wiHKA64UX2exGiFJcc9GE9
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NTdbZL4nhKmV8zBqQRgVa4
          claim_id: c_wiHKA64UX2exGiFJcc9GE9
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
          stance: supports
          locator: CBDB:204590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204590）
          source: &a1
            id: s_GqRYTmjNU7r5RD5CwX5fQE
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 204590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204590&o=json
            external_identifier: CBDB:204590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ce2jJuDMCsvLRNonZGE8qr
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mf6o5ucQQiDF6oCxTg4Q7B
          claim_id: c_Ce2jJuDMCsvLRNonZGE8qr
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
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
        id: c_uUv8XmvCbK7NK1vL3UbAgq
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言（生于1526年），明人物。嘉靖三十五年進士，籍贯臨淄，入仕進士。（中国历代人物传记资料库 CBDB 204590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QvRDBtP4yoI8xfWyg4NFZd
          claim_id: c_uUv8XmvCbK7NK1vL3UbAgq
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
          stance: supports
          locator: CBDB:204590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nQYAmSlb-gSiumt0QnER-h
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8hvxXXBwPQviAE1HNJRTp1
          claim_id: c_nQYAmSlb-gSiumt0QnER-h
          source_id: s_7CP5EPFXNASY1dbtDS2jhC
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7CP5EPFXNASY1dbtDS2jhC
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 321235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321235&o=json
            external_identifier: CBDB:321235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PRKaEr8menL16CrSqqwL5J
        status: active
        display_name: 王濂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cy7zouZ2exdd-JXfI78vLZ
        subject_person_id: p_3GmjVqXwCvyZ6SHEhrxTD4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQMFxJA2zt4_sCXcfU369Y
          claim_id: c_cy7zouZ2exdd-JXfI78vLZ
          source_id: s_kmxB7yQP5W4XH1r7UyXvG2
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kmxB7yQP5W4XH1r7UyXvG2
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 321233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321233&o=json
            external_identifier: CBDB:321233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3GmjVqXwCvyZ6SHEhrxTD4
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_BGinsr6MHvvqPXwzbR08A6
        subject_person_id: p_AVMJo9PKsBpCg5KUfRwzbu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2z5zAMAp8D3CHr5j9pYLsS
          claim_id: c_BGinsr6MHvvqPXwzbR08A6
          source_id: s_TCNDDBdrjJF4NkFKJG8dFo
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TCNDDBdrjJF4NkFKJG8dFo
            source_type: api_record
            title: 中国历代人物传记资料库：王岱（CBDB 321234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321234&o=json
            external_identifier: CBDB:321234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AVMJo9PKsBpCg5KUfRwzbu
        status: active
        display_name: 王岱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_eljWd13iqViywUBQzLp6zV
        subject_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tkFXjZ_b3DtzWlYIstCrh4
          claim_id: c_eljWd13iqViywUBQzLp6zV
          source_id: s_pzOcgMz15d3BgIgdpllyFr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pzOcgMz15d3BgIgdpllyFr
            source_type: api_record
            title: 中国历代人物传记资料库：王用言（CBDB 321241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json
            external_identifier: CBDB:321241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CQpanbYc9L4SQ7yTi4cv2B
        status: active
        display_name: 王用言
        merged_into_person_id: null
    - claim:
        id: c_ZxOheO4O4cD1X94poy6Cx7
        subject_person_id: p_CqRLubCAJw2W8PMASBJVc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdm178j5KmRhO1Zbx9np-7
          claim_id: c_ZxOheO4O4cD1X94poy6Cx7
          source_id: s_Tli5fbZc67TWwuo1x2LMyN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tli5fbZc67TWwuo1x2LMyN
            source_type: api_record
            title: 中国历代人物传记资料库：王巽言（CBDB 321239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json
            external_identifier: CBDB:321239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqRLubCAJw2W8PMASBJVc6
        status: active
        display_name: 王巽言
        merged_into_person_id: null
    - claim:
        id: c_320zxElSJ2OoSWWaM7LHC3
        subject_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHEnw_VFHfwIZ3dl18NZMc
          claim_id: c_320zxElSJ2OoSWWaM7LHC3
          source_id: s_oEkEmXqOVuyVyUKsjBurcr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oEkEmXqOVuyVyUKsjBurcr
            source_type: api_record
            title: 中国历代人物传记资料库：王陳言（CBDB 321238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json
            external_identifier: CBDB:321238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CyCQkBsjyMATib6ZPd3cVm
        status: active
        display_name: 王陳言
        merged_into_person_id: null
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王嘉言（生于1526年），明人物。嘉靖三十五年進士，籍贯臨淄，入仕進士。（中国历代人物传记资料库 CBDB 204590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PRKaEr8menL16CrSqqwL5J | 王濂 | accepted |
| ancestors | p_3GmjVqXwCvyZ6SHEhrxTD4 | 王俊 | accepted |
| ancestors | p_AVMJo9PKsBpCg5KUfRwzbu | 王岱 | accepted |
| other | p_CQpanbYc9L4SQ7yTi4cv2B | 王用言 | accepted |
| other | p_CqRLubCAJw2W8PMASBJVc6 | 王巽言 | accepted |
| other | p_CyCQkBsjyMATib6ZPd3cVm | 王陳言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳言（CBDB 321238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json)
- [中国历代人物传记资料库：王岱（CBDB 321234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321234&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 204590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204590&o=json)
- [中国历代人物传记资料库：王俊（CBDB 321233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321233&o=json)
- [中国历代人物传记资料库：王濂（CBDB 321235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321235&o=json)
- [中国历代人物传记资料库：王巽言（CBDB 321239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json)
- [中国历代人物传记资料库：王用言（CBDB 321241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json)
