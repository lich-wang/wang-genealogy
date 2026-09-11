---
schema: wang-person/v1
id: p_nMp3bRUZX5b7h1zfUaXGei
status: active
merged_into: null
display_name: 王參
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LAvaHYQF2zArqDiA8M8EMd
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XydCGJwesGdFjLSVWaBnq
          claim_id: c_LAvaHYQF2zArqDiA8M8EMd
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
          stance: supports
          locator: CBDB:199457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199457）
          source: &a1
            id: s_b6TsX4ni2EVaV3Y7yHF7a3
            source_type: api_record
            title: 中国历代人物传记资料库：王參（CBDB 199457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199457&o=json
            external_identifier: CBDB:199457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CbS8ZrEXaC1AKR5Ss6XtMD
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_up7FbBwQ44G9XeocHkC8Cv
          claim_id: c_CbS8ZrEXaC1AKR5Ss6XtMD
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
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
        id: c_HiHUJHor9nuxQ5aVLrJKLN
        subject_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參（生于1437年），明人物。明清進士進士，籍贯岳池，入仕進士。（中国历代人物传记资料库 CBDB 199457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B5BDlWKFtJ2mvSJLTQN9DK
          claim_id: c_HiHUJHor9nuxQ5aVLrJKLN
          source_id: s_b6TsX4ni2EVaV3Y7yHF7a3
          stance: supports
          locator: CBDB:199457
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ms9RrOVcEuE23HhUno8MXg
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZooHFcVlH4LdikMLDHbCu
          claim_id: c_Ms9RrOVcEuE23HhUno8MXg
          source_id: s_RxHFeVG51d1E6UoFejMg9b
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RxHFeVG51d1E6UoFejMg9b
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 245289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245289&o=json
            external_identifier: CBDB:245289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUM2HxD245JgNTZGYMevph
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vB58PXZiDzjWi5SgKyP0qJ
        subject_person_id: p_JDFKtu84dfZQp11C7ac8H6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32j7ZDZXQZjp00ujAbjnoZ
          claim_id: c_vB58PXZiDzjWi5SgKyP0qJ
          source_id: s_2T8nE6MKy7Fnsp2eoXb1BX
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第二十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2T8nE6MKy7Fnsp2eoXb1BX
            source_type: api_record
            title: 中国历代人物传记资料库：王泰文（CBDB 245287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245287&o=json
            external_identifier: CBDB:245287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JDFKtu84dfZQp11C7ac8H6
        status: active
        display_name: 王泰文
        merged_into_person_id: null
    - claim:
        id: c_wd0QMEc7l1HyqQ21h8NCet
        subject_person_id: p_QVC6gUA6ay4K5jJBHrjqm1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8EIrdFTuVgMGG_v2Xw_3gL
          claim_id: c_wd0QMEc7l1HyqQ21h8NCet
          source_id: s_EGcH298qSm5GXpZq5V9C5k
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EGcH298qSm5GXpZq5V9C5k
            source_type: api_record
            title: 中国历代人物传记资料库：王希仙（CBDB 245288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245288&o=json
            external_identifier: CBDB:245288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QVC6gUA6ay4K5jJBHrjqm1
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王參

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王參 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | 王參（生于1437年），明人物。明清進士進士，籍贯岳池，入仕進士。（中国历代人物传记资料库 CBDB 199457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AUM2HxD245JgNTZGYMevph | 王鐸 | accepted |
| ancestors | p_JDFKtu84dfZQp11C7ac8H6 | 王泰文 | accepted |
| ancestors | p_QVC6gUA6ay4K5jJBHrjqm1 | 王希仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王參（CBDB 199457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199457&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 245289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245289&o=json)
- [中国历代人物传记资料库：王泰文（CBDB 245287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245287&o=json)
- [中国历代人物传记资料库：王希仙（CBDB 245288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245288&o=json)
