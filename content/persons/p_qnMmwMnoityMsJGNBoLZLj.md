---
schema: wang-person/v1
id: p_qnMmwMnoityMsJGNBoLZLj
status: active
merged_into: null
display_name: 王符霳
cbdb_id: 526816
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3jU2LgMfaLWPGpjYSuqKo2
        subject_person_id: p_qnMmwMnoityMsJGNBoLZLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符霳，清人物。中国历代人物传记资料库（CBDB）以人物编号 526816 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LuNdsWTirYrv8am5fnQw2s
          claim_id: c_3jU2LgMfaLWPGpjYSuqKo2
          source_id: s_H8KFcHwsaDXnTTEEciz6hW
          stance: supports
          locator: CBDB:526816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H8KFcHwsaDXnTTEEciz6hW
            source_type: api_record
            title: 中国历代人物传记资料库：王符霳（CBDB 526816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526816&o=json
            external_identifier: CBDB:526816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_te8g4NWPcT9TdrnaBkDd6V
        subject_person_id: p_qnMmwMnoityMsJGNBoLZLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符霳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Kd2KC97AFPT41g85N9xYFp
          claim_id: c_te8g4NWPcT9TdrnaBkDd6V
          source_id: s_H8KFcHwsaDXnTTEEciz6hW
          stance: supports
          locator: CBDB:526816
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_H8KFcHwsaDXnTTEEciz6hW
            source_type: api_record
            title: 中国历代人物传记资料库：王符霳（CBDB 526816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526816&o=json
            external_identifier: CBDB:526816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
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
        id: c_v11UWnh_CwMEIbK2DYCshb
        subject_person_id: p_V9Mdqt7Q4vUXMLyaLoUhgr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qnMmwMnoityMsJGNBoLZLj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxg43JKZd2wuEn__SDQ4Pm
          claim_id: c_v11UWnh_CwMEIbK2DYCshb
          source_id: s_H8KFcHwsaDXnTTEEciz6hW
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V9Mdqt7Q4vUXMLyaLoUhgr
        status: active
        display_name: 王命時
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王符霳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王符霳，清人物。中国历代人物传记资料库（CBDB）以人物编号 526816 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王符霳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_V9Mdqt7Q4vUXMLyaLoUhgr | 王命時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王符霳（CBDB 526816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526816&o=json)
