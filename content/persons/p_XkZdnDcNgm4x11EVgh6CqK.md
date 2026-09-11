---
schema: wang-person/v1
id: p_XkZdnDcNgm4x11EVgh6CqK
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5gPYmndXANVxw5mK4jcbD5
        subject_person_id: p_XkZdnDcNgm4x11EVgh6CqK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c29PFMd66W11eV3sgVUb2W
          claim_id: c_5gPYmndXANVxw5mK4jcbD5
          source_id: s_PKQ9TT2gYaB2WMjxVUhQM1
          stance: supports
          locator: CBDB:297042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297042）
          source: &a1
            id: s_PKQ9TT2gYaB2WMjxVUhQM1
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 297042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297042&o=json
            external_identifier: CBDB:297042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ujmNiG5HTcgCKs7cTnDCCQ
        subject_person_id: p_XkZdnDcNgm4x11EVgh6CqK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gsm9sqTSyXzkDCul1p1oWP
          claim_id: c_ujmNiG5HTcgCKs7cTnDCCQ
          source_id: s_PKQ9TT2gYaB2WMjxVUhQM1
          stance: supports
          locator: CBDB:297042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_X3jDJbfH6Eemk5yBQZeouI
        subject_person_id: p_XkZdnDcNgm4x11EVgh6CqK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dmToVAW68CjUAQM41bQAM7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zt2q3N9I58d5X9HviOI4r8
          claim_id: c_X3jDJbfH6Eemk5yBQZeouI
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MteD2GZsVB7qEbg4aAkNb8
            source_type: api_record
            title: 中国历代人物传记资料库：王世雍（CBDB 202939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json
            external_identifier: CBDB:202939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dmToVAW68CjUAQM41bQAM7
        status: active
        display_name: 王世雍
        merged_into_person_id: null
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dmToVAW68CjUAQM41bQAM7 | 王世雍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世雍（CBDB 202939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json)
- [中国历代人物传记资料库：王釗（CBDB 297042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297042&o=json)
