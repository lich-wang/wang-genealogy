---
schema: wang-person/v1
id: p_Wft3MqkARxabMc8JuLMegQ
status: active
merged_into: null
display_name: 王如水
cbdb_id: 513591
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7HgvPnjNJNmZkr5EgKxE36
        subject_person_id: p_Wft3MqkARxabMc8JuLMegQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如水，清人物。中国历代人物传记资料库（CBDB）以人物编号 513591 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IJ-QBqa12bAQrmuQSPgIGR
          claim_id: c_7HgvPnjNJNmZkr5EgKxE36
          source_id: s_7sTntakWjpe9TTKBQfz7mt
          stance: supports
          locator: CBDB:513591
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7sTntakWjpe9TTKBQfz7mt
            source_type: api_record
            title: 中国历代人物传记资料库：王如水（CBDB 513591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513591&o=json
            external_identifier: CBDB:513591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jGPN9zFSRSiy9WtYYnnKov
        subject_person_id: p_Wft3MqkARxabMc8JuLMegQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如水
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H5Fv4H618dd2e6QUWMpG4M
          claim_id: c_jGPN9zFSRSiy9WtYYnnKov
          source_id: s_7sTntakWjpe9TTKBQfz7mt
          stance: supports
          locator: CBDB:513591
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_7sTntakWjpe9TTKBQfz7mt
            source_type: api_record
            title: 中国历代人物传记资料库：王如水（CBDB 513591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513591&o=json
            external_identifier: CBDB:513591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_DkqTyFxk0hRhe-p4CUyhEd
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wft3MqkARxabMc8JuLMegQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SRUyW-bg8x8U9z_V_dt9BX
          claim_id: c_DkqTyFxk0hRhe-p4CUyhEd
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vECvu4PrbhTNUTMJRckP9C
        status: active
        display_name: 王輔運
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王如水

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如水，清人物。中国历代人物传记资料库（CBDB）以人物编号 513591 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王如水 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vECvu4PrbhTNUTMJRckP9C | 王輔運 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)
- [中国历代人物传记资料库：王如水（CBDB 513591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513591&o=json)
