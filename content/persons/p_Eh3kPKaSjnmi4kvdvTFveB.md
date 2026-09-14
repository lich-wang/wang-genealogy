---
schema: wang-person/v1
id: p_Eh3kPKaSjnmi4kvdvTFveB
status: active
merged_into: null
display_name: 王再聘
cbdb_id: 206273
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m6pJDQNYSDiysRpjoaZenk
        subject_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再聘（生于1551年），明人物。明清進士進士，籍贯臨邑，入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 206273）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QcqYX7MNRV_Cv5T7C8oUvq
          claim_id: c_m6pJDQNYSDiysRpjoaZenk
          source_id: s_y2KuDwNqRKQrHC3C8gyyzr
          stance: supports
          locator: CBDB:206273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y2KuDwNqRKQrHC3C8gyyzr
            source_type: api_record
            title: 中国历代人物传记资料库：王再聘（CBDB 206273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206273&o=json
            external_identifier: CBDB:206273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_58kZEw9ZYCE8ifxHDdBRcE
        subject_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1551-01-01
            latest: 1551-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YT5MMaPtVkPTkag5g6JyGA
          claim_id: c_58kZEw9ZYCE8ifxHDdBRcE
          source_id: s_y2KuDwNqRKQrHC3C8gyyzr
          stance: supports
          locator: CBDB:206273
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1551
          source:
            id: s_y2KuDwNqRKQrHC3C8gyyzr
            source_type: api_record
            title: 中国历代人物传记资料库：王再聘（CBDB 206273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206273&o=json
            external_identifier: CBDB:206273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1CJ7L9Tges4fJ3Cf94NUU
        subject_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Uk9XeviESruijBsrepympk
          claim_id: c_S1CJ7L9Tges4fJ3Cf94NUU
          source_id: s_y2KuDwNqRKQrHC3C8gyyzr
          stance: supports
          locator: CBDB:206273
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1551
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UzDQTbQfD_m3paY4UDMC7O
        subject_person_id: p_BeKUgyXWUJu4r2UviMduG1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2r8Dt1sBuxIaoaQteLm0r
          claim_id: c_UzDQTbQfD_m3paY4UDMC7O
          source_id: s_FJJ1tXs4ExzhbLBk9f4dyn
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FJJ1tXs4ExzhbLBk9f4dyn
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 215645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215645&o=json
            external_identifier: CBDB:215645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BeKUgyXWUJu4r2UviMduG1
        status: active
        display_name: 王富
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vL-o53P67WUI4YyTQfaYsW
        subject_person_id: p_2CSsN1ehb5Ps7E4dXjWFv3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1POHHgkotSaXH6hMkdAtlJ
          claim_id: c_vL-o53P67WUI4YyTQfaYsW
          source_id: s_Li8zpY95FWsryt3VUVVMWP
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Li8zpY95FWsryt3VUVVMWP
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 215643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215643&o=json
            external_identifier: CBDB:215643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2CSsN1ehb5Ps7E4dXjWFv3
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_Voz0ewxsi7Qw6Yr41P6vzZ
        subject_person_id: p_HuUnd45o6QaNZL6Sk7JtBw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpRO9LG4EM_-UdbFx5ECd-
          claim_id: c_Voz0ewxsi7Qw6Yr41P6vzZ
          source_id: s_KWbzJ9DP2gMwU9LsTFrkeY
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KWbzJ9DP2gMwU9LsTFrkeY
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 215644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215644&o=json
            external_identifier: CBDB:215644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HuUnd45o6QaNZL6Sk7JtBw
        status: active
        display_name: 王祿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_-L4dn3O6O93U5gzn8potks
        subject_person_id: p_5o8FodsPP8caXE1th2gWNd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGQRWCQ3L53aOfZ5pPtCz3
          claim_id: c_-L4dn3O6O93U5gzn8potks
          source_id: s_i6ocaupl6_YN8LXKi-dMCJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206273 王再聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i6ocaupl6_YN8LXKi-dMCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 215650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json
            external_identifier: CBDB:215650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5o8FodsPP8caXE1th2gWNd
        status: active
        display_name: 王來聘
        merged_into_person_id: null
    - claim:
        id: c_FD458YL1bVDiQDms0memw9
        subject_person_id: p_Eh3kPKaSjnmi4kvdvTFveB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GRBi2UPVAtGfnCR6APTJnk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uBhJ_ggN6XR7wx3IoafXJk
          claim_id: c_FD458YL1bVDiQDms0memw9
          source_id: s_VMdZdyRrOsxCoswLfznTAj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206273 王再聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VMdZdyRrOsxCoswLfznTAj
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 215651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215651&o=json
            external_identifier: CBDB:215651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GRBi2UPVAtGfnCR6APTJnk
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王再聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王再聘（生于1551年），明人物。明清進士進士，籍贯臨邑，入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 206273） | accepted |
| birth.date | 1551年 | accepted |
| name.primary | 王再聘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BeKUgyXWUJu4r2UviMduG1 | 王富 | accepted |
| ancestors | p_2CSsN1ehb5Ps7E4dXjWFv3 | 王昇 | accepted |
| ancestors | p_HuUnd45o6QaNZL6Sk7JtBw | 王祿 | accepted |
| other | p_5o8FodsPP8caXE1th2gWNd | 王來聘 | accepted |
| other | p_GRBi2UPVAtGfnCR6APTJnk | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王富（CBDB 215645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215645&o=json)
- [中国历代人物传记资料库：王來聘（CBDB 215650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215650&o=json)
- [中国历代人物传记资料库：王祿（CBDB 215644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215644&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 215651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215651&o=json)
- [中国历代人物传记资料库：王昇（CBDB 215643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215643&o=json)
- [中国历代人物传记资料库：王再聘（CBDB 206273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206273&o=json)
