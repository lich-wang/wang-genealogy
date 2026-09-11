---
schema: wang-person/v1
id: p_nF3Cd5KS3rMLe16oeKeJ6Q
status: active
merged_into: null
display_name: 王應霖
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4DQLJjDziRkmkzoWs4LbjW
        subject_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wu98sGwDCmwsqDhNcP82SE
          claim_id: c_4DQLJjDziRkmkzoWs4LbjW
          source_id: s_KBHvgFBDB9J2WBJedhMoDo
          stance: supports
          locator: CBDB:206714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206714）
          source: &a1
            id: s_KBHvgFBDB9J2WBJedhMoDo
            source_type: api_record
            title: 中国历代人物传记资料库：王應霖（CBDB 206714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206714&o=json
            external_identifier: CBDB:206714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DTmkZgsTU4Lz8AUphGf51i
        subject_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gaw5XpTWucY82D2ZWmYtPe
          claim_id: c_DTmkZgsTU4Lz8AUphGf51i
          source_id: s_KBHvgFBDB9J2WBJedhMoDo
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
        id: c_XtK89Lvb9QA9x1UX2mJZBX
        subject_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應霖（生于1548年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 206714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UacljdvItRJi485mV86UC_
          claim_id: c_XtK89Lvb9QA9x1UX2mJZBX
          source_id: s_KBHvgFBDB9J2WBJedhMoDo
          stance: supports
          locator: CBDB:206714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1MNuoNWmQjBUNM-yRJkcRM
        subject_person_id: p_staV7NpqmWaPNLuzEjvKNG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vA4oI_uXcjIKuWvdLhKPUJ
          claim_id: c_1MNuoNWmQjBUNM-yRJkcRM
          source_id: s_t47BV8TEC9aNcfVnpVDK74
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t47BV8TEC9aNcfVnpVDK74
            source_type: api_record
            title: 中国历代人物传记资料库：王宗寶（CBDB 221967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221967&o=json
            external_identifier: CBDB:221967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_staV7NpqmWaPNLuzEjvKNG
        status: active
        display_name: 王宗寶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DVSrI-9r3hOvnAiQPCvABp
        subject_person_id: p_LK5Y6DYm4gKHoEMaAgDh6P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6clQWFgL8du6Rddb-YLZP
          claim_id: c_DVSrI-9r3hOvnAiQPCvABp
          source_id: s_R4Gncdq7WH9J3mPSh5Zi9C
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R4Gncdq7WH9J3mPSh5Zi9C
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 221965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221965&o=json
            external_identifier: CBDB:221965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LK5Y6DYm4gKHoEMaAgDh6P
        status: active
        display_name: 王原
        merged_into_person_id: null
    - claim:
        id: c_xcBKLqdgcNohsORz1tnp-6
        subject_person_id: p_Dvz66YxyDpzxoGW3eHwktz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nF3Cd5KS3rMLe16oeKeJ6Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hpS8hmceCzmgg3n7S6ZbxY
          claim_id: c_xcBKLqdgcNohsORz1tnp-6
          source_id: s_76iQrjENKJQiy5XxFnSTfk
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_76iQrjENKJQiy5XxFnSTfk
            source_type: api_record
            title: 中国历代人物传记资料库：王甫全（CBDB 221966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221966&o=json
            external_identifier: CBDB:221966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Dvz66YxyDpzxoGW3eHwktz
        status: active
        display_name: 王甫全
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應霖 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | 王應霖（生于1548年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 206714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_staV7NpqmWaPNLuzEjvKNG | 王宗寶 | accepted |
| ancestors | p_LK5Y6DYm4gKHoEMaAgDh6P | 王原 | accepted |
| ancestors | p_Dvz66YxyDpzxoGW3eHwktz | 王甫全 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫全（CBDB 221966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221966&o=json)
- [中国历代人物传记资料库：王應霖（CBDB 206714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206714&o=json)
- [中国历代人物传记资料库：王原（CBDB 221965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221965&o=json)
- [中国历代人物传记资料库：王宗寶（CBDB 221967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221967&o=json)
