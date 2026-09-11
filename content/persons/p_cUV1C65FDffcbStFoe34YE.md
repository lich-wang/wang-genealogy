---
schema: wang-person/v1
id: p_cUV1C65FDffcbStFoe34YE
status: active
merged_into: null
display_name: 王其勤
cbdb_id: 204225
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ycuh3mB7DpD2DmYNaeDrsH
        subject_person_id: p_cUV1C65FDffcbStFoe34YE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其勤（生于1531年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204225 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7Et1sNM1g-YMCGM2h2dD9r
          claim_id: c_Ycuh3mB7DpD2DmYNaeDrsH
          source_id: s_FDtTXhFMGxw752ZQ3UG681
          stance: supports
          locator: CBDB:204225
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_FDtTXhFMGxw752ZQ3UG681
            source_type: api_record
            title: 中国历代人物传记资料库：王其勤（CBDB 204225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204225&o=json
            external_identifier: CBDB:204225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h4nozwMY4mBb98fCKRTM7B
        subject_person_id: p_cUV1C65FDffcbStFoe34YE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1531-01-01
            latest: 1531-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzazH3e8RirLepquA5Uq8t
          claim_id: c_h4nozwMY4mBb98fCKRTM7B
          source_id: s_FDtTXhFMGxw752ZQ3UG681
          stance: supports
          locator: CBDB:204225
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1531
          source:
            id: s_FDtTXhFMGxw752ZQ3UG681
            source_type: api_record
            title: 中国历代人物传记资料库：王其勤（CBDB 204225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204225&o=json
            external_identifier: CBDB:204225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_niS9tcRedhy6Pgf2Fy1G3K
        subject_person_id: p_cUV1C65FDffcbStFoe34YE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hEbvMHH3Rzq4CRjjuCB9oa
          claim_id: c_niS9tcRedhy6Pgf2Fy1G3K
          source_id: s_FDtTXhFMGxw752ZQ3UG681
          stance: supports
          locator: CBDB:204225
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1531
          source:
            id: s_FDtTXhFMGxw752ZQ3UG681
            source_type: api_record
            title: 中国历代人物传记资料库：王其勤（CBDB 204225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204225&o=json
            external_identifier: CBDB:204225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cejZRHXmTHP8h0E-hb2-ib
        subject_person_id: p_2CGC7EFuxL22aCAXELkLWU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cUV1C65FDffcbStFoe34YE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rIhEXenEQMiQJldXTtLLxF
          claim_id: c_cejZRHXmTHP8h0E-hb2-ib
          source_id: s_qWXG3agM4JN8JWq7pjV7NJ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qWXG3agM4JN8JWq7pjV7NJ
            source_type: api_record
            title: 中国历代人物传记资料库：王天章（CBDB 316215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316215&o=json
            external_identifier: CBDB:316215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2CGC7EFuxL22aCAXELkLWU
        status: active
        display_name: 王天章
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FNXPf3iRD3P-LgxOhwMW2a
        subject_person_id: p_CtQDetL2VcSqzqQmVXxd4W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cUV1C65FDffcbStFoe34YE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ks4Dafp_7yxwXDd1Z6LduM
          claim_id: c_FNXPf3iRD3P-LgxOhwMW2a
          source_id: s_RAGiVBUn8Sw9MyzC7fZKiD
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RAGiVBUn8Sw9MyzC7fZKiD
            source_type: api_record
            title: 中国历代人物传记资料库：王本義（CBDB 316213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316213&o=json
            external_identifier: CBDB:316213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CtQDetL2VcSqzqQmVXxd4W
        status: active
        display_name: 王本義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王其勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王其勤（生于1531年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204225 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1531年 | accepted |
| name.primary | 王其勤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2CGC7EFuxL22aCAXELkLWU | 王天章 | accepted |
| ancestors | p_CtQDetL2VcSqzqQmVXxd4W | 王本義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本義（CBDB 316213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316213&o=json)
- [中国历代人物传记资料库：王其勤（CBDB 204225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204225&o=json)
- [中国历代人物传记资料库：王天章（CBDB 316215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316215&o=json)
