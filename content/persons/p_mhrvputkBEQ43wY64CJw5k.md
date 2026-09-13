---
schema: wang-person/v1
id: p_mhrvputkBEQ43wY64CJw5k
status: active
merged_into: null
display_name: 王乾亨
cbdb_id: 206520
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2yrsLw1uFdvBZ3BdbKQp3K
        subject_person_id: p_mhrvputkBEQ43wY64CJw5k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾亨（生于1547年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 206520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_N1CxBki5C_pxa5nJ8ShtZb
          claim_id: c_2yrsLw1uFdvBZ3BdbKQp3K
          source_id: s_dqJpdo2HLieAgjZ3CAN4zb
          stance: supports
          locator: CBDB:206520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dqJpdo2HLieAgjZ3CAN4zb
            source_type: api_record
            title: 中国历代人物传记资料库：王乾亨（CBDB 206520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206520&o=json
            external_identifier: CBDB:206520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L23Lo5wsXtA9pPFeB8P5jn
        subject_person_id: p_mhrvputkBEQ43wY64CJw5k
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1547-01-01
            latest: 1547-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ngnJ4z7nhrXfFMyRopeeET
          claim_id: c_L23Lo5wsXtA9pPFeB8P5jn
          source_id: s_dqJpdo2HLieAgjZ3CAN4zb
          stance: supports
          locator: CBDB:206520
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source:
            id: s_dqJpdo2HLieAgjZ3CAN4zb
            source_type: api_record
            title: 中国历代人物传记资料库：王乾亨（CBDB 206520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206520&o=json
            external_identifier: CBDB:206520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJ55MuvcmoHwrDD7fPwR1J
        subject_person_id: p_mhrvputkBEQ43wY64CJw5k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eE2ETuX5RLCZEtNJ5jvM1H
          claim_id: c_vJ55MuvcmoHwrDD7fPwR1J
          source_id: s_dqJpdo2HLieAgjZ3CAN4zb
          stance: supports
          locator: CBDB:206520
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l9Gphc10PAidXqNqaOWmDS
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VwFx3Ed401LQB7GfsbrXbP
          claim_id: c_l9Gphc10PAidXqNqaOWmDS
          source_id: s_5NAFDm3BvLEnNzVsDtwntD
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5NAFDm3BvLEnNzVsDtwntD
            source_type: api_record
            title: 中国历代人物传记资料库：王熙政（CBDB 219255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219255&o=json
            external_identifier: CBDB:219255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dQG6P5Z5ucUGLgZuSEfakq
        status: active
        display_name: 王熙政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Zktai47-T6Xd66mcPG14xS
        subject_person_id: p_5uaQv14UYD4axoSqY6n6HV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8Cikdl9Ux-S6LnRkz2MLd
          claim_id: c_Zktai47-T6Xd66mcPG14xS
          source_id: s_rRf4R9n9N5uQax4ep89zmi
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rRf4R9n9N5uQax4ep89zmi
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 219254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219254&o=json
            external_identifier: CBDB:219254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5uaQv14UYD4axoSqY6n6HV
        status: active
        display_name: 王治
        merged_into_person_id: null
    - claim:
        id: c_WsxmjPdoAWbLrtlLoV7ZbM
        subject_person_id: p_9iS5z5K2RWRF5QAZDRg3AJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8SE9X7zxvcybOpAxAaFoT
          claim_id: c_WsxmjPdoAWbLrtlLoV7ZbM
          source_id: s_rLCwqD9oTky6DHGpRR1MGp
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rLCwqD9oTky6DHGpRR1MGp
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 219253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219253&o=json
            external_identifier: CBDB:219253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9iS5z5K2RWRF5QAZDRg3AJ
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王乾亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乾亨（生于1547年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 206520） | accepted |
| birth.date | 1547年 | accepted |
| name.primary | 王乾亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dQG6P5Z5ucUGLgZuSEfakq | 王熙政 | accepted |
| ancestors | p_5uaQv14UYD4axoSqY6n6HV | 王治 | accepted |
| ancestors | p_9iS5z5K2RWRF5QAZDRg3AJ | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾亨（CBDB 206520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206520&o=json)
- [中国历代人物传记资料库：王熙政（CBDB 219255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219255&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 219253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219253&o=json)
- [中国历代人物传记资料库：王治（CBDB 219254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219254&o=json)
