---
schema: wang-person/v1
id: p_McURSghs63gxnc5WxHG3bH
status: active
merged_into: null
display_name: 王周紹
cbdb_id: 205463
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S8FVMTP1ejPBYt3FzHBS4b
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周紹（生于1536年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 205463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7Fc76g5q3-4Z54fOQVivHQ
          claim_id: c_S8FVMTP1ejPBYt3FzHBS4b
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ExzEPk8cevJF6nCM62XQ9o
            source_type: api_record
            title: 中国历代人物传记资料库：王周紹（CBDB 205463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json
            external_identifier: CBDB:205463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5M119f1TFoRipKpDFoDDJm
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1536-01-01
            latest: 1536-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d3TbaqpKiSm2PZ5XQnmKWf
          claim_id: c_5M119f1TFoRipKpDFoDDJm
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source:
            id: s_ExzEPk8cevJF6nCM62XQ9o
            source_type: api_record
            title: 中国历代人物传记资料库：王周紹（CBDB 205463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json
            external_identifier: CBDB:205463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8dGAetVvDrBUfcWf9iGNn5
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W7CbXm3HnmaGN86fp4gHJG
          claim_id: c_8dGAetVvDrBUfcWf9iGNn5
          source_id: s_ExzEPk8cevJF6nCM62XQ9o
          stance: supports
          locator: CBDB:205463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7PvY0msdix01v06pxb2oxd
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3YnqCeGQADyKZFNL-gXPR
          claim_id: c_7PvY0msdix01v06pxb2oxd
          source_id: s_hJqj7Z5xZmWaxak2Py5xRH
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hJqj7Z5xZmWaxak2Py5xRH
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 333618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json
            external_identifier: CBDB:333618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U6zX3wnxTCMh3nEUMpMz4g
        status: active
        display_name: 王一貫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wklA1DHhBnvnDZiDdfsSYo
        subject_person_id: p_5SfzfiN7TmF5uEpCHo93w9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYNXIGvEPK9NxXoPfaXz9C
          claim_id: c_wklA1DHhBnvnDZiDdfsSYo
          source_id: s_8GbUjTZhHFLJiX3gkxwUN8
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8GbUjTZhHFLJiX3gkxwUN8
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 333617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json
            external_identifier: CBDB:333617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5SfzfiN7TmF5uEpCHo93w9
        status: active
        display_name: 王世芳
        merged_into_person_id: null
    - claim:
        id: c_rqkxqDWUBQpN_VgAS72Pi-
        subject_person_id: p_weV7whz3ANfDFG4xKLwQe2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mNYfOA3crmtuA_LIYdOk6
          claim_id: c_rqkxqDWUBQpN_VgAS72Pi-
          source_id: s_FzYn5ZuX7NjMtdE9Z5N8pq
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FzYn5ZuX7NjMtdE9Z5N8pq
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 333616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333616&o=json
            external_identifier: CBDB:333616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_weV7whz3ANfDFG4xKLwQe2
        status: active
        display_name: 王悌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王周紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王周紹（生于1536年），明人物。明清進士進士，籍贯崑山，入仕進士，曾任通判。（中国历代人物传记资料库 CBDB 205463） | accepted |
| birth.date | 1536年 | accepted |
| name.primary | 王周紹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U6zX3wnxTCMh3nEUMpMz4g | 王一貫 | accepted |
| ancestors | p_5SfzfiN7TmF5uEpCHo93w9 | 王世芳 | accepted |
| ancestors | p_weV7whz3ANfDFG4xKLwQe2 | 王悌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 333617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333617&o=json)
- [中国历代人物传记资料库：王悌（CBDB 333616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333616&o=json)
- [中国历代人物传记资料库：王一貫（CBDB 333618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333618&o=json)
- [中国历代人物传记资料库：王周紹（CBDB 205463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205463&o=json)
