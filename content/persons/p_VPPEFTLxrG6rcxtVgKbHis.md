---
schema: wang-person/v1
id: p_VPPEFTLxrG6rcxtVgKbHis
status: active
merged_into: null
display_name: 王守山
cbdb_id: 318542
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCh44vwBj4yFybNPeL5G9J
        subject_person_id: p_VPPEFTLxrG6rcxtVgKbHis
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守山，明人物。中国历代人物传记资料库（CBDB）以人物编号 318542 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_meL_QDBdQdFVkzGT6Ajiut
          claim_id: c_zCh44vwBj4yFybNPeL5G9J
          source_id: s_moTgLAknhok4p9k6EvuVJN
          stance: supports
          locator: CBDB:318542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_moTgLAknhok4p9k6EvuVJN
            source_type: api_record
            title: 中国历代人物传记资料库：王守山（CBDB 318542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318542&o=json
            external_identifier: CBDB:318542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9d8JNMFB9NopxxjZdPzHe
        subject_person_id: p_VPPEFTLxrG6rcxtVgKbHis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ouP4pTga8eNZVo7BnZsJHc
          claim_id: c_Z9d8JNMFB9NopxxjZdPzHe
          source_id: s_moTgLAknhok4p9k6EvuVJN
          stance: supports
          locator: CBDB:318542
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_moTgLAknhok4p9k6EvuVJN
            source_type: api_record
            title: 中国历代人物传记资料库：王守山（CBDB 318542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318542&o=json
            external_identifier: CBDB:318542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
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
  ancestors: []
  descendants:
    - claim:
        id: c_INB5-oPtZKTfcqYHMGSdU4
        subject_person_id: p_VPPEFTLxrG6rcxtVgKbHis
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qw3e91Q9f7u3SKikYg5LD7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NlZ4CfCYFPEgdoce-XDaqj
          claim_id: c_INB5-oPtZKTfcqYHMGSdU4
          source_id: s_moTgLAknhok4p9k6EvuVJN
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qw3e91Q9f7u3SKikYg5LD7
        status: active
        display_name: 王詠
        merged_into_person_id: null
  other: []
---

# 王守山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守山，明人物。中国历代人物传记资料库（CBDB）以人物编号 318542 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守山 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Qw3e91Q9f7u3SKikYg5LD7 | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守山（CBDB 318542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318542&o=json)
