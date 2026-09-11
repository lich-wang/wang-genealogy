---
schema: wang-person/v1
id: p_PNbNcPEUfkwixuHyP9PuYH
status: active
merged_into: null
display_name: 王上齡
cbdb_id: 198503
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wEiwsmx8DcZqZUmd1Kqwh5
        subject_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上齡（生于1432年），明人物。中国历代人物传记资料库（CBDB）以人物编号 198503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SrylieCGI3zH269HEayEpc
          claim_id: c_wEiwsmx8DcZqZUmd1Kqwh5
          source_id: s_BZkAaKT3YV1F9dcjnVoh9z
          stance: supports
          locator: CBDB:198503
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BZkAaKT3YV1F9dcjnVoh9z
            source_type: api_record
            title: 中国历代人物传记资料库：王上齡（CBDB 198503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198503&o=json
            external_identifier: CBDB:198503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PDvaKG3iVoX85vnsrL17hm
        subject_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1432-01-01
            latest: 1432-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8L16UGvMQr936F2oYLvw9B
          claim_id: c_PDvaKG3iVoX85vnsrL17hm
          source_id: s_BZkAaKT3YV1F9dcjnVoh9z
          stance: supports
          locator: CBDB:198503
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1432
          source:
            id: s_BZkAaKT3YV1F9dcjnVoh9z
            source_type: api_record
            title: 中国历代人物传记资料库：王上齡（CBDB 198503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198503&o=json
            external_identifier: CBDB:198503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4EmMHdBGPa1wXJoxaAXGh8
        subject_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XVr18AM83KpLnPGJ19qtNz
          claim_id: c_4EmMHdBGPa1wXJoxaAXGh8
          source_id: s_BZkAaKT3YV1F9dcjnVoh9z
          stance: supports
          locator: CBDB:198503
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1432
          source:
            id: s_BZkAaKT3YV1F9dcjnVoh9z
            source_type: api_record
            title: 中国历代人物传记资料库：王上齡（CBDB 198503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198503&o=json
            external_identifier: CBDB:198503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SprXRKHBxhyWhqr2S6ZSBE
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2UNW09ZxjwYL-wCeVjKAY
          claim_id: c_SprXRKHBxhyWhqr2S6ZSBE
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_W6USVnyoKDrkxHa4mF2vcZ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 281063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json
            external_identifier: CBDB:281063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eEdwVvDNjmkAGiPy1oDkFn
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王上齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王上齡（生于1432年），明人物。中国历代人物传记资料库（CBDB）以人物编号 198503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1432年 | accepted |
| name.primary | 王上齡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eEdwVvDNjmkAGiPy1oDkFn | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 281063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json)
- [中国历代人物传记资料库：王上齡（CBDB 198503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198503&o=json)
