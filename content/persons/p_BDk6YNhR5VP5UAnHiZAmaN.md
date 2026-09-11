---
schema: wang-person/v1
id: p_BDk6YNhR5VP5UAnHiZAmaN
status: active
merged_into: null
display_name: 王九思
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FA3yexaTnmc6JBCbTSTQ3E
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAYXyPfr5Ag3N6YiNDC4Ex
          claim_id: c_FA3yexaTnmc6JBCbTSTQ3E
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: CBDB:126440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126440）
          source: &a1
            id: s_Hn5z56AEqsAxNqAE3T2pvu
            source_type: api_record
            title: 中国历代人物传记资料库：王九思（CBDB 126440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126440&o=json
            external_identifier: CBDB:126440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLBq4aQFAKkJGtFsDXETSs
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TCBoSc28pMrBPTCDqo7DuZ
          claim_id: c_PLBq4aQFAKkJGtFsDXETSs
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1AUjhWPCFSCaxkdJZ5meKs
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7TRuePe2bsZmE9L6aUL8H
          claim_id: c_1AUjhWPCFSCaxkdJZ5meKs
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6S3Ywm5YFAujoFHPFz5jB
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思（1468年—1551年），明人物。明清進士進士，籍贯鄠縣，身份为戲曲作家、諸宮調與散曲集作家，入仕進士。（中国历代人物传记资料库 CBDB 126440）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PVGu1X_4WmB0OQup25amMq
          claim_id: c_U6S3Ywm5YFAujoFHPFz5jB
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: CBDB:126440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jbM0GrY0LbfZ-8u9Z63tMz
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sIXqOL1qTg6fbIEdHRFCF2
          claim_id: c_jbM0GrY0LbfZ-8u9Z63tMz
          source_id: s_DQ75yHAZBFY3rbLu7KmB8b
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DQ75yHAZBFY3rbLu7KmB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 268138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json
            external_identifier: CBDB:268138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AHxos763CxLVJAAUFYkhkc
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DlPzevs-Xkt-T54Z-s4l1d
        subject_person_id: p_BsUKZjd3Hhorviu5UbYSKD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RT6d5cQE2zEn1ueSTuJWcR
          claim_id: c_DlPzevs-Xkt-T54Z-s4l1d
          source_id: s_JMTL4D59ebemMdHFK7o5Qv
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JMTL4D59ebemMdHFK7o5Qv
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 268136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268136&o=json
            external_identifier: CBDB:268136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BsUKZjd3Hhorviu5UbYSKD
        status: active
        display_name: 王琰
        merged_into_person_id: null
    - claim:
        id: c_5QverLXIm3CpoqZk0YJEMw
        subject_person_id: p_ek7reJ4HuSEY185HbF4fcc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJ-ZXin_9lHM6_gVb0ZB_y
          claim_id: c_5QverLXIm3CpoqZk0YJEMw
          source_id: s_BBeRGMeRYRkgEF7F98iDaS
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BBeRGMeRYRkgEF7F98iDaS
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 268137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268137&o=json
            external_identifier: CBDB:268137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ek7reJ4HuSEY185HbF4fcc
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王九思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九思 | accepted |
| birth.date | 1468年 | accepted |
| death.date | 1551年 | accepted |
| bio.summary | 王九思（1468年—1551年），明人物。明清進士進士，籍贯鄠縣，身份为戲曲作家、諸宮調與散曲集作家，入仕進士。（中国历代人物传记资料库 CBDB 126440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHxos763CxLVJAAUFYkhkc | 王儒 | accepted |
| ancestors | p_BsUKZjd3Hhorviu5UbYSKD | 王琰 | accepted |
| ancestors | p_ek7reJ4HuSEY185HbF4fcc | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九思（CBDB 126440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126440&o=json)
- [中国历代人物传记资料库：王儒（CBDB 268138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268138&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 268137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268137&o=json)
- [中国历代人物传记资料库：王琰（CBDB 268136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268136&o=json)
