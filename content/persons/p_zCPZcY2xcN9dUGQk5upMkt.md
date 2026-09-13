---
schema: wang-person/v1
id: p_zCPZcY2xcN9dUGQk5upMkt
status: active
merged_into: null
display_name: 王鈴
cbdb_id: 203785
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mjMgdTBNQsJ2qKojtvQqmK
        subject_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈴（生于1510年），史料所见人物。本项目依据《中国历代人物传记资料库：王鈴（CBDB 203785）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yT4aM4oqlZg0ns7uNe47vZ
          claim_id: c_mjMgdTBNQsJ2qKojtvQqmK
          source_id: s_Bx6g8DwmUcCeZHNTQwUGqr
          stance: supports
          locator: CBDB:203785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Bx6g8DwmUcCeZHNTQwUGqr
            source_type: api_record
            title: 中国历代人物传记资料库：王鈴（CBDB 203785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203785&o=json
            external_identifier: CBDB:203785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oR2Qwc9jgm1A7DU81R56Rx
        subject_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1510-01-01
            latest: 1510-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MBneMTrNjWPbDaCHC1mz5a
          claim_id: c_oR2Qwc9jgm1A7DU81R56Rx
          source_id: s_Bx6g8DwmUcCeZHNTQwUGqr
          stance: supports
          locator: CBDB:203785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1510
          source:
            id: s_Bx6g8DwmUcCeZHNTQwUGqr
            source_type: api_record
            title: 中国历代人物传记资料库：王鈴（CBDB 203785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203785&o=json
            external_identifier: CBDB:203785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EsAjEHfL4kDpYziGTKhkE
        subject_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GEj4PvHddtkLQqasN38vjx
          claim_id: c_7EsAjEHfL4kDpYziGTKhkE
          source_id: s_Bx6g8DwmUcCeZHNTQwUGqr
          stance: supports
          locator: CBDB:203785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1510
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O_Q4_m6um0a929kLvhc8ig
        subject_person_id: p_YosdMcUNtRPKhCPMJYVZTM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9VCqA4fFAzDDmXFJlJuH8
          claim_id: c_O_Q4_m6um0a929kLvhc8ig
          source_id: s_MBjgVG2cHUMNxTEp7ZMmcy
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MBjgVG2cHUMNxTEp7ZMmcy
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 309977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309977&o=json
            external_identifier: CBDB:309977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YosdMcUNtRPKhCPMJYVZTM
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zFSoEBT7ryVVOawH7Pj0Y5
        subject_person_id: p_Aw33K7k1W4Rsa8EDciuADn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xNn-85Vo8oEUPeOr2iaf7s
          claim_id: c_zFSoEBT7ryVVOawH7Pj0Y5
          source_id: s_TSMBWuKHyVfeEKXF2ZEJrr
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TSMBWuKHyVfeEKXF2ZEJrr
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 309975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309975&o=json
            external_identifier: CBDB:309975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Aw33K7k1W4Rsa8EDciuADn
        status: active
        display_name: 王秬
        merged_into_person_id: null
    - claim:
        id: c__maOhUKXNZQF4NJXVK9UY7
        subject_person_id: p_uEcTfswie4QmwwYkcLQnJ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1E_Y8H0ferdwcR5-3picL
          claim_id: c__maOhUKXNZQF4NJXVK9UY7
          source_id: s_7P9P8QUy5UepQ6Md115RGk
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7P9P8QUy5UepQ6Md115RGk
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 309976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309976&o=json
            external_identifier: CBDB:309976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uEcTfswie4QmwwYkcLQnJ5
        status: active
        display_name: 王烜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鈴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鈴（生于1510年），史料所见人物。本项目依据《中国历代人物传记资料库：王鈴（CBDB 203785）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1510年 | accepted |
| name.primary | 王鈴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YosdMcUNtRPKhCPMJYVZTM | 王堂 | accepted |
| ancestors | p_Aw33K7k1W4Rsa8EDciuADn | 王秬 | accepted |
| ancestors | p_uEcTfswie4QmwwYkcLQnJ5 | 王烜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秬（CBDB 309975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309975&o=json)
- [中国历代人物传记资料库：王鈴（CBDB 203785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203785&o=json)
- [中国历代人物传记资料库：王堂（CBDB 309977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309977&o=json)
- [中国历代人物传记资料库：王烜（CBDB 309976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309976&o=json)
