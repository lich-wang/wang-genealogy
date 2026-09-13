---
schema: wang-person/v1
id: p_jmLNJ8GNCMVo18MJZjNJp9
status: active
merged_into: null
display_name: 王巽申
cbdb_id: 37953
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YU9Ejfj6dvMnmwvF56xepr
        subject_person_id: p_jmLNJ8GNCMVo18MJZjNJp9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽申（生于1210年），宋人物。寶祐進士，籍贯石泉軍，入仕進士。（中国历代人物传记资料库 CBDB 37953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hwdaBz9Lrn6C-umTfcfE-r
          claim_id: c_YU9Ejfj6dvMnmwvF56xepr
          source_id: s_mGB753qMJea3HTFFbPMEw7
          stance: supports
          locator: CBDB:37953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mGB753qMJea3HTFFbPMEw7
            source_type: api_record
            title: 中国历代人物传记资料库：王巽申（CBDB 37953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37953&o=json
            external_identifier: CBDB:37953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pepQrYyryKB5wQ7vaP73gu
        subject_person_id: p_jmLNJ8GNCMVo18MJZjNJp9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1210年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1210-01-01
            latest: 1210-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_koCNkvKf6TyQqzXXCBnVu3
          claim_id: c_pepQrYyryKB5wQ7vaP73gu
          source_id: s_mGB753qMJea3HTFFbPMEw7
          stance: supports
          locator: CBDB:37953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1210
          source:
            id: s_mGB753qMJea3HTFFbPMEw7
            source_type: api_record
            title: 中国历代人物传记资料库：王巽申（CBDB 37953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37953&o=json
            external_identifier: CBDB:37953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dk282Vif15WtGP68gjQ3Mb
        subject_person_id: p_jmLNJ8GNCMVo18MJZjNJp9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽申
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8vpk1Jg6oKayUvjqLTjgYC
          claim_id: c_Dk282Vif15WtGP68gjQ3Mb
          source_id: s_mGB753qMJea3HTFFbPMEw7
          stance: supports
          locator: CBDB:37953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1210
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
        id: c_ua1OVo8i5qekeF315XAfdw
        subject_person_id: p_KeQFoyHScM56Wpxk7FspZa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jmLNJ8GNCMVo18MJZjNJp9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHZqaT62_g-LDrPslkP07O
          claim_id: c_ua1OVo8i5qekeF315XAfdw
          source_id: s_L2XHUgzR4kJPG1ydMUHMy8
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L2XHUgzR4kJPG1ydMUHMy8
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 138195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138195&o=json
            external_identifier: CBDB:138195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KeQFoyHScM56Wpxk7FspZa
        status: active
        display_name: 王純
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王巽申

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王巽申（生于1210年），宋人物。寶祐進士，籍贯石泉軍，入仕進士。（中国历代人物传记资料库 CBDB 37953） | accepted |
| birth.date | 1210年 | accepted |
| name.primary | 王巽申 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KeQFoyHScM56Wpxk7FspZa | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 138195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138195&o=json)
- [中国历代人物传记资料库：王巽申（CBDB 37953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37953&o=json)
